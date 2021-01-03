<template lang="pug">
main
  title-link.mt4(h1) Backers

  .text-center
    .mb12
      h2 A big THANK YOU to all the backers!
      p Thank you to all of you, you make this happen, you are part of this library!

    w-flex.align-center.wrap.justify-center.backers
      .backer.ma1(v-for="backer in backers" :key="backer.username")
        w-tooltip
          template(#activator="{ on }")
            a(:href="backer.url" target="_blank" v-on="on")
              img.avatar(:src="backer.avatar" alt="")
          | {{ backer.username }}
      w-tooltip
        template(#activator="{ on }")
          .backer.plus.ma1
            a.mx1(href="https://github.com/sponsors/antoniandre" target="_blank" v-on="on")
              w-icon.white(xl) wi-plus
        | Add yourself!

    p.mt12
      | If you would like to support Wave UI, you can
      a.mx1(href="https://github.com/sponsors/antoniandre" target="_blank") become a sponsor
      | or
      a.ml1(href="https://www.paypal.me/antoniandre1" target="_blank") make a donation
      | . Thank you! 🙏🙏

</template>

<script>
import axios from 'axios'

const githubBackers = ['crbast', 'consuman', 'helenetran', 'antoniandre']

export default {
  data: () => ({
    backers: []
  }),

  created () {
    githubBackers.forEach((backer, i) => {
      this.backers[i] = {
        username: backer,
        avatar: '',
        url: `https://github.com/${backer}`
      }
      axios.get(`https://api.github.com/users/${backer}`).then(response => {
        this.backers[i].avatar = response.data.avatar_url
      })
    })
  }
}
</script>

<style lang="scss">
.backers {
  .avatar, .plus {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.5em;
    height: 3.5em;
    border-radius: 3.5em;
    background-color: #ddd;
    overflow: hidden;
  }
}
</style>
