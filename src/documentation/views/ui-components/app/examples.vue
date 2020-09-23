<template lang="pug">
div
  title-link.mt4.code(h1) w-app

  p.
    This tag is required in your app for Wave UI proper functioning.#[br]
    You should place it #[strong at the root of your app].

  ssh-pre(language="html-vue").
    &lt;w-app&gt;
      &lt;!-- All your app's content goes here. --&gt;
    &lt;/w-app&gt;

  p.
    By default, the #[span.code w-app] wrapper will have a flex layout with a column direction,
    and a height of 100% of the full HTML document. That will help a faster design in most cases,
    allowing a footer to always stick at the bottom of the screen without hiding any content.
  p If you prefer to have a display: block layout, you can set the #[span.code block] prop to true.
</template>
