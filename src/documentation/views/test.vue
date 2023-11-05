<template lang="pug">
.test.ma12.pa12.bd1.bdrs2
  h1.mt0.mb8 Testing playground
  p {{ file }}
  w-form(v-model="valid" :no-keyup-validation="true")
    w-select(
      class="mt3"
      label="Last name"
      :items="items"
      :validators="[validators.required]")
    //- code {{ valid === false ? 'false' : valid || 'null' }}
    //- w-button(type="submit" :disabled="valid === false") Validate

    w-input(v-model="file" type="file" multiple)
    w-button(@click="file = null") clear
</template>

<script>
export default {
  data: () => ({
    file: null,
    valid: null,
    validators: {
      required: value => !!value || 'This field is required'
    },
    items: [
      { label: 'Item 1', value: 1, disabled: true },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4, disabled: true },
      { label: 'Item 5', value: 5, disabled: true },
      { label: 'Item 6', value: 6, disabled: true },
      { label: 'Item 7', value: 7 },
      { label: 'Item 8', value: 8 }
    ]
  })
}
</script>

<style lang="scss">

</style>
