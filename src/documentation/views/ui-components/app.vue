<template lang="pug">
div
  title-link.mt4.code(h1) w-app

  p.
    This tag is required in your app for Wave UI proper functionning.#[br]
    You should place it #[strong at the root of your app].

  ssh-pre(language="html-vue").
    &lt;w-app&gt;
      &lt;!-- All your app's content goes here. --&gt;
    &lt;/w-app&gt;
</template>
