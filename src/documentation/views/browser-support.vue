<template lang="pug">
main
  title-link.mt4(h1) Browser support
  title-link(h2) All major browsers supported
  p Wave UI supports:
  w-list.ml-1(:items="listItems" icon="wi-check")

  title-link(h2) Dropping support for IE11
  a.title3(href="https://gs.statcounter.com/browser-market-share" target="_blank")
    span IE's current market share is less than 0.85% worldwide (gs.statcounter.com)
    w-icon.ml2(md) mdi mdi-open-in-new

  p.title5.
    Many popular websites have officially drop support for IE include Youtube, GitHub, Meetup, Slack, Zendesk,
    Trello, Atlassian, Discord, Spotify, Behance, Wix, Huddle, WhatsApp, Google Earth and Yahoo.
    Even some of Microsoft’s own product’s, like Teams, have severely reduced support for IE.

  .title4.mt8 The distance between Internet Explorer 11 (year 2015) and every other major browser is huge.
  p.
    Adding support for this technologically obsolete browser considerably increases the development time
    and #[strong adding IE11 hacks and workarounds penalizes all the other browser users (more than 99.15%)].

  p IE11 now only exists to support the sites that use it until they’re modernized.

  p
    strong The web has moved on.
</template>

<script>
export default {
  data: () => ({
    listItems: [
      { label: 'Chrome' },
      { label: 'Safari' },
      { label: 'Firefox' },
      { label: 'Edge' },
      { label: 'Opera' }
    ]
  })
}
</script>

<style lang="scss">
.main--browser-support {
  p {margin-top: 1.5em;}
}
</style>
