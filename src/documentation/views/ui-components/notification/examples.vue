<template lang="pug">
div
  alert(info).
    The #[span.code w-notification] component is pretty much a wrapper around the #[span.code w-alert]
    component with added functionalities.#[br]
    it accepts all the parameters of the #[span.code w-alert] component, plus positioning,
    transitioning &amp; timeout options.

  title-link(h2) Notification position
  p Notifications have a fixed position by default (positioned relative to the viewport).
  example(content-class="mt2")
    w-button.mr6(
      @click="notification.show = !notification.show"
      color="primary"
      outline
      width="8.5em")
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
      success
      plain
      round
      shadow
      transition="bounce"
      v-bind="{ [notification.position[0]]: true, [notification.position[1]]: true }")
      | The alert is fixed on {{ notification.position[0] }} {{ notification.position[1] }}.
    //- template(#pug).
      w-button.mr6(
        @click="notification.show = !notification.show"
        color="primary"
        outline
        width="8.5em")
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
        success
        plain
        round
        shadow
        transition="bounce"
        :[notification.position[0]]="true"
        :[notification.position[1]]="true")
        | The alert is fixed on {{ "\{\{ notification.position[0] \}\}" }} {{ "\{\{ notification.position[1] \}\}" }}.
    template(#html).
      &lt;w-button
        class="mr6"
        @click="notification.show = !notification.show"
        color="primary"
        outline
        width="8.5em"&gt;
        {{ "\{\{ notification.show ? 'Hide' : 'Show' \}\}" }} notification
      &lt;/w-button&gt;

      &lt;w-radios
        class="mr6"
        v-model="notification.position[0]"
        :items="[{ label: 'top' }, { label: 'bottom' }]"
        inline&gt;
      &lt;/w-radios&gt;

      &lt;w-radios
        v-model="notification.position[1]"
        :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
        inline&gt;
      &lt;/w-radios&gt;

      &lt;w-notification
        v-show="notification.show"
        success
        plain
        round
        shadow
        transition="bounce"
        :[notification.position[0]]="true"
        :[notification.position[1]]="true"&gt;
        The alert is fixed on {{ "\{\{ notification.position[0] \}\}" }} {{ "\{\{ notification.position[1] \}\}" }}.
      &lt;/w-notification&gt;
    template(#js).
      data: () => ({
        notification: {
          show: false,
          position: ['bottom', 'right']
        }
      })

  title-link(h2) Notification timeout
  p Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.
  p Setting the timeout to #[code 0] as a number or a string will cancel the timeout and the notification will stay visible.
  example(content-class="mt2 pos-relative ovh")
    w-button.mr6(
      @click="notification2.show = !notification2.show"
      color="primary"
      outline
      width="8.5em")
      | {{ notification2.show ? 'Hide' : 'Show' }} notification
    w-input.d-iflex(
      v-model="notification2.timeout"
      type="number"
      step="500"
      min="0"
      label="Timeout:"
      label-position="left"
      style="max-width: 110px")
    span.ml2 ms
    w-notification(
      v-model="notification2.show"
      :timeout="notification2.timeout"
      warning
      plain
      round
      shadow
      dismiss
      absolute)
      | This alert is
      | {{ ~~notification2.timeout ? `auto-hiding after ${notification2.timeout} ms` : 'not auto-hiding' }}.
    //- template(#pug).
      w-button.mr6(
        @click="showNotification = !showNotification"
        color="primary"
        outline
        width="8.5em")
        | {{ "\{\{ showNotification ? 'Hide' : 'Show' \}\}" }} notification
      w-input.d-iflex(
        v-model="timeout"
        type="number"
        step="500"
        min="0"
        label="Timeout:"
        label-position="left"
        style="max-width: 110px")
      span.ml2 ms

      w-notification(
        v-model="showNotification"
        :timeout="timeout"
        warning
        plain
        round
        shadow
        absolute)
        | This alert is
        | {{ "\{\{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'\}\}" }}.
    template(#html).
      &lt;w-button
        class="mr6"
        @click="showNotification = !showNotification"
        color="primary"
        outline
        width="8.5em"&gt;
        {{ "\{\{ showNotification ? 'Hide' : 'Show' \}\}" }} notification
      &lt;/w-button&gt;

      &lt;w-input
        class="d-iflex"
        v-model="timeout"
        type="number"
        step="500"
        min="0"
        label="Timeout:"
        label-position="left"
        style="max-width: 110px"&gt;
      &lt;/w-input&gt;

      &lt;span class="ml2"&gt;ms&lt;/span&gt;

      &lt;w-notification
        v-model="showNotification"
        :timeout="timeout"
        warning
        plain
        round
        shadow
        absolute&gt;
        This alert is
        {{ "\{\{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'\}\}" }}.
      &lt;/w-notification&gt;
    template(#js).
      data: () => ({
        showNotification: false,
        timeout: 2000
      })

  title-link(h2) Transitions
  example
    w-flex(wrap align-center)
      w-button.mr3(
        @click="notification3.show = !notification3.show"
        color="primary"
        outline
        width="8.5em")
        | {{ notification3.show ? 'Hide' : 'Show' }} notification
      w-radios.my4(v-model="transition" :items="transitions")
        template(#item="{ item }")
          | {{ item.label }}
          code.ml2 {{ item.value || (item.value === false ? 'false' : "''") }}
    .title4.mt3 Notification position
    w-radios.my1.mr6(
      v-model="notification3.position[0]"
      :items="[{ label: 'top' }, { label: 'bottom' }]"
      inline)
    w-radios.my1(
      v-model="notification3.position[1]"
      :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
      inline)

    w-notification(
      v-show="notification3.show"
      info
      color="primary"
      round
      shadow
      :transition="transition"
      v-bind="{ [notification3.position[0]]: true, [notification3.position[1]]: true }")
      | The alert is fixed on {{ notification3.position[0] }} {{ notification3.position[1] }}.
    //- template(#pug).
      w-flex(wrap align-center)
        w-button.mr3(
          @click="notification.show = !notification.show"
          color="primary"
          outline
          width="8.5em")
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
        info
        color="primary"
        round
        shadow
        :transition="transition"
        :[notification.position[0]]="true"
        :[notification.position[1]]="true")
        | The alert is fixed on {{ "\{\{ notification.position[0] \}\}" }} {{ "\{\{ notification.position[1] \}\}" }}.
    template(#html).
      &lt;w-flex wrap align-center&gt;
        &lt;w-button
          class="mr3"
          @click="notification.show = !notification.show"
          color="primary"
          outline
          width="8.5em"&gt;
          {{ "\{\{ notification.show ? 'Hide' : 'Show' \}\}" }} notification
        &lt;/w-button&gt;

        &lt;w-radios
          class="my4"
          v-model="transition"
          :items="transitions"&gt;
          &lt;template #item="{ item }"&gt;
            {{ "\{\{ item.label \}\}" }}
            &lt;code class="ml2"&gt;
              {{ "\{\{ item.value || (item.value === false ? 'false' : \"''\") \}\}" }}
            &lt;/code&gt;
          &lt;/template&gt;
        &lt;/w-radios&gt;
      &lt;/w-flex&gt;

      &lt;div class="title4 mt3"&gt;
        Notification position
      &lt;/div&gt;

      &lt;w-radios class="mr6"&gt;
        v-model="notification.position[0]"
        :items="[{ label: 'top' }, { label: 'bottom' }]"
        inline&gt;
      &lt;/w-radios&gt;

      &lt;w-radios
        v-model="notification.position[1]"
        :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
        inline&gt;
      &lt;/w-radios&gt;

      &lt;w-notification
        v-show="notification.show"
        info
        color="primary"
        round
        shadow
        :transition="transition"
        :[notification.position[0]]="true"
        :[notification.position[1]]="true"&gt;
        The alert is fixed on {{ "\{\{ notification.position[0] \}\}" }} {{ "\{\{ notification.position[1] \}\}" }}.
      &lt;/w-notification&gt;
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
          { label: 'Slide fade top', value: 'slide-fade-up' },
          { label: 'Slide fade bottom', value: 'slide-fade-down' },
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
    notification2: { show: false, timeout: 2000 },
    notification3: {
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
      { label: 'Slide fade top', value: 'slide-fade-up' },
      { label: 'Slide fade bottom', value: 'slide-fade-down' },
      { label: 'Scale fade', value: 'scale-fade' },
      { label: 'None', value: false }
    ]
  })
}
</script>

<style lang="scss">
.pos-relative {position: relative;}
</style>
