<template lang="pug">
w-app.home
  .home__header
    .header__content
      h1
        w-icon.wave-logo wi-wave
        | Wave UI
      em A Vue.js UI framework with only the bright side.
      w-button.get-started(outline round route="/getting-started" color="white") Get started

    .version
      w-tooltip(z-index="20")
        template(#activator="{ on }")
          w-button.mr2(v-on="on" text lg icon="mdi mdi-github" route="https://github.com/antoniandre/wave-ui" target="_blank")
        .size--xs.text-nowrap View the project on Github
      em(v-html="`Version ${version}`")

    svg.wave(viewBox="0 0 1000 300" preserveAspectRatio="none")
      path(d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z")
      path(d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z")
      path(d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z")
    .bubbles
      .bubbles__plan.bubbles__plan--1
        .bubble.bubble--1
        .bubble.bubble--2
      .bubbles__plan.bubbles__plan--2
        .bubble.bubble--1
        .bubble.bubble--2
        .bubble.bubble--3
        .bubble.bubble--4

  section.section.section--1
    .section__content.w-flex.block
      div.mr8
        .block.block--1
          w-flex.title2
            w-icon.mr2 wi-check
            | Fully responsive and touch-ready

        .block.block--2
          w-flex.title2
            w-icon.mr2 wi-check
            | All the components that you need in a lightweight package
          .w-flex.align-center.mt6.ml8
            strong.count.mr8(:style="`opacity: ${count.alpha}`")
              | {{ count.count }}
              span.plus +
            .components-text UI components
          .w-flex.align-center.and-more.ml8
            .title3.grow.text-right.mr8.extra-anim &amp; also
            div
              .extra.extra-anim
                w-icon.mr3(xl) mdi mdi-palette
                | Colors
              .extra.extra-anim
                w-icon.mr3(xl) mdi mdi-auto-fix
                | Utilities
              .extra.extra-anim
                w-icon.mr3(xl) mdi mdi-shield-check
                | Form validation

      .mobiles.no-shrink
        img.mobile.mobile--1(src="@/assets/wave-ui-mobile-1.png")
        img.mobile.mobile--2(src="@/assets/wave-ui-mobile-2.png")

  section.section.section--2
    svg(viewBox="0 0 1000 100" preserveAspectRatio="none")
      path(d="M 0 90 C 51 90 375 102 1000 0 V 100 H 0Z")

    .section__content
      .block.block--3
        w-flex.title2
          w-icon.mr2 wi-check
          | Build great UIs with flexible &amp; powerful elements

        w-flex.mt8.ui-demo(basis-zero wrap justify-center :gap="8")
          .left-col.grow
            w-card.white--bg.card--1(content-class="w-flex column" title="Form Elements" title-class="py1 title4")
              w-checkbox.mt3(:value="true" color="pink") Checkbox
              w-radio.mt3(:value="true" color="red") Radio
              w-switch.mt3(:value="true" color="deep-orange") Switch
              w-slider.mt12.mb4.size--sm(
                :value="75"
                thumb-label-class="orange--bg white"
                thumb-label="droplet"
                color="amber")
            w-card.white--bg.card--2(title="Icons, badges, Alerts..." title-class="py1 title4")
              .w-flex.align-center.justify-space-around.mt1
                w-icon.success(xl) mdi mdi-check
                w-icon.error(xl) mdi mdi-close
                w-badge(bg-color="green" dot bottom sm overlap value="1")
                  w-icon.pr2.grey(xl) mdi mdi-account
                w-badge(bg-color="error" overlap value="1")
                  w-icon.grey(xl) mdi mdi-email
              w-alert.mt4.mb0.text-light(success round dismiss) All good!

            w-card.yellow-grad.card--3(content-class="pa0")
              w-accordion(:value="[true, false, false]" expand-single :items="accordionItems")

            w-card.white--bg.card--4(content-class="pa0" title="Form validation" title-class="py1 title4 mb0")
              .message-box
                w-transition-fade
                  w-alert.my0.text-light(v-if="form6.submitted" success no-border)
                    | The form is valid, ready to send it!
                  w-alert.my0.text-light(v-else-if="form6.valid === false" error no-border)
                    | The form has {{ form6.errorsCount }} errors.
              w-form.pa4.pt2.grey(
                v-model="form6.valid"
                :errors-count.sync="form6.errorsCount"
                @validate="onValidate"
                @success="onSuccess")
                w-input(required label="First name" :validators="[validators.required]")
                w-input.mt3(required label="Last name" :validators="[validators.required]")

                w-flex.mt4(wrap align-center justify-end)
                  w-checkbox.my4(required :validators="[validators.consent]") I agree to the terms
                  .spacer
                  div
                    w-button.mr2.white(
                      bg-color="orange-light1"
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

          .right-col.checklist
            .title4 See how easy it is to build a checklist.
            ssh-pre(language="html-vue").
              &lt;w-list
                v-model="selection"
                :items="items"
                checklist
                round-checkboxes
                color="blue-light1"&gt;
              &lt;/w-list&gt;
            ssh-pre(language="js").
              data: () => ({
                items: [
                  { label: 'Item 1' },
                  { label: 'Item 2' },
                  { label: 'Item 3' }
                ],
                selection: ['Item 2']
              })
            w-list.my2.grow(
              v-model="selectedItem"
              :items="demoListItems"
              checklist
              round-checkboxes
              color="blue-light1"
              style="min-width: 150px")

      .block.block--4
        w-flex.title2
          w-icon.mr2 wi-check
          | Stay in control of your CSS
        p.my4.
          Wave UI is developed with a particular care about CSS.#[br]
          Practically Wave UI gives you more flexibility and more control over the CSS.
        p.my4.
          If you use Sass, you can even control Wave UI's CSS rules priorities by overriding the CSS base scope like so.
        pre.example.ssh-pre.pa2
          span.pink $css-scope
          span.blue-grey.mr1 :
          span.red-light2 '.w-app'
          span.blue-grey ;

  section.section.section--3
    svg(viewBox="0 0 1440 100" preserveAspectRatio="none")
      path(d="M 0 0 H 1440 V 81 C 1250 61 552 0 0 67 Z")

    .section__content
      .w-flex.wrap.text-center.mb10
        .feature.xs6.sm3
          svg.blob(viewBox="6 0 194 194" preserveAspectRatio="none")
            path(fill="rgba(255, 255, 255, 0.15)" d="M 57 -32 C 70 -10 74 18 63 35 C 52 51 26 58 1 57 C -24 56 -48 49 -58 33 C -67 17 -62 -8 -50 -29 C -38 -51 -19 -69 1 -70 C 22 -70 44 -54 57 -32 Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 432.4 432.4")
            path(d="M217 93a111 111 0 00-74 195c18 18 16 55 16 56 0 2 0 3 2 5l4 2h102l5-2 2-5c0-1-2-38 16-56l1-1a111 111 0 00-74-194zm64 185l-2 1c-15 17-18 45-18 58h-89c0-13-3-42-20-59a97 97 0 11129 0z")
            path(d="M216 122c-3 0-7 3-7 6 0 4 4 7 7 7 41 0 73 33 73 73 0 4 3 7 7 7 3 0 7-3 7-7 0-48-39-86-87-86zM261 358h-89c-9 0-17 8-17 17s8 17 17 17h88a17 17 0 000-34zm0 20h-89c-2 0-3-1-3-3s1-3 3-3h88c2 0 3 1 3 3s-1 3-2 3zM247 399h-62c-9 0-17 7-17 17s8 16 17 16h62c10 0 17-7 17-16 0-10-7-17-17-17zm0 19h-62c-2 0-3-1-3-3s1-3 3-3h62c2 0 4 1 4 3s-2 3-4 3zM216 60c4 0 7-3 7-7V7c0-4-3-7-7-7-3 0-7 3-7 7v46c0 4 4 7 7 7zM329 34c-3-2-7-1-9 2l-25 38c-3 4-2 8 1 10l4 1c2 0 4-1 5-3l26-38c2-3 2-8-2-10zM135 84l4-2c3-2 4-6 2-9l-25-39c-2-3-7-4-10-2s-4 6-2 10l25 38c2 3 4 4 6 4zM87 126l-41-22c-3-2-7 0-9 3s-1 7 3 9l40 22 3 1c3 0 5-1 6-4 2-3 1-7-2-9zM396 107c-2-3-6-5-9-3l-41 22c-3 2-5 6-3 9 1 3 4 4 6 4l3-1 41-22c3-2 4-6 3-9z")
          p Modern design
        .feature.xs6.sm3
          svg.blob(viewBox="0 0 200 200" preserveAspectRatio="none")
            path(fill="#135182" d="M45.8,-34C59.2,-19.7,69.8,-0.7,67.7,18.2C65.6,37.1,50.7,55.8,31.3,65.4C11.8,74.9,-12.3,75.3,-30.4,65.6C-48.4,55.9,-60.4,36.2,-67,13.5C-73.6,-9.2,-74.9,-34.9,-62.8,-48.9C-50.7,-62.8,-25.4,-65,-4.6,-61.3C16.2,-57.6,32.4,-48.2,45.8,-34Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 512 512")
            path(d="M90 396c-7 0-14 2-20 5A236 236 0 01303 25a10 10 0 004-20A258 258 0 0075 75a254 254 0 00-20 340 42 42 0 005 53 42 42 0 0060 0 42 42 0 000-60c-8-8-19-12-30-12zm16 58a22 22 0 01-32 0 22 22 0 010-32 22 22 0 0132 0 22 22 0 010 32zm0 0M457 97a42 42 0 10-15 14 236 236 0 01-233 376 10 10 0 00-3 20 258 258 0 00231-70 254 254 0 0020-340zm-51-7a22 22 0 010-32 22 22 0 0132 0 22 22 0 01-32 32zm0 0")
            path(d="M215 428c0 6 4 10 10 10h62c6 0 10-4 10-10v-19c13-4 26-9 38-16l13 14a10 10 0 0015 0l44-44c4-4 4-11 0-15l-14-13c7-12 12-25 16-38h19c6 0 10-4 10-10v-62c0-6-4-10-10-10h-19c-4-13-9-26-16-38l14-13a10 10 0 000-15l-44-44c-4-4-11-4-15 0l-13 14c-12-7-25-12-38-16V84c0-6-4-10-10-10h-62c-6 0-10 4-10 10v19c-13 4-26 9-38 16l-13-14c-4-4-11-4-15 0l-44 44a10 10 0 000 15l14 13c-7 12-12 24-16 38H84c-6 0-10 4-10 10v62c0 3 1 5 3 7s4 3 7 3h19c4 13 9 26 16 38l-14 13c-4 4-4 11 0 15l44 44c2 2 5 3 7 3 3 0 6-1 8-3l13-14c12 7 25 12 38 16zm-34-56c-4-3-9-2-12 1l-13 13-30-31 13-12c3-3 3-8 1-12-9-14-16-30-19-46-1-5-5-8-10-8H94v-42h17c5 0 9-4 10-8 3-17 10-32 19-46 2-4 2-9-1-12l-13-13 31-30 12 12c3 4 8 4 12 2 14-9 30-16 46-19 4-1 8-5 8-10V94h42v17c0 5 4 9 8 10 16 3 32 10 46 19 4 2 9 2 12-2l12-12 31 30-13 13c-3 3-3 8-1 12 9 14 16 29 19 46 1 4 5 8 10 8h17v42h-17c-5 0-9 3-10 8-3 16-10 32-19 46-2 4-2 9 1 12l13 12-30 31-13-13c-3-3-8-4-12-1-14 9-30 15-46 19-4 1-8 5-8 10v17h-42v-17c0-5-4-9-8-10-16-4-32-10-46-19zm0 0")
            path(d="M339 256a83 83 0 10-166 0 83 83 0 00166 0zm-146 0a63 63 0 11126 0 63 63 0 01-126 0zm0 0M348 38a10 10 0 0010-10c0-3-1-5-3-7a10 10 0 00-14 0 10 10 0 000 14c2 2 4 3 7 3zm0 0M164 474a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm0 0")
          p Highly customizable
        .feature.xs6.sm3
          svg.blob(viewBox="0 0 200 200" preserveAspectRatio="none")
            path(fill="#3877a9" d="M54.1,-52.3C67.8,-40.3,75.2,-20.1,73.4,-1.8C71.6,16.5,60.6,33,46.8,48.6C33,64.2,16.5,78.8,0.6,78.2C-15.2,77.6,-30.5,61.6,-41.2,46.1C-51.8,30.5,-58,15.2,-60.2,-2.2C-62.4,-19.6,-60.6,-39.3,-50,-51.2C-39.3,-63.2,-19.6,-67.5,0.3,-67.8C20.1,-68,40.3,-64.2,54.1,-52.3Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 512 512")
            circle(cx="279.3" cy="349.1" r="11.6")
            circle(cx="81.5" cy="418.9" r="11.6")
            path(d="M477 47H81c-19 0-34 15-34 34v117c0 7 4 11 11 11s12-4 12-11V81c0-7 4-11 11-11h396c7 0 12 4 12 11v280c0 7-5 11-12 11H198c-7 0-12 5-12 12s5 12 12 12h23v35c0 7-5 11-12 11h-11c-7 0-12 5-12 12s5 11 12 11h163c7 0 11-4 11-11s-4-12-11-12h-12c-7 0-12-4-12-11v-35h140c20 0 35-15 35-35V81c0-19-15-34-35-34zM242 442l2-11v-35h70v35c0 4 1 8 3 11h-75z")
            path(d="M454 303H198c-7 0-12 4-12 11s5 12 12 12h256c7 0 11-5 11-12s-4-11-11-11zM128 233H35c-20 0-35 15-35 35v163c0 19 15 34 35 34h93c20 0 35-15 35-34V268c0-20-15-35-35-35zm12 198c0 7-5 11-12 11H35c-7 0-12-4-12-11V268c0-7 5-12 12-12h93c7 0 12 5 12 12v163z")
          p Fully responsive
        .feature.xs6.sm3
          svg.blob(viewBox="0 0 200 200" preserveAspectRatio="none")
            path(fill="#7db0da" d="M60.4,-48.9C73.3,-32.1,75.2,-7.3,67.4,10.9C59.7,29,42.3,40.3,23,50.8C3.7,61.3,-17.6,71,-32.9,64.9C-48.3,58.9,-57.7,37.1,-62.2,14.9C-66.8,-7.3,-66.3,-29.9,-55.1,-46.3C-43.9,-62.7,-22,-72.9,0.9,-73.6C23.8,-74.4,47.6,-65.7,60.4,-48.9Z" transform="translate(100 100)")
          svg.icon(viewBox="0 0 461.8 461.8")
            path(d="M362 219h-1c-8 1-16 4-23 9-4-15-18-26-34-26-8 0-16 3-22 8-3-17-18-30-35-31-8 0-15 3-21 7v-19a88 88 0 10-78 0v84l-19-24a38 38 0 00-53-8 38 38 0 00-5 53l71 139c22 43 57 49 72 50l37 1c39 0 72-2 72-2h1c58 0 74-62 75-96V258c0-20-16-38-37-39zM147 110v38a72 72 0 1178 0v-38a39 39 0 00-78 0zm175 334s-57 3-108 1c-11 0-40-5-58-41L85 264v-1c-8-9-8-23 2-31 9-7 23-5 30 5l32 44 3 2 1 1h5l1-1h1v-1l2-1v-1l1-1V110a23 23 0 1146 0v141a8 8 0 0016 0v-33a21 21 0 1141 0v58a8 8 0 0016 0v-35a21 21 0 1142 0v64a8 8 0 0016 0v-47a21 21 0 1141 0l1 106c0 4-2 80-60 80z")
          p Fully accessible

    .text-center.ready-to-dive
      .title1.mb2 Ready to dive in?
      w-button.ma1(lg outline round color="white" route="/why-wave-ui") Why Wave UI
      w-button.ma1(lg outline round color="white" route="/getting-started") Get started
</template>

<script>
import { gsap, TimelineMax, Power1, Power4, TweenMax } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// For Edge. https://github.com/greensock/GSAP/issues/412#issuecomment-679841254
window.requestAnimationFrame = window.requestAnimationFrame.bind(window)

gsap.registerPlugin(TimelineMax, TweenMax, Power4, Power1, ScrollTrigger)

let componentsCount = { curr: 0, total: 40 }

export default {
  data: () => ({
    count: { count: 0, alpha: 0 },
    demoListItems: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' }
    ],
    accordionItems: [
      {
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
      },
      {
        title: 'Item 2',
        content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
      },
      {
        title: 'Item 3',
        content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
      }
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
    },
    // Gsap callback function when the count is done. Keep a ref to that to cancel on destroy.
    onCountComplete: null
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
    setTimeout(this.initScrollAnimation, 200)
  },

  methods: {
    initScrollAnimation () {
      gsap.defaults({ ease: 'power4' })

      // Header.
      const header = document.querySelector('.home__header')
      gsap.utils.toArray('.bubbles__plan').forEach((plan, i) => {
        gsap.to(plan, {
          yPercent: i ? -25 : -10,
          ease: 'none',
          scrollTrigger: {
            trigger: header,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      })

      gsap.to('.header__content', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: header,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Every content block.
      gsap.set('.block', { y: 60, opacity: 0 })
      ScrollTrigger.batch('.block', {
        start: 'top bottom-=30px',
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: { each: 0.15 }, overwrite: true }),
        onLeave: batch => gsap.to(batch, { opacity: 0, y: 60, duration: 1, stagger: { each: 0.15 }, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: { each: 0.15 }, overwrite: true }),
        onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 60, duration: 1, stagger: { each: 0.15 }, overwrite: true })
      })

      // Components count.
      this.onCountComplete = () => {
        // When the home page is destroyed, this complete callback may still get called.
        if (!this.onCountComplete) return

        gsap.set('.extra-anim', { y: 35, opacity: 0 })
        ScrollTrigger.batch('.extra-anim', {
          start: 'top 88%',
          onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: { each: 0.25 }, overwrite: true }),
          onLeave: batch => gsap.to(batch, { opacity: 0, y: 35, duration: 0.6, stagger: { each: 0.25 }, overwrite: true }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: { each: 0.25 }, overwrite: true }),
          onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 35, duration: 0.6, stagger: { each: 0.25 }, overwrite: true })
        })
      }
      TweenMax.to(componentsCount, 3, {
        curr: componentsCount.total,
        ease: Power1.easeOut,
        onUpdate: () => {
          this.count.count = Math.round(componentsCount.curr)
          this.count.alpha = this.count.count / componentsCount.total
        },
        onComplete: this.onCountComplete
      })

      // Mobiles.
      gsap.to('.mobile--1', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.mobiles',
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true
        }
      })

      gsap.to('.mobile--2', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.mobiles',
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true
        }
      })

      // Cards.
      gsap.to('.card--2', {
        xPercent: 18,
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.left-col',
          start: 'top 80%',
          end: 'top 25%',
          scrub: true
        }
      })

      gsap.to('.card--3', {
        xPercent: -8,
        yPercent: 9,
        ease: 'none',
        scrollTrigger: {
          trigger: '.left-col',
          start: 'top 80%',
          end: 'top 25%',
          scrub: true
        }
      })

      gsap.to('.card--4', {
        xPercent: 3,
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.left-col',
          start: 'top 80%',
          end: 'top 25%',
          scrub: true
        }
      })

      // Features.
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
  },

  beforeDestroy () {
    this.onCountComplete = null
    ScrollTrigger.removeEventListener('refreshInit', () => gsap.set('.feature', { y: 0 }))
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    gsap.killTweensOf('*')
  }
}
</script>

<style lang="scss">
.home {
  height: auto;
  overflow: hidden;
}

.home__header {
  position: relative;
  height: 400px;
  background: linear-gradient(to right, #145181, #3777a9);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .version {
    position: absolute;
    top: 8px;
    right: 8px;

    a {color: inherit;}
  }

  .wave {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    fill: #fff;
    pointer-events: none;

    path:nth-child(1) {opacity: 0.1;}
    path:nth-child(2) {opacity: 0.15;}
  }

  .bubbles__plan {
    position: absolute;
    top: 0;
    bottom: -36%; // Taller than the container to create a parallax effect.
    left: 0;
    right: 0;
    z-index: 0;
    pointer-events: none;
  }

  .bubble {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10em;
    font-size: 50px;
  }
  // @for $j from 1 through 2 {
  //   @for $i from 1 through 5 {
  //     $size: random() + 0.2em;
  //     .bubbles__plan:nth-of-type(#{$j}) .bubble:nth-of-type(#{$i}) {
  //       position: absolute;
  //       width: $size;
  //       height: $size;
  //       left: random(100) * 1%;
  //       top: random(100) * 1%;
  //       // border-radius: floor(random() * 2) + em;
  //       filter: blur(floor(random() * 8) + px);
  //       opacity: (random() * 4 + 2) / 10; // Random between 0.2 & 0.6.
  //       // box-shadow: 0 0 random() + em #fff;
  //     }
  //   }
  // }

  .bubbles__plan--1 .bubble--1 {
    width: 0.833em;
    height: 0.833em;
    left: 90%;
    top: 44%;
    filter: blur(6px);
    opacity: 0.1;
  }
  .bubbles__plan--1 .bubble--2 {
    width: 1.11em;
    height: 1.11em;
    left: 95%;
    top: 28%;
    filter: blur(6px);
    opacity: 0.2;
  }

  .bubbles__plan--2 .bubble--1 {
    width: 0.95em;
    height: 0.95em;
    left: 83%;
    top: 41%;
    filter: blur(4px);
    opacity: 0.2;
  }
  .bubbles__plan--2 .bubble--2 {
    width: 0.81em;
    height: 0.81em;
    left: 91%;
    top: 53%;
    filter: blur(4px);
    opacity: 0.2;
  }
  .bubbles__plan--2 .bubble--3 {
    width: 0.34em;
    height: 0.34em;
    left: 90%;
    top: 62%;
    filter: blur(7px);
    opacity: 0.5;
  }
  .bubbles__plan--2 .bubble--4 {
    width: 0.76em;
    height: 0.76em;
    left: 4%;
    top: 66%;
    filter: blur(6px);
    opacity: 0.1;
  }
}

.home .header__content {
  text-align: center;

  .w-icon {font-size: 1.2em;margin-right: 16px;}
  h1 {
    font: 4.4em 'title font';
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: -2px;
    margin: -1.2em 0 0;
    color: inherit;
  }

  em {
    opacity: 0.7;
    font-size: 14px;
    display: block;
  }

  .get-started {
    margin-top: 1.5em;
    width: 8.5em;
    height: 26px;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
}

.home {
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
      padding: 12px;
      margin: auto;
      max-width: 1050px;
      z-index: 1;
      position: relative;
    }

    .title2 {margin-top: 3em;color: #3c75a5;}
  }

  // Section 1.
  // ------------------------------------------------------
  .section--1 {
    background-color: #fff;
    // margin-top: 5em;
    padding-bottom: 11em;

    p {font-size: 1.1em;}
    .w-card {background: #f8f8f8;}

    .w-notification--bottom {
      top: 100%;
      bottom: auto;
      padding-top: 8px;
    }

    .mobiles {
      margin: auto;
      z-index: 10;
      position: relative;
    }
    .mobile--1 {width: 240px;margin-right: -70px;}
    .mobile--2 {width: 270px;}

    // Appear transitions.
    .block {
      opacity: 0;
      max-width: 1050px;
      margin: auto;
    }
    .block--1 {margin-top: 14em;}
    .block--2 {margin-top: 0;}
    .block--2 .title2 {margin-top: 1.5em;}
    .block--2 .plus {font-size: 0.6em;vertical-align: text-top;}
    .block--2 .components-text {font-size: 2em;line-height: 1.5;}
    .block--2 .and-more {
      font-size: 1.5em;
      line-height: 1.5;
      .extra {margin-top: 0.4em;}
      .extra-anim {opacity: 0;}
      .extra:first-of-type {margin-top: 0;}
      .extra .w-icon {font-size: 2em;}
      // Safari needs the gradient to be on the pseudo-element.
      .extra .w-icon:before {
        background: linear-gradient(45deg, #12446b, #78a2c7 80%);
        background-clip: text;
        color: transparent;
      }
    }
    .block--2 strong {
      font-size: 8em;
      color: transparent;
      background: linear-gradient(45deg, #12446b, #78a2c7 80%);
      background-clip: text;
    }
  }

  // Section 2.
  // ------------------------------------------------------
  .section--2 {
    margin-top: 2em;
    padding-top: 6em;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 0%,rgba(255, 255, 255, 0) 100%);

    > svg {fill: rgba(0, 0, 0, 0.04);}
    .block--4 {margin-top: 7em;}

    .left-col {position: relative;max-width: 630px;}
    .card--1 {width: 175px;}
    .card--2 {
      width: 30%;
      position: absolute;
      top: 3%;
      left: 30%;
      min-width: 200px;
    }
    .card--3 {
      width: 50%;
      margin-top: -3%;
      margin-left: 7%;
      background-image: linear-gradient(-205deg, #ffe688, #ffac62);
    }
    .card--4 {
      position: absolute;
      top: 25%;
      width: 58%;
      right: 0;
      z-index: 2;
    }
    .checklist {min-width: 240px;}
  }

  // Section 3.
  // ------------------------------------------------------
  .section--3 {
    background: linear-gradient(to right, #145181, #3777a9);
    color: #fff;
    padding: 13em 0 26%;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: url('~@/assets/japanese-wave.png') repeat-x bottom left;
      background-size: cover;
      padding-bottom: 23%;
      min-height: 110px;
    }

    .section__content {overflow: hidden;}

    > svg {top: 0;fill: #fff;}

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
    background-color: #f2f2f2;
    border: none;
    overflow: hidden;

    .ssh-pre {background: none;border: none;}
  }

  .message-box {min-height: 35px;}
}

@keyframes rotate {
  100% {transform: rotate(360deg);}
}

@media screen and (max-width: 900px) {
  .home .mobiles {
    .mobile--1 {width: 200px;}
    .mobile--2 {width: 220px;}
  }
}

@media screen and (max-width: 760px) {
  .home .section--1 .block--1 {margin-top: 0;}
  .section--1 .section__content {flex-wrap: wrap;}
  .home .section--1 .mobiles {margin-top: 4em;}
  .section--2 .ui-demo div {flex-basis: auto;}
  .section--2 .ui-demo div .left-col {width: 100%;flex-basis: auto;}
  .section--2 .right-col {flex-grow: 1;}
}

@media screen and (max-width: 600px) {
  .home__header {
    height: 300px;

    .header__content {
      h1 {font-size: 3.2em;}
      em {
        font-size: 1em;
        margin-top: 4px;
        display: block;
      }
    }
  }

  .home__header .wave {height: 40%;}
  .home .section--1 .mobile--1 {width: 190px;}
  .home .section--1 .mobile--2 {width: 220px;}
  .home .section--3 {padding-top: 4em;padding-bottom: 40%;}
  .home .section--3 .feature {
    margin-top: 4em;
    padding-bottom: 50%;
  }
}

@media screen and (max-width: 430px) {
  .home__header .wave {height: 30%;}
  .home .section--1 .block--2 strong {font-size: 6em;}
  .home .section--1 .title2 {margin-top: 1em;}
  .home .section--1 .section__content > div:first-child {margin-right: 0;}
  .home .section--1 .mobile--1 {width: 185px;margin-right: -80px;}
  .home .section--1 .mobile--2 {width: 200px;}
  .home .section--1 .block--2 .components-text,
  .home .section--1 .block--2 .and-more {
    font-size: 1.4em;
    line-height: 1.1;
    margin-left: 0;
  }
  .home .section--1 .block--2 .and-more .title3 {margin-right: 16px;}
  .home .section--1 .block--2 .and-more .extra .w-icon {font-size: 1.6em;}
  .home .section--2 {padding-top: 0;}
  .section--2 .ui-demo div .left-col {display: none;}
}
</style>
