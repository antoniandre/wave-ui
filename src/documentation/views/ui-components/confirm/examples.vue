<template lang="pug">
div
  alert(info)
    ul
      li.title4.
        The purpose of the #[strong.code w-confirm] component is to quickly set up a
        confirmation prompt to confirm a critical action.
      li.
        The #[strong.code w-confirm] component uses the #[strong.code w-menu] and
        #[strong.code w-button] components.

  title-link(h2) Integrated tooltip
  p.
    We often need a tooltip on a button. Especially on the ones that only have an icons.#[br]
    That's why from version 2.45.0, the #[strong.code w-button] &amp; #[strong.code w-confirm]
    components ship with an integrated w-tooltip, if you need it.

  example(content-class="text-center" app-props-string="align-center")
    .w-flex.wrap
      w-confirm.ma4(tooltip="Delete this?") Delete
      w-confirm.ma4(
        :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
        | Delete
    template(#pug).
      w-flex(wrap)
        w-confirm.ma4(tooltip="Delete this?") Delete

        w-confirm.ma4(
          :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
          | Delete
    template(#html).
      &lt;w-flex wrap&gt;
        &lt;w-confirm class="ma4" tooltip="Delete this?"&gt;
          Delete
        &lt;/w-confirm&gt;

        &lt;w-confirm
          class="ma4"
          :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }"&gt;
          Delete
        &lt;/w-confirm&gt;
      &lt;/w-flex&gt;

  title-link(h2) Basic
  example(content-class="text-center" app-props-string="align-center")
    w-confirm Delete
    template(#pug).
      w-confirm Delete
    template(#html).
      &lt;w-confirm&gt;Delete&lt;/w-confirm&gt;

  title-link(h2) Icon button
  example(content-class="text-center" app-props-string="align-center")
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
    li #[code cancel] #[small.grey E.g. #[code.grey :cancel="{ bgColor: 'green' }"]]
    li #[code confirm] #[small.grey E.g. #[code.grey :confirm="{ bgColor: 'green' }"]]
  example(content-class="text-center" app-props-string="align-center")
    w-confirm.mb2(bg-color="success") Ask for confirm
    w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
    w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm
    template(#pug).
      w-confirm.mb2(bg-color="success") Ask for confirm
      w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
      w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm
    template(#html).
      &lt;w-confirm bg-color="success" class="mb2"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

      &lt;w-confirm bg-color="info" color="yellow" class="mb2"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

      &lt;w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) Positions &amp; alignments
  title-link(h3) Positions
  example(content-class="text-center" app-props-string="align-center")
    w-confirm.my5(top) Top
    w-confirm.my5(right) Right
    w-confirm.my5(bottom) Bottom
    w-confirm.my5(left) Left
    template(#pug).
      w-confirm.my5(top) Top
      w-confirm.my5(right) Right
      w-confirm.my5(bottom) Bottom
      w-confirm.my5(left) Left
    template(#html).
      &lt;w-confirm top class="my5"&gt;
        Top
      &lt;/w-confirm&gt;

      &lt;w-confirm right class="my5"&gt;
        Right
      &lt;/w-confirm&gt;

      &lt;w-confirm bottom class="my5"&gt;
        Bottom
      &lt;/w-confirm&gt;

      &lt;w-confirm left class="my5"&gt;
        Left
      &lt;/w-confirm&gt;

  title-link(h3) Alignments
  title-link(h4) Horizontal
  example
    w-flex.mt12(justify-center)
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
        &lt;div&gt;
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

        &lt;div&gt;
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
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(persistent) Ask for confirm
    template(#pug).
      w-confirm(persistent) Ask for confirm
    template(#html).
      &lt;w-confirm persistent&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) Inline question
  p Displays the question inline with the buttons inside the menu.
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(inline) Ask for confirm
    template(#pug).
      w-confirm(inline) Ask for confirm
    template(#html).
      &lt;w-confirm inline&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) Custom question
  p.
    By default the question is "Are you sure?". But both the #[code question] prop and the
    #[code #question] slot allow you to specify your own question. The slot is more
    customizable as you can add components in it but more verbose to write.#[br]
    If both a slot and a prop are given, the slot takes precedence.

  title-link(h3 slug="using-question-prop") Using the #[code question] prop
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(question="Are you sure you want to delete this?") Ask for confirm
    template(#pug).
      w-confirm(question="Are you sure you want to delete this?").
        Ask for confirm
    template(#html).
      &lt;w-confirm question="Are you sure you want to delete this?"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h3 slug="using-question-slot") Using the #[code #question] slot
  example(content-class="text-center" app-props-string="align-center")
    w-confirm
      | Ask for confirm
      template(#question) Are you sure you want to delete this?
    template(#pug).
      w-confirm
        | Ask for confirm
        template(#question) Are you sure you want to delete this?
    template(#html).
      &lt;w-confirm&gt;
        Ask for confirm
        &lt;template #question&gt;
          Are you sure you want to delete this?
        &lt;/template&gt;
      &lt;/w-confirm&gt;

  title-link(h2) Cancel &amp; confirm buttons
  p.
    The cancel &amp; confirm buttons can be customized through the #[code cancel] &amp;
    #[code confirm] props. These props accept either a #[span.code String] for the button
    label, or an #[span.code Object] in order to define w-button props.#[br]
    The cancel button can also be set to #[code false] in order to remove it.
  title-link(h3) Custom buttons labels
  p.
    You can use the #[code cancel] &amp; #[code confirm] #[strong props or slots] to override the
    cancel &amp; confirm buttons labels.
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(cancel="No" confirm="Yes").
      Ask for confirm
    template(#pug).
      w-confirm(cancel="No" confirm="Yes").
        Ask for confirm
    template(#html).
      &lt;w-confirm cancel="No" confirm="Yes"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h3) No cancel button
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(:cancel="false") Ask for confirm
    template(#pug).
      w-confirm(:cancel="false") Ask for confirm
    template(#html).
      &lt;w-confirm :cancel="false"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h3) Full custom buttons
  p.
    The cancel and confirm buttons can be customized as much as a standard #[strong.code w-button]
    via the #[code cancel] &amp; #[code confirm] props which accept an object of
    props to pass down to the #[strong.code w-button].
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(
      inline
      :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
      :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
      | Ask for confirm
    template(#pug).
      w-confirm(
        inline
        :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
        :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
        | Ask for confirm
    template(#html).
      &lt;w-confirm
        inline
        :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
        :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h3 slug="custom-label-in-object").
    Custom button label in the #[span.code Object] form
  p.
    If you're using the object form, you can define a custom label in it
    (or you could also use the #[code #cancel] &amp; #[code #confirm] slots
    for more flexibility).
  example(content-class="text-center" app-props-string="align-center")
    w-confirm(
      inline
      :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
      :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
      | Ask for confirm
    template(#pug).
      w-confirm(
        inline
        :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
        :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
        | Ask for confirm
    template(#html).
      &lt;w-confirm
        inline
        :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
        :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }"&gt;
        Ask for confirm
      &lt;/w-confirm&gt;

  title-link(h2) No arrow
  p.
    By default, the w-confirm component displays an arrow on the edge of the menu to designate
    which action you have clicked requiring a confirmation.#[br]
    You can disable the arrow via the #[code no-arrow] option.
  example.example--no-arrow(content-class="text-center" app-props-string="align-center")
    w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
    w-confirm.ma2(no-arrow right) Right
    w-confirm.ma2.mb12(:menu="{ noPosition: true, appendTo: '.example--no-arrow' }") No position

    template(#pug).
      w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
      w-confirm.ma2(no-arrow right) Right
      w-confirm.ma2.mb12(:menu="{ noPosition: true }") No position
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
        :menu="{ noPosition: true }"
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
  example(content-class="text-center" app-props-string="align-center")
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
