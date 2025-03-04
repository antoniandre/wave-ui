<template lang="pug">
.test.ma12.pa12.bd1.bdrs2
  h1.mt0.mb8 Testing playground
  w-input(@update:model-value="onMessageUpdate" :model-value="message")
  p model-value: {{ message }}

  w-input(@update:model-value="onCountUpdate" :model-value="count" type="number")
  p model-value: {{ count }}
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const count = ref(0)

const onMessageUpdate = (value) => {
  message.value = value
  console.log('message updated:', value, message.value)
}

const onCountUpdate = (value) => {
  count.value = value
  console.log('count updated:', value, count.value)
}
</script>

<style lang="scss">

</style>
