<template lang="pug">
div
  title-link(h2) Default
  example
    w-tree(:data="tree2")
    template(#pug).
      w-tree(:data="tree")
    template(#html).
      &lt;w-tree :data="tree"&gt;&lt;/w-tree&gt;
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
              { label: 'app.vue' },
              { label: 'router.js' },
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
    w-tree.size--md(
      :data="tree2"
      expand-icon="mdi mdi-plus"
      expand-open-icon="mdi mdi-minus"
      branch-icon="mdi mdi-folder-outline"
      branch-open-icon="mdi mdi-folder-open-outline"
      leaf-icon="mdi mdi-file-outline")
    template(#pug).
      w-tree.size--md(
        :data="tree"
        expand-icon="mdi mdi-plus"
        expand-open-icon="mdi mdi-minus"
        branch-icon="mdi mdi-folder-outline"
        branch-open-icon="mdi mdi-folder-open-outline"
        leaf-icon="mdi mdi-file-outline")
    template(#html).
      &lt;w-tree
        :data="tree"
        expand-icon="mdi mdi-plus"
        expand-open-icon="mdi mdi-minus"
        branch-icon="mdi mdi-folder-outline"
        branch-open-icon="mdi mdi-folder-open-outline"
        leaf-icon="mdi mdi-file-outline"
        class="size--md"&gt;
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
              { label: 'app.vue' },
              { label: 'router.js' },
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

  title-link(h3) Different icon per item
  p.
    It is possible to set a specific icon in any/each item of the tree.#[br]
    By default, the #[strong.code w-tree] component will look for any icon in the #[code icon] key,
    but you can override that with the #[code item-icon-key] prop.
  p.
    It is also possible to set a specific color for the icon of any/each item of the tree.#[br]
    By default, the #[strong.code w-tree] component will look for any icon color in the #[code iconColor] key,
    but you can override that with the #[code item-icon-color-key] prop.
  example
    w-tree.size--md(:data="tree6" icon-color="blue-dark1")
    template(#pug).
      w-tree.size--md(
        :data="tree"
        expand-icon="mdi mdi-plus"
        expand-open-icon="mdi mdi-minus"
        branch-icon="mdi mdi-folder-outline"
        branch-open-icon="mdi mdi-folder-open-outline"
        leaf-icon="mdi mdi-file-outline")
    template(#html).
      &lt;w-tree
        :data="tree"
        expand-icon="mdi mdi-plus"
        expand-open-icon="mdi mdi-minus"
        branch-icon="mdi mdi-folder-outline"
        branch-open-icon="mdi mdi-folder-open-outline"
        leaf-icon="mdi mdi-file-outline"
        class="size--md"&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'src',
            icon: 'mdi mdi-code-not-equal-variant',
            iconColor: 'green',
            children: [
              {
                label: 'assets',
                icon: 'mdi mdi-star',
                iconColor: 'yellow-dark1',
                children: [
                  { label: 'wave.svg', icon: 'mdi mdi-svg', iconColor: 'yellow-dark1' }
                ]
              },
              { label: 'views', branch: true, icon: 'mdi mdi-code-greater-than', iconColor: 'orange' },
              { label: 'app.vue', icon: 'mdi mdi-vuejs', iconColor: 'green' },
              { label: 'router.js', icon: 'mdi mdi-routes', iconColor: 'green' },
              { label: 'main.js', icon: 'mdi mdi-language-javascript', iconColor: 'yellow-dark1' },
              {
                label: 'scss',
                icon: 'mdi mdi-sass',
                iconColor: 'pink',
                children: [
                  { label: 'index.scss', icon: 'mdi mdi-sass', iconColor: 'pink' },
                  { label: '_variables.scss', icon: 'mdi mdi-sass', iconColor: 'pink' },
                  { label: '_base.scss', icon: 'mdi mdi-sass', iconColor: 'pink' }
                ]
              },
              { label: 'store.js', icon: 'mdi mdi-language-javascript', iconColor: 'yellow-dark1' }
            ]
          },
          { label: '.editorconfig', icon: 'mdi mdi-cog', iconColor: 'grey' },
          { label: '.gitignore', icon: 'mdi mdi-git', iconColor: 'red' },
          { label: '.npmrc', icon: 'mdi mdi-npm', iconColor: 'red' },
          { label: 'index.html', icon: 'mdi mdi-language-html5', iconColor: 'red' },
          { label: 'jsconfig.json', icon: 'mdi mdi-code-json', iconColor: 'yellow-dark1' },
          { label: 'LICENSE', icon: 'mdi mdi-license', iconColor: 'red' },
          { label: 'package.json', icon: 'mdi mdi-nodejs', iconColor: 'lime-dark1' },
          { label: 'pnpm-lock.yaml', icon: 'mdi mdi-code-json', iconColor: 'yellow-dark1' },
          { label: 'postcss.config.js', icon: 'mdi mdi-cog', iconColor: 'red' },
          { label: 'README.md', icon: 'mdi mdi-information-outline', iconColor: 'blue' },
          { label: 'vite.config.js', icon: 'mdi mdi-flash', iconColor: 'amber' }
        ]
      })

  title-link(h3) No expand button
  example
    w-tree(:data="tree2" :expand-icon="false")
    template(#pug).
      w-tree(:data="tree" :expand-icon="false")
    template(#html).
      &lt;w-tree :data="tree" :expand-icon="false"&gt;&lt;/w-tree&gt;
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
              { label: 'app.vue' },
              { label: 'router.js' },
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
      &lt;w-tree :data="tree" selectable&gt;&lt;/w-tree&gt;
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
      &lt;w-tree :data="tree" counts&gt;&lt;/w-tree&gt;
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

  title-link(h2) No transition
  example
    w-tree(:data="tree1" no-transition)
    template(#pug).
      w-tree(:data="tree" no-transition)
    template(#html).
      &lt;w-tree :data="tree" no-transition&gt;&lt;/w-tree&gt;
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

  title-link(h2) Unexpandable empty branches
  example
    .w-flex.wrap.align-center
      div
        .title3 Normal
        w-tree(:data="tree1")
      w-icon.grey-light3.mx12(rotate90a xl) wi-arrow-down
      div
        .title3 unexpandable-empty
        w-tree(:data="tree1" unexpandable-empty)
    template(#pug).
      w-tree(:data="tree" unexpandable-empty)
    template(#html).
      &lt;w-tree :data="tree" unexpandable-empty&gt;&lt;/w-tree&gt;
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

  title-link(h2) V-model
  p When the tree is #[code selectable], you can use the #[code v-model] to get the selected item.
  p Click on a tree item to select it.
  example
    w-tree(v-model="selection" :data="tree1" selectable)
    .w-flex.mt6
      strong.mr3 Selection:
      pre.orange-light6--bg.pa2 {{ selection }}
    template(#pug).
      w-tree(v-model="selection" :data="tree" selectable)
    template(#html).
      &lt;w-tree v-model="selection" :data="tree" selectable&gt;&lt;/w-tree&gt;
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
  p Multiple events are fired from the #[strong.code w-tree] component:
  ul.lh0
    li #[code before-open]: fired as soon as the user clicks a tree item that is expandable and before the subitems are revealed.
    li.mt1 #[code open]: fired after a user clicks a tree item that is expandable, and after the expand animation.
    li.mt1 #[code before-close]: fired as soon as the user clicks a tree item to close its subtree.
    li.mt1 #[code close]: fired after a user clicks a tree item to close its subtree, and after the collapse animation.
    li.mt1 #[code click]: fired when the user clicks any tree item.
    li.mt1 #[code select]: fired when the user selects any selectable tree item. The #[code selectable] option must be set to true.
    li.mt1 #[code update:model-value]: (or #[code input] in Vue 2.x) fired when the user selects any selectable tree item. The #[code selectable] option must be set to true.
  example
    w-flex(gap="12")
      w-tree(
        :data="tree2"
        @before-open="log('@before-open', $event)"
        @open="log('@open', $event)"
        @before-close="log('@before-close', $event)"
        @close="log('@close', $event)"
        @click="log('@click', $event)"
        @select="log('@select', $event)"
        selectable)
      w-card(bg-color="amber-light6" title="Event log" title-class="amber-light5--bg")
        pre(v-html="logs")
    template(#pug).
      w-tree(
        :data="tree"
        @before-open="log('@before-open', $event)"
        @open="log('@open', $event)"
        @before-close="log('@before-close', $event)"
        @close="log('@close', $event)"
        @click="log('@click', $event)"
        @select="log('@select', $event)"
        selectable)
    template(#html).
      &lt;w-tree
        :data="tree"
        @before-open="log('@before-open', $event)"
        @open="log('@open', $event)"
        @before-close="log('@before-close', $event)"
        @close="log('@close', $event)"
        @click="log('@click', $event
        @select="log('@select', $event)"
        selectable&gt;
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
              { label: 'app.vue' },
              { label: 'router.js' },
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

  title-link(h3) Real-case scenario: Renaming a leaf item on click
  example
    w-tree(:data="tree3" @click="renameLeafItem" deep-reactivity)
    template(#pug).
      w-tree(:data="tree3" @click="renameLeafItem" deep-reactivity)
    template(#html).
      &lt;w-tree
        :data="tree"
        @click="renameLeafItem"
        deep-reactivity&gt;
      &lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'Item 1',
            children: [
              { label: 'Sub item 1' },
              { label: 'Sub item 2' }
            ]
          },
          { label: 'Item 2' }
        ]
      }),

      methods: {
        renameLeafItem ({ item }) {
          if (!item.children) item.label = 'Hello!'
        },
      }
  alert(tip)
    strong.black Note on reactivity
    p.black.mt2
      | By default the tree items key-value pairs will not be watched as this is a more expensive
      | operation. This means that if you want to have reactivity when you modify a key or value,
      | like the label, you will need to add the #[code deep-reactivity] option.
      br
      a(href="https://vuejs.org/guide/essentials/watchers.html#deep-watchers" target="_blank")
        | Read on deep watchers on the Vue.js official documentation
        w-icon.ml1 mdi mdi-open-in-new

  title-link(h2) Custom item (icon + label)
  p If you need to customize the layout of the item label and/or icon, you can use the #[code #item] slot.
  example
    w-tree.lh5(:data="tree4")
      template(#item="{ item, open }")
        span {{ item.label }}
        w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
        w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
        w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline
    template(#pug).
      w-tree.lh5(:data="tree")
        template(#item="{ item, open }")
          span {{ '\{\{ item.label \}\}' }}
          w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
          w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
          w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline
    template(#html).
      &lt;w-tree :data="tree"&gt;
        &lt;template #item="{ item, open }"&gt;
            &lt;span&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;
            &lt;w-icon
              v-if="item.status === 'error'"
              bg-color="error"
              xs
              class="ml1"&gt;
              mdi mdi-close
            &lt;/w-icon&gt;
            &lt;w-icon
              v-else-if="item.status === 'success'"
              bg-color="success"
              xs
              class="ml1"&gt;
              mdi mdi-check
            &lt;/w-icon&gt;
            &lt;w-icon
              v-else-if="item.status === 'syncing'"
              bg-color="warning"
              xs
              class="ml1"&gt;
              mdi mdi-clock-outline
            &lt;/w-icon&gt;
      &lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
          {
            label: 'Item 1',
            children: [
              { label: 'Sub item 1', status: 'success' },
              { label: 'Sub item 2', status: 'error' }
            ]
          },
          { label: 'Item 2', status: 'syncing' }
        ]
      }),

      methods: {
        renameLeafItem ({ item }) {
          if (!item.children) item.label = 'Hello!'
        },
      }

  title-link(h2) Expand all, by default
  example
    w-tree(:data="tree5" expand-all)
    template(#pug).
      w-tree(:data="tree" expand-all)
    template(#html).
      &lt;w-tree :data="tree" expand-all&gt;&lt;/w-tree&gt;
    template(#js).
      data: () => ({
        tree: [
            {
              label: 'Item 1',
              children: [
                { label: 'Sub item 1' },
                {
                  label: 'Sub Item 1',
                  children: [
                    { label: 'Sub Sub item 1' },
                    { label: 'Sub Sub item 2' }
                  ]
                },
                { label: 'Sub item 2' }
              ]
            },
            { label: 'Item 2' }
        ]
      })
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
              { label: 'wave.svg' }
            ]
          },
          { label: 'views', branch: true },
          { label: 'app.vue' },
          { label: 'router.js' },
          { label: 'main.js' },
          {
            label: 'scss',
            children: [
              { label: 'index.scss' },
              { label: '_variables.scss' },
              { label: '_base.scss' }
            ]
          },
          { label: 'store.js' }
        ]
      },
      { label: '.editorconfig' },
      { label: '.gitignore' },
      { label: '.npmrc' },
      { label: 'index.html' },
      { label: 'jsconfig.json' },
      { label: 'LICENSE' },
      { label: 'package.json' },
      { label: 'pnpm-lock.yaml' },
      { label: 'postcss.config.js' },
      { label: 'README.md' },
      { label: 'vite.config.js' }
    ],
    tree3: [
      {
        label: 'Item 1',
        children: [
          { label: 'Sub item 1' },
          { label: 'Sub item 2' }
        ]
      },
      { label: 'Item 2' }
    ],
    tree4: [
      {
        label: 'Item 1',
        children: [
          { label: 'Sub item 1', status: 'success' },
          { label: 'Sub item 2', status: 'error' }
        ]
      },
      { label: 'Item 2', status: 'syncing' }
    ],
    tree5: [
      {
        label: 'Item 1',
        children: [
          { label: 'Sub item 1' },
          {
            label: 'Sub Item 1',
            children: [
              { label: 'Sub Sub item 1' },
              { label: 'Sub Sub item 2' }
            ]
          },
          { label: 'Sub item 2' }
        ]
      },
      { label: 'Item 2' }
    ],
    tree6: [
      {
        label: 'src',
        icon: 'mdi mdi-code-not-equal-variant',
        iconColor: 'green',
        children: [
          {
            label: 'assets',
            icon: 'mdi mdi-star',
            iconColor: 'yellow-dark1',
            children: [
              { label: 'wave.svg', icon: 'mdi mdi-svg', iconColor: 'yellow-dark1' }
            ]
          },
          { label: 'views', branch: true, icon: 'mdi mdi-code-greater-than', iconColor: 'orange' },
          { label: 'app.vue', icon: 'mdi mdi-vuejs', iconColor: 'green' },
          { label: 'router.js', icon: 'mdi mdi-routes', iconColor: 'green' },
          { label: 'main.js', icon: 'mdi mdi-language-javascript', iconColor: 'yellow-dark1' },
          {
            label: 'scss',
            icon: 'mdi mdi-sass',
            iconColor: 'pink',
            children: [
              { label: 'index.scss', icon: 'mdi mdi-sass', iconColor: 'pink' },
              { label: '_variables.scss', icon: 'mdi mdi-sass', iconColor: 'pink' },
              { label: '_base.scss', icon: 'mdi mdi-sass', iconColor: 'pink' }
            ]
          },
          { label: 'store.js', icon: 'mdi mdi-language-javascript', iconColor: 'yellow-dark1' }
        ]
      },
      { label: '.editorconfig', icon: 'mdi mdi-cog', iconColor: 'grey' },
      { label: '.gitignore', icon: 'mdi mdi-git', iconColor: 'red' },
      { label: '.npmrc', icon: 'mdi mdi-npm', iconColor: 'red' },
      { label: 'index.html', icon: 'mdi mdi-language-html5', iconColor: 'red' },
      { label: 'jsconfig.json', icon: 'mdi mdi-code-json', iconColor: 'yellow-dark1' },
      { label: 'LICENSE', icon: 'mdi mdi-license', iconColor: 'red' },
      { label: 'package.json', icon: 'mdi mdi-nodejs', iconColor: 'lime-dark1' },
      { label: 'pnpm-lock.yaml', icon: 'mdi mdi-code-json', iconColor: 'yellow-dark1' },
      { label: 'postcss.config.js', icon: 'mdi mdi-cog', iconColor: 'red' },
      { label: 'README.md', icon: 'mdi mdi-information-outline', iconColor: 'blue' },
      { label: 'vite.config.js', icon: 'mdi mdi-flash', iconColor: 'amber' }
    ],
    selection: null,
    logs: []
  }),

  methods: {
    renameLeafItem ({ item }) {
      if (!item.children) item.label = 'Hello!'
    },
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
