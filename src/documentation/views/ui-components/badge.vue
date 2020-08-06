<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-badge")
    | w-badge
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Default
  p The default badge background color is primary.
  example
    w-badge.mr10
      template(#badge) 3
      div.grey-light5--bg.pa2.primary
        w-icon.mr1 mdi mdi-email
        | Emails
    template(#html).
      &lt;w-badge class="mr10"&gt;
        &lt;template #badge&gt;3&lt;/template&gt;
        &lt;div class="pa2 grey-light5--bg primary"&gt;
          &lt;w-icon class="mr1"&gt;mdi mdi-email&lt;/w-icon&gt;
          Emails
        &lt;/div&gt;
      &lt;/w-badge&gt;

  title-link(h2) Color and background color
  example
    w-flex(wrap)
      w-badge.mr10(bg-color="error")
        template(#badge) 3
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email
      w-badge.mr10(color="yellow")
        template(#badge) 3
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email
      w-badge.mr10(bg-color="lime-light1" color="green-dark2")
        template(#badge) 3
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    template(#pug).
      w-flex(wrap)
        w-badge.mr10(bg-color="error")
          template(#badge) 3
          w-icon(color="grey-light1" size="2.5em") mdi mdi-email
        w-badge.mr10(color="yellow")
          template(#badge) 3
          w-icon(color="grey-light1" size="2.5em") mdi mdi-email
        w-badge.mr10(bg-color="lime-light1" color="green-dark2")
          template(#badge) 3
          w-icon(color="grey-light1" size="2.5em") mdi mdi-email

  title-link(h2) Dot
  example
    w-flex(wrap)
      w-badge.mr10(dot bg-color="red")
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-flex(wrap)
        w-badge.mr10(dot bg-color="red")
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Positions
  example
    w-flex.ml2(wrap)
      w-badge.mr10(dot bottom left bg-color="red")
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot top left bg-color="red")
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot top right bg-color="red")
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bottom right bg-color="red")
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-flex.ml2(wrap)
        w-badge.mr10(dot bottom left bg-color="red")
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot top left bg-color="red")
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot top right bg-color="red")
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bottom right bg-color="red")
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Sizes
  example
    h3 Dots
    w-flex(wrap)
      w-badge.mr10(dot bg-color="red" xs)
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" sm)
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" md)
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" lg)
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" xl)
        template(#badge)
        w-icon(size="2.5em") mdi mdi-account
    h3 Text content
    w-flex(wrap)
      w-badge.mr10(bg-color="error" xs)
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" sm)
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" md)
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" lg)
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" xl)
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account
    h3 Numeric content
    w-flex(wrap)
      w-badge.mr10(bg-color="error" xs)
        template(#badge) 3
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" sm)
        template(#badge) 3
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" md)
        template(#badge) 3
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" lg)
        template(#badge) 3
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(bg-color="error" xl)
        template(#badge) 3
        w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      h3 Dots
      w-flex(wrap)
        w-badge.mr10(dot bg-color="red" xs)
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" sm)
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" md)
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" lg)
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" xl)
          template(#badge)
          w-icon(size="2.5em") mdi mdi-account
      h3 Text content
      w-flex(wrap)
        w-badge.mr10(bg-color="error" xs)
          template(#badge) busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" sm)
          template(#badge) busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" md)
          template(#badge) busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" lg)
          template(#badge) busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" xl)
          template(#badge) busy
          w-icon(size="2.5em") mdi mdi-account
      h3 Numeric content
      w-flex(wrap)
        w-badge.mr10(bg-color="error" xs)
          template(#badge) 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" sm)
          template(#badge) 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" md)
          template(#badge) 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" lg)
          template(#badge) 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" xl)
          template(#badge) 3
          w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Overlap
  example
    w-flex(wrap)
      w-badge.mr10
        template(#badge) 3
        div.grey-light5--bg.pa2.primary
          w-icon.mr1 mdi mdi-email
          | Emails

      w-badge.my4.mr10(overlap bottom dot bg-color="green")
        w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account

    w-flex(wrap)
      w-badge.my4.mr10(overlap bottom bg-color="orange" sm color="white")
        template(#badge) away
        w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account
    template(#pug).
      w-flex(wrap)
        w-badge.mr10
          template(#badge) 3
          div.grey-light5--bg.pa2.primary
            w-icon.mr1 mdi mdi-email
            | Emails

        w-badge.my4.mr10(overlap bottom dot bg-color="green")
          w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account

      w-flex(wrap)
        w-badge.my4.mr10(overlap bottom bg-color="orange" sm color="white")
          template(#badge) away
          w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account

  title-link(h2) Force round badge
  p.
    For instance, if you increase the font size of the badge like in this example, the natural behavior
    of the badge is to increase its width to adapt to its content.#[br]
    With the option #[code round] you can force it to be round.
  example
    w-flex(wrap)
      w-badge(bg-color="error")
        template(#badge)
          span.size--sm 11
        w-icon(size="2.5em") mdi mdi-account

      w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

      w-badge(bg-color="error" round)
        template(#badge)
          span.size--sm 11
        w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-flex(wrap)
        w-badge(bg-color="error")
          template(#badge)
            span.size--sm 11
          w-icon(size="2.5em") mdi mdi-account

        w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

        w-badge(bg-color="error" round)
          template(#badge)
            span.size--sm 11
          w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Override badge padding
  example
    w-badge(bg-color="error" badge-class="px1")
      template(#badge) busy
      w-icon(size="2.5em") mdi mdi-account

    w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

    w-badge(bg-color="error" badge-class="px4")
      template(#badge) busy
      w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-badge(bg-color="error" badge-class="px1")
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account

      w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

      w-badge(bg-color="error" badge-class="px4")
        template(#badge) busy
        w-icon(size="2.5em") mdi mdi-account

  title-link(h2) V-model
  p The badge appears if one of these conditions is fulfilled:
  ul
    li No v-model or value is provided but a badge slot is.
    li.
      A v-model or a value is given and is not #[code null], #[code false] or #[code 0].#[br]
      If you want to show one of these values, you can cast it to a string and it will show up.
  example
    w-flex.align-center
      w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
      w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email
      w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)
    template(#pug).
      w-flex.align-center
        w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
        w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
          w-icon(color="grey-light1" size="2.5em") mdi mdi-email
        w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)
    template(#js).
      data: () => ({
        showBadge: 0
      })

  title-link(h2) Transitions
  example
    .w-flex.align-center.wrap
      w-flex.mb4(column no-grow align-end)
        span.mb2 Toggle with this transition effect:
        w-button.code.ma1(@click="transition = 'fade';showBadge2 = !showBadge2" bg-color="primary" xs) fade
        w-button.code.ma1(@click="transition = 'bounce';showBadge2 = !showBadge2" bg-color="primary" xs) bounce
        w-button.code.ma1(@click="transition = 'twist';showBadge2 = !showBadge2" bg-color="primary" xs) twist
        w-button.code.ma1(@click="transition = 'scale';showBadge2 = !showBadge2" bg-color="primary" xs) scale
        w-button.code.ma1(@click="transition = 'scale-fade';showBadge2 = !showBadge2" bg-color="primary" xs) scale-fade
        w-button.code.ma1(@click="transition = 'slide-fade-left';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-left
        w-button.code.ma1(@click="transition = 'slide-fade-right';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-right
        w-button.code.ma1(@click="transition = 'slide-fade-top';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-top
        w-button.code.ma1(@click="transition = 'slide-fade-bottom';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-bottom
      .w-flex.grow
        .xs2
        .xs10
          w-badge.ml4(v-model="showBadge2" :transition="transition" bg-color="error" overlap round)
            template(#badge) 5
            w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    template(#pug).
      .w-flex.align-center.wrap
        w-flex.mb4(column no-grow align-end)
          span.mb2 Toggle with this transition effect:
          w-button.code.ma1(@click="transition = 'fade';showBadge = !showBadge" bg-color="primary" xs) fade
          w-button.code.ma1(@click="transition = 'bounce';showBadge = !showBadge" bg-color="primary" xs) bounce
          w-button.code.ma1(@click="transition = 'twist';showBadge = !showBadge" bg-color="primary" xs) twist
          w-button.code.ma1(@click="transition = 'scale';showBadge = !showBadge" bg-color="primary" xs) scale
          w-button.code.ma1(@click="transition = 'scale-fade';showBadge = !showBadge" bg-color="primary" xs) scale-fade
          w-button.code.ma1(@click="transition = 'slide-fade-left';showBadge = !showBadge" bg-color="primary" xs) slide-fade-left
          w-button.code.ma1(@click="transition = 'slide-fade-right';showBadge = !showBadge" bg-color="primary" xs) slide-fade-right
          w-button.code.ma1(@click="transition = 'slide-fade-top';showBadge = !showBadge" bg-color="primary" xs) slide-fade-top
          w-button.code.ma1(@click="transition = 'slide-fade-bottom';showBadge = !showBadge" bg-color="primary" xs) slide-fade-bottom
        .w-flex.grow
          .xs2
          .xs10
            w-badge.ml4(v-model="showBadge" :transition="transition" bg-color="error" overlap round)
              template(#badge) 5
              w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    template(#js).
      data: () => ({
        showBadge: false,
        transition: 'fade'
      })
</template>

<script>
export default {
  data: () => ({
    showBadge: 0,
    showBadge2: false,
    transition: 'fade'
  })
}
</script>