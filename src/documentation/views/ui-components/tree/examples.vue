<template lang="pug">
div
  title-link(h2) Default
  example
    w-tree(:data="tree1")
    template(#pug).
      w-tree(:data="tree")
    template(#html).
      &lt;w-tree:data="tree"&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'src',
            children: [
              {
                label: 'assets',
                children: [
                  { label: 'wave.svg' },
                ]
              },
              { label: 'views' },
              { label: 'index.vue' },
              { label: 'router.vue' },
              { label: 'main.js' },
              {
                label: 'scss',
                children: [
                  { label: 'index.scss' },
                  { label: '_variables.scss' },
                  { label: '_base.scss' }
                ]
              },
              { label: 'store.js' },
            ]
          },
          { label: '.editorconfig' },
          { label: '.gitignore' },
          { label: 'index.html' },
          { label: 'jsconfig.json' },
          { label: 'LICENSE' },
          { label: 'package.json' },
          { label: 'pnpm-lock.yaml' },
          { label: 'postcss.config.js' },
          { label: 'README.md' },
          { label: 'vite.config.js' }
        ]
      })

  title-link(h2) No transition
  example
    w-tree(:data="tree1" no-transition)
    template(#pug).
      w-tree(:data="tree" no-transition)
    template(#html).
      &lt;w-tree:data="tree" no-transition&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'src',
            children: [
              {
                label: 'assets',
                children: [
                  { label: 'wave.svg' },
                ]
              },
              { label: 'views' },
              { label: 'index.vue' },
              { label: 'router.vue' },
              { label: 'main.js' },
              {
                label: 'scss',
                children: [
                  { label: 'index.scss' },
                  { label: '_variables.scss' },
                  { label: '_base.scss' }
                ]
              },
              { label: 'store.js' },
            ]
          },
          { label: '.editorconfig' },
          { label: '.gitignore' },
          { label: 'index.html' },
          { label: 'jsconfig.json' },
          { label: 'LICENSE' },
          { label: 'package.json' },
          { label: 'pnpm-lock.yaml' },
          { label: 'postcss.config.js' },
          { label: 'README.md' },
          { label: 'vite.config.js' }
        ]
      })

  title-link(h2) Events
  example
    w-flex(gap="12")
      w-tree(
        :data="tree1"
        @before-open="log($event)"
        @before-close="log($event)")
      w-card(bg-color="amber-light5")
        pre {{ logs }}
    template(#pug).
      w-tree(
        :data="tree"
        @before-open="log($event)"
        @before-close="log($event)")
    template(#html).
      &lt;w-tree
      :data="tree"
        @before-open="log($event)"
        @before-close="log($event)"&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'src',
            children: [
              {
                label: 'assets',
                children: [
                  { label: 'wave.svg' },
                ]
              },
              { label: 'views' },
              { label: 'index.vue' },
              { label: 'router.vue' },
              { label: 'main.js' },
              {
                label: 'scss',
                children: [
                  { label: 'index.scss' },
                  { label: '_variables.scss' },
                  { label: '_base.scss' }
                ]
              },
              { label: 'store.js' },
            ]
          },
          { label: '.editorconfig' },
          { label: '.gitignore' },
          { label: 'index.html' },
          { label: 'jsconfig.json' },
          { label: 'LICENSE' },
          { label: 'package.json' },
          { label: 'pnpm-lock.yaml' },
          { label: 'postcss.config.js' },
          { label: 'README.md' },
          { label: 'vite.config.js' }
        ]
      }),

      methods: {
        log: (...args) => console.log(...args)
      }

</template>

<script>
export default {
  data: () => ({
    tree1: [
      {
        label: 'src',
        children: [
          {
            label: 'assets',
            children: [
              { label: 'wave.svg' },
            ]
          },
          { label: 'views' },
          { label: 'index.vue' },
          { label: 'router.vue' },
          { label: 'main.js' },
          {
            label: 'scss',
            children: [
              { label: 'index.scss' },
              { label: '_variables.scss' },
              { label: '_base.scss' }
            ]
          },
          { label: 'store.js' },
        ]
      },
      { label: '.editorconfig' },
      { label: '.gitignore' },
      { label: 'index.html' },
      { label: 'jsconfig.json' },
      { label: 'LICENSE' },
      { label: 'package.json' },
      { label: 'pnpm-lock.yaml' },
      { label: 'postcss.config.js' },
      { label: 'README.md' },
      { label: 'vite.config.js' }
    ],
    logs: []
  }),

  methods: {
    log (...args) {
      console.log(...args)
      this.logs = args
    }
  }
}
</script>

<style lang="scss">
.w-tree__item--branch > .w-tree__item-label {
  font-weight: bold;
}
</style>
