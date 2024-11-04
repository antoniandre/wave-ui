<template lang="pug">
div
  .title3.my6 You have the choice to use one or the other, or both.
  w-tabs.mt4(:items="2" content-class="pl4" model-value="0")
    //- Buit-in notification manager.
    template(#item-title.1) Notification manager
    template(#item-content.1)
      p.
        The built-in notification manager can be used via #[code $waveui.notify()] from any component.#[br]
      alert(tip).
        Note that you can access the #[code $waveui] object with #[code const $waveui = inject('$waveui')] in composition API, or from #[code this] if not using the composition API.
      .title3 Pros
      w-list(icon="wi-check" :items="2")
        template(#item.1) Very convenient and fast to use
        template(#item.2) Handles the stacking of simultaneous notifications
      .title3.mt4 Cons
      w-list(icon="wi-minus" :items="1")
        template(#item.1).
          Less flexible than #[strong.code.mx1 w-notification] in terms of layout (no slot available)

      title-link(h2) Simple use of the notify method
      p The notify method takes up to 3 parameters, here is the syntax:
      ssh-pre(language="js" :dark="$store.state.darkMode").
        $waveui.notify({String} message, {String} type?, {Number} timeout?)
      p Access #[code $waveui] in composition API, or from #[code this] if not using the composition API.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        import { inject } from 'vue'
        const $waveui = inject('$waveui')
      p.
        The default type is #[code info] and the default timeout is #[code 4000].#[br]
        A timeout of #[code 0] will keep the notification visible permanently (until dismissed).
      example
        w-button.ma1(@click="$waveui.notify('Information.')" bg-color="info") Notify info
        w-button.ma1(@click="$waveui.notify('Success!', 'success')" bg-color="success") Notify success
        w-button.ma1(@click="$waveui.notify('Warning!', 'warning')" bg-color="warning") Notify warning
        w-button.ma1(@click="$waveui.notify('Error :(', 'error', 0)" bg-color="error") Permanent error
        template(#pug).
          w-button.ma1(@click="$waveui.notify&amp;#40;'Information.'&amp;#41;" bg-color="info") Notify info
          w-button.ma1(@click="$waveui.notify&amp;#40;'Success!', 'success'&amp;#41;" bg-color="success") Notify success
          w-button.ma1(@click="$waveui.notify&amp;#40;'Warning!', 'warning'&amp;#41;" bg-color="warning") Notify warning
          w-button.ma1(@click="$waveui.notify&amp;#40;'Error :(', 'error', 0&amp;#41;" bg-color="error") Permanent error
        template(#html).
          &lt;w-button @click="$waveui.notify('Information.')" bg-color="info"&gt;
            Notify info
          &lt;/w-button&gt;

          &lt;w-button @click="$waveui.notify('Success!', 'success')" bg-color="success"&gt;
            Notify success
          &lt;/w-button&gt;

          &lt;w-button @click="$waveui.notify('Warning!', 'warning')" bg-color="warning"&gt;
            Notify warning
          &lt;/w-button&gt;

          &lt;w-button @click="$waveui.notify('Error :(', 'error', 0)" bg-color="error"&gt;
            Permanent error
          &lt;/w-button&gt;

      title-link(h2) If you need more control
      p.
        The #[code notify] method also accepts a single Object parameter which will accept all the options
        of the #[strong.code w-alert] component, plus the #[code message] and #[code timeout] options.#[br]
        E.g.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        $waveui.notify({
          message: 'Message.',
          timeout: 3000, // ms.
          ... // Other options from w-alert.
        })

      p.
        Here is an example of a custom notification using a few different #[strong.code w-alert] options.

      example
        w-button(@click="notify" bg-color="info") Notify custom
        template(#pug).
          w-button(@click="notify" bg-color="info") Notify custom
        template(#html).
          &lt;w-button @click="notify" bg-color="info"&gt;
            Notify custom
          &lt;/w-button&gt;
        template(#js).
          methods: {
            notify () {
              $waveui.notify({
                message: 'Warning',
                timeout: 6000,
                bgColor: 'orange-light5',
                color: 'warning',
                dismiss: false,
                shadow: true,
                round: true,
                sm: true,
                icon: 'wi-star'
              })
            }
          }

      alert.mt12(warning)
        .title4.
          #[strong Caution:] You could easily cause an #[strong.black infinite loop] by triggering a
          notification from the template using this code for instance:
        p #[code {{ '\{\{ $waveui.notify(\'test\') \}\}' }}]
        p.mt4.
          Indeed, if you write the above expression directly in a component's template without condition
          around it, the notification will be triggered, which will trigger the Vue re-rendering which
          will re-read and execute this expression and so on.

      title-link(h2) Notification manager tweaking
      p.
        The global configuration allows you to override the default side and transition of the
        notification manager.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        new WaveUI({
          notificationManager: {
            align: 'right', // Or 'left'.
            transition: 'default' // Sliding from the side by default.
          }
        })

      title-link(h3) Align to the left or right
      p.
        Change the value of the #[strong.code align] option, in the above global config, to #[code left]
        or #[code right].
      w-button(@click="switchNotificationManagerSide") Change side &amp; notify
      alert(tip).
        After switching side, you can also test the different notifications from the above examples.

      title-link(h3) Different transitions
      p.
        The default transition is #[code slide-left] when the notification manager is on the right and
        #[code slide-right] when it's on the left.

      .title4 Pick a transition
      .w-flex.align-center
        .xs6.md4.lg3
          w-radios.ma1(
            v-model="notifManagerTransition"
            :items="transitionsForManager"
            @input="switchNotifMgrTransition")
            template(#item="{ item }")
              code.ml2 {{ item.value || (item.value === false ? 'false' : "''") }}
              span.ml2(v-if="!item.value") ({{ item.label }})
        w-button.ma1(@click="$waveui.notify('Test')") Notify
      p.mt4.
        Change the value of the #[strong.code transition] option, in the above global config,
        to #[code {{ notifManagerTransition ? `'${notifManagerTransition}'` : notifManagerTransition }}].
      alert(tip)
        | You could even
        a.ml1(href="https://vuejs.org/guide/built-ins/transition.html")
          | create your own transition
          w-icon.ml1(md) mdi mdi-open-in-new
        | .
      title-link(h3) Styling
      p.
        By default, the notification manager is 280px-wide and all the notifications will inherit this width.#[br]
        You can override this via CSS. For instance:
      ssh-pre(language="css" :dark="$store.state.darkMode").
        .w-notification-manager {width: 100%;max-width: 500px;}

    //- w-notification.
    template(#item-title.2) #[span.code w-notification]
    template(#item-content.2)
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
        template(#pug).
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
        w-input.d-iflex.no-wrap(
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
        template(#pug).
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
        template(#pug).
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
import config from '@/wave-ui/utils/config'

export default {
  data: () => ({
    config,
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
    notifManagerTransition: 'default',
    transitions: [
      { label: 'Default', value: '' },
      { label: 'Bounce', value: 'bounce' },
      { label: 'Scale', value: 'scale' },
      { label: 'Twist', value: 'twist' },
      { label: 'Fade', value: 'fade' },
      { label: 'Slide fade left', value: 'slide-fade-left' },
      { label: 'Slide fade right', value: 'slide-fade-right' },
      { label: 'Slide fade up', value: 'slide-fade-up' },
      { label: 'Slide fade down', value: 'slide-fade-down' },
      { label: 'Scale fade', value: 'scale-fade' },
      { label: 'None', value: false }
    ],
    transitionsForManager: [
      { label: 'Default', value: 'default' },
      { label: 'Bounce', value: 'bounce' },
      { label: 'Scale', value: 'scale' },
      { label: 'Twist', value: 'twist' },
      { label: 'Fade', value: 'fade' },
      { label: 'Slide fade left', value: 'slide-fade-left' },
      { label: 'Slide fade right', value: 'slide-fade-right' },
      { label: 'Slide fade up', value: 'slide-fade-up' },
      { label: 'Slide fade down', value: 'slide-fade-down' },
      { label: 'Scale fade', value: 'scale-fade' },
      { label: 'None', value: false }
    ]
  }),

  methods: {
    switchNotificationManagerSide () {
      const { align } = config.notificationManager
      config.notificationManager.align = align === 'left' ? 'right' : 'left'
      this.$nextTick(() => this.$waveui.notify('Information.'))
    },
    switchNotifMgrTransition () {
      config.notificationManager.transition = this.notifManagerTransition
      this.$nextTick(() => this.$waveui.notify('Information.'))
    },
    notify () {
      this.$waveui.notify({
        message: 'Warning',
        timeout: 6000,
        bgColor: 'orange-light5',
        color: 'warning',
        dismiss: false,
        shadow: true,
        round: true,
        sm: true,
        icon: 'wi-star'
      })
    }
  }
}
</script>

<style lang="scss">
.pos-relative {position: relative;}
</style>
