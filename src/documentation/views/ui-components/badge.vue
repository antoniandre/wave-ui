<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-badge]

  h2 Default
  .w-flex.wrap.py-6
    w-badge
      template(v-slot:badge)
        span.ma-2(v-on="on") 1
      | Emails
</template>
