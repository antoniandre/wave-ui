<template lang="pug">
div
  alert(info)
    ul
      li.title4.
        The purpose of the #[strong.code w-confirm] component is to quickly set up a
        confirmation prompt to confirm a critical action.
      li.
        The #[strong.code w-confirm] component uses #[strong.code w-menu], and
        #[strong.code w-buttons] components.

  title-link(h2) Basic
  example
    w-confirm Delete
    template(#pug).
      w-confirm Delete
    template(#html).
      &lt;w-confirm&gt;Delete&lt;/w-confirm&gt;

  title-link(h2) Icon button
  example
    w-confirm(icon="mdi mdi-delete")
    template(#pug).
      w-confirm(icon="mdi mdi-delete")
    template(#html).
      &lt;w-confirm icon="mdi mdi-delete"&gt;
        Delete
      &lt;/w-confirm&gt;

  title-link(h2) Colors
  p.
    The #[code bg-color] &amp; #[code color] props apply to the button you first see.#[br]
    To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:
  ul
    li #[code menu] #[small.grey E.g. #[code.grey :menu="{ bgColor: 'green' }"]]
    li #[code cancel-button] #[small.grey E.g. #[code.grey :cancel-button="{ bgColor: 'green' }"]]
    li #[code confirm-button] #[small.grey E.g. #[code.grey :confirm-button="{ bgColor: 'green' }"]]
  example
    w-confirm.mb2(bg-color="success") Ask for confirm
    w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
    w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm
    template(#pug).
      w-confirm.mb2(bg-color="success") Ask for confirm
      w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
      w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm
    template(#html).
      &lt;w-confirm(bg-color="success" class="mb2"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

      &lt;w-confirm(bg-color="info" color="yellow" class="mb2"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

      &lt;w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) Positions &amp; alignments
  title-link(h3) Positions
  example
    w-confirm.my5(top menu-border) Top
    w-confirm.my5(right menu-border) Right
    w-confirm.my5(bottom menu-border) Bottom
    w-confirm.my5(left menu-border) Left
    template(#pug).
      w-confirm.my5(top menu-border) Top
      w-confirm.my5(right menu-border) Right
      w-confirm.my5(bottom menu-border) Bottom
      w-confirm.my5(left menu-border) Left
    template(#html).
      &lt;w-confirm top menu-border class="my5"&gt;
        Top
      &lt;/w-confirm&gt;

      &lt;w-confirm right menu-border class="my5"&gt;
        Right
      &lt;/w-confirm&gt;

      &lt;w-confirm bottom menu-border class="my5"&gt;
        Bottom
      &lt;/w-confirm&gt;

      &lt;w-confirm left menu-border class="my5"&gt;
        Left
      &lt;/w-confirm&gt;

  title-link(h3) Alignments
  title-link(h4) Horizontal
  example
    w-flex(justify-center)
      w-confirm.ma2(top align-left) Top, align left
      w-confirm.ma2(top) Top, align center
      w-confirm.ma2(top align-right) Top, align right
    w-flex(justify-center)
      w-confirm.ma2(bottom align-left) Bottom, align left
      w-confirm.ma2(bottom) Bottom, align center
      w-confirm.ma2(bottom align-right) Bottom, align right
    template(#pug).
      w-flex(justify-center)
        w-confirm.ma2(top align-left) Top, align left
        w-confirm.ma2(top) Top, align center
        w-confirm.ma2(top align-right) Top, align right
      w-flex(justify-center)
        w-confirm.ma2(bottom align-left) Bottom, align left
        w-confirm.ma2(bottom) Bottom, align center
        w-confirm.ma2(bottom align-right) Bottom, align right
    template(#html).
      &lt;w-flex justify-center&gt;
        &lt;w-confirm top align-left class="ma2"&gt;
          Top, align left
        &lt;/w-confirm&gt;

        &lt;w-confirm top class="ma2"&gt;
          Top, align center
        &lt;/w-confirm&gt;

        &lt;w-confirm top align-right class="ma2"&gt;
          Top, align right
        &lt;/w-confirm&gt;
      &lt;/w-flex&gt;

      &lt;w-flex justify-center&gt;
        &lt;w-confirm bottom align-left class="ma2"&gt;
          Bottom, align left
        &lt;/w-confirm&gt;

        &lt;w-confirm bottom class="ma2"&gt;
          Bottom, align center
        &lt;/w-confirm&gt;

        &lt;w-confirm bottom align-right class="ma2"&gt;
          Bottom, align right
        &lt;/w-confirm&gt;
      &lt;/w-flex&gt;

  title-link(h4) Vertical
  example
    w-flex.text-center(justify-center)
      div
        w-confirm.ma2(left align-top) Left, align top
        w-confirm.ma2(left) Left, align center
        w-confirm.ma2(left align-bottom) Left, align bottom
      div
        w-confirm.ma2(right align-top) Right, align top
        w-confirm.ma2(right) Right, align center
        w-confirm.ma2(right align-bottom) Right, align bottom
    template(#pug).
      w-flex.text-center(justify-center)
        div
          w-confirm.ma2(left align-top) Left, align top
          w-confirm.ma2(left) Left, align center
          w-confirm.ma2(left align-bottom) Left, align bottom
        div
          w-confirm.ma2(right align-top) Right, align top
          w-confirm.ma2(right) Right, align center
          w-confirm.ma2(right align-bottom) Right, align bottom
    template(#html).
      &lt;w-flex justify-center class="text-center"&gt;
        &lt;div
          &lt;w-confirm left align-top class="ma2"&gt;
            Left, align top
          &lt;/w-confirm&gt;

          &lt;w-confirm left class="ma2"&gt;
            Left, align center
          &lt;/w-confirm&gt;

          &lt;w-confirm left align-bottom class="ma2"&gt;
            Left, align bottom
          &lt;/w-confirm&gt;
        &lt;/div&gt;

        &lt;div
          &lt;w-confirm right align-top class="ma2"&gt;
            Right, align top
          &lt;/w-confirm&gt;

          &lt;w-confirm right class="ma2"&gt;
            Right, align center
          &lt;/w-confirm&gt;

          &lt;w-confirm right align-bottom class="ma2"&gt;
            Right, align bottom
          &lt;/w-confirm&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

  title-link(h2) Persistent
  p A click outside of the menu will not close it.
  example
    w-confirm(persistent) Ask for confirm
    template(#pug).
      w-confirm(persistent) Ask for confirm
    template(#html).
      &lt;w-confirm persistent&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) Inline question
  p Displays the question inline with the buttons inside the menu.
  example
    w-confirm(inline) Ask for confirm
    template(#pug).
      w-confirm(inline) Ask for confirm
    template(#html).
      &lt;w-confirm inline&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) Custom question
  p The #[code question] slot allows you to specify your own question.
  example
    w-confirm
      strong Delete
      template(#question) Are you sure you want to delete this?
    template(#pug).
      w-confirm
        strong Delete
        template(#question) Are you sure you want to delete this?
    template(#html).
      &lt;w-confirm&gt;
        &lt;strong&gt;Delete&lt;/strong&gt;
        &lt;template #question&gt;
          Are you sure you want to delete this?
        &lt;/template&gt;
      &lt;/w-confirm&gt;

  title-link(h2) Cancel &amp; confirm buttons
  title-link(h3) Custom buttons contents
  p.
    You can use the #[code cancel] &amp; #[code confirm] slots to override the cancel &amp; confirm
    buttons contents.
  example
    w-confirm
      | Ask for confirm
      template(#cancel) No
      template(#confirm) Yes
    template(#pug).
      w-confirm
        | Ask for confirm
        template(#cancel) No
        template(#confirm) Yes
    template(#html).
      &lt;w-confirm&gt;
        Ask for confirm
        &lt;template #cancel&gt;No&lt;/template&lt;
        &lt;template #confirm&gt;Yes&lt;/template&lt;
      &lt;/w-confirm&gt;

  title-link(h3) No cancel button
  example
    w-confirm(no-cancel) Ask for confirm
    template(#pug).
      w-confirm(no-cancel) Ask for confirm
    template(#html).
      &lt;w-confirm no-cancel&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h3) Full custom buttons
  p.
    The cancel and confirm buttons can be customized as much as a standard #[strong.code w-button]
    via the #[code cancel-button] &amp; #[code confirm-button] props which accept an object of
    #[strong.code w-button] props to pass down to the buttons.
  example
    w-confirm(
      inline
      :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
      :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
      | Ask for confirm
    template(#pug).
      w-confirm(
        inline
        :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
        :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
        | Ask for confirm
    template(#html).
      &lt;w-confirm
        inline
        :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
        :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) No arrow
  p.
    By default, the w-confirm component displays an arrow on the edge of the menu to designate
    which action you have clicked requiring a confirmation.#[br]
    You can disable the arrow via the #[code no-arrow] option.
  example.example--no-arrow
    w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
    w-confirm.ma2(no-arrow right) Right
    w-confirm.ma2.mb12(:menu="{ noPosition: true, detachTo: '.example--no-arrow' }") No position

    template(#pug).
      w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
      w-confirm.ma2(no-arrow right) Right
      w-confirm.ma2.mb12(:menu="{ noPosition: true, detachTo: '.example--no-arrow' }") No position
    template(#html).
      &lt;w-confirm
        no-arrow
        :menu="{ bgColor: 'blue-light5' }"
        class="ma2"&gt;
        Bottom
      &lt;/w-confirm&gt;

      &lt;w-confirm no-arrow right class="ma2"&gt;
        Right
      &lt;/w-confirm&gt;

      &lt;w-confirm
        :menu="{
          noPosition: true,
          detachTo: '.example--no-arrow'
        }"
        class="ma2"&gt;
        No position
      &lt;/w-confirm&gt;

  title-link(h2) Transitions
  example
    w-flex(wrap)
      w-confirm.ma1 Default (scale-fade)
      w-confirm.ma1(transition="fade") Fade
      w-confirm.ma1(transition="slide-fade-up") Slide fade up
      w-confirm.ma1(transition="slide-fade-right") Slide fade right
      w-confirm.ma1(transition="slide-fade-down") Slide fade down
      w-confirm.ma1(transition="slide-fade-left") Slide fade left
      w-confirm.ma1(transition="scale") Scale
      w-confirm.ma1(transition="bounce") Bounce
      w-confirm.ma1(transition="twist") Twist
    template(#pug).
      w-flex(wrap)
        w-confirm.ma1 Default (scale-fade)
        w-confirm.ma1(transition="fade") Fade
        w-confirm.ma1(transition="slide-fade-up") Slide fade up
        w-confirm.ma1(transition="slide-fade-right") Slide fade right
        w-confirm.ma1(transition="slide-fade-down") Slide fade down
        w-confirm.ma1(transition="slide-fade-left") Slide fade left
        w-confirm.ma1(transition="scale") Scale
        w-confirm.ma1(transition="bounce") Bounce
        w-confirm.ma1(transition="twist") Twist
    template(#html).
      &lt;w-confirm class="ma1"&gt;
        Default (scale-fade)
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="fade"
        class="ma1"&gt;
        Fade
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="slide-fade-up"
        class="ma1"&gt;
        Slide fade up
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="slide-fade-right"
        class="ma1"&gt;
        Slide fade right
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="slide-fade-down"
        class="ma1"&gt;
        Slide fade down
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="slide-fade-left"
        class="ma1"&gt;
        Slide fade left
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="scale"
        class="ma1"&gt;
        Scale
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="bounce"
        class="ma1"&gt;
        Bounce
      &lt;/w-confirm&gt;

      &lt;w-confirm
        transition="twist"
        class="ma1"&gt;
        Twist
      &lt;/w-confirm&gt;

  title-link(h2) Events
  p 2 events are emitted from the #[strong.code w-confirm] component:
  ul
    li #[code cancel] on cancel button click.
    li #[code confirm] on confirm button click.
  p.
    You can listen to them to trigger an action.#[br]
    In this example, a notification is displayed when clicking on the cancel or confirm button.
  example
    w-confirm(
      @cancel="$waveui.notify('Canceled.', 'error')"
      @confirm="$waveui.notify('Confirmed!', 'success')") Ask for confirm
    template(#pug).
      w-confirm(
        @cancel="$waveui.notify&amp;#40;'Canceled.', 'error'&amp;#41;"
        @confirm="$waveui.notify&amp;#40;'Confirmed!', 'success'&amp;#41;") Ask for confirm
    template(#html).
      &lt;w-confirm
        @cancel="$waveui.notify('Canceled.', 'error')"
        @confirm="$waveui.notify('Confirmed!', 'success')"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;
</template>

<script>
export default {
  data: () => ({
    bgColor: 'green'
  }),

  mounted () {
    setTimeout(() => {
      this.bgColor = 'amber'
    }, 5000)
  }

}
</script>
