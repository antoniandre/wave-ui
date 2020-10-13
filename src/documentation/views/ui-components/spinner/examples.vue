<template lang="pug">
div
  p.
    If you want a different style than the #[span.code w-progress] component, the spinner is a light
    alternative that you can easily use anywhere.

  title-link(h2) Three dots (default)
  example(content-class="w-flex justify-center")
    w-spinner
    template(#html).
      &lt;w-spinner /&gt;

  title-link(h2) Fade
  example(content-class="w-flex justify-center")
    w-spinner(fade)
    template(#html).
      &lt;w-spinner fade /&gt;

  title-link(h2) Bounce
  example(content-class="w-flex justify-center")
    w-spinner(bounce)
    template(#html).
      &lt;w-spinner bounce /&gt;

  title-link(h2) Value or v-model
  p.
    Both the #[code value] and #[code v-model] will control the spinner visibility, but there is not
    much point in using a #[code v-model] here as the spinner will never emit a value update.
  example(content-class="w-flex")
    w-button.mr2(@click="showSpinner = !showSpinner") Toggle spinner
    w-spinner(:value="showSpinner")
    template(#html).
      &lt;w-button @click="showSpinner = !showSpinner"&gt;Toggle spinner&lt;/w-button&gt;
      &lt;w-spinner :value="showSpinner" /&gt;
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
    template(#html).
      &lt;w-spinner fade xs /&gt;
      &lt;w-spinner fade sm /&gt;
      &lt;w-spinner fade md /&gt;
      &lt;w-spinner fade lg /&gt;
      &lt;w-spinner fade xl /&gt;
      &lt;w-spinner fade size="5em" /&gt;

  title-link(h2) Colors
  p Like in most components, you can set a #[code color] for the spinner.
  example(content-class="w-flex justify-center")
    w-spinner.ma1(fade color="green")
    w-spinner.ma1(fade color="amber")
    w-spinner.ma1(fade color="orange")
    w-spinner.ma1(fade color="error")
    w-spinner.ma1(fade color="pink")
    template(#html).
      &lt;w-spinner fade color="green" /&gt;
      &lt;w-spinner fade color="amber" /&gt;
      &lt;w-spinner fade color="orange" /&gt;
      &lt;w-spinner fade color="error" /&gt;
      &lt;w-spinner fade color="pink" /&gt;
</template>

<script>
export default {
  data: () => ({
    showSpinner: false
  })
}
</script>