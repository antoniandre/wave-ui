<template lang="pug">
div
  title-link(h2) Default
  example
    w-tree(:data="tree2")
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
              { label: 'views', branch: true },
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

  title-link(h2) Icons
  p You can provide different icons for the expand button and tree items.
  p You can also provide icons for each item. Depending on the type of item:
  ul
    li #[code expand-icon]: for the expand icon.
    li #[code expand-open-icon]: for the expand icon when open (if different than the #[code expand-icon]).
    li #[code branch-icon]: if the item has children.
    li #[code branch-open-icon]: if the item has children and it is open.
    li #[code leaf-icon]: for items which don't contain anything.
  example
    w-tree(
      :data="tree2"
      expand-icon="mdi mdi-plus"
      expand-open-icon="mdi mdi-minus"
      branch-icon="mdi mdi-folder-outline"
      branch-open-icon="mdi mdi-folder-open-outline"
      leaf-icon="mdi mdi-file-outline")
    template(#pug).
      w-tree(
        :data="tree"
        branch-icon="mdi mdi-folder-outline"
        branch-open-icon="mdi mdi-folder-open-outline"
        leaf-icon="mdi mdi-file-outline")
    template(#html).
      &lt;w-tree
      :data="tree"
      branch-icon="mdi mdi-folder-outline"
      branch-open-icon="mdi mdi-folder-open-outline"
      leaf-icon="mdi mdi-file-outline"&gt;&lt;/w-tree&gt;
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
              { label: 'views', branch: true },
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

  title-link(h2) Selectable
  example
    w-tree(:data="tree1" selectable)
    template(#pug).
      w-tree(:data="tree" selectable)
    template(#html).
      &lt;w-tree:data="tree" selectable&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        data: () => ({
        tree: [
          {
            label: 'Branch 1',
            children: [
              { label: 'Leaf 1' },
              { label: 'Leaf 2' },
              { label: 'Leaf 3' }
            ]
          },
          { label: 'Branch 2', branch: true },
          { label: 'Leaf 1' },
          { label: 'Leaf 2' }
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
        data: () => ({
        tree: [
          {
            label: 'Branch 1',
            children: [
              { label: 'Leaf 1' },
              { label: 'Leaf 2' },
              { label: 'Leaf 3' }
            ]
          },
          { label: 'Branch 2', branch: true },
          { label: 'Leaf 1' },
          { label: 'Leaf 2' }
        ]
      })

  title-link(h2) Counts
  example
    w-tree(:data="tree1" counts)
    template(#pug).
      w-tree(:data="tree" counts)
    template(#html).
      &lt;w-tree:data="tree" counts&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'Branch 1',
            children: [
              { label: 'Leaf 1' },
              { label: 'Leaf 2' },
              { label: 'Leaf 3' }
            ]
          },
          { label: 'Branch 2', branch: true },
          { label: 'Leaf 1' },
          { label: 'Leaf 2' }
        ]
      })

  title-link(h2) Unexpandable empty branches
  example
    w-flex
      w-tree(:data="tree1" unexpandable-empty)
    template(#pug).
      w-tree(:data="tree" unexpandable-empty)
    template(#html).
      &lt;w-tree:data="tree" unexpandable-empty&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'Branch 1',
            children: [
              { label: 'Leaf 1' },
              { label: 'Leaf 2' },
              { label: 'Leaf 3' }
            ]
          },
          { label: 'Branch 2', branch: true },
          { label: 'Leaf 1' },
          { label: 'Leaf 2' }
        ]
      })

  title-link(h2) Events
  example
    w-flex(gap="12")
      w-tree(
        :data="tree2"
        @before-open="log('@before-open', $event)"
        @open="log('@open', $event)"
        @before-close="log('@before-close', $event)"
        @close="log('@close', $event)"
        @click="log('@click', $event)")
      w-card(bg-color="amber-light6" title="Event log" title-class="amber-light5--bg")
        pre(v-html="logs")
    template(#pug).
      w-tree(
        :data="tree"
        @before-open="log('@before-open', $event)"
        @open="log('@open', $event)"
        @before-close="log('@before-close', $event)"
        @close="log('@close', $event)"
        @click="log('@click', $event)")
    template(#html).
      &lt;w-tree
        :data="tree"
        @before-open="log('@before-open', $event)"
        @open="log('@open', $event)"
        @before-close="log('@before-close', $event)"
        @close="log('@close', $event)"
        @click="log('@click', $event)"&gt;
      &lt;/w-tree&gt;
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
              { label: 'views', branch: true },
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
        label: 'Branch 1',
        children: [
          { label: 'Leaf 1' },
          { label: 'Leaf 2' },
          { label: 'Leaf 3' }
        ]
      },
      { label: 'Branch 2', branch: true },
      { label: 'Leaf 1' },
      { label: 'Leaf 2' }
    ],
    tree2: [
      {
        label: 'src',
        children: [
          {
            label: 'assets',
            children: [
              { label: 'wave.svg' },
            ]
          },
          { label: 'views', branch: true },
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
      const [eventName, details] = args
      this.logs = `<strong>${eventName}:</strong><br>${JSON.stringify(details, null, '  ')}`
    }
  }
}
</script>

<style lang="scss">
.w-tree__item--branch > .w-tree__item-label {
  font-weight: bold;
}
</style>
