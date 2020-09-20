<template lang="pug">
w-app.home.fill-height.w-flex.column
  .home__header
    .content--top-right.w-flex.align-center.justify-end.pa3
      w-tooltip(z-index="20")
        template(#activator="{ on }")
          a.mr2(v-on="on" href="https://github.com/antoniandre/wave-ui" target="_blank")
            w-icon(lg) mdi mdi-github
        .size--xs.text-nowrap View the project on Github
      .text-italic.grey(v-html="`Version ${version}`")

    .content--top
      div.w-flex.align-center
        w-icon.wave-logo.mr3.blue-dark3(size="5.5em") wi-wave
        h1.blue-dark3.my0 Wave UI
      p.grey-light1
        | A Vue.js UI framework with only the bright side.
        w-icon.ml1(size="1.5em" style="color: #ffc518") mdi mdi-white-balance-sunny

    svg.bg--top(viewBox="0 0 1440 320")
      path(fill="rgb(250 235 215 / 43%)" d="M0,192L60,208C120,224,240,256,360,272C480,288,600,288,720,272C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")
      path(fill="rgb(158 186 255 / 12%)" d="M0,128L60,133.3C120,139,240,149,360,133.3C480,117,600,75,720,53.3C840,32,960,32,1080,74.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")


    .content--middle.text-center
      w-button.ma1(xl shadow to="/why-wave-ui") Why Wave UI
      w-button.ma1(xl shadow to="/getting-started") Get started

  .home__content.w-flex.column
    .content--bottom.fill-height.px2
      w-list.mb2(:items="listItems" icon="wi-check")
      .w-flex.example.pa1.basis-zero.align-center
        .grow
          ssh-pre(language="html-vue" dark).
            &lt;w-list
              v-model="selection"
              :items="listItems"
              checklist
              round-checkboxes
              color="blue-light1"&gt;
            &lt;/w-list&gt;
          ssh-pre(language="js" dark).
            data: () => ({
              listItems: [
                { label: 'Item 1' },
                { label: 'Item 2' },
                { label: 'Item 3' }
              ],
              selection: ['Item 2']
            })
        w-list.ml2.grow(
          v-model="selectedItem"
          :items="demoListItems"
          checklist
          round-checkboxes
          color="blue-light1")

      w-list.mt8.mb2(:items="1" icon="wi-check")
        template(#item)
          | All the components that you need in a lightweight package.
      w-alert.white--bg(info) This is an info alert.
      ssh-pre(language="html-vue" dark).
        &lt;w-alert info&gt;This is an info alert.&lt;/w-access&gt;

      .w-flex
        p Modern design
        p Highly customizable
        p Fully responvive
        p Fully accessible
    //- svg(viewBox="0 0 1440 320")
      path(d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,96C840,75,960,117,1080,144C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z")
</template>

<script>

export default {
  data: () => ({
    listItems: [
      { label: 'Build great UIs in no time with powerful elements.' },
      { label: 'Keep control of the CSS. Very easy to override!' },
    ],
    demoListItems: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' }
    ],
    selectedItem: 'Item 2'
  }),

  computed: {
    version () {
      return process.env.VUE_APP_VERSION.replace(
        /-(\w)(\w+)\.(\d+)/,
        (m0, m1, m2, m3) => ` <strong>${m1.toUpperCase()}${m2} ${m3}</strong>`
      )
    }
  }
}
</script>

<style lang="scss">
.home {
  &__header {
    position: relative;
    height: 31vw;
    flex-shrink: 0;
    min-height: 320px;

    svg {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  &__content {
    position: relative;
    // background-image: linear-gradient(#2d406e, #b7b5a5);
    // background-image: linear-gradient(#2d406e, #7585ae);
    // background-image: linear-gradient(#1077c3c7 65%, #1d2e58 95%);
    background-image: linear-gradient(#f1eff0 65%, #ffffff 95%);
    flex-grow: 1;

    svg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      fill: #2d406e;
    }

    &:after {
      content: '';
      display: block;
      padding-bottom: 25%;
      min-height: 150px;
      // background: url('~@/assets/japanese-wave.png') left bottom repeat-x;
      background-size: auto 100%;
    }
  }

  .content--top {
    margin-left: 5vw;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 4.3em;
    font-weight: 100;
  }

  .content--middle {margin-top: 8vw;}
  .content--bottom {
    color: #fff;
    margin: 19vw auto 0;
    width: 100%;
    max-width: 600px;

    p, ul {font-size: 1.1em;}
  }
  .w-list__item-bullet {color: inherit;}

  .example {
    background-color: #262626;
    border: none;
  }
}

// Background.
.home__bg {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: -1;

  .bg--top {margin-top: 10vh;}

  .bg--bottom {
    background-image: linear-gradient(#2d406e, #b7b5a5);
    flex-grow: 1;
  }
}

@media screen and (min-width: 1500px) {
.home__bg .bg--bottom:after {
    padding-bottom: 20%;
    background-size: 1280px;
  }
}
</style>
