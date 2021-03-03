<template lang="pug">
div
  title-link(h2) Default tag &amp; outline
  example(content-class="w-flex align-center")
    w-tag.mr4 tag
    w-tag(outline) tag
    //- template(#pug).
      w-tag.mr4 tag
      w-tag(outline) tag
    template(#html).
      &lt;w-tag class="mr4"&gt;tag&lt;/w-tag&gt;
      &lt;w-tag outline&gt;tag&lt;/w-tag&gt;

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example(content-class="w-flex align-center")
    w-tag.mr4(color="primary") tag
    w-tag.mr4(bg-color="primary") tag
    w-tag(bg-color="primary" color="yellow") tag
    //- template(#pug).
      w-tag.mr4(color="primary") tag
      w-tag.mr4(bg-color="primary") tag
      w-tag(bg-color="primary" color="yellow") tag
    template(#html).
      &lt;w-tag class="mr4" color="primary"&gt;tag&lt;/w-tag&gt;
      &lt;w-tag class="mr4" bg-color="primary"&gt;tag&lt;/w-tag&gt;
      &lt;w-tag bg-color="primary" color="yellow"&gt;tag&lt;/w-tag&gt;

  title-link(h2) Round, tile &amp; shadow
  example(content-class="w-flex align-center")
    w-tag.mr4(bg-color="primary" round) round
    w-tag.mr4(bg-color="primary" tile) tile
    w-tag(color="primary" shadow) shadow
    //- template(#pug).
      w-tag.mr4(bg-color="primary" round) round
      w-tag.mr4(bg-color="primary" tile) tile
      w-tag(color="primary" shadow) shadow
    template(#html).
      &lt;w-tag 
        class="mr4" 
        bg-color="primary" 
        round&gt;
        round
      &lt;/w-tag&gt;

      &lt;w-tag 
        class="mr4" 
        bg-color="primary" 
        tile&gt;
        tile
      &lt;/w-tag&gt;

      &lt;w-tag 
        color="primary" 
        shadow&gt;
        shadow  
      &lt;/w-tag&gt;

  title-link(h2) Sizes
  p.
    The tag size can be controlled via the preset sizes #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl], or via the #[code width] and #[code height] props.
  example
    .w-flex.wrap.align-center
      w-tag.ma1(color="primary" xs) extra small
      w-tag.ma1(color="primary" sm) small
      w-tag.ma1(color="primary" md) medium
      w-tag.ma1(color="primary" lg) large
      w-tag.ma1(color="primary" xl) extra large
    .title3.my4 Custom width and height
    w-tag(outline color="primary" xl width="10em" height="3em") a bigger tag
    //- template(#pug).
      .w-flex.wrap.align-center
        w-tag.ma1(color="primary" xs) extra small
        w-tag.ma1(color="primary" sm) small
        w-tag.ma1(color="primary" md) medium
        w-tag.ma1(color="primary" lg) large
        w-tag.ma1(color="primary" xl) extra large
      .title3.my4 Custom width and height
      w-tag(outline color="primary" xl width="10em" height="3em") a bigger tag
    template(#html).
      &lt;div class="w-flex wrap align-center"&gt;
        &lt;w-tag 
          class="ma1" 
            color="primary" 
            xs&gt;
            extra small
        &lt;/w-tag&gt;

        &lt;w-tag 
          class="ma1" 
            color="primary" 
            sm&gt;
            small
        &lt;/w-tag&gt;

        &lt;w-tag 
          class="ma1" 
            color="primary" 
            md&gt;
            medium
        &lt;/w-tag&gt;

        &lt;w-tag 
          class="ma1" 
            color="primary" 
            lg&gt;
            large
        &lt;/w-tag&gt;

        &lt;w-tag 
          class="ma1" 
            color="primary" 
            xl&gt;
            extra large
        &lt;/w-tag&gt;
      &lt;/div&gt;

      &lt;div class="title3 my4"&gt;
        Custom width and height
      &lt;/div&gt;
      
      &lt;w-tag 
        outline 
        color="primary" 
        xl 
        width="10em" 
        height="3em"&gt;
        a bigger tag
      &lt;/w-tag&gt;

  title-link(h2) Toggleable state &amp; closable
  p.
    When a tag has a #[code v-model] or #[code value], it becomes toggleable (two different states) and clickable.
    When the user clicks it, its #[code v-model] boolean value is updated.
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
    //- template(#pug).
      w-tag(
        v-model="tagOn"
        :bg-color="tagOn ? 'primary' : 'primary-light2'"
        dark
        lg
        toggle) {{ "\{\{ tagOn ? 'active' : 'inactive' \}\}" }}
      span.ml4
        | Value:
        code.ml1 {{ '\{\{ tagOn \}\}' }}
    template(#html).
      &lt;w-tag
        v-model="tagOn"
        :bg-color="tagOn ? 'primary' : 'primary-light2'"
        dark
        lg
        toggle&gt;
        {{ "\{\{ tagOn ? 'active' : 'inactive' \}\}" }}
      &lt;/w-tag&gt;

      &lt;span class="ml4"&gt;
        Value:
        &lt;code class="ml1"&gt;{{ '\{\{ tagOn \}\}' }}&lt;/code&gt;
      &lt;/span&gt;
    template(#js).
      data: () => ({
        tagOn: false
      })

  h3 Closable tag
  example(content-class="w-flex align-center")
    w-tag(v-model="tagOn2" closable lg :outline="tagOn2" color="primary" :width="145") v-model &amp; close
    //- template(#pug).
      w-tag(v-model="tagOn" closable lg :outline="tagOn" color="primary" :width="145") v-model &amp; close
    template(#html).
      &lt;w-tag 
        v-model="tagOn" 
        closable 
        lg 
        :outline="tagOn" 
        color="primary" 
        :width="145"&gt;
        v-model &amp; close
      &lt;/w-tag&gt;
    template(#js).
      data: () => ({
        tagOn: true
      })

  title-link(h2) Custom content
  example(content-class="w-flex align-center")
    w-tag(color="pink-light1" bg-color="pink-light5")
      w-icon.mr1(sm) mdi mdi-heart
      | like it
    //- template(#pug).
      w-tag(color="pink-light1" bg-color="pink-light5")
        w-icon.mr1(sm) mdi mdi-heart
        | like it
    template(#html).
      &lt;w-tag color="pink-light1" bg-color="pink-light5"&gt;
        &lt;w-icon class="mr1" sm&gt;
          mdi mdi-heart
        &lt;/w-icon&gt;
        like it
      &lt;/w-tag&gt;
</template>

<script>
export default {
  data: () => ({
    tagOn1: false,
    tagOn2: true
  })
}
</script>
