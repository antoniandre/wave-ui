<template lang="pug">
div
  title-link(h2) Default
  p The default badge background color is primary.
  example(content-class="mt2")
    w-badge
      template(#badge) 3
      w-button.primary(text)
        w-icon.mr1 mdi mdi-email
        | Emails
    template(#html).
      &lt;w-badge&gt;
        &lt;template #badge&gt;3&lt;/template&gt;
        &lt;w-button color="primary"&gt;
          &lt;w-icon class="mr1"&gt;mdi mdi-email&lt;/w-icon&gt;
          Emails
        &lt;/w-button&gt;
      &lt;/w-badge&gt;

  title-link(h2) V-model
  p The badge appears if one of these conditions is fulfilled:
  ul
    li No v-model or value is provided but a badge slot is.
    li.
      A v-model or a value is given and is not #[code null], #[code false] or #[code 0].#[br]
      If you want to show one of these values, you can cast it to a string and it will show up.
  example(content-class="mt1")
    w-flex(align-center)
      w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
      w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
        w-icon(color="grey-light1" size="2.4em") mdi mdi-email
      w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)
    template(#pug).
      w-flex(align-center)
        w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)

        w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
          w-icon(color="grey-light1" size="2.4em") mdi mdi-email

        w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)
    template(#js).
      data: () => ({
        showBadge: 0
      })

  title-link(h2) Positions
  p The default position is top right.
  example
    .title4.mb2 Top
    w-badge.ml4.mr10(top left)
      template(#badge) 3
      w-icon.grey-light1(size="2.5em") mdi mdi-email
    w-badge(top right)
      template(#badge) 3
      w-icon.grey-light1(size="2.5em") mdi mdi-email

    .title4.mt6.mb2 Bottom
    w-badge.ml4.mr10(bottom left)
      template(#badge) 3
      w-icon.grey-light1(size="2.5em") mdi mdi-email
    w-badge(bottom right)
      template(#badge) 3
      w-icon.grey-light1(size="2.5em") mdi mdi-email
    template(#pug).
      .title4.mb2 Top
      w-badge.ml4.mr10(top left)
        template(#badge="") 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
      w-badge(top right)
        template(#badge="") 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      .title4.mt6.mb2 Bottom
      w-badge.ml4.mr10(bottom left)
        template(#badge="") 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
      w-badge(bottom right)
        template(#badge="") 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

  title-link(h2) Color and background color
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example(content-class="mt1")
    w-badge.mr10(bg-color="error")
      template(#badge) 3
      w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    w-badge.mr10(color="yellow")
      template(#badge) 3
      w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    w-badge(bg-color="lime-light1" color="green-dark2")
      template(#badge) 3
      w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    template(#pug).
      w-badge.mr10(bg-color="error")
        template(#badge="") 3
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email
      w-badge.mr10(color="yellow")
        template(#badge="") 3
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email
      w-badge(bg-color="lime-light1" color="green-dark2")
        template(#badge="") 3
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email

  title-link(h2) Dot
  example(content-class="mt1")
    w-badge.mr10(dot bg-color="red")
      w-icon(size="2.5em") mdi mdi-account
    w-badge(dot bottom bg-color="red")
      w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-badge.mr10(dot bg-color="red")
        w-icon(size="2.5em") mdi mdi-account
      w-badge(dot bottom bg-color="red")
        w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Sizes
  p.
    The badge size can be controlled via the preset sizes #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl] or via the #[code size] prop (sets the font-size).
  example
    .title3.mb2 Dots
    w-flex(wrap)
      w-badge.mr10(dot bg-color="red" xs)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" sm)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" md)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" lg)
        w-icon(size="2.5em") mdi mdi-account
      w-badge.mr10(dot bg-color="red" xl)
        w-icon(size="2.5em") mdi mdi-account
    .title3.mt6.mb2 Text content
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
    .title3.mt6.mb2 Numeric content
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
      .title3.mb2 Dots
      w-flex(wrap)
        w-badge.mr10(dot bg-color="red" xs)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" sm)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" md)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" lg)
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(dot bg-color="red" xl)
          w-icon(size="2.5em") mdi mdi-account

      .title3.mt6.mb2 Text content
      w-flex(wrap)
        w-badge.mr10(bg-color="error" xs)
          template(#badge="") busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" sm)
          template(#badge="") busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" md)
          template(#badge="") busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" lg)
          template(#badge="") busy
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" xl)
          template(#badge="") busy
          w-icon(size="2.5em") mdi mdi-account

      .title3.mt6.mb2 Numeric content
      w-flex(wrap)
        w-badge.mr10(bg-color="error" xs)
          template(#badge="") 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" sm)
          template(#badge="") 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" md)
          template(#badge="") 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" lg)
          template(#badge="") 3
          w-icon(size="2.5em") mdi mdi-account
        w-badge.mr10(bg-color="error" xl)
          template(#badge="") 3
          w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Overlap
  example
    .title4.mb3 Top
    .w-flex.wrap.align-center
      w-badge.ml4.mr10(top left)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      w-badge(top right)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right

      w-badge.mr10(top left overlap)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      w-badge(top right overlap)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

    .title4.mt8.mb3 Bottom
    .w-flex.wrap.align-center
      w-badge.ml4.mr10(bottom left)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      w-badge(bottom right)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right

      w-badge.mr10(bottom left overlap)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email

      w-badge(bottom right overlap)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
    template(#pug).
      .title4.mb3 Top
      .w-flex.wrap.align-center
        w-badge.ml4.mr10(top left)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

        w-badge(top right)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

        w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right

        w-badge.mr10(top left overlap)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

        w-badge(top right overlap)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

      .title4.mt8.mb3 Bottom
      .w-flex.wrap.align-center
        w-badge.ml4.mr10(bottom left)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

        w-badge0(bottom right)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

        w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right

        w-badge.mr10(bottom left overlap)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

        w-badge(bottom right overlap)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

  .title3.mt8.mb3 Overlaps with different sizes
  example(content-class="mt1")
    w-flex(wrap align-center)
      w-badge.mr10(overlap xs)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
      w-badge.mr10(overlap sm)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
      w-badge.mr10(overlap md)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
      w-badge.mr10(overlap lg)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
      w-badge(overlap xl)
        template(#badge) 3
        w-icon.grey-light1(size="2.5em") mdi mdi-email
    template(#pug).
      w-flex(wrap align-center)
        w-badge.mr10(overlap xs)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email
        w-badge.mr10(overlap sm)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email
        w-badge.mr10(overlap md)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email
        w-badge.mr10(overlap lg)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email
        w-badge(overlap xl)
          template(#badge="") 3
          w-icon.grey-light1(size="2.5em") mdi mdi-email

  title-link(h2) Force round badge
  p.
    For instance, if you increase the font size of the badge like in this example, the natural behavior
    of the badge is to increase its width to adapt to its content.#[br]
    With the option #[code round] you can force it to be round.
  example(content-class="mt1")
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
      w-badge(bg-color="error")
        template(#badge="")
          span.size--sm 11
        w-icon(size="2.5em") mdi mdi-account

      w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

      w-badge(bg-color="error" round)
        template(#badge="")
          span.size--sm 11
        w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Icons
  example(content-class="mt2")
    w-badge.mr10(bg-color="success" overlap round)
      template(#badge)
        w-icon mdi mdi-check
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr10(bg-color="error" overlap round)
      template(#badge)
        w-icon mdi mdi-close
      w-icon(size="2.5em") mdi mdi-account
    w-badge(bg-color="transparent" overlap round)
      template(#badge)
        w-icon(color="pink-light1" md) mdi mdi-heart
      w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-badge.mr10(bg-color="success" overlap round)
        template(#badge="")
          w-icon mdi mdi-check
        w-icon(size="2.5em") mdi mdi-account

      w-badge.mr10(bg-color="error" overlap round)
        template(#badge="")
          w-icon mdi mdi-close
        w-icon(size="2.5em") mdi mdi-account

      w-badge(bg-color="transparent" overlap round)
        template(#badge="")
          w-icon(color="pink-light1" md) mdi mdi-heart
        w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Override badge padding
  example(content-class="w-flex wrap align-center")
    w-badge(bg-color="error" badge-class="px1")
      template(#badge) busy
      w-icon(size="2.5em") mdi mdi-account

    w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

    w-badge(bg-color="error" badge-class="px4")
      template(#badge) busy
      w-icon(size="2.5em") mdi mdi-account
    template(#pug).
      w-badge(bg-color="error" badge-class="px1")
        template(#badge="") busy
        w-icon(size="2.5em") mdi mdi-account

      w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

      w-badge(bg-color="error" badge-class="px4")
        template(#badge="") busy
        w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Transitions
  p The default transition is #[code fade].
  example
    .w-flex.align-center.wrap
      w-flex(column no-grow align-end)
        span.mb2 Toggle with this transition effect:
        w-button.code.ma1(@click="transition = 'fade';showBadge2 = !showBadge2" bg-color="primary" xs) fade
        w-button.code.ma1(@click="transition = 'bounce';showBadge2 = !showBadge2" bg-color="primary" xs) bounce
        w-button.code.ma1(@click="transition = 'twist';showBadge2 = !showBadge2" bg-color="primary" xs) twist
        w-button.code.ma1(@click="transition = 'scale';showBadge2 = !showBadge2" bg-color="primary" xs) scale
        w-button.code.ma1(@click="transition = 'scale-fade';showBadge2 = !showBadge2" bg-color="primary" xs) scale-fade
        w-button.code.ma1(@click="transition = 'slide-fade-left';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-left
        w-button.code.ma1(@click="transition = 'slide-fade-right';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-right
        w-button.code.ma1(@click="transition = 'slide-fade-up';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-up
        w-button.code.ma1(@click="transition = 'slide-fade-down';showBadge2 = !showBadge2" bg-color="primary" xs) slide-fade-down
      .w-flex.grow
        .xs2
        .xs10
          w-badge.ma4(v-model="showBadge2" :transition="transition" bg-color="error" overlap round)
            template(#badge) 5
            w-icon(color="grey-light1" size="2.5em") mdi mdi-email
    template(#pug).
      .w-flex.align-center.wrap
        w-flex(column no-grow align-end)
          span.mb2 Toggle with this transition effect:
          w-button.code.ma1(@click="transition = 'fade';showBadge = !showBadge" bg-color="primary" xs) fade
          w-button.code.ma1(@click="transition = 'bounce';showBadge = !showBadge" bg-color="primary" xs) bounce
          w-button.code.ma1(@click="transition = 'twist';showBadge = !showBadge" bg-color="primary" xs) twist
          w-button.code.ma1(@click="transition = 'scale';showBadge = !showBadge" bg-color="primary" xs) scale
          w-button.code.ma1(@click="transition = 'scale-fade';showBadge = !showBadge" bg-color="primary" xs) scale-fade
          w-button.code.ma1(@click="transition = 'slide-fade-left';showBadge = !showBadge" bg-color="primary" xs) slide-fade-left
          w-button.code.ma1(@click="transition = 'slide-fade-right';showBadge = !showBadge" bg-color="primary" xs) slide-fade-right
          w-button.code.ma1(@click="transition = 'slide-fade-up';showBadge = !showBadge" bg-color="primary" xs) slide-fade-up
          w-button.code.ma1(@click="transition = 'slide-fade-down';showBadge = !showBadge" bg-color="primary" xs) slide-fade-down

        .w-flex.grow
          .xs2
          .xs10
            w-badge.ma4(v-model="showBadge" :transition="transition" bg-color="error" overlap round)
              template(#badge="") 5
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
