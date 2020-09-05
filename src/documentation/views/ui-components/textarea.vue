<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-textarea")
    .code w-textarea
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  title-link(h2) Basic
  example
    w-textarea Textarea label
    w-textarea.mt3(placeholder="Textarea Placeholder")
    template(#pug).

  title-link(h2) No autogrow
  example
    w-textarea(no-autogrow rows="6") Textarea label
    w-textarea.mt3(no-autogrow resizable rows="6") Textarea label
    template(#pug).

  title-link(h2) Outline
  example
    w-textarea(outline) Textarea label
    template(#pug).
</template>

<script>
export default {

}
</script>
