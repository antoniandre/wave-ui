<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-notification") w-notification

  p.
    Notifications accepts all the parameters of the #[span.code w-alert] component, plus positioning
    &amp; transitioning options.

  title-link(h2) Notification position
  p Notifications have a fixed position by default.
  example(content-class="mt2")
    w-button.mr6(
      @click="notification.show = !notification.show"
      color="primary"
      outline
      width="8em")
      | {{ notification.show ? 'Hide' : 'Show' }} notification
    w-radios.my1.mr6(
      v-model="notification.position[0]"
      :items="[{ label: 'top' }, { label: 'bottom' }]"
      inline)
    w-radios.my1(
      v-model="notification.position[1]"
      :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
      inline)
    w-notification(
      v-show="notification.show"
      type="success"
      plain
      round
      shadow
      transition="bounce"
      :[notification.position[0]]="true"
      :[notification.position[1]]="true")
      | The alert is fixed on {{ notification.position[0] }} {{ notification.position[1] }}.
    template(#pug).
      w-button.mr6(
        @click="notification.show = !notification.show"
        color="primary"
        outline
        width="8em")
        | {{ "\{\{ notification.show ? 'Hide' : 'Show' \}\}" }} notification

      w-radios.mr6(
        v-model="notification.position[0]"
        :items="[{ label: 'top' }, { label: 'bottom' }]"
        inline)

      w-radios(
        v-model="notification.position[1]"
        :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
        inline)

      w-notification(
        v-show="notification.show"
        type="success"
        plain
        round
        shadow
        transition="bounce"
        :[notification.position[0]]="true"
        :[notification.position[1]]="true")
        | The alert is fixed on {{ "\{\{ notification.position[0] \}\}" }} {{ "\{\{ notification.position[1] \}\}" }}.
    template(#js).
      data: () => ({
        notification: {
          show: false,
          position: ['bottom', 'right']
        }
      })

  title-link(h2) Transitions
  example
    w-flex(wrap align-center)
      w-button.mr3(
        @click="notification2.show = !notification2.show"
        color="primary"
        outline
        width="8em")
        | {{ notification2.show ? 'Hide' : 'Show' }} notification
      w-radios.my4(v-model="transition" :items="transitions")
        template(#item="{ item }")
          | {{ item.label }}
          code.ml2 {{ item.value || (item.value === false ? 'false' : "''") }}
    .title4.mt3 Notification position
    w-radios.mr6(
      v-model="notification2.position[0]"
      :items="[{ label: 'top' }, { label: 'bottom' }]"
      inline)
    w-radios(
      v-model="notification2.position[1]"
      :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
      inline)

    w-notification(
      v-show="notification2.show"
      type="info"
      color="primary"
      round
      shadow
      :transition="transition"
      :[notification2.position[0]]="true"
      :[notification2.position[1]]="true")
      | The alert is fixed on {{ notification2.position[0] }} {{ notification2.position[1] }}.
    template(#pug).
      w-flex(wrap align-center)
        w-button.mr3(
          @click="notification.show = !notification.show"
          color="primary"
          outline
          width="8em")
          | {{ "\{\{ notification.show ? 'Hide' : 'Show' \}\}" }} notification
        w-radios.my4(v-model="transition" :items="transitions")
          template(#item="{ item }")
            | {{ "\{\{ item.label \}\}" }}
            code.ml2 {{ "\{\{ item.value || (item.value === false ? 'false' : \"''\") \}\}" }}
      .title4.mt3 Notification position

      w-radios.mr6(
        v-model="notification.position[0]"
        :items="[{ label: 'top' }, { label: 'bottom' }]"
        inline)

      w-radios(
        v-model="notification.position[1]"
        :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
        inline)

      w-notification(
        v-show="notification.show"
        type="info"
        color="primary"
        round
        shadow
        :transition="transition"
        :[notification.position[0]]="true"
        :[notification.position[1]]="true")
        | The alert is fixed on {{ "\{\{ notification.position[0] \}\}" }} {{ "\{\{ notification.position[1] \}\}" }}.
    template(#js).
      data: () => ({
        notification: {
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
