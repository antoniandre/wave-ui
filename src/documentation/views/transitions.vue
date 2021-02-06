<template lang="pug">
main
  title-link.mt4(h1) Transitions

  p Here is a list of all the available transition components.
  ul
    li #[code w-transition-fade]
    li.mt1 #[code w-transition-scale]
    li.mt1 #[code w-transition-scale-fade]
    li.mt1 #[code w-transition-bounce]
    li.mt1 #[code w-transition-twist]
    li.mt1 #[code w-transition-expand]
    li.mt1 #[code w-transition-slide]
    li.mt1 #[code w-transition-slide-fade]

  alert(info)
    | The transitions (based on
    | #[a(href="https://vuejs.org/v2/guide/transitions.html" target="_blank") Vue native transitions])
    | work with element toggling using #[code v-if] or #[code v-show].
    br
    | Simple example (with #[code show] a boolean variable):
    .w-flex
      ssh-pre.mb0(language="html-vue").
        &lt;w-transition-fade&gt;
          &lt;span v-if="show"&gt;Hello!&lt;/span&gt;
        &lt;/w-transition-fade&gt;

  title-link(h2) Transitions showcase
  example
    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleFade = !toggleFade"
        color="primary"
        outline) Fade {{ toggleFade ? 'out' : 'in' }}
      w-transition-fade
        .transition-box(v-if="toggleFade") Fading transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleScale = !toggleScale"
        color="primary"
        outline) Scale {{ toggleScale ? 'out' : 'in' }}
      w-transition-scale
        .transition-box(v-if="toggleScale") Scaling transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleScaleFade = !toggleScaleFade"
        color="primary"
        outline) Scale fade {{ toggleScaleFade ? 'out' : 'in' }}
      w-transition-scale-fade
        .transition-box(v-if="toggleScaleFade") Scaling &amp; fading transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleBounce = !toggleBounce"
        color="primary"
        outline) Bounce {{ toggleBounce ? 'out' : 'in' }}
      w-transition-bounce
        .transition-box(v-if="toggleBounce") Bouncing transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleTwist = !toggleTwist"
        color="primary"
        outline) Twist {{ toggleTwist ? 'out' : 'in' }}
      w-transition-twist
        .transition-box(v-if="toggleTwist") Twisting transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandX = !toggleExpandX"
        color="primary"
        outline) {{ toggleExpandX ? 'Collapse' : 'Expand' }} X
      w-transition-expand(x)
        .transition-box.text-nowrap(v-if="toggleExpandX") X-expanding transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandY = !toggleExpandY"
        color="primary"
        outline) {{ toggleExpandY ? 'Collapse' : 'Expand' }} Y
      w-transition-expand(y)
        .transition-box(v-if="toggleExpandY") Y-expanding transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandXY = !toggleExpandXY"
        color="primary"
        outline) {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
      w-transition-expand
        .transition-box.text-nowrap(v-if="toggleExpandXY") X &amp; Y expanding transition

    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleSlideFadeDown = !toggleSlideFadeDown"
        color="primary"
        outline) Slide fade {{ toggleSlideFadeDown ? 'up' : 'down' }}
      w-transition-slide-fade
        .transition-box.text-nowrap(v-if="toggleSlideFadeDown") Slide fade down transition
    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleSlideFadeRight = !toggleSlideFadeRight"
        color="primary"
        outline) Slide fade {{ toggleSlideFadeRight ? 'left' : 'right' }}
      w-transition-slide-fade(right)
        .transition-box.text-nowrap(v-if="toggleSlideFadeRight") Slide fade right transition

    template(#html).
      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleFade = !toggleFade"
          color="primary"
          outline&gt;
          Fade {{ "\{\{ toggleFade ? 'out' : 'in' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-fade&gt;
          &lt;div class="transition-box" v-if="toggleFade"&gt;Fading transition&lt;/div&gt;
        &lt;/w-transition-fade&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleScale = !toggleScale"
          color="primary"
          outline&gt;
          Scale {{ "\{\{ toggleScale ? 'out' : 'in' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-scale&gt;
          &lt;div class="transition-box" v-if="toggleScale"&gt;Scaling transition&lt;/div&gt;
        &lt;/w-transition-scale&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleScaleFade = !toggleScaleFade"
          color="primary"
          outline&gt;
          Scale fade {{ "\{\{ toggleScaleFade ? 'out' : 'in' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-scale-fade&gt;
          &lt;div class="transition-box" v-if="toggleScaleFade"&gt;Scaling &amp; fading transition&lt;/div&gt;
        &lt;/w-transition-scale-fade&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleBounce = !toggleBounce"
          color="primary"
          outline&gt;
          Bounce {{ "\{\{ toggleBounce ? 'out' : 'in' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-bounce&gt;
          &lt;div class="transition-box" v-if="toggleBounce"&gt;Bouncing transition&lt;/div&gt;
        &lt;/w-transition-bounce&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleTwist = !toggleTwist"
          color="primary"
          outline&gt;
          Twist {{ "\{\{ toggleTwist ? 'out' : 'in' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-twist&gt;
          &lt;div class="transition-box" v-if="toggleTwist"&gt;Twisting transition&lt;/div&gt;
        &lt;/w-transition-twist&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandX = !toggleExpandX"
          color="primary"
          outline&gt;
          {{ "\{\{ toggleExpandX ? 'Collapse' : 'Expand' \}\}" }} X
        &lt;/w-button&gt;
        &lt;w-transition-expand x&gt;
          &lt;div class="transition-box text-nowrap" v-if="toggleExpandX"&gt;X-expanding transition&lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandY = !toggleExpandY"
          color="primary"
          outline&gt;
          {{ "\{\{ toggleExpandY ? 'Collapse' : 'Expand' \}\}" }} Y
        &lt;/w-button&gt;
        &lt;w-transition-expand y&gt;
          &lt;div class="transition-box" v-if="toggleExpandY"&gt;Y-expanding transition&lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandXY = !toggleExpandXY"
          color="primary"
          outline&gt;
          {{ "\{\{ toggleExpandXY ? 'Collapse' : 'Expand' \}\}" }} X &amp; Y
        &lt;/w-button&gt;
        &lt;w-transition-expand&gt;
          &lt;div class="transition-box text-nowrap" v-if="toggleExpandXY"&gt;X &amp; Y expanding transition&lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleSlideFadeDown = !toggleSlideFadeDown"
          color="primary"
          outline&gt;
          Slide fade {{ "\{\{ toggleSlideFadeDown ? 'up' : 'down' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-slide-fade&gt;
          &lt;div class="transition-box text-nowrap" v-if="toggleSlideFadeDown"&gt;Slide fade down transition&lt;/div&gt;
        &lt;/w-transition-slide-fade&gt;
      &lt;/w-flex&gt;

      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleSlideFadeRight = !toggleSlideFadeRight"
          color="primary"
          outline&gt;
          Slide fade {{ "\{\{ toggleSlideFadeRight ? 'left' : 'right' \}\}" }}
        &lt;/w-button&gt;
        &lt;w-transition-slide-fade right&gt;
          &lt;div class="transition-box text-nowrap" v-if="toggleSlideFadeRight"&gt;Slide fade down transition&lt;/div&gt;
        &lt;/w-transition-slide-fade&gt;
      &lt;/w-flex&gt;

    template(#js).
      data: () => ({
        toggleFade: false,
        toggleScale: false,
        toggleScaleFade: false,
        toggleBounce: false,
        toggleTwist: false,
        toggleExpandX: false,
        toggleExpandY: false,
        toggleExpandXY: false,
        toggleSlideFadeDown: false,
        toggleSlideFadeRight: false
      })

    template(#css).
      .transition-toggle {
        margin: 12px 24px 12px 0;
        width: 7.7em;
      }

      .transition-box {
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 1em;
        width: 14em;
        text-align: center;
      }

  p
    strong.mr1 Note:
    | the #[span.code slide-fade] transition take the direction in parameter, e.g. #[span.code left],
    | #[span.code right], #[span.code up], #[span.code down] and defaults to #[span.code down].

  title-link(h2 slug="the-expand-transition") The #[span.code expand] transition
  p.
    The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
    transitioning element! Look at this one:
  example
    w-flex(align-center)
      w-button.transition-toggle(
        @click="toggleExpandXY2 = !toggleExpandXY2"
        color="primary"
        outline
        width="7.3em") {{ toggleExpandXY2 ? 'Collapse' : 'Expand' }} X &amp; Y
      w-transition-expand(:duration="2000")
        .transition-box.pa6.ma10.yellow-light5--bg(
          v-if="toggleExpandXY2"
          style="width: auto")
          .amber-light4--bg.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
            | X &amp; Y expanding transition
    template(#html).
      &lt;w-flex align-center&gt;
        &lt;w-button
          class="transition-toggle"
          @click="toggleExpandXY = !toggleExpandXY"
          color="primary"
          outline
          width="7.3em"&gt;
          {{ toggleExpandXY ? 'Collapse' : 'Expand' }} X &amp; Y
        &lt;/w-button&gt;
        &lt;w-transition-expand :duration="2000"&gt;
          &lt;div
            v-if="toggleExpandXY"
            class="transition-box pa6 ma10 yellow-light5--bg"
            style="width: auto"&gt;
            &lt;div class="amber-light4--bg pa2"&gt;
              X &amp; Y expanding transition
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/w-transition-expand&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        toggleExpandXY: false
      })
    template(#css).
      .transition-toggle {margin: 12px 24px 12px 0;}

      .transition-box {
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 1em;
        width: 14em;
        text-align: center;
      }

      .transition-box div {
        overflow: hidden;
        white-space: nowrap;
        width: 200px;
      }

  alert(tip).
    When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
    the animation, like in the above example.
    To do so, you can add the #[span.code text-nowrap] class on the element being transitioned.

  title-link(h2 slug="the-slide-transition") The #[span.code slide] transition
  p.
    The slide transition is only designed for elements sliding from outside the view into the view or
    vice-versa, they will slide from 0% visibility to 100% visibility.#[br]
    It works well for full screen elements or elements that are in a hidden-overflow container like
    in this example.
  example
    div(style="height: 90px;overflow: hidden;padding: 4px")
      w-button.mb2(@click="showCard = !showCard") {{ showCard ? 'Hide' : 'Show' }} Card
      w-transition-slide(left)
        w-card.primary-light3--bg.white(v-if="showCard")
          .title3.mb0 A sliding card.
    template(#html).
      &lt;div style="height: 90px;overflow: hidden;padding: 4px"&gt;
        &lt;w-button class="mb2" @click="showCard = !showCard"&gt;
          {{ "\{\{ showCard ? 'Hide' : 'Show' \}\}" }} Card
        &lt;/w-button&gt;
        &lt;w-transition-slide left&gt;
          &lt;w-card v-if="showCard" class="primary-light3--bg white"&gt;
            &lt;div class="title3"&gt;A sliding card.&lt;/div&gt;
          &lt;/w-card&gt;
        &lt;/w-transition-slide&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        showCard: false
      })

  title-link(h2) Transition duration
  p.
    You can easily override the default transition/animation duration by setting an explicit
    CSS transition/animation duration on the element being transitioned:
    #[span.code style="animation-duration: 3s"].
  p.
    The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.
    So you don't need to override the duration from a CSS rule.
</template>

<script>
export default {
  data: () => ({
    toggleFade: false,
    toggleScale: false,
    toggleScaleFade: false,
    toggleBounce: false,
    toggleTwist: false,
    toggleExpandX: false,
    toggleExpandY: false,
    toggleExpandXY: false,
    toggleExpandXY2: false,
    toggleSlideFadeDown: false,
    toggleSlideFadeRight: false,
    showCard: false
  })
}
</script>

<style lang="scss">
.transition-toggle {margin: 12px 24px 12px 0;width: 7.7em;}

.transition-box {
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}

@media screen and (max-width: 420px) {
  .transition-box {
    padding: 0.4em;
    width: 14em;
  }
}
</style>
