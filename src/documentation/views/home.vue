<template lang="pug">
w-app.home
  .home__header.text-center
    .title
      h1
        w-icon.wave-logo wi-wave
        | Wave UI
      em A Vue.js UI framework with only the bright side.
    .buttons
      w-button(outline sm round to="/why-wave-ui" color="white")
        w-icon.ml-1 wi-chevron-right
        | Why Wave UI
      w-button.ml2(outline sm round to="/getting-started" color="white")
        w-icon.ml-1 wi-chevron-right
        | Get started

    .version
      w-tooltip(z-index="20")
        template(#activator="{ on }")
          w-button.mr2(v-on="on" text lg icon="mdi mdi-github" to="https://github.com/antoniandre/wave-ui" target="_blank")
        .size--xs.text-nowrap View the project on Github
      em(v-html="`Version ${version}`")

    svg(viewBox="0 0 1440 90" preserveAspectRatio="none")
      path(d="M 0 90 C 662 97 1200 75 1440 0 V 100 H 0 Z")
      path(d="M 0 90 C 662 97 1200 75 1440 45 V 100 H 0 Z")
    svg(viewBox="0 0 1440 90" preserveAspectRatio="none")
      path(d="M 1440 10 C 778 3 240 25 0 55 V 0 H 1440 Z")
    svg(viewBox="0 0 1440 90" preserveAspectRatio="none")
      path(d="M 0 32 C 240 53 480 75 720 80 C 960 85 1200 75 1440 60 V 100 H 0 Z")

  section.section.section--1

    .section__content
      .block.block--1
        w-flex.title2
          w-icon.mr2 wi-check
          | All the components that you need in a lightweight package.
        p.my4.
          More than 30 UI &amp; form elements are available as well as a form validation.#[br]
          This form uses 9 different components and a form validation.
        w-card.white--bg(content-class="pa0")
          .message-box
            w-transition-fade
              w-alert.my0.text-light(v-if="form6.submitted" success no-border)
                | The form is valid, ready to send it!
              w-alert.my0.text-light(v-else-if="form6.valid === false" error no-border)
                | The form has {{ form6.errorsCount }} errors.
          w-form.px8.pt2.pb10.grey(
            v-model="form6.valid"
            :errors-count.sync="form6.errorsCount"
            @validate="onValidate"
            @success="onSuccess")
            w-input(required label="First name" :validators="[validators.required]")
            w-input.mt3(required label="Last name" :validators="[validators.required]")

            w-flex.mt4(wrap align-center justify-end)
              w-checkbox(required :validators="[validators.consent]") I agree to the terms &amp; conditions
              .spacer
              div
                w-button.mr2(
                  bg-color="warning"
                  type="reset"
                  @click="form6.submitted = form6.sent = false") Reset
                w-button(
                  type="submit"
                  :disabled="form6.valid === false"
                  :loading="form6.submitted && !form6.sent") Validate
          w-notification(
            v-model="form6.sent"
            success
            transition="bounce"
            absolute
            plain
            round
            bottom) The form was sent successfully!

      .block.block--2
        w-flex.title2
          w-icon.mr2 wi-check
          | Build great UIs with flexible &amp; powerful elements.
        p.my4 See for yourself with this checklist component for instance.
        .w-flex.example.pa1.basis-zero.align-center
          .grow(style="min-width: 200px")
            ssh-pre(language="html-vue" dark).
              &lt;w-list
                v-model="selection"
                :items="items"
                checklist
                round-checkboxes
                color="blue-light1"&gt;
              &lt;/w-list&gt;
            ssh-pre(language="js" dark).
              data: () => ({
                items: [
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
            color="blue-light1"
            style="min-width: 150px")

      .block.block--3
        w-flex.title2
          w-icon.mr2 wi-check
          | Keep full control on the CSS.
        p.my4.
          Wave UI is developed with a particular care about CSS.#[br]
          Practically Wave UI gives you more flexibility and more control over the CSS.
        p.my4.
          If you use SASS, you can even control Wave UI's CSS rules priorities by overriding the CSS base scope like so.
        pre.example.ssh-pre.pa2(dark)
          span.pink $css-scope
          span.blue-grey.mr1 :
          span.red-light2 '.w-app'
          span.blue-grey ;

  section.section.section--2
    svg(viewBox="0 0 1440 100" preserveAspectRatio="none")
      path(d="M 0 0 H 1440 V 81 C 1250 61 552 0 0 67 Z")

    .section__content
      .w-flex.basis-zero.text-center.mb10
        .feature.grow
          svg.blob(viewBox="6 0 194 194" preserveAspectRatio="none")
            path(fill="rgb(255, 255, 255, 0.15)" d="M 57 -32 C 70 -10 74 18 63 35 C 52 51 26 58 1 57 C -24 56 -48 49 -58 33 C -67 17 -62 -8 -50 -29 C -38 -51 -19 -69 1 -70 C 22 -70 44 -54 57 -32 Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 432.4 432.4")
            path(d="M217 93a111 111 0 00-74 195c18 18 16 55 16 56 0 2 0 3 2 5l4 2h102l5-2 2-5c0-1-2-38 16-56l1-1a111 111 0 00-74-194zm64 185l-2 1c-15 17-18 45-18 58h-89c0-13-3-42-20-59a97 97 0 11129 0z")
            path(d="M216 122c-3 0-7 3-7 6 0 4 4 7 7 7 41 0 73 33 73 73 0 4 3 7 7 7 3 0 7-3 7-7 0-48-39-86-87-86zM261 358h-89c-9 0-17 8-17 17s8 17 17 17h88a17 17 0 000-34zm0 20h-89c-2 0-3-1-3-3s1-3 3-3h88c2 0 3 1 3 3s-1 3-2 3zM247 399h-62c-9 0-17 7-17 17s8 16 17 16h62c10 0 17-7 17-16 0-10-7-17-17-17zm0 19h-62c-2 0-3-1-3-3s1-3 3-3h62c2 0 4 1 4 3s-2 3-4 3zM216 60c4 0 7-3 7-7V7c0-4-3-7-7-7-3 0-7 3-7 7v46c0 4 4 7 7 7zM329 34c-3-2-7-1-9 2l-25 38c-3 4-2 8 1 10l4 1c2 0 4-1 5-3l26-38c2-3 2-8-2-10zM135 84l4-2c3-2 4-6 2-9l-25-39c-2-3-7-4-10-2s-4 6-2 10l25 38c2 3 4 4 6 4zM87 126l-41-22c-3-2-7 0-9 3s-1 7 3 9l40 22 3 1c3 0 5-1 6-4 2-3 1-7-2-9zM396 107c-2-3-6-5-9-3l-41 22c-3 2-5 6-3 9 1 3 4 4 6 4l3-1 41-22c3-2 4-6 3-9z")
          p Modern design
        .feature.grow
          svg.blob(viewBox="0 0 200 200" preserveAspectRatio="none")
            path(fill="#135182" d="M45.8,-34C59.2,-19.7,69.8,-0.7,67.7,18.2C65.6,37.1,50.7,55.8,31.3,65.4C11.8,74.9,-12.3,75.3,-30.4,65.6C-48.4,55.9,-60.4,36.2,-67,13.5C-73.6,-9.2,-74.9,-34.9,-62.8,-48.9C-50.7,-62.8,-25.4,-65,-4.6,-61.3C16.2,-57.6,32.4,-48.2,45.8,-34Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 512 512")
            path(d="M90 396c-7 0-14 2-20 5A236 236 0 01303 25a10 10 0 004-20A258 258 0 0075 75a254 254 0 00-20 340 42 42 0 005 53 42 42 0 0060 0 42 42 0 000-60c-8-8-19-12-30-12zm16 58a22 22 0 01-32 0 22 22 0 010-32 22 22 0 0132 0 22 22 0 010 32zm0 0M457 97a42 42 0 10-15 14 236 236 0 01-233 376 10 10 0 00-3 20 258 258 0 00231-70 254 254 0 0020-340zm-51-7a22 22 0 010-32 22 22 0 0132 0 22 22 0 01-32 32zm0 0")
            path(d="M215 428c0 6 4 10 10 10h62c6 0 10-4 10-10v-19c13-4 26-9 38-16l13 14a10 10 0 0015 0l44-44c4-4 4-11 0-15l-14-13c7-12 12-25 16-38h19c6 0 10-4 10-10v-62c0-6-4-10-10-10h-19c-4-13-9-26-16-38l14-13a10 10 0 000-15l-44-44c-4-4-11-4-15 0l-13 14c-12-7-25-12-38-16V84c0-6-4-10-10-10h-62c-6 0-10 4-10 10v19c-13 4-26 9-38 16l-13-14c-4-4-11-4-15 0l-44 44a10 10 0 000 15l14 13c-7 12-12 24-16 38H84c-6 0-10 4-10 10v62c0 3 1 5 3 7s4 3 7 3h19c4 13 9 26 16 38l-14 13c-4 4-4 11 0 15l44 44c2 2 5 3 7 3 3 0 6-1 8-3l13-14c12 7 25 12 38 16zm-34-56c-4-3-9-2-12 1l-13 13-30-31 13-12c3-3 3-8 1-12-9-14-16-30-19-46-1-5-5-8-10-8H94v-42h17c5 0 9-4 10-8 3-17 10-32 19-46 2-4 2-9-1-12l-13-13 31-30 12 12c3 4 8 4 12 2 14-9 30-16 46-19 4-1 8-5 8-10V94h42v17c0 5 4 9 8 10 16 3 32 10 46 19 4 2 9 2 12-2l12-12 31 30-13 13c-3 3-3 8-1 12 9 14 16 29 19 46 1 4 5 8 10 8h17v42h-17c-5 0-9 3-10 8-3 16-10 32-19 46-2 4-2 9 1 12l13 12-30 31-13-13c-3-3-8-4-12-1-14 9-30 15-46 19-4 1-8 5-8 10v17h-42v-17c0-5-4-9-8-10-16-4-32-10-46-19zm0 0")
            path(d="M339 256a83 83 0 10-166 0 83 83 0 00166 0zm-146 0a63 63 0 11126 0 63 63 0 01-126 0zm0 0M348 38a10 10 0 0010-10c0-3-1-5-3-7a10 10 0 00-14 0 10 10 0 000 14c2 2 4 3 7 3zm0 0M164 474a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm0 0")
          p Highly customizable
        .feature.grow
          svg.blob(viewBox="0 0 200 200" preserveAspectRatio="none")
            path(fill="#3877a9" d="M54.1,-52.3C67.8,-40.3,75.2,-20.1,73.4,-1.8C71.6,16.5,60.6,33,46.8,48.6C33,64.2,16.5,78.8,0.6,78.2C-15.2,77.6,-30.5,61.6,-41.2,46.1C-51.8,30.5,-58,15.2,-60.2,-2.2C-62.4,-19.6,-60.6,-39.3,-50,-51.2C-39.3,-63.2,-19.6,-67.5,0.3,-67.8C20.1,-68,40.3,-64.2,54.1,-52.3Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 512 512")
            circle(cx="279.3" cy="349.1" r="11.6")
            circle(cx="81.5" cy="418.9" r="11.6")
            path(d="M477 47H81c-19 0-34 15-34 34v117c0 7 4 11 11 11s12-4 12-11V81c0-7 4-11 11-11h396c7 0 12 4 12 11v280c0 7-5 11-12 11H198c-7 0-12 5-12 12s5 12 12 12h23v35c0 7-5 11-12 11h-11c-7 0-12 5-12 12s5 11 12 11h163c7 0 11-4 11-11s-4-12-11-12h-12c-7 0-12-4-12-11v-35h140c20 0 35-15 35-35V81c0-19-15-34-35-34zM242 442l2-11v-35h70v35c0 4 1 8 3 11h-75z")
            path(d="M454 303H198c-7 0-12 4-12 11s5 12 12 12h256c7 0 11-5 11-12s-4-11-11-11zM128 233H35c-20 0-35 15-35 35v163c0 19 15 34 35 34h93c20 0 35-15 35-34V268c0-20-15-35-35-35zm12 198c0 7-5 11-12 11H35c-7 0-12-4-12-11V268c0-7 5-12 12-12h93c7 0 12 5 12 12v163z")
          p Fully responsive
        .feature.grow
          svg.blob(viewBox="0 0 200 200" preserveAspectRatio="none")
            path(fill="#7db0da" d="M60.4,-48.9C73.3,-32.1,75.2,-7.3,67.4,10.9C59.7,29,42.3,40.3,23,50.8C3.7,61.3,-17.6,71,-32.9,64.9C-48.3,58.9,-57.7,37.1,-62.2,14.9C-66.8,-7.3,-66.3,-29.9,-55.1,-46.3C-43.9,-62.7,-22,-72.9,0.9,-73.6C23.8,-74.4,47.6,-65.7,60.4,-48.9Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 461.8 461.8")
            path(d="M362 219h-1c-8 1-16 4-23 9-4-15-18-26-34-26-8 0-16 3-22 8-3-17-18-30-35-31-8 0-15 3-21 7v-19a88 88 0 10-78 0v84l-19-24a38 38 0 00-53-8 38 38 0 00-5 53l71 139c22 43 57 49 72 50l37 1c39 0 72-2 72-2h1c58 0 74-62 75-96V258c0-20-16-38-37-39zM147 110v38a72 72 0 1178 0v-38a39 39 0 00-78 0zm175 334s-57 3-108 1c-11 0-40-5-58-41L85 264v-1c-8-9-8-23 2-31 9-7 23-5 30 5l32 44 3 2 1 1h5l1-1h1v-1l2-1v-1l1-1V110a23 23 0 1146 0v141a8 8 0 0016 0v-33a21 21 0 1141 0v58a8 8 0 0016 0v-35a21 21 0 1142 0v64a8 8 0 0016 0v-47a21 21 0 1141 0l1 106c0 4-2 80-60 80z")
          p Fully accessible

    .text-center.ready-to-dive
      .title1.mb2 Ready to dive in?
      w-button.ma1(lg outline round color="white" to="/why-wave-ui") Why Wave UI
      w-button.ma1(lg outline round color="white" to="/getting-started") Get started

    .footer.w-flex.justify-end.align-center.no-grow.wrap
      small.text-upper Copyright © {{ new Date().getFullYear() }} Antoni Andre, all rights reserved.
      .spacer
      .text-italic
        | Made with
        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ml1(v-on="on" sm) mdi mdi-vuejs
          | Vue.js
        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ml1(v-on="on" sm) mdi mdi-language-css3
          | CSS 3
        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ml1(v-on="on" sm) mdi mdi-language-html5
          span.text-nowrap Html 5 &amp; Pug
        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ml1(v-on="on" sm) mdi mdi-sass
          | Sass
        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ml1.heart(v-on="on" sm) mdi mdi-heart
          | Love
</template>

<script>
import { gsap, TimelineMax, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(TimelineMax, Power4, ScrollTrigger)

export default {
  data: () => ({
    demoListItems: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' }
    ],
    selectedItem: 'Item 2',
    form6: {
      valid: null,
      submitted: false,
      sent: false,
      errorsCount: 0
    },
    validators: {
      required: value => !!value || 'This field is required',
      alphabetical: value => /^[a-z \-']+$/i.test(value) || 'This field only accepts letters.',
      consent: value => !!value || 'You must agree'
    }
  }),

  computed: {
    version () {
      return process.env.VUE_APP_VERSION.replace(
        /-(\w)(\w+)\.(\d+)/,
        (m0, m1, m2, m3) => ` <strong>${m1.toUpperCase()}${m2} ${m3}</strong>`
      )
    }
  },

  mounted () {
    setTimeout(this.initScrollAnimation, 500)
  },

  methods: {
    initScrollAnimation () {
      gsap.defaults({ ease: 'power4' })

      gsap.set('.block', { y: 30, opacity: 0 })
      ScrollTrigger.batch('.block', {
        start: 'top 88%',
        // markers: true,
        onEnter: batch => gsap.to(batch, { opacity: 1, y: -30, duration: 1, stagger: { each: 0.15 }, overwrite: true }),
        onLeave: batch => gsap.to(batch, { opacity: 0, y: 30, duration: 1, stagger: { each: 0.15 }, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, y: -30, duration: 1, stagger: { each: 0.15 }, overwrite: true }),
        onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 30, duration: 1, stagger: { each: 0.15 }, overwrite: true })
      })

      gsap.set('.feature', { y: 60 })
      ScrollTrigger.batch('.feature', {
        start: 'top 88%',
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15 }, overwrite: true }),
        onLeave: batch => gsap.set(batch, { opacity: 0, y: -60, stagger: { each: 0.15 }, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, y: -60, stagger: { each: 0.15 }, overwrite: true }),
        onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 60, stagger: { each: 0.15 }, overwrite: true })
      })

      ScrollTrigger.addEventListener('refreshInit', () => gsap.set('.feature', { y: 0 }))
    },
    onSuccess () {
      setTimeout(() => (this.form6.sent = true), 2000)
    },
    onValidate () {
      this.form6.sent = false
      this.form6.submitted = this.form6.errorsCount === 0
    }
  }
}
</script>

<style lang="scss">
.home {
  background: url('~@/assets/wave-pattern.svg') left fixed;
  background-size: 300px;
  height: auto;

  &__header {
    position: relative;
    height: 300px;
    background: linear-gradient(to right, #145181, #3777a9);
    color: #fff;

    .title {
      margin-top: 5em;

      .w-icon {font-size: 1.2em;margin-right: 16px;}
      h1 {
        font: 3.8em 'title font';
        color: rgba(0, 0, 0, 0.5);
        letter-spacing: -2px;
        margin: 0;
        color: inherit;
      }

      em {opacity: 0.7;font-size: 14px;}
    }

    .version {
      position: absolute;
      top: 8px;
      right: 8px;

      a {color: inherit;}
    }

    .buttons .w-button {
      margin-top: 1.5em;
      width: 9em;
      height: 24px;
      z-index: 1;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    svg {
      position: absolute;
      left: -10px;
      right: -10px;
      fill: #3b588d;
    }
    svg:nth-of-type(1) {
      bottom: 0;
      fill: #fff;
      path {opacity: 0.1;}
    }
    svg:nth-of-type(2) {
      z-index: 1;
      opacity: 0;
      top: 100%;
      transform: rotate(-181.5deg);
    }
    svg:nth-of-type(3) {
      z-index: 1;
      opacity: 0.3;
      top: 100%;
      transform: rotate(-180deg);
    }
  }

  .section {
    position: relative;
    padding: 3em 0;

    > svg {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      display: block;
      bottom: 100%;
      z-index: 0;
    }

    &__content {
      padding: 8px;
      margin: auto;
      max-width: 700px;
      z-index: 1;
    }

    .title2 {margin-top: 5em;color: #2a5198;}
  }

  // Section 1.
  // ------------------------------------------------------
  .section--1 {
    background-color: #fff;

    svg {fill: #1a6fb4;}

    p, ul {font-size: 1.1em;}
    .w-list__item-bullet {color: inherit;}
  }

  // Appear transition.
  .section--1 .block {opacity: 0;}

  // Section 2.
  // ------------------------------------------------------
  .section--2 {
    background: linear-gradient(to right, #145181, #3777a9);
    color: #fff;
    padding: 13em 0 9em;

    .section__content {overflow: hidden;}

    > svg {top: 0;}
    > svg path {fill: #fff;}

    .w-button {
      font-family: "title font";
      height: 2.3em;
      width: 10.5em;
      margin-top: 0.5em;
      padding-top: 4px;
      font-size: 1.1em;
      font-weight: 600;
    }

    .feature {
      position: relative;
      height: 0;
      padding-bottom: 25%;
      opacity: 0;

      // .blob {animation: jelly 1s linear both;}

      p {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: 0;
        font-weight: 100;
        font-size: 1.2em;
      }
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 35%;
      transform: translate(-50%, -50%);
      fill: #fff;
    }

    .ready-to-dive {margin-top: 6em;}

    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 12px;
      opacity: 0.7;
    }
  }

  .example {
    background-color: #262626;
    border: none;
    overflow: hidden;
  }

  .message-box {min-height: 35px;}
}

@keyframes jelly {
  0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.4% { -webkit-transform: matrix3d(1.316, 0, 0, 0, 0, 1.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.316, 0, 0, 0, 0, 1.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.7% { -webkit-transform: matrix3d(1.45, 0, 0, 0, 0, 1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.45, 0, 0, 0, 0, 1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.81% { -webkit-transform: matrix3d(1.659, 0, 0, 0, 0, 1.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.659, 0, 0, 0, 0, 1.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  9.41% { -webkit-transform: matrix3d(1.883, 0, 0, 0, 0, 2.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.883, 0, 0, 0, 0, 2.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  10.21% { -webkit-transform: matrix3d(1.942, 0, 0, 0, 0, 2.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.942, 0, 0, 0, 0, 2.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.61% { -webkit-transform: matrix3d(2.123, 0, 0, 0, 0, 2.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.123, 0, 0, 0, 0, 2.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  14.11% { -webkit-transform: matrix3d(2.141, 0, 0, 0, 0, 2.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.141, 0, 0, 0, 0, 2.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  17.52% { -webkit-transform: matrix3d(2.208, 0, 0, 0, 0, 2.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.208, 0, 0, 0, 0, 2.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.72% { -webkit-transform: matrix3d(2.212, 0, 0, 0, 0, 2.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.212, 0, 0, 0, 0, 2.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  21.32% { -webkit-transform: matrix3d(2.196, 0, 0, 0, 0, 2.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.196, 0, 0, 0, 0, 2.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  24.32% { -webkit-transform: matrix3d(2.151, 0, 0, 0, 0, 1.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.151, 0, 0, 0, 0, 1.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  25.23% { -webkit-transform: matrix3d(2.134, 0, 0, 0, 0, 1.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.134, 0, 0, 0, 0, 1.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.03% { -webkit-transform: matrix3d(2.063, 0, 0, 0, 0, 1.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.063, 0, 0, 0, 0, 1.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.93% { -webkit-transform: matrix3d(2.048, 0, 0, 0, 0, 1.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.048, 0, 0, 0, 0, 1.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  35.54% { -webkit-transform: matrix3d(1.979, 0, 0, 0, 0, 1.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.979, 0, 0, 0, 0, 1.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.74% { -webkit-transform: matrix3d(1.972, 0, 0, 0, 0, 1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.972, 0, 0, 0, 0, 1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.04% { -webkit-transform: matrix3d(1.961, 0, 0, 0, 0, 2.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.961, 0, 0, 0, 0, 2.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  44.44% { -webkit-transform: matrix3d(1.966, 0, 0, 0, 0, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.966, 0, 0, 0, 0, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  52.15% { -webkit-transform: matrix3d(1.991, 0, 0, 0, 0, 2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.991, 0, 0, 0, 0, 2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  59.86% { -webkit-transform: matrix3d(2.006, 0, 0, 0, 0, 1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.006, 0, 0, 0, 0, 1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.26% { -webkit-transform: matrix3d(2.007, 0, 0, 0, 0, 1.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.007, 0, 0, 0, 0, 1.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  75.28% { -webkit-transform: matrix3d(2.001, 0, 0, 0, 0, 2.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.001, 0, 0, 0, 0, 2.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  85.49% { -webkit-transform: matrix3d(1.999, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.999, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  90.69% { -webkit-transform: matrix3d(1.999, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.999, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { -webkit-transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
}

@media screen and (max-width: 1280px) {
  .home__header {height: 250px;}
}

@media screen and (max-width: 600px) {
  .home__header .title {
    h1 {font-size: 2.8em;}
    em {font-size: 1em;}
  }
}
</style>
