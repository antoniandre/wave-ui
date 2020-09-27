<template lang="pug">
div
  title-link(h2) Default tag &amp; outline
  example(content-class="w-flex align-center")
    w-tag.mr4 tag
    w-tag(outline) tag
    template(#pug).
      w-tag.mr4 tag
      w-tag(outline) tag

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example(content-class="w-flex align-center")
    w-tag.mr4(color="primary") tag
    w-tag.mr4(bg-color="primary") tag
    w-tag(bg-color="primary" color="yellow") tag
    template(#pug).
      w-tag.mr4(color="primary") tag
      w-tag.mr4(bg-color="primary") tag
      w-tag(bg-color="primary" color="yellow") tag

  title-link(h2) Round, tile &amp; shadow
  example(content-class="w-flex align-center")
    w-tag.mr4(bg-color="primary" round) round
    w-tag.mr4(bg-color="primary" tile) tile
    w-tag(color="primary" shadow) shadow
    template(#pug).
      w-tag.mr4(bg-color="primary" round) round
      w-tag.mr4(bg-color="primary" tile) tile
      w-tag(color="primary" shadow) shadow

  title-link(h2) Sizes
  example
    .w-flex.wrap.align-center
      w-tag.ma1(color="primary" xs) extra small
      w-tag.ma1(color="primary" sm) small
      w-tag.ma1(color="primary" md) medium
      w-tag.ma1(color="primary" lg) large
      w-tag.ma1(color="primary" xl) extra large
    p.my4 You can also put a custom size using the #[code width] and #[code height] props.
    w-tag(outline color="primary" xl width="10em" height="3em") a bigger tag
    template(#pug).
      .w-flex.wrap.align-center
        w-tag.ma1(color="primary" xs) extra small
        w-tag.ma1(color="primary" sm) small
        w-tag.ma1(color="primary" md) medium
        w-tag.ma1(color="primary" lg) large
        w-tag.ma1(color="primary" xl) extra large
      p.my4 You can also put a custom size using the width and height props.
      w-tag(outline color="primary" xl width="10em" height="3em") a bigger tag

  title-link(h2) Toggleable state &amp; closable
  p.
    When a tag has a #[code v-model] or #[code value], it becomes clickable and its #[code v-model]
    value is updated when user clicks on it.
  example(content-class="w-flex align-center")
    w-tag(
      v-model="tagOn1"
      :bg-color="tagOn1 ? 'primary' : 'primary-light2'"
      dark
      lg
      toggle) {{ tagOn1 ? 'active' : 'inactive' }}
    span.ml4
      | Value:
      code.ml1 {{ tagOn1 }}
    template(#pug).
      w-tag(
        v-model="tagOn"
        :bg-color="tagOn ? 'primary' : 'primary-light2'"
        dark
        lg
        toggle) {{ "\{\{ tagOn ? 'active' : 'inactive' \}\}" }}
      span.ml4
        | Value:
        code.ml1 {{ '\{\{ tagOn \}\}' }}
    template(#js).
      data: () => ({
        tagOn: false
      })

  h3 Closable tag
  example(content-class="w-flex align-center")
    w-tag(v-model="tagOn2" closable lg :outline="tagOn2" color="primary" :width="145") v-model &amp; close
    template(#pug).
      w-tag(v-model="tagOn" closable lg :outline="tagOn" color="primary" :width="145") v-model &amp; close
    template(#js).
      data: () => ({
        tagOn: false
      })

  title-link(h2) Custom content
  example(content-class="w-flex align-center")
    w-tag(color="pink-light1" bg-color="pink-light5")
      w-icon.mr1(sm) mdi mdi-heart
      | like it
    template(#pug).
      w-tag(color="pink-light1" bg-color="pink-light5")
        w-icon.mr1(sm) mdi mdi-heart
        | like it
</template>

<script>
export default {
  data: () => ({
    tagOn1: false,
    tagOn2: true
  })
}
</script>
