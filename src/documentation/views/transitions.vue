<template lang="pug">
div
  title-link.mt-4(h1) Transitions

  p Here is a list of all the available transition components.
  ul
    li #[code w-transition-fade]
    li.mt-1 #[code w-transition-scale]
    li.mt-1 #[code w-transition-scale-fade]
    li.mt-1 #[code w-transition-bounce]
    li.mt-1 #[code w-transition-twist]
    li.mt-1 #[code w-transition-expand]

  //- p Each component has a css transition that you can also use in various components.

  title-link(h2) Testing transition
  example
    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleFade = !toggleFade"
        color="primary"
        outline) Fade {{ toggleFade ? 'out' : 'in' }}
      w-transition-fade
        .transition-box(v-if="toggleFade") Fading transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleScale = !toggleScale"
        color="primary"
        outline) Scale {{ toggleScale ? 'out' : 'in' }}
      w-transition-scale
        .transition-box(v-if="toggleScale") Scaling transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleScaleFade = !toggleScaleFade"
        color="primary"
        outline) Scale fade {{ toggleScaleFade ? 'out' : 'in' }}
      w-transition-scale-fade
        .transition-box(v-if="toggleScaleFade") Scaling &amp; fading transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleBounce = !toggleBounce"
        color="primary"
        outline) Bounce {{ toggleBounce ? 'out' : 'in' }}
      w-transition-bounce
        .transition-box(v-if="toggleBounce") Bouncing transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleTwist = !toggleTwist"
        color="primary"
        outline) Twist {{ toggleTwist ? 'out' : 'in' }}
      w-transition-twist
        .transition-box(v-if="toggleTwist") Twisting transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandX = !toggleExpandX"
        color="primary"
        outline) {{ toggleExpandX ? 'Collapse' : 'Expand' }} X
      w-transition-expand(x)
        .transition-box(v-if="toggleExpandX") X-expanding transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandY = !toggleExpandY"
        color="primary"
        outline) {{ toggleExpandY ? 'Collapse' : 'Expand' }} Y
      w-transition-expand(y)
        .transition-box(v-if="toggleExpandY") Y-expanding transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandXY = !toggleExpandXY"
        color="primary"
        outline) {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
      w-transition-expand
        .transition-box(v-if="toggleExpandXY") X &amp; Y expanding transition

    template(#html).
      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleFade = !toggleFade"
          color="primary"
          outline&gt;
          Fade {{ toggleFade ? 'out' : 'in' }}
        &lt;/w-button&gt;
        &lt;w-transition-fade&gt;
          &lt;div class="transition-box" v-if="toggleFade"&gt;Fading transition&lt;/div&gt;
        &lt;/w-transition-fade&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleScale = !toggleScale"
          color="primary"
          outline&gt;
          Scale {{ toggleScale ? 'out' : 'in' }}
        &lt;/w-button&gt;
        &lt;w-transition-scale&gt;
          &lt;div class="transition-box" v-if="toggleScale"&gt;Scaling transition&lt;/div&gt;
        &lt;/w-transition-scale&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleScaleFade = !toggleScaleFade"
          color="primary"
          outline&gt;
          Scale fade {{ toggleScaleFade ? 'out' : 'in' }}
        &lt;/w-button&gt;
        &lt;w-transition-scale-fade&gt;
          &lt;div class="transition-box" v-if="toggleScaleFade"&gt;Scaling &amp; fading transition&lt;/div&gt;
        &lt;/w-transition-scale-fade&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleBounce = !toggleBounce"
          color="primary"
          outline&gt;
          Bounce {{ toggleBounce ? 'out' : 'in' }}
        &lt;/w-button&gt;
        &lt;w-transition-bounce&gt;
          &lt;div class="transition-box" v-if="toggleBounce"&gt;Bouncing transition&lt;/div&gt;
        &lt;/w-transition-bounce&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleTwist = !toggleTwist"
          color="primary"
          outline&gt;
          Twist {{ toggleTwist ? 'out' : 'in' }}
        &lt;/w-button&gt;
        &lt;w-transition-twist&gt;
          &lt;div class="transition-box" v-if="toggleTwist"&gt;Twisting transition&lt;/div&gt;
        &lt;/w-transition-twist&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandX = !toggleExpandX"
          color="primary"
          outline&gt;
          {{ toggleExpandX ? 'Collapse' : 'Expand' }} X
        &lt;/w-button&gt;
        &lt;w-transition-expand x&gt;
          &lt;div class="transition-box" v-if="toggleExpandX"&gt;X-expanding transition&lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandY = !toggleExpandY"
          color="primary"
          outline&gt;
          {{ toggleExpandY ? 'Collapse' : 'Expand' }} Y
        &lt;/w-button&gt;
        &lt;w-transition-expand y&gt;
          &lt;div class="transition-box" v-if="toggleExpandY"&gt;Y-expanding transition&lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandXY = !toggleExpandXY"
          color="primary"
          outline&gt;
          {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
        &lt;/w-button&gt;
        &lt;w-transition-expand&gt;
          &lt;div class="transition-box" v-if="toggleExpandXY"&gt;X &amp; Y expanding transition&lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;

    template(#js).
      data: () => ({
        toggleFade: false,
        toggleScale: false,
        toggleScaleFade: false,
        toggleBounce: false,
        toggleTwist: false,
        toggleExpandX: false,
        toggleExpandY: false,
        toggleExpandXY: false
      })

    template(#css).
      .transition-toggle {
        margin: 12px 24px 12px 0;
        width: 7.3em;
      }

      .transition-box {
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 1em;
        width: 14em;
        text-align: center;
      }

  h3 Zoom on the expand transition
  p.
    The great thing with Wave UI is that it also animates any margin or padding on the transitionning
    element! Look at this one:
  example
    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandXY2 = !toggleExpandXY2"
        color="primary"
        outline
        width="7.3em") {{ toggleExpandXY2 ? 'Collapse' : 'Expand' }} X &amp; Y
      w-transition-expand(:duration="2000")
        .transition-box.pa-6.ma-10.yellow-lighter-5--bg(
          v-if="toggleExpandXY2"
          style="width: auto")
          .amber-lighter-4--bg.pa-2(style="overflow: hidden;white-space: nowrap;width: 200px")
            | X &amp; Y expanding transition
    template(#html).
      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandXY = !toggleExpandXY"
          color="primary"
          outline
          width="7.3em"&gt;
          {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
        &lt;/w-button&gt;
        &lt;w-transition-expand :duration="2000"&gt;
          &lt;div
            v-if="toggleExpandXY"
            class="transition-box pa-6 ma-10 yellow-lighter-5--bg"
            style="width: auto"&gt;
            &lt;div class="amber-lighter-4--bg pa-2"&gt;
              X &amp; Y expanding transition
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        toggleExpandXY: false
      })
    template(#css).
      .transition-toggle {margin: 12px 24px 12px 0;}

      .transition-box {
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 1em;
        width: 14em;
        text-align: center;
      }

      .transition-box div {
        overflow: hidden;
        white-space: nowrap;
        width: 200px;
      }

  title-link(h2) Transition duration
  p.
    You can easily override the default transition/animation duration by setting an explicit
    CSS transition/animation duration on the element being transitioned:
    #[span.code style="animation-duration: 3s"].
  p.
    The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.
    So you don't need to override the duration from a CSS rule.
</template>

<script>
export default {
  data: () => ({
    toggleFade: false,
    toggleScale: false,
    toggleScaleFade: false,
    toggleBounce: false,
    toggleTwist: false,
    toggleExpandX: false,
    toggleExpandY: false,
    toggleExpandXY: false,
    toggleExpandXY2: false
  })
}
</script>

<style lang="scss">
.transition-toggle {margin: 12px 24px 12px 0;width: 7.3em;}

.transition-box {
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}
</style>