<template lang="pug">
div.tooltips-demo
  alert(tip).
    #[strong Important notes]#[br]
    By default when you use #[code &lt;w-tooltip&gt;], it creates a wrapper around the activator
    element and the tooltip is added inside this wrapper.#[br]
    In this case you can add classes to the wrapper to style it as desired.#[br]#[br]
    But in some cases, for instance if the activator element is placed in a container that has a hidden
    overflow, the tooltip needs to be placed outside of this container to be fully visible.#[br]
    You can use the #[code detachTo] prop to place it elsewhere in the DOM, like in the
    #[a(href="#appending-to-a-dom-node") Appending to a particular DOM node] example.#[br]
    In this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to
    the DOM node you provided.

  title-link(h2) Tooltip position
  example(content-class="text-center")
    w-tooltip(left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home

    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home

    w-tooltip
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home

    w-tooltip(right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home
    //- template(#pug).
      .text-center
        w-tooltip(left)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

        w-tooltip
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

        w-tooltip(right)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip left&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="primary-light2"&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Home
        &lt;/w-tooltip&gt;

        &lt;w-tooltip top&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="primary-light2"&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Home
        &lt;/w-tooltip&gt;

        &lt;w-tooltip&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="primary-light2"&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Home
        &lt;/w-tooltip&gt;

        &lt;w-tooltip right&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="primary-light2"&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Home
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Toggle on click
  example(content-class="text-center")
    w-tooltip(show-on-click left)
      template(#activator="{ on }")
        w-button.ma2(v-on="on" bg-color="info")
          w-icon.mr1 wi-star
          | Star
      | Star

    w-tooltip(show-on-click right)
      template(#activator="{ on }")
        w-button.ma2(v-on="on" bg-color="info-dark2" dark)
          w-icon.mr1 wi-star
          | Star
      | Star
    //- template(#pug).
    //-   .text-center
    //-     w-tooltip(show-on-click left)
    //-       template(#activator="{ on }")
    //-         w-button.ma2(v-on="on" bg-color="info")
    //-           w-icon.mr1 wi-star
    //-           | Star
    //-       | Star

    //-     w-tooltip(show-on-click right)
    //-       template(#activator="{ on }")
    //-         w-button.ma2(v-on="on" bg-color="info-dark2" dark)
    //-           w-icon.mr1 wi-star
    //-           | Star
    //-       | Star
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip show-on-click left&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button
              class="ma2"
              v-on="on"
              bg-color="info"&gt;
              &lt;w-icon class="mr1"&gt;
                wi-star
              &lt;/w-icon&gt;
              Star
            &lt;/w-button&gt;
          &lt;/template&gt;
          Star
        &lt;/w-tooltip&gt;

        &lt;w-tooltip show-on-click right&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button
              class="ma2"
              v-on="on"
              bg-color="info-dark2"
              dark&gt;
              &lt;w-icon class="mr1"&gt;
                wi-star
              &lt;/w-icon&gt;
              Star
            &lt;/w-button&gt;
          &lt;/template&gt;
          Star
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Using v-model
  title-link(h3) Toggle with v-model
  p Click the button to toggle the tooltips.
  example(content-class="text-center my4")
    w-button.my2.mx6(
      @click="showTooltip = !showTooltip"
      bg-color="primary"
      dark
      width="6em")
      | {{ showTooltip ? 'Hide' : 'Show' }} tooltip

    div.d-iblock.my2.mx6
      w-tooltip.ma2(:model-value="showTooltip" show-on-click left)
        template(#activator="{ on }")
          w-icon(v-on="on") wi-star
        | Star

      w-tooltip.ma2(:model-value="showTooltip" show-on-click top)
        template(#activator="{ on }")
          w-icon(v-on="on") wi-star
        | Star

      w-tooltip.ma2(:model-value="showTooltip" show-on-click)
        template(#activator="{ on }")
          w-icon(v-on="on") wi-star
        | Star

      w-tooltip.ma2(:model-value="showTooltip" show-on-click right)
        template(#activator="{ on }")
          w-icon(v-on="on") wi-star
        | Star

    //- template(#pug).
      .text-center
        w-button.my2.mx6(
          @click="showTooltip = !showTooltip"
          bg-color="primary"
          dark
          width="6em")
          | {{ '\{\{ showTooltip ? \'Hide\' : \'Show\' \}\}' }} tooltip

        div.d-iblock.my2.mx6
          w-tooltip.ma2(v-model="showTooltip" show-on-click left)
            template(#activator="{ on }")
              w-icon(v-on="on") wi-star
            | Star

          w-tooltip.ma2(v-model="showTooltip" show-on-click top)
            template(#activator="{ on }")
              w-icon(v-on="on") wi-star
            | Star

          w-tooltip.ma2(v-model="showTooltip" show-on-click)
            template(#activator="{ on }")
              w-icon(v-on="on") wi-star
            | Star

          w-tooltip.ma2(v-model="showTooltip" show-on-click right)
            template(#activator="{ on }")
              w-icon(v-on="on") wi-star
            | Star
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-button
          @click="showTooltip = !showTooltip"
          class="my2 mx6"
          bg-color="primary"
          dark
          width="6em"&gt;
          {{ '\{\{ showTooltip ? \'Hide\' : \'Show\' \}\}' }} tooltip
        &lt;/w-button&gt;

        &lt;div class="d-iblock my2 mx6"&gt;
          &lt;w-tooltip
            class="ma2"
            v-model="showTooltip"
            show-on-click
            left&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon v-on="on"&gt;wi-star&lt;/w-icon&gt;
            &lt;/template&gt;
            Star
          &lt;/w-tooltip&gt;

          &lt;w-tooltip
            class="ma2"
            v-model="showTooltip"
            show-on-click
            top&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon v-on="on"&gt;wi-star&lt;/w-icon&gt;
            &lt;/template&gt;
            Star
          &lt;/w-tooltip&gt;

          &lt;w-tooltip
            class="ma2"
            v-model="showTooltip"
            show-on-click&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon v-on="on"&gt;wi-star&lt;/w-icon&gt;
            &lt;/template&gt;
            Star
          &lt;/w-tooltip&gt;

          &lt;w-tooltip
            class="ma2"
            v-model="showTooltip"
            show-on-click
            right&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon v-on="on"&gt;wi-star&lt;/w-icon&gt;
            &lt;/template&gt;
            Star
          &lt;/w-tooltip&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        showTooltip: false
      })

  title-link(h3) Using v-model to update a variable
  p Click the star to toggle the tooltip.
  example(content-class="text-center my4")
    w-tooltip(v-model="showTooltip2" show-on-click right)
      template(#activator="{ on }")
        w-icon(v-on="on") wi-star
      | Star
    div.mt4 The tooltip is {{ showTooltip2 ? 'visible' : 'hidden' }}.

    //- template(#pug).
      w-tooltip(v-model="showTooltip" show-on-click right)
        template(#activator="{ on }")
          w-icon(v-on="on") wi-star
        | Star
      div.mt4 The tooltip is {{ "\{\{ showTooltip ? 'visible' : 'hidden' \}\}" }}.

    template(#html).
      &lt;w-tooltip
        v-model="showTooltip"
        show-on-click
        right&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-icon v-on="on"&gt;wi-star&lt;/w-icon&gt;
        &lt;/template&gt;
        Star
      &lt;/w-tooltip&gt;

      &lt;div class="mt4"&gt;
        The tooltip is {{ "\{\{ showTooltip ? 'visible' : 'hidden' \}\}" }}.
      &lt;/div&gt;
    template(#js).
      data: () => ({
        showTooltip: false
      })

  title-link(h2) Background color &amp; text color
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example(content-class="text-center pb8")
    w-tooltip(color="white" bg-color="blue")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="blue") wi-star
      | Star

    w-tooltip(color="white" bg-color="purple")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="purple") wi-star
      | Star

    w-tooltip(color="orange-dark1" bg-color="yellow-light3")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="amber") wi-star
      | Star

    w-tooltip(color="orange")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl) wi-star
      | Star
    //- template(#pug).
      .text-center.pb8
        w-tooltip(color="white" bg-color="blue")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="blue") wi-star
          | Star

        w-tooltip(color="white" bg-color="purple")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="purple") wi-star
          | Star

        w-tooltip(color="orange-dark1" bg-color="yellow-light3")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="amber") wi-star
          | Star

        w-tooltip(color="orange")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl) wi-star
          | Star
    template(#html).
      &lt;div class="text-center pb8"&gt;
        &lt;w-tooltip color="white" bg-color="blue"&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="blue"&gt;
              wi-star
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Star
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="white" bg-color="purple"&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="purple"&gt;
              wi-star
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Star
        &lt;/w-tooltip&gt;

        &lt;w-tooltip
          color="orange-dark1"
          bg-color="yellow-light3"&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="amber"&gt;
              wi-star
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Star
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="orange"&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl&gt;
              wi-star
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Star
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Tile, round and shadow
  example(content-class="text-center pb8")
    w-tooltip(color="red-light2" tile)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square
      | Tile
    w-tooltip(color="amber-dark1" round)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle
      | Round
    w-tooltip(color="pink-light1" shadow)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart
      | Shadow
    //- template(#pug).
      .text-center.pb8
        w-tooltip(color="red-light2" tile)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square
          | Tile
        w-tooltip(color="amber-dark1" round)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle
          | Round
        w-tooltip(color="pink-light1" shadow)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart
          | Shadow
    template(#html).
      &lt;div class="text-center pb8"&gt;
        &lt;w-tooltip color="red-light2" tile&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="red-light2"&gt;
              mdi mdi-square
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Tile
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="amber-dark1" round&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="amber"&gt;
              mdi mdi-circle
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Round
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="pink-light1" shadow&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-icon
              class="ma2"
              v-on="on"
              xl
              color="pink-light1"&gt;
              mdi mdi-heart
            &lt;/w-icon&gt;
          &lt;/template&gt;
          Shadow
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Different contents
  example(content-class="text-center")
    w-tooltip.ma3(color="primary")
      template(#activator="{ on }")
        span(v-on="on") Content with icon
      w-icon.mr1 wi-star
      | Star

    w-tooltip.ma3(color="primary")
      template(#activator="{ on }")
        span(v-on="on" ref="truc") Very long content
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      br
      | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      br
      br
      | Recusandae distinctio perferendis expedita pariatur fuga.
    //- template(#pug).
      .text-center
        w-tooltip.ma3(color="primary")
          template(#activator="{ on }")
            span(v-on="on") Content with icon
          w-icon.mr1 wi-star
          | Star

        w-tooltip.ma3(color="primary")
          template(#activator="{ on }")
            span(v-on="on" ref="truc") Very long content
          | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          br
          | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
          br
          br
          | Recusandae distinctio perferendis expedita pariatur fuga.
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip class="ma3" color="primary"&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;span v-on="on"&gt;
              Content with icon
            &lt;/span&gt;
          &lt;/template&gt;
          &lt;w-icon class="mr1"&gt;wi-star&lt;/w-icon&gt;
          Star
        &lt;/w-tooltip&gt;

        &lt;w-tooltip class="ma3" color="primary"&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;span v-on="on" ref="truc"&gt;
              Very long content
            &lt;/span&gt;
          &lt;/template&gt;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          &lt;br /&gt;
          Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
          &lt;br /&gt;
          &lt;br /&gt;
          Recusandae distinctio perferendis expedita pariatur fuga.
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Transitions
  example(content-class="text-center")
    w-radios.my4(inline v-model="transition" :items="transitions")
    .text-center.py6
      w-tooltip(:transition="transition" left)
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
      w-tooltip(:transition="transition")
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
      w-tooltip(:transition="transition" top)
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
      w-tooltip(:transition="transition" right)
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
    //- template(#pug).
      .text-center
        w-radios.my4(inline v-model="transition" :items="transitions")
        .text-center.py6
          w-tooltip(:transition="transition" left)
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
          w-tooltip(:transition="transition")
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
          w-tooltip(:transition="transition" top)
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
          w-tooltip(:transition="transition" right)
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-radios
          class="my4"
          inline
          v-model="transition"
          :items="transitions"&gt;
        &lt;/w-radios&gt;

        &lt;div class="text-center py6"&gt;
          &lt;w-tooltip :transition="transition" left&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon
                class="ma2"
                v-on="on"
                color="primary"
                xl&gt;
                mdi mdi-home
              &lt;/w-icon&gt;
            &lt;/template&gt;
            Home
          &lt;/w-tooltip&gt;

          &lt;w-tooltip :transition="transition"&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon
                class="ma2"
                v-on="on"
                color="primary"
                xl&gt;
                mdi mdi-home
              &lt;/w-icon&gt;
            &lt;/template&gt;
            Home
          &lt;/w-tooltip&gt;

          &lt;w-tooltip :transition="transition" top&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon
                class="ma2"
                v-on="on"
                color="primary"
                xl&gt;
                mdi mdi-home
              &lt;/w-icon&gt;
            &lt;/template&gt;
            Home
          &lt;/w-tooltip&gt;

          &lt;w-tooltip :transition="transition" right&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-icon
                class="ma2"
                v-on="on"
                color="primary"
                xl&gt;
                mdi mdi-home
              &lt;/w-icon&gt;
            &lt;/template&gt;
            Home
          &lt;/w-tooltip&gt;
        &lt;/div&gt;
      &lt;/div&gt;

    template(#js).
      data: () => ({
        transition: 'bounce',
        transitions: [
          { label: 'Default', value: '' },
          { label: 'Bounce', value: 'bounce' },
          { label: 'Scale', value: 'scale' },
          { label: 'Twist', value: 'twist' },
          { label: 'Fade', value: 'fade' },
          { label: 'Scale-fade', value: 'scale-fade' }
        ]
      })

  title-link(h2 slug="appending-to-a-dom-node") Appending to a particular DOM node
  p.
    In this example, the yellow container of the pink activator has an overflow hidden, but we want the
    tooltip to be fully visible. So we detach it to the green container.
  example.mb12(content-class="pa0")
    .another-container.text-center.green-light5--bg.pa6
      w-card(bg-color="yellow-light5")
        w-tooltip(detach-to=".another-container")
          template(#activator="{ on }")
            w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
              w-icon.mr1 mdi mdi-bomb
              | Hover me
          span This tooltip is appended to the #[span.green green] container!
    //- template(#pug).
      .wrapper.text-center.green-light5--bg.pa6
        w-card(bg-color="yellow-light5")
          w-tooltip(detach-to=".wrapper")
            template(#activator="{ on }")
              w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
                w-icon.mr1 mdi mdi-bomb
                | Hover me
            span This tooltip is appended to the green container!
    template(#html).
      &lt;div class="wrapper text-center green-light5--bg pa6"&gt;
        &lt;w-card bg-color="yellow-light5"&gt;
          &lt;w-tooltip detach-to=".wrapper"&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-tag
                v-on="on"
                lg
                color="pink-light1"
                bg-color="pink-light5"&gt;
                &lt;w-icon class="mr1"&gt;mdi mdi-bomb&lt;/w-icon&gt;
                Hover me
            &lt;/template&gt;

            &lt;span&gt;
              This tooltip is appended to the green container!
            &lt;/span&gt;
          &lt;/w-tooltip&gt;
        &lt;/w-card&gt;
      &lt;/div&gt;
    template(#css).
      .wrapper {position: relative;}

      .w-card {
        overflow: hidden;
        display: inline-block;
        padding: 8px;
      }

      .w-card:before, .w-card:after {
        content: '';
        position: absolute;
        background-color: #ffea62;
        width: 6em;
        height: 6em;
        border-radius: 100%;
      }

      .w-card:before {top: 0;left: 0;}
      .w-card:after {bottom: 0;right: 0;}

      .w-tag {z-index: 1;}

  alert(warning).
    The DOM element that the tooltip is detached to must have a position (fixed, absolute or
    relative).
</template>

<script>
export default {
  data: () => ({
    showTooltip: false,
    showTooltip2: false,
    transition: 'bounce',
    transitions: [
      { label: 'Default', value: '' },
      { label: 'Bounce', value: 'bounce' },
      { label: 'Scale', value: 'scale' },
      { label: 'Twist', value: 'twist' },
      { label: 'Fade', value: 'fade' },
      { label: 'Scale-fade', value: 'scale-fade' }
    ]
  })
}
</script>

<style lang="scss">
.tooltips-demo {
  .example {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }

  .w-card {
    overflow: hidden;
    display: inline-block;
    padding: 8px;

    &:before, &:after {
      content: '';
      position: absolute;
      background-color: #ffea62;
      width: 6em;
      height: 6em;
      border-radius: 100%;
    }

    &:before {top: -3em;left: -3em;}
    &:after {bottom: -3em;right: -3em;}

    .w-tag {z-index: 1;}
  }
  .another-container {position: relative;}

  .example__render {overflow: visible;}
}
</style>
