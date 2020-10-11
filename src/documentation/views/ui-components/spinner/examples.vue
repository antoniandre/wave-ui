<template lang="pug">
div
  p.
    If you want a different style than the #[span.code w-progress] component, the spinner is a light
    alternative that you can easily use anywhere.

  title-link(h2) Three dots (default)
  example
    w-spinner
    template(#html).
      &lt;w-spinner&gt;&lt;w-spinner/&gt;

  title-link(h2) Bounce
  example
    w-spinner(bounce)
    template(#html).
      &lt;w-spinner bounce&gt;&lt;w-spinner/&gt;

  title-link(h2) Fade
  example
    w-spinner(fade)
    template(#html).
      &lt;w-spinner fade&gt;&lt;w-spinner/&gt;
</template>

<script>
export default {

}
</script>
