<template lang="pug">
div
  title-link.mt4.code(h1) w-tabs

  example
    w-tabs(:items="tabs1")
</template>

<script>
export default {
  data: () => ({
    tabs1: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' }
    ]
  })
}
</script>
