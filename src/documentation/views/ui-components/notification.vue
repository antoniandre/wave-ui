<template lang="pug">
div
  title-link.mt-4.code(h1 slug="w-notification") w-notification

  p.
    Notifications accepts all the parameters of the #[span.code w-alert] component, plus positioning
    &amp; transitioning options.

  title-link(h2) Default
  p Notifications have a fixed position by default.
  w-button(@click="notification.show = !notification.show" color="primary" outline)
    | {{ notification.show ? 'Hide' : 'Show' }} notification
  .heading.mt-3 Notification position
  w-radios.mr-4(
    v-model="notification.position[0]"
    :items="[{ label: 'top', value: 'top' }, { label: 'bottom', value: 'bottom' }]"
    inline)
  w-radios(
    v-model="notification.position[1]"
    :items="[{ label: 'left', value: 'left' }, { label: 'center', value: 'center' }, { label: 'right', value: 'right' }]"
    inline)

  w-notification(
    v-show="notification.show"
    type="success"
    plain
    round
    shadow
    transition="bounce"
    v-bind="{ [notification.position[0]]: true, [notification.position[1]]: true }")
    | The alert is fixed on {{ notification.position[0] }} {{ notification.position[1] }}.

  title-link(h2) Transitions
  w-flex(align-center)
    w-button.mr-3(
      @click="notification2.show = !notification2.show"
      color="primary"
      outline
      width="8em")
      | {{ notification2.show ? 'Hide' : 'Show' }} notification
    w-radios.my-4(v-model="transition" :items="transitions")
      template(#item="{ item }")
        | {{ item.label }}
        code.ml-2 {{ item.value || (item.value === false ? 'false' : "''") }}
  .heading.mt-3 Notification position
  w-radios.mr-4(
    v-model="notification2.position[0]"
    :items="[{ label: 'top', value: 'top' }, { label: 'bottom', value: 'bottom' }]"
    inline)
  w-radios(
    v-model="notification2.position[1]"
    :items="[{ label: 'left', value: 'left' }, { label: 'center', value: 'center' }, { label: 'right', value: 'right' }]"
    inline)

  w-notification(
    v-show="notification2.show"
    type="info"
    color="primary"
    round
    shadow
    :transition="transition"
    v-bind="{ [notification2.position[0]]: true, [notification2.position[1]]: true }")
    | The alert is fixed on {{ notification2.position[0] }} {{ notification2.position[1] }}.
</template>

<script>
export default {
  data: () => ({
    notification: {
      show: false,
      position: ['bottom', 'right']
    },
    notification2: {
      show: false,
      position: ['bottom', 'right']
    },
    transition: '',
    transitions: [
      { label: 'Default', value: '' },
      { label: 'Bounce', value: 'bounce' },
      { label: 'Scale', value: 'scale' },
      { label: 'Twist', value: 'twist' },
      { label: 'Fade', value: 'fade' },
      { label: 'Slide fade left', value: 'slide-fade-left' },
      { label: 'Slide fade right', value: 'slide-fade-right' },
      { label: 'Slide fade top', value: 'slide-fade-top' },
      { label: 'Slide fade bottom', value: 'slide-fade-bottom' },
      { label: 'Scale fade', value: 'scale-fade' },
      { label: 'None', value: false }
    ]
  })
}
</script>
