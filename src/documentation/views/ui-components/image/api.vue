<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WImage from '@/wave-ui/components/w-image'

const propsDescs = {
  tag: 'Tells which tag to use for the <strong class="code">w-image</strong>\'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.',
  src: 'The source of the image to display.',
  width: 'Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.',
  height: 'Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.',
  ratio: 'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',
  lazy: 'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',
  absolute: 'Sets the CSS position of the image to <code>absolute</code>.',
  fixed: 'Sets the CSS position of the image to <code>fixed</code>.',
  contain: 'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',
  noSpinner: 'Removes the default spinner while the image is loading.',
  fallback: 'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',
  transition: 'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',
  contentClass: 'Applies the given classes to the content wrapper when using the <code>default</code> slot.'
}

const slots = {
  default: { description: 'Provide a custom content, to display on top of the image.' },
  loading: { description: 'Provide a custom loading content, if the default spinner doesn\'t suit in your app.' }
}

const events = {
  error: {
    description: 'Emitted on image load error.',
    params: {
      '[DOM event]': 'The associated DOM event.',
    }
  },
  loaded: {
    description: 'Emitted on image successful load.',
    params: {
      'String': 'The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed).'
    }
  },
  loading: {
    description: 'Emitted when the image starts loading.',
    params: {
      'String': 'The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed).'
    }
  }
}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WImage.props
    },
    events () {
      return WImage.emits.reduce((obj, label) => (obj[label] = events[label] || {}) && obj, {})
    }
  }
}
</script>
