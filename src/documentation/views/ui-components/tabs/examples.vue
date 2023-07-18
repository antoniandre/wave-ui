<template lang="pug">
div
  title-link(h2) Basic
  example
    w-tabs(:items="tabs1")
    template(#pug).
      w-tabs(:items="tabs")
    template(#html).
      &lt;w-tabs :items="tabs"&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Align center and right
  example
    w-tabs(:items="tabs4.items" center)
    w-tabs.mt4(:items="tabs4.items" right)
    template(#pug).
      w-tabs(:items="tabs" center)
      br
      w-tabs(:items="tabs" right)
    template(#html).
      &lt;w-tabs :items="tabs" center&gt;&lt;/w-tabs&gt;
      &lt;br /&gt;
      &lt;w-tabs :items="tabs" right&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Fill bar &amp; disabled items
  example
    w-switch.mb3(v-model="tabs2.fillBar") Fill bar
    w-tabs(:items="tabs2.items" :fill-bar="tabs2.fillBar")
    template(#pug).
      w-switch.mb3(v-model="fillBar") Fill bar
      w-tabs(:items="tabs" :fill-bar="fillBar")
    template(#html).
      &lt;w-switch v-model="fillBar" class="mb3"&gt;
        Fill bar
      &lt;/w-switch&gt;

      &lt;w-tabs :items="tabs" :fill-bar="fillBar"&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ],
        fillBar: true
      })

  title-link(h2) V-model
  alert(warning).
    #[strong Since version 1.21.0], the v-model/value only accepts a numeric tab index (previously an array of boolean).
  p It is possible to open a particular tab programmatically via #[code v-model] or #[code model-value].
  example
    w-tabs.mb2(v-model="tabs2.active" :items="tabs2.items")
    strong
      | v-model:
      code.ml2 {{ tabs2.active }}
    template(#pug).
      w-tabs(v-model="activeTab" :items="tabs")
      strong
        | v-model:
        code.ml2 {{ '\{\{ activeTab \}\}' }}
    template(#html).
      &lt;w-tabs v-model="activeTab" :items="tabs"&gt;&lt;/w-tabs&gt;

      &lt;strong&gt;
        v-model:
        &lt;code class="ml2"&gt;
          {{ '\{\{ activeTab \}\}' }}
        &lt;/code&gt;
      &lt;/strong&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ],
        activeTab: 2
      })

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background. You can also set a #[code slider-color] and an #[code active-class].

  .title3 Color &amp; bg-color
  example
    w-tabs(:items="tabs2.items" color="blue" :bg-color="$store.state.darkMode ? 'indigo-dark6' : 'indigo-light5'")
    template(#pug).
      w-tabs(:items="tabs" color="blue" bg-color="{{ $store.state.darkMode ? 'indigo-dark6' : 'indigo-light5' }}")
    template(#html).
      &lt;w-tabs
        :items="tabs"
        color="blue"
        bg-color="{{ $store.state.darkMode ? 'indigo-dark6' : 'indigo-light5' }}"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  .title3.mt4 Slider color
  example
    w-tabs(:items="tabs2.items" slider-color="blue-light2")
    template(#pug).
      w-tabs(:items="tabs" slider-color="blue-light2")
    template(#html).
      &lt;w-tabs
        :items="tabs"
        slider-color="blue-light2"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  .title3 Active class
  example
    w-tabs(
      :items="tabs2.items"
      color="blue"
      active-class="pink"
      slider-color="pink")
    template(#pug).
      w-tabs(
        :items="tabs"
        color="blue"
        active-class="pink"
        slider-color="pink")
    template(#html).
      &lt;w-tabs
        :items="tabs"
        color="blue"
        active-class="pink"
        slider-color="pink"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  title-link(h2) Pill slider
  example
    w-tabs(:items="tabs2.items" pill-slider)
    template(#pug).
      w-tabs(:items="tabs" pill-slider)
    template(#html).
      &lt;w-tabs :items="tabs" pill-slider&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })
  title-link(h3) Example of a different style, involving some external CSS
  example(reactive)
    w-tabs.macos-tabs(:items="tabs2.items" pill-slider)
    template(#pug).
      w-tabs(:items="tabs" pill-slider)
    template(#html).
      &lt;w-tabs :items="tabs" pill-slider&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })
    template(#css).
      .w-app .w-tabs {border: none;}
      .w-app .w-tabs__bar {
        display: inline-flex;
        margin-bottom: 12px;
        padding: 0;
        background: {{ $store.state.darkMode ? '#181818' : '#eee' }};
        border-radius: 6px;
        border: 1px solid {{ $store.state.darkMode ? '#222' : '#ddd' }};
        z-index: 0;
        overflow: visible;
      }
      .w-app .w-tabs__slider {
        opacity: 1;
        background-color: {{ $store.state.darkMode ? '#2c2c2c' : '#fff' }};
        bottom: 0;
        height: 100%;
        border-radius: 6px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
      }
      .w-app .w-tabs__bar-item {
        padding: 2px 10px;
        font-size: 1.1rem;
      }
      .w-app .w-tabs__bar-item  > * {z-index: 1;}

      .w-app .w-tabs__bar-item:before {
        content: '';
        position: absolute;
        top: 25%;
        bottom: 25%;
        right: 100%;
        transform: translateX(-50%);
        border-left: 1px solid {{ $store.state.darkMode ? '#262626' : '#d2d2d2' }};
        display: block;
        opacity: 1;
      }
      .w-app .w-tabs__bar-item:first-child:before {display: none;}

  title-link(h2) No slider
  example
    w-switch.mb3(v-model="tabs2.slider") Slider
    w-tabs(:items="tabs2.items" :no-slider="!tabs2.slider" active-class="pink")
    template(#pug).
      w-switch.mb3(v-model="tabsSlider") Slider
      w-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")
    template(#html).
      &lt;w-switch class="mb3" v-model="tabsSlider"&gt;
        Slider
      &lt;/w-switch&gt;

      &lt;w-tabs
        :items="tabs"
        :no-slider="!tabsSlider"
        active-class="pink"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabsSlider: false,
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' },
          { title: 'Tab 4', content: 'Tab 4 content.' },
          { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
        ]
      })

  title-link(h2) Content transitions
  p Change tab to see the transition.
  example
    w-radios.mb3(:items="transitions" v-model="tabs4.transition")
    w-tabs(:items="tabs4.items" :transition="tabs4.transition")
    template(#pug).
      w-radios.mb3(:items="transitions" v-model="transition")
      w-tabs(:items="tabs" :transition="transition")
    template(#html).
      &lt;w-radios
        class="mb3"
        :items="transitions"
        v-model="transition"&gt;
      &lt;/w-radios&gt;

      &lt;w-tabs
        :items="tabs"
        :transition="transition"&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ],
        transition: 'fade',
        transitions: [
          { label: 'default', value: '' },
          { label: 'fade' },
          { label: 'slide-fade-up' },
          { label: 'slide-fade-down' },
          { label: 'slide-fade-left' },
          { label: 'slide-fade-right' },
          { label: 'scale-fade' },
          { label: 'none', value: false }
        ]
      })

  title-link(h2) Add / remove tabs
  p.
    The tabs will naturally try to fit in the available space. But if they can't fit because there are
    too many, a scrollbar will allow navigation to all the tabs.
  example
    w-flex.mb3(align-center)
      | Number of tabs:
      w-button.mx2(icon="wi-minus" sm @click="tabs3.tabsCount -= tabs3.tabsCount < 1 ? 0 : 1")
      code {{ tabs3.tabsCount }}
      w-button.mx2(icon="wi-plus" sm @click="tabs3.tabsCount++")
    w-tabs(:items="tabs3.tabsCount")
      template(#item-title="{ index }") Tab {{ index }}
      template(#item-content="{ index }") Content {{ index }}
    template(#pug).
      w-flex.mb3(align-center)
        | Number of tabs:
        w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount &lt; 1 ? 0 : 1")
        code {{ '\{\{ tabsCount \}\}' }}
        w-button.mx2(icon="wi-plus" sm @click="tabsCount++")
      w-tabs(:items="tabsCount")
        template(#item-title="{ index }") Tab {{ '\{\{ index \}\}' }}
        template(#item-content="{ index }") Content {{ '\{\{ index \}\}' }}
    template(#html).
      &lt;w-flex class="mb3" align-center&gt;
        Number of tabs:
        &lt;w-button
          class="mx2"
          icon="wi-minus"
          sm
          @click="tabsCount -= tabsCount &lt; 1 ? 0 : 1"&gt;
        &lt;/w-button&gt;

        &lt;code&gt;{{ '\{\{ tabsCount \}\}' }}&lt;/code&gt;

        &lt;w-button
          class="mx2"
          icon="wi-plus"
          sm
          @click="tabsCount++"&gt;
        &lt;/w-button&gt;
      &lt;/w-flex&gt;

      &lt;w-tabs :items="tabsCount"&gt;
        &lt;template #item-title="{ index }"&gt;
          Tab {{ '\{\{ index \}\}' }}
        &lt;/template&gt;

        &lt;template #item-content="{ index }"&gt;
          Content {{ '\{\{ index \}\}' }}
        &lt;/template&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabsCount: 3
      })

  title-link(h2) Card style tabs
  example
    w-tabs(:items="tabs1" card)
    template(#pug).
      w-tabs(:items="tabs" card)
    template(#html).
      &lt;w-tabs :items="tabs" card&gt;&lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Close button
  alert(tip).
    When using a close button, don't forget to stop the click propagation #[code @click.stop] to prevent
    the navigation to the tab that you are deleting!
  example
    w-tabs(:items="tabs6.items" card)
      template(#item-title="{ item, index }")
        | {{ item.title }}
        w-button.ml1.mr-1(
          @click.stop="tabs6.items.splice(index - 1, 1)"
          icon="wi-cross"
          outline
          xs)
    w-button.mt4(
      bg-color="primary"
      @click="tabs6.items = tabs6.originals.slice(0)"
      :disabled="tabs6.items.length === 3") Reset tabs

    template(#pug).
      w-tabs(:items="tabs" card)
        template(#item-title="{ item, index }")
          | {{ '\{\{ item.title \}\}' }}
          w-button.ml1.mr-1(
            @click.stop="tabs.splice(index - 1, 1)"
            icon="wi-cross"
            outline
            xs)
    template(#html).
      &lt;w-tabs :items="tabs" card&gt;
        &lt;template #item-title="{ item, index }"&gt;
          {{ '\{\{ item.title \}\}' }}
          &lt;w-button
            class="ml1 mr-1"
            @click.stop="tabs.splice(index - 1, 1)"
            icon="wi-cross"
            outline
            xs&gt;
          &lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Customizing the tabs title &amp; contents
  example
    w-tabs(:items="tabs5" card)
      template(#item-title="{ item }")
        w-icon.mr1.green mdi mdi-star
        span.green {{ item.title }}
      template(#item-title.3="{ item }")
        w-icon.pink mdi mdi-heart
        span.pink.mx1 {{ item.title }}
        w-icon.pink mdi mdi-heart
      template(#item-content.1="{ item }")
        .title3 This is a custom tab content.
        div(v-html="item.content")
    template(#pug).
      w-tabs(:items="tabs" card)
        template(#item-title="{ item }")
          w-icon.mr1.green mdi mdi-star
          span.green {{ '\{\{ item.title \}\}' }}
        template(#item-title.3="{ item }")
          w-icon.pink mdi mdi-heart
          span.pink.mx1 {{ '\{\{ item.title \}\}' }}
          w-icon.pink mdi mdi-heart
        template(#item-content.1="{ item }")
          .title3 This is a custom tab content.
          div(v-html="item.content")
    template(#html).
      &lt;w-tabs :items="tabs" card&gt;
        &lt;template #item-title="{ item }"&gt;
          &lt;w-icon class="mr1 green"&gt;
            mdi mdi-star
          &lt;/w-icon&gt;

          &lt;span class="green"&gt;
            {{ '\{\{ item.title \}\}' }}
          &lt;/span&gt;
        &lt;/template&gt;

        &lt;template #item-title.3="{ item }"&gt;
          &lt;w-icon class="pink"&gt;
            mdi mdi-heart
          &lt;/w-icon&gt;

          &lt;span class="pink mx1"&gt;
            {{ '\{\{ item.title \}\}' }}
          &lt;/span&gt;

          &lt;w-icon class="pink"&gt;
            mdi mdi-heart
          &lt;/w-icon&gt;
        &lt;/template&gt;

        &lt;template #item-content.1="{ item }"&gt;
          &lt;div class="title3"&gt;
            This is a custom tab content.
          &lt;/div&gt;

          &lt;div v-html="item.content"&gt;&lt;/div&gt;
        &lt;/template&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1', content: 'Tab 1 content.' },
          { title: 'Tab 2', content: 'Tab 2 content.' },
          { title: 'Tab 3', content: 'Tab 3 content.' }
        ]
      })

  title-link(h2) Adding a tabs bar extra element
  p.
    You can add extra elements at the right of the tabs title bar via the #[code tabs-bar-extra] slot.#[br]
    Once the tabs are updated (in the next Vue tick), you can open the newly added tab.
  example
    w-tabs(:items="tabs7.tabsCount" v-model="tabs7.currentTab")
      template(#item-title="{ index }") Item title {{ index }}
      template(#item-content="{ index }") Item content {{ index }}
      template(#tabs-bar-extra)
        w-button.bdrsr.mr2(
          icon="wi-plus"
          @click="tabs7.tabsCount++;$nextTick(() => tabs7.currentTab = tabs7.tabsCount - 1)")
    template(#pug).
      w-tabs(:items="tabs.tabsCount" v-model="tabs.currentTab")
        template(#item-title="{ index }") Item title {{ '\{\{ index \}\}' }}
        template(#item-content="{ index }") Item content {{ '\{\{ index \}\}' }}
        template(#tabs-bar-extra)
          w-button.bdrsr.mr2(
            icon="wi-plus"
            @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)")
    template(#html).
      &lt;w-tabs
        :items="tabs.tabsCount"
        v-model="tabs.currentTab"&gt;
        &lt;template #item-title="{ index }"&gt;
          Item title {{ '\{\{ index \}\}' }}
        &lt;/template&gt;

        &lt;template #item-content="{ index }"&gt;
          Item content {{ '\{\{ index \}\}' }}
        &lt;/template&gt;

        &lt;template #tabs-bar-extra&gt;
          &lt;w-button
            icon="wi-plus"
            @click="tabs.tabsCount++;$nextTick(() => tabs.currentTab = tabs.tabsCount - 1)"
            class="bdrsr mr2"&gt;
          &lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: {
          tabsCount: 3,
          currentTab: 1
        }
      })

  title-link(h2) Refreshing the slider width or position
  p.
    By default there is no data watcher on the tabs title to recalculate the slider width or position.#[br]
    But you may need to update the slider width for various reasons.
    Thanks to the #[code updateSlider] method, this is quite straightforward.#[br]
    In this scenario, the slider width is updated on title change from the #[strong.code w-input] field,
    so the slider width adapts to the number of characters on the current tab's title.
  example
    w-tabs(ref="tabs" :items="tabs8")
      template(#item-content="{ item }")
        w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")
    template(#pug).
      w-tabs(ref="tabs" :items="tabs")
        template(#item-content="{ item }")
          w-input.my6(v-model="item.title" label="Tab title" @keyup="onTitleChange")
    template(#html).
      &lt;w-tabs ref="tabs" :items="tabs"&gt;
        &lt;template #item-content="{ item }"&gt;
          &lt;w-input
            v-model="item.title"
            class="my6"
            label="Tab title"
            @keyup="onTitleChange"&gt;
          &lt;/w-input&gt;
        &lt;/template&gt;
      &lt;/w-tabs&gt;
    template(#js).
      data: () => ({
        tabs: [
          { title: 'Tab 1' },
          { title: 'Tab 2' },
          { title: 'Tab 3' }
        ]
      }),

      methods: {
        onTitleChange () {
          this.$refs.tabs.updateSlider()
        }
      }
</template>

<script>
export default {
  data: () => ({
    tabs1: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
    ],
    tabs2: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' },
        { title: 'Tab 4', content: 'Tab 4 content.' },
        { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
      ],
      active: 2,
      fillBar: true,
      slider: false
    },
    tabs3: {
      tabsCount: 3
    },
    tabs4: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ],
      transition: 'fade'
    },
    tabs5: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3', content: 'Tab 3 content.' }
    ],
    tabs6: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ],
      originals: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ]
    },
    tabs7: {
      tabsCount: 3,
      currentTab: 1
    },
    tabs8: [
      { title: 'Tab 1' },
      { title: 'Tab 2' },
      { title: 'Tab 3' }
    ],
    transitions: [
      { label: 'default', value: '' },
      { label: 'fade' },
      { label: 'slide-fade-up' },
      { label: 'slide-fade-down' },
      { label: 'slide-fade-left' },
      { label: 'slide-fade-right' },
      { label: 'scale-fade' },
      { label: 'none', value: false }
    ]
  }),

  methods: {
    onTitleChange () {
      this.$nextTick(this.$refs.tabs.updateSlider)
    }
  }
}
</script>

<style lang="scss">
.main-content--tabs {
  overflow: hidden;
  margin-left: -20px;
  padding-left: 20px;

  .macos-tabs {
    border: none;

    .w-tabs__bar {
      display: inline-flex;
      margin-bottom: 12px;
      padding: 0;
      background: #eee;
      border-radius: 6px;
      border: 1px solid #ddd;
      z-index: 0;
      overflow: visible;
    }
    .w-tabs__slider {
      opacity: 1;
      background-color: $base-bg-color;
      bottom: 0;
      height: 100%;
      border-radius: 6px;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    }
    .w-tabs__bar-item {
      padding: 2px 10px;
      font-size: 1.1rem;

      > * {z-index: 1;}

      &:before {
        content: '';
        position: absolute;
        top: 25%;
        bottom: 25%;
        right: 100%;
        transform: translateX(-50%);
        border-left: 1px solid #d2d2d2;
        display: block;
        opacity: 1;
      }
      &:first-child:before {display: none;}
    }

    [data-theme="dark"] & {
      .w-tabs__bar {
        border-color: #181818;
        background-color: #222;
      }
      .w-tabs__slider {background-color: #2c2c2c;}
      .w-tabs__bar-item:before {border-left-color: #262626;}
    }
  }
}
</style>
