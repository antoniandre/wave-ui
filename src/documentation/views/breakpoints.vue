<template lang="pug">
main
  title-link.mt4(h1) Breakpoints

  title-link(h2) What is this for?
  p.
    If you are not familiar with breakpoints, you should first read about it.#[br]
    The breakpoints are usaully useful when you want to change the layout for a particular viewport width.#[br]
    In Wave UI, you can use them in different ways:
  ul
    li Access the current breakpoint in JavaScript
    li
      | Use responsive grids with breakpoint-specific classes. Read more in
      router-link.ml1(to="/layout--grid-system") Layout &gt; Grid system
      | .
    li.
      Use breakpoint-specific layout classes like #[code sm-hide] or #[code lgu-text-center] and many other.#[br]
      All the layout classes presented in: #[router-link.ml1(to="/layout--flex") Layout &gt; Flex]

  title-link(h2) Default breakpoints
  p.mt6 By default, 5 breakpoints are set:
  ul
    li.mb1
      code.mr2 xs
      span from 0 to 600px
    li.mb1
      code.mr2 sm
      span from 601px to 900px
    li.mb1
      code.mr2 md
      span from 901px to 1200px
    li.mb1
      code.mr2 lg
      span from 1201px to 1700px
    li.mb1
      code.mr2 xl
      span from 1701px and more

  title-link(h2 slug="the-wave-ui-breakpoint-object") The #[code $waveui.breakpoint] object
  p.mt4.
    You can access the current breakpoint from anywhere using
    #[code this.$waveui.breakpoint.name], or one of these quick booleans from
    the same #[code this.$waveui.breakpoint] object:
  ul
    li.mb1
      code xs
    li.mb1
      code sm
    li.mb1
      code md
    li.mb1
      code lg
    li.mb1
      code xl

  example
    w-card.blue-light5--bg
      .title2.mt0 Current breakpoint: #[code {{ $waveui.breakpoint.name }}]
      em.grey.mt1 Resizing your browser will update the current breakpoint.
    //- template(#pug).
      w-card.blue-light5--bg
        .title2.mt0
          | Current breakpoint:
          code {{ '\{\{ $waveui.breakpoint.name \}\}' }}
        em.grey.mt1 Resizing your browser will update the current breakpoint.
    template(#html).
      &lt;w-card class="blue-light5--bg"&gt;
        &lt;div class="title2 mt0"&gt;
          Current breakpoint:
          &lt;code&gt;{{ '\{\{ $waveui.breakpoint.name \}\}' }}&lt;/code&gt;
        &lt;/div&gt;
        &lt;em class="grey mt1"&gt;
          Resizing your browser will update the current breakpoint.
        &lt;/em&gt;
      &lt;/w-card&gt;

  title-link(h2) breakpoint-specific layout classes
  p All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.
  ssh-pre(language="css").
    .show {display: block;}
    .hide {display: none;}

    .d-flex {display: flex;}
    .d-iflex {display: inline-flex;}
    .d-block {display: block;}
    .d-iblock {display: inline-block;}

    .text-left {text-align: left;}
    .text-center {text-align: center;}
    .text-right {text-align: right;}

    .row {flex-direction: row;}
    .column {flex-direction: column;}
    .grow {flex-grow: 1;flex-basis: auto;}
    .no-grow {flex-grow: 0;}
    .shrink {flex-shrink: 1;margin-left: auto;margin-right: auto;}
    .no-shrink {flex-shrink: 0;}
    .fill-width {width: 100%;}
    .fill-height {height: 100%;}
    .basis-zero {flex-basis: 0;}

    .align-start {align-items: flex-start;}
    .align-center {align-items: center;}
    .align-end {align-items: flex-end;}
    .align-self-start {align-self: flex-start;}
    .align-self-center {align-self: center;}
    .align-self-end {align-self: flex-end;}
    .align-self-stretch {align-self: stretch;}
    .justify-start {justify-content: flex-start;}
    .justify-center {justify-content: center;}
    .justify-end {justify-content: flex-end;}
    .justify-space-between {justify-content: space-between;}
    .justify-space-around {justify-content: space-around;}
    .justify-space-evenly {justify-content: space-evenly;}

  p.mt6.
    To use them on a particular breakpoint, the syntax is: #[code=".[breakpoint][extend]-[class]"], with:
  ul
    li #[strong.code="[breakpoint]"] one of: #[code xs], #[code sm], #[code md], #[code lg], #[code xl].
    li.
      #[strong.code="[extend]"] one of #[code u] (and up), #[code d] (and down) and
      #[strong no character] to target only this breakpoint.
    li #[strong.code="[class]"] one of the above CSS class name.

  alert(info).
    Note that #[code=".xsd-[class]"] and #[code=".xlu-[class]"] don't exist since they are the same as #[code=".xs-[class]"] and #[code=".xl-[class]"].
  p.mt6.
    In these two examples, resize your browser to less than 900px (default #[code md]) to see see the
    layout changed.
  example
    .text-left.smd-text-center Some text on the left.
    .text-center.smd-hide Some text in the center.
    .text-right.smd-text-center Some text on the right.
    //- template(#pug).
      .text-left.smd-text-center Some text on the left.
      .text-center.smd-hide Some text in the center.
      .text-right.smd-text-center Some text on the right.
    template(#html).
      &lt;div class="text-left smd-text-center"&gt;Some text on the left.&lt;/div&gt;
      &lt;div class="text-center smd-hide"&gt;Some text in the center.&lt;/div&gt;
      &lt;div class="text-right smd-text-center"&gt;Some text on the right.&lt;/div&gt;
  example
    .w-flex.justify-space-between.smd-column
      span Some text on the left.
      span Some text in the center.
      span Some text on the right.
    //- template(#pug).
      .w-flex.justify-space-between.smd-column
        span Some text on the left.
        span Some text in the center.
        span Some text on the right.
    template(#html).
      &lt;div class="w-flex justify-space-between smd-column"&gt;
        &lt;span&gt;Some text on the left.&lt;/span&gt;
        &lt;span&gt;Some text in the center.&lt;/span&gt;
        &lt;span&gt;Some text on the right.&lt;/span&gt;
      &lt;/div&gt;

  alert(tip)
    | If you'd rather not have these CSS layout classes, you can disable them via the
    | #[code breakpointLayoutClasses] config.
    ssh-pre(language="js").mb0.
      const waveui = new WaveUI({
        css: {
          breakpointLayoutClasses: false
        }
      })

  title-link(h2) Setting custom breakpoints
  p.mt4 You can override the default breakpoints values with:
  ssh-pre(language="js").
    const waveui = new WaveUI({
      breakpoints: {
        xs: 600,
        sm: 900,
        md: 1200,
        lg: 1700
        // Xl doesn't need to be overridden:
        // it always starts from lg &amp; goes to infinity.
      }
    })
</template>
