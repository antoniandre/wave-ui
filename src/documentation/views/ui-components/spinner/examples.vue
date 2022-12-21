<template lang="pug">
div
  p.
    If you want a different style than the #[span.code w-progress] component, the spinner is a light
    alternative that you can easily use anywhere.

  title-link(h2) Three dots (default)
  example(content-class="w-flex justify-center")
    w-spinner
    template(#pug).
      w-spinner
    template(#html).
      &lt;w-spinner /&gt;

  title-link(h2) Fade
  example(content-class="w-flex justify-center")
    w-spinner(fade)
    template(#pug).
      w-spinner(fade)
    template(#html).
      &lt;w-spinner fade /&gt;

  title-link(h2) Bounce
  example(content-class="w-flex justify-center")
    w-spinner(bounce)
    template(#pug).
      w-spinner(bounce)
    template(#html).
      &lt;w-spinner bounce /&gt;

  title-link(h2) Model-value or v-model
  p.
    Both the #[code model-value] (or #[code value] for Vue 2) and #[code v-model] will control the spinner visibility, but there is not
    much point in using a #[code v-model] here as the spinner will never emit a value update.
  example(content-class="w-flex")
    w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
    w-spinner(:model-value="showSpinner")
    template(#pug).
      w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
      w-spinner(:model-value="showSpinner")
    template(#html).
      &lt;w-button @click="showSpinner = !showSpinner"&gt;Toggle spinner&lt;/w-button&gt;
      &lt;w-spinner :model-value="showSpinner" /&gt;
    template(#js).
      data: () => ({
        showSpinner: false
      })

  title-link(h2) Sizes
  p.
    The spinner size can be controlled via the preset sizes #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl], or explicit #[code size] prop.
  example(content-class="w-flex justify-center")
    w-spinner.ma1(fade xs)
    w-spinner.ma1(fade sm)
    w-spinner.ma1(fade md)
    w-spinner.ma1(fade lg)
    w-spinner.ma1(fade xl)
    w-spinner.ma1(fade size="5em")
    template(#pug).
      w-flex(align-center justify-center)
        w-spinner.ma1(fade xs)
        w-spinner.ma1(fade sm)
        w-spinner.ma1(fade md)
        w-spinner.ma1(fade lg)
        w-spinner.ma1(fade xl)
        w-spinner.ma1(fade size="5em")
    template(#html).
      &lt;w-flex align-center justify-center&gt;
        &lt;w-spinner fade xs class="ma1" /&gt;
        &lt;w-spinner fade sm class="ma1" /&gt;
        &lt;w-spinner fade md class="ma1" /&gt;
        &lt;w-spinner fade lg class="ma1" /&gt;
        &lt;w-spinner fade xl class="ma1" /&gt;
        &lt;w-spinner fade size="5em" class="ma1" /&gt;
      &lt;/w-flex&gt;

  title-link(h2) Colors
  p Like in most components, you can set a #[code color] for the spinner.
  example(content-class="w-flex justify-center")
    w-spinner.ma1(fade color="green")
    w-spinner.ma1(fade color="amber")
    w-spinner.ma1(fade color="orange")
    w-spinner.ma1(fade color="error")
    w-spinner.ma1(fade color="pink")
    template(#pug).
      w-spinner.ma1(fade color="green")
      w-spinner.ma1(fade color="amber")
      w-spinner.ma1(fade color="orange")
      w-spinner.ma1(fade color="error")
      w-spinner.ma1(fade color="pink")
    template(#html).
      &lt;w-spinner fade color="green" class="ma1" /&gt;
      &lt;w-spinner fade color="amber" class="ma1" /&gt;
      &lt;w-spinner fade color="orange" class="ma1" /&gt;
      &lt;w-spinner fade color="error" class="ma1" /&gt;
      &lt;w-spinner fade color="pink" class="ma1" /&gt;
</template>

<script>
export default {
  data: () => ({
    showSpinner: false
  })
}
</script>
