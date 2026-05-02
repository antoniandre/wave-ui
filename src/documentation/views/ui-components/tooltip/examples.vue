<template lang="pug">
div.tooltips-demo
  alert(tip).
    #[strong Important notes]#[br]
    By default the tooltip is moved into the #[code .w-app] in the DOM, so it is not constrained by a hidden
    overflow on a parent.#[br]
    When used inside a dialog, menu or drawer, it will be by default appended to that element.#[br]
    You can use the #[code appendTo] prop to place it elsewhere in the DOM, like in the
    #[a(href="#appending-to-a-dom-node") Appending to a particular DOM node] example.

  title-link(h2) Tooltip position
  example(content-class="text-center")
    w-tooltip(left tooltip="Home")
      w-icon.ma2(xl color="primary-light2") mdi mdi-home

    w-tooltip(top tooltip="Home")
      w-icon.ma2(xl color="primary-light2") mdi mdi-home

    w-tooltip(tooltip="Home")
      w-icon.ma2(xl color="primary-light2") mdi mdi-home

    w-tooltip(right tooltip="Home")
      w-icon.ma2(xl color="primary-light2") mdi mdi-home
    template(#pug).
      .text-center
        w-tooltip(left tooltip="Home")
          w-icon.ma2(xl color="primary-light2") mdi mdi-home

        w-tooltip(top tooltip="Home")
          w-icon.ma2(xl color="primary-light2") mdi mdi-home

        w-tooltip(tooltip="Home")
          w-icon.ma2(xl color="primary-light2") mdi mdi-home

        w-tooltip(right tooltip="Home")
          w-icon.ma2(xl color="primary-light2") mdi mdi-home
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip left tooltip="Home"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="primary-light2"&gt;
            mdi mdi-home
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip top tooltip="Home"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="primary-light2"&gt;
            mdi mdi-home
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip tooltip="Home"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="primary-light2"&gt;
            mdi mdi-home
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip right tooltip="Home"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="primary-light2"&gt;
            mdi mdi-home
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Alignments
  p In addition to positions, you can align the tooltip with its activator.
  example.example6
    .title4.mb2 Top position
    w-tooltip(append-to=".example6" top align-left)
      w-button.ma1 Align left
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" top)
      w-button.ma1 Centered
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" top align-right)
      w-button.ma1 Align right
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.

    .title4.mt6.mb2 Bottom position
    w-tooltip(append-to=".example6" align-left)
      w-button.ma1 Align left
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6")
      w-button.ma1 Centered
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" align-right)
      w-button.ma1 Align right
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.

    .title4.mt6.mb2 Right position
    w-tooltip(append-to=".example6" right align-top)
      w-button.ma1 Align top
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" right)
      w-button.ma1 Centered
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" right align-bottom)
      w-button.ma1 Align bottom
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.

    .title4.mt6.mb2 Left position
    w-tooltip(append-to=".example6" left align-top)
      w-button.ma1 Align top
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" left)
      w-button.ma1 Centered
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    w-tooltip(append-to=".example6" left align-bottom)
      w-button.ma1 Align bottom
      template(#tooltip)
        | Tooltip content,#[br]on multiple lines.
    template(#pug).
      .title4.mb2 top position
      w-tooltip(top align-left)
        w-button.ma1 Align left
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(top)
        w-button.ma1 Centered
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(top align-right)
        w-button.ma1 Align right
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.

      .title4.mt6.mb2 Bottom position
      w-tooltip(align-left)
        w-button.ma1 Align left
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip
        w-button.ma1 Centered
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(align-right)
        w-button.ma1 Align right
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.

      .title4.mt6.mb2 Right position
      w-tooltip(right align-top)
        w-button.ma1 Align top
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(right)
        w-button.ma1 Centered
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(right align-bottom)
        w-button.ma1 Align bottom
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.

      .title4.mt6.mb2 Left position
      w-tooltip(left align-top)
        w-button.ma1 Align top
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(left)
        w-button.ma1 Centered
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
      w-tooltip(left align-bottom)
        w-button.ma1 Align bottom
        template(#tooltip)
          | Tooltip content,\#[br]on multiple lines.
    template(#html).
      &lt;div class="title4 mb2"&gt;Top position&lt;/div&gt;
      &lt;w-tooltip top align-left&gt;
        &lt;w-button class="ma1"&gt;Align left&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip top&gt;
        &lt;w-button class="ma1"&gt;Centered&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip top align-right&gt;
        &lt;w-button class="ma1"&gt;Align right&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;div class="title4 mt6 mb2"&gt;Bottom position&lt;/div&gt;
      &lt;w-tooltip align-left&gt;
        &lt;w-button class="ma1"&gt;Align left&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip&gt;
        &lt;w-button class="ma1"&gt;Centered&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip align-right&gt;
        &lt;w-button class="ma1"&gt;Align right&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;div class="title4 mt6 mb2"&gt;Right position&lt;/div&gt;
      &lt;w-tooltip right align-top&gt;
        &lt;w-button class="ma1"&gt;Align top&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip right&gt;
        &lt;w-button class="ma1"&gt;Centered&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip right align-bottom&gt;
        &lt;w-button class="ma1"&gt;Align bottom&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;div class="title4 mt6 mb2"&gt;Left position&lt;/div&gt;
      &lt;w-tooltip left align-top&gt;
        &lt;w-button class="ma1"&gt;Align top&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip left&gt;
        &lt;w-button class="ma1"&gt;Centered&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip left align-bottom&gt;
        &lt;w-button class="ma1"&gt;Align bottom&lt;/w-button&gt;
        &lt;template #tooltip&gt;
          Tooltip content,<br>on multiple lines.
        &lt;/template&gt;
      &lt;/w-tooltip&gt;

  title-link(h2) Toggle on click
  example(content-class="text-center")
    w-tooltip(show-on-click left tooltip="Star")
      w-button.ma2(bg-color="info")
        w-icon.mr1 wi-star
        | Star

    w-tooltip(show-on-click right tooltip="Star")
      w-button.ma2(bg-color="info-dark2" dark)
        w-icon.mr1 wi-star
        | Star
    template(#pug).
      .text-center
        w-tooltip(show-on-click left tooltip="Star")
          w-button.ma2(bg-color="info")
            w-icon.mr1 wi-star
            | Star

        w-tooltip(show-on-click right tooltip="Star")
          w-button.ma2(bg-color="info-dark2" dark)
            w-icon.mr1 wi-star
            | Star
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip show-on-click left tooltip="Star"&gt;
          &lt;w-button
            class="ma2"

            bg-color="info"&gt;
            &lt;w-icon class="mr1"&gt;
              wi-star
            &lt;/w-icon&gt;
            Star
          &lt;/w-button&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip show-on-click right tooltip="Star"&gt;
          &lt;w-button
            class="ma2"
            bg-color="info-dark2"
            dark&gt;
            &lt;w-icon class="mr1"&gt;
              wi-star
            &lt;/w-icon&gt;
            Star
          &lt;/w-button&gt;
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Disabled
  p.
    Use the #[code disable] prop to keep the activator visible and interactive while preventing the
    tooltip from opening (including when #[code v-model] is #[code true]).
  example(content-class="text-center")
    w-flex(align-center justify-center wrap :gap="4")
      w-switch.mb2(v-model="tooltipDisabled" label="Disable tooltip")
      w-tooltip(:disable="tooltipDisabled" show-on-click left tooltip="This tooltip is controlled by the switch.")
        w-button.ma2(bg-color="primary" dark) Click to toggle
    template(#pug).
      w-flex(align-center justify-center wrap :gap="4")
        w-switch.mb2(v-model="tooltipDisabled" label="Disable tooltip")
        w-tooltip(:disable="tooltipDisabled" show-on-click left tooltip="This tooltip is controlled by the switch.")
          w-button.ma2(bg-color="primary" dark) Click to toggle
    template(#html).
      &lt;w-flex align-center justify-center wrap :gap="4"&gt;
        &lt;w-switch
          class="mb2"
          v-model="tooltipDisabled"
          label="Disable tooltip"&gt;
        &lt;/w-switch&gt;

        &lt;w-tooltip
          :disable="tooltipDisabled"
          show-on-click
          left
          tooltip="This tooltip is controlled by the switch."&gt;
          &lt;w-button
            class="ma2"

            bg-color="primary"
            dark&gt;
            Click to toggle
          &lt;/w-button&gt;
        &lt;/w-tooltip&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        tooltipDisabled: false
      })

  title-link(h2) Persistent
  p.
    By default with the #[code show-on-click] option, the tooltip will hide when you click
    anywhere once open.#[br]
    To make it persistent, use the #[code persistent] prop, so a click will not close the open
    tooltip.#[br]
    Clicking on the activator can always toggle the tooltip regardless of the #[code persistent]
    prop.
  example(content-class="text-center my4 example-persistent")
    w-tooltip(show-on-click persistent append-to=".example-persistent" tooltip="Star")
      w-icon(xl) wi-star

    template(#pug).
      w-tooltip(show-on-click persistent tooltip="Star")
        w-icon(xl) wi-star

    template(#html).
      &lt;w-tooltip
        show-on-click
        persistent
        tooltip="Star"&gt;
        &lt;w-icon xl&gt;wi-star&lt;/w-icon&gt;
      &lt;/w-tooltip&gt;

  title-link(h2) Using a v-model
  title-link(h3) Toggle with v-model
  p Click the button to toggle the tooltips.
  example(content-class="text-center my4")
    w-button.my2.mx6(
      @click="showTooltip = !showTooltip"
      width="6em")
      | {{ showTooltip ? 'Hide' : 'Show' }} tooltip

    div.d-iblock.my2.mx6
      w-tooltip(
        :model-value="showTooltip"
        show-on-click
        persistent
        left
        tooltip="Star"
        @open="tooltipVisible = true"
        @close="onTooltipClose")
        w-icon(lg) wi-star

      w-tooltip(
        :model-value="showTooltip"
        show-on-click
        persistent
        top
        tooltip="Star"
        @open="tooltipVisible = true"
        @close="onTooltipClose")
        w-icon(lg) wi-star

      w-tooltip(
        :model-value="showTooltip"
        show-on-click
        persistent
        tooltip="Star"
        @open="tooltipVisible = true"
        @close="onTooltipClose")
        w-icon(lg) wi-star

      w-tooltip(
        :model-value="showTooltip"
        show-on-click
        persistent
        right
        tooltip="Star"
        @open="tooltipVisible = true"
        @close="onTooltipClose")
        w-icon(lg) wi-star

    template(#pug).
      .text-center
        w-button.my2.mx6(
          @click="showTooltip = !showTooltip"
          dark
          width="6em")
          | {{ '\{\{ showTooltip ? \'Hide\' : \'Show\' \}\}' }} tooltip

        div.d-iblock.my2.mx6
          w-tooltip(v-model="showTooltip" show-on-click persistent left tooltip="Star")
            w-icon.ma2(lg) wi-star

          w-tooltip(v-model="showTooltip" show-on-click persistent top tooltip="Star")
            w-icon.ma2(lg) wi-star

          w-tooltip(v-model="showTooltip" show-on-click persistent tooltip="Star")
            w-icon.ma2(lg) wi-star

          w-tooltip(v-model="showTooltip" show-on-click persistent right tooltip="Star")
            w-icon.ma2(lg) wi-star
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-button
          @click="showTooltip = !showTooltip"
          class="my2 mx6"
          dark
          width="6em"&gt;
          {{ '\{\{ showTooltip ? \'Hide\' : \'Show\' \}\}' }} tooltip
        &lt;/w-button&gt;

        &lt;div class="d-iblock my2 mx6"&gt;
          &lt;w-tooltip
            v-model="showTooltip"
            show-on-click
            persistent
            left
            tooltip="Star"&gt;
            &lt;w-icon class="ma2" lg&gt;wi-star&lt;/w-icon&gt;
          &lt;/w-tooltip&gt;

          &lt;w-tooltip
            v-model="showTooltip"
            show-on-click
            persistent
            top
            tooltip="Star"&gt;
            &lt;w-icon class="ma2" lg&gt;wi-star&lt;/w-icon&gt;
          &lt;/w-tooltip&gt;

          &lt;w-tooltip
            v-model="showTooltip"
            show-on-click
            persistent
            tooltip="Star"&gt;
            &lt;w-icon class="ma2" lg&gt;wi-star&lt;/w-icon&gt;
          &lt;/w-tooltip&gt;

          &lt;w-tooltip
            v-model="showTooltip"
            show-on-click
            persistent
            right
            tooltip="Star"&gt;
            &lt;w-icon class="ma2" lg&gt;wi-star&lt;/w-icon&gt;
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
    w-tooltip(v-model="showTooltip2" show-on-click right tooltip="Star")
      w-icon(lg) wi-star
    div.mt4 The tooltip is {{ showTooltip2 ? 'visible' : 'hidden' }}.

    template(#pug).
      w-tooltip(v-model="showTooltip" show-on-click right tooltip="Star")
        w-icon(lg) wi-star
      div.mt4 The tooltip is {{ "\{\{ showTooltip ? 'visible' : 'hidden' \}\}" }}.

    template(#html).
      &lt;w-tooltip
        v-model="showTooltip"
        show-on-click
        right
        tooltip="Star"&gt;
        &lt;w-icon lg&gt;wi-star&lt;/w-icon&gt;
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
    w-tooltip(color="white" bg-color="blue" tooltip="Star")
      w-icon.ma2(xl color="blue") wi-star

    w-tooltip(color="white" bg-color="purple" tooltip="Star")
      w-icon.ma2(xl color="purple") wi-star

    w-tooltip(color="orange-dark1" bg-color="yellow-light3" tooltip="Star")
      w-icon.ma2(xl color="amber") wi-star

    w-tooltip(color="orange" tooltip="Star")
      w-icon.ma2(xl) wi-star
    template(#pug).
      .text-center
        w-tooltip(color="white" bg-color="blue" tooltip="Star")
          w-icon.ma2(xl color="blue") wi-star

        w-tooltip(color="white" bg-color="purple" tooltip="Star")
          w-icon.ma2(xl color="purple") wi-star

        w-tooltip(color="orange-dark1" bg-color="yellow-light3" tooltip="Star")
          w-icon.ma2(xl color="amber") wi-star

        w-tooltip(color="orange" tooltip="Star")
          w-icon.ma2(xl) wi-star
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip color="white" bg-color="blue" tooltip="Star"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="blue"&gt;
            wi-star
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="white" bg-color="purple" tooltip="Star"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="purple"&gt;
            wi-star
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip
          color="orange-dark1"
          bg-color="yellow-light3"
          tooltip="Star"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="amber"&gt;
            wi-star
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="orange" tooltip="Star"&gt;
          &lt;w-icon
            class="ma2"
            xl&gt;
            wi-star
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Tile, round and shadow
  example(content-class="text-center pb8")
    w-tooltip(color="red-light2" tile tooltip="Tile")
      w-icon.ma2(xl color="red-light2") mdi mdi-square
    w-tooltip(color="amber-dark1" round tooltip="Round")
      w-icon.ma2(xl color="amber") mdi mdi-circle
    w-tooltip(color="pink-light1" shadow tooltip="Shadow")
      w-icon.ma2(xl color="pink-light1") mdi mdi-heart
    template(#pug).
      .text-center.pb8
        w-tooltip(color="red-light2" tile tooltip="Tile")
          w-icon.ma2(xl color="red-light2") mdi mdi-square
        w-tooltip(color="amber-dark1" round tooltip="Round")
          w-icon.ma2(xl color="amber") mdi mdi-circle
        w-tooltip(color="pink-light1" shadow tooltip="Shadow")
          w-icon.ma2(xl color="pink-light1") mdi mdi-heart
    template(#html).
      &lt;div class="text-center pb8"&gt;
        &lt;w-tooltip color="red-light2" tile tooltip="Tile"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="red-light2"&gt;
            mdi mdi-square
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="amber-dark1" round tooltip="Round"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="amber"&gt;
            mdi mdi-circle
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="pink-light1" shadow tooltip="Shadow"&gt;
          &lt;w-icon
            class="ma2"
            xl
            color="pink-light1"&gt;
            mdi mdi-heart
          &lt;/w-icon&gt;
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Different contents
  example(content-class="text-center")
    w-tooltip(color="primary")
      span.ma3 Content with icon
      template(#tooltip)
        w-icon.mr1 wi-star
        | Star

    w-tooltip(color="primary")
      span.ma3 Very long content
      template(#tooltip)
        | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        br
        | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
        br
        br
        | Recusandae distinctio perferendis expedita pariatur fuga.
    template(#pug).
      .text-center
        w-tooltip(color="primary")
          span.ma3 Content with icon
          template(#tooltip)
            w-icon.mr1 wi-star
            | Star

        w-tooltip(color="primary")
          span.ma3 Very long content
          template(#tooltip)
            | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            br
            | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
            br
            br
            | Recusandae distinctio perferendis expedita pariatur fuga.
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-tooltip color="primary"&gt;
          &lt;span class="ma3"&gt;Content with icon&lt;/span&gt;
          &lt;template #tooltip&gt;
            &lt;w-icon class="mr1"&gt;wi-star&lt;/w-icon&gt;
            Star
          &lt;/template&gt;
        &lt;/w-tooltip&gt;

        &lt;w-tooltip color="primary"&gt;
          &lt;span class="ma3"&gt;Very long content&lt;/span&gt;
          &lt;template #tooltip&gt;
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            &lt;br /&gt;
            Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
            &lt;br /&gt;
            &lt;br /&gt;
            Recusandae distinctio perferendis expedita pariatur fuga.
          &lt;/template&gt;
        &lt;/w-tooltip&gt;
      &lt;/div&gt;

  title-link(h2) Different sizes and caption style
  example(content-class="text-center example-sizes wrap w-flex align-center justify-center")
    w-tooltip(xs show-on-click persistent :model-value="true" append-to=".example-sizes" tooltip="Extra small")
      span.ma6 xs
    w-tooltip(sm show-on-click persistent :model-value="true" append-to=".example-sizes" tooltip="Small")
      span.ma6 sm
    w-tooltip(md show-on-click persistent :model-value="true" append-to=".example-sizes" tooltip="Medium")
      span.ma6 md
    w-tooltip(lg show-on-click persistent :model-value="true" append-to=".example-sizes" tooltip="Large")
      span.ma7 lg
    w-tooltip(xl show-on-click persistent :model-value="true" append-to=".example-sizes" tooltip="Extra large")
      span.ma10 xl
    w-tooltip(caption show-on-click persistent :model-value="true" append-to=".example-sizes" tooltip="Caption style.")
      span.ma10 Caption
    template(#pug).
      w-tooltip(xs show-on-click persistent :model-value="true" tooltip="Extra small")
        span.ma6 xs

      w-tooltip(sm show-on-click persistent :model-value="true" tooltip="Small")
        span.ma6 sm

      w-tooltip(md show-on-click persistent :model-value="true" tooltip="Medium")
        span.ma6 md

      w-tooltip(lg show-on-click persistent :model-value="true" tooltip="Large")
        span.ma7 lg

      w-tooltip(xl show-on-click persistent :model-value="true" tooltip="Extra large")
        span.ma10 xl

      w-tooltip(caption show-on-click persistent :model-value="true" tooltip="Caption style.")
        span.ma10 Caption
    template(#html).
      &lt;w-tooltip xs show-on-click persistent :model-value="true" tooltip="Extra small"&gt;
        &lt;span class="ma3"&gt;xs&lt;/span&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip sm show-on-click persistent :model-value="true" tooltip="Small"&gt;
        &lt;span class="ma3"&gt;sm&lt;/span&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip md show-on-click persistent :model-value="true" tooltip="Medium"&gt;
        &lt;span class="ma3"&gt;md&lt;/span&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip lg show-on-click persistent :model-value="true" tooltip="Large"&gt;
        &lt;span class="ma3"&gt;lg&lt;/span&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip xl show-on-click persistent :model-value="true" tooltip="Extra large"&gt;
        &lt;span class="ma3"&gt;xl&lt;/span&gt;
      &lt;/w-tooltip&gt;

      &lt;w-tooltip caption show-on-click persistent :model-value="true" tooltip="Caption style."&gt;
        &lt;span class="ma3"&gt;Caption&lt;/span&gt;
      &lt;/w-tooltip&gt;

  title-link(h2) Transitions
  example(content-class="text-center")
    w-radios.my4(inline v-model="transition" :items="transitions")
    .text-center.py6
      w-tooltip(:transition="transition" left tooltip="Home")
        w-icon.ma2(color="primary" xl) mdi mdi-home
      w-tooltip(:transition="transition" tooltip="Home")
        w-icon.ma2(color="primary" xl) mdi mdi-home
      w-tooltip(:transition="transition" top tooltip="Home")
        w-icon.ma2(color="primary" xl) mdi mdi-home
      w-tooltip(:transition="transition" right tooltip="Home")
        w-icon.ma2(color="primary" xl) mdi mdi-home
    template(#pug).
      .text-center
        w-radios.my4(inline v-model="transition" :items="transitions")
        .text-center.py6
          w-tooltip(:transition="transition" left tooltip="Home")
            w-icon.ma2(color="primary" xl) mdi mdi-home
          w-tooltip(:transition="transition" tooltip="Home")
            w-icon.ma2(color="primary" xl) mdi mdi-home
          w-tooltip(:transition="transition" top tooltip="Home")
            w-icon.ma2(color="primary" xl) mdi mdi-home
          w-tooltip(:transition="transition" right tooltip="Home")
            w-icon.ma2(color="primary" xl) mdi mdi-home
    template(#html).
      &lt;div class="text-center"&gt;
        &lt;w-radios
          class="my4"
          inline
          v-model="transition"
          :items="transitions"&gt;
        &lt;/w-radios&gt;

        &lt;div class="text-center py6"&gt;
          &lt;w-tooltip :transition="transition" left tooltip="Home"&gt;
            &lt;w-icon
              class="ma2"
              color="primary"
              xl&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/w-tooltip&gt;

          &lt;w-tooltip :transition="transition" tooltip="Home"&gt;
            &lt;w-icon
              class="ma2"
              color="primary"
              xl&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/w-tooltip&gt;

          &lt;w-tooltip :transition="transition" top tooltip="Home"&gt;
            &lt;w-icon
              class="ma2"
              color="primary"
              xl&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
          &lt;/w-tooltip&gt;

          &lt;w-tooltip :transition="transition" right tooltip="Home"&gt;
            &lt;w-icon
              class="ma2"
              color="primary"
              xl&gt;
              mdi mdi-home
            &lt;/w-icon&gt;
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
        w-tooltip(append-to=".another-container")
          w-tag(lg color="pink-light1" bg-color="pink-light5")
            w-icon.mr1 mdi mdi-bomb
            | Hover me
          template(#tooltip)
            span This tooltip is appended to the #[span.green green] container!
    template(#pug).
      .wrapper.text-center.green-light5--bg.pa6
        w-card(bg-color="yellow-light5")
          w-tooltip(append-to=".wrapper")
            w-tag(lg color="pink-light1" bg-color="pink-light5")
              w-icon.mr1 mdi mdi-bomb
              | Hover me
            template(#tooltip)
              span This tooltip is appended to the green container!
    template(#html).
      &lt;div class="wrapper text-center green-light5--bg pa6"&gt;
        &lt;w-card bg-color="yellow-light5"&gt;
          &lt;w-tooltip append-to=".wrapper"&gt;
            &lt;w-tag
              lg
              color="pink-light1"
              bg-color="pink-light5"&gt;
              &lt;w-icon class="mr1"&gt;mdi mdi-bomb&lt;/w-icon&gt;
              Hover me
            &lt;/w-tag&gt;
            &lt;template #tooltip&gt;
              &lt;span&gt;This tooltip is appended to the green container!&lt;/span&gt;
            &lt;/template&gt;
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

      .w-card:before {top: -3em;left: -3em;}
      .w-card:after {bottom: -3em;right: -3em;}

      .w-tag {z-index: 1;}

  alert(warning).
    The DOM element that the tooltip is detached to must have a position (fixed, absolute or
    relative).

  title-link(h2) External activator
  p.
    External activators offer a great flexibility in the code and the advantage of accepting
    multiple activators for the same menu (even elements that are not yet in the DOM).#[br]
    The downside is that the event listeners for the activator(s) will be attached to the document
    and not the activator itself. For that reason, it is not the recommended option if you have
    the choice.
  title-link(h3 slug="external-activator--basic") Trigger a menu on hover (left-side) or on click (right-side) of an external activator
  .w-flex.wrap.align-start.gap6
    example.example14a.grow(content-class="text-center my4" app-classes-string="text-center")
      w-button.cat-button-1(icon="mdi mdi-cat" xl)
      w-tooltip(append-to=".example14a" activator=".cat-button-1" tooltip="Meow!")
      template(#pug).
        w-button.cat-button(icon="mdi mdi-cat" xl)

        w-tooltip(activator=".cat-button" tooltip="Meow!")
      template(#html).
        &lt;w-button
          icon="mdi mdi-cat"
          xl
          class="cat-button"&gt;
        &lt;/w-button&gt;

        &lt;w-tooltip activator=".cat-button" tooltip="Meow!"&gt;&lt;/w-tooltip&gt;

    example.example14b.grow(content-class="text-center my4" app-classes-string="text-center")
      w-button.cat-button-2(icon="mdi mdi-cat" xl)
      w-tooltip(append-to=".example14b" activator=".cat-button-2" show-on-click tooltip="Meow!")
      template(#pug).
        w-button.cat-button(icon="mdi mdi-cat" xl)

        w-tooltip(activator=".cat-button" show-on-click tooltip="Meow!")
      template(#html).
        &lt;w-button
          icon="mdi mdi-cat"
          xl
          class="cat-button"&gt;
        &lt;/w-button&gt;

        &lt;w-tooltip activator=".cat-button" show-on-click tooltip="Meow!"&gt;&lt;/w-tooltip&gt;

  title-link(h3 slug="external-activator--2-activators").
    Trigger the same menu on hover of 2 different external activators
  p.text-italic But do you really need that? ;)
  alert(tip).
    Note that like in this example, a tiny delay may help positioning the detachable correctly
    in case of multiple activators with different menu contents.

  example.example16(content-class="text-center my4" app-classes-string="d-block text-center")
    w-button.pet-button2.cat-button3.ma4(
      icon="mdi mdi-cat"
      xl
      @mouseenter="activator2 = '.cat-button3';tooltipContent = 'Meow!'"
      @mouseleave="activator2 = '.pet-button2'")
    w-button.pet-button2.dog-button3.ma4(
      icon="mdi mdi-dog"
      xl
      @mouseenter="activator2 = '.dog-button3';tooltipContent = 'Woof!'"
      @mouseleave="activator2 = '.pet-button2'")
    w-tooltip(append-to=".example16" :activator="activator2" :delay="100" :tooltip="tooltipContent")
    template(#pug).
      w-button.pet-button.cat-button.ma4(
        icon="mdi mdi-cat"
        xl
        @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
        @mouseleave="activator = '.pet-button'")
      w-button.pet-button.dog-button.ma4(
        icon="mdi mdi-dog"
        xl
        @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
        @mouseleave="activator = '.pet-button'")

      w-tooltip(:activator="activator" :delay="100" :tooltip="tooltipContent")
    template(#html).
      &lt;w-button
        icon="mdi mdi-cat"
        xl
        class="pet-button cat-button ma4"
        @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
        @mouseleave="activator = '.pet-button'"&gt;
      &lt;/w-button&gt;
      &lt;w-button
        icon="mdi mdi-dog"
        xl
        class="pet-button dog-button ma4"
        @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
        @mouseleave="activator = '.pet-button'"&gt;
      &lt;/w-button&gt;

      &lt;w-tooltip :activator="activator" :delay="100" :tooltip="tooltipContent"&gt;&lt;/w-tooltip&gt;
    template(#js).
      data: () => ({
        activator: '.pet-button',
        tooltipContent: ''
      })
</template>

<script>
export default {
  data: () => ({
    tooltipDisabled: false,
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
    ],
    activator1: '.pet-button',
    activator2: '.pet-button2',
    tooltipContent: ''
  }),

  methods: {
    onTooltipClose () {
      setTimeout(() => (this.showTooltip = false), 100)
    }
  }
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
      aspect-ratio: 1;
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
