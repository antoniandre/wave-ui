<template lang="pug">
.test.ma12.pa12.bd1.bdrs2
  h1.mt0.mb8 Testing playground
  w-input(@update:model-value="onMessageUpdate" :model-value="message" v-focus)
  p model-value: {{ message }}

  h2 Autofocus test
  w-input.mb4(@update:model-value="onCountUpdate" :model-value="count" type="number")
  w-button(@click="openDialog = true") Open dialog
  w-menu
    w-button.ml3 Show menu
    template(#content)
      w-form
        w-input(v-focus)
        w-button.mt4(@click="openDialog = false") Close
  w-dialog(v-model="openDialog")
    w-form
      w-input(v-focus)
      w-button.mt4(@click="openDialog = false") Close
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const count = ref(0)
const openDialog = ref(false)
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
