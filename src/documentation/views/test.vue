<template lang="pug">
w-app
  .test.ma12.pa12.bd1.bdrs2
    h1.mt0.mb8 Testing playground
    w-form(v-model="valid" :no-keyup-validation="true")
      w-select(
        class="mt3"
        label="Last name"
        :items="items"
        :validators="[validators.required]")
      code {{ valid === false ? 'false' : valid || 'null' }}
      w-button(type="submit" :disabled="valid === false") Validate
</template>

<script>
export default {
  data: () => ({
    valid: null,
    validators: {
      required: value => !!value || 'This field is required'
    },
    items: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 }
    ]
  })
}
</script>

<style lang="scss">

</style>
