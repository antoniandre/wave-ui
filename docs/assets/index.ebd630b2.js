import{n as o,R as i}from"./index.e31dd236.js";var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree"></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree2}})],1),t("title-link",{attrs:{h2:""}},[e._v("Icons")]),t("p",[e._v("You can provide different icons for the expand button and tree items.")]),t("p",[e._v("You can also provide icons for each item. Depending on the type of item:")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md">
</w-tree>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{staticClass:"size--md",attrs:{data:e.tree2,"expand-icon":"mdi mdi-plus","expand-open-icon":"mdi mdi-minus","branch-icon":"mdi mdi-folder-outline","branch-open-icon":"mdi mdi-folder-open-outline","leaf-icon":"mdi mdi-file-outline"}})],1),t("title-link",{attrs:{h3:""}},[e._v("Different icon per item")]),e._m(1),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md"></w-tree>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{staticClass:"size--md",attrs:{data:e.tree6,"icon-color":"blue-dark1"}})],1),t("title-link",{attrs:{h3:""}},[e._v("No expand button")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree" :expand-icon="false")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree" :expand-icon="false"></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree2,"expand-icon":!1}})],1),t("title-link",{attrs:{h2:""}},[e._v("Selectable")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree" selectable)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree" selectable></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree1,selectable:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Counts")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree" counts)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree" counts></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree1,counts:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("No transition")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree" no-transition)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree" no-transition></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree1,"no-transition":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Unexpandable empty branches")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree" unexpandable-empty)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree" unexpandable-empty></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex wrap align-center"},[t("div",[t("div",{staticClass:"title3"},[e._v("Normal")]),t("w-tree",{attrs:{data:e.tree1}})],1),t("w-icon",{staticClass:"grey-light3 mx12",attrs:{rotate90a:"",xl:""}},[e._v("wi-arrow-down")]),t("div",[t("div",{staticClass:"title3"},[e._v("unexpandable-empty")]),t("w-tree",{attrs:{data:e.tree1,"unexpandable-empty":""}})],1)],1)]),t("title-link",{attrs:{h2:""}},[e._v("V-model")]),e._m(3),t("p",[e._v("Click on a tree item to select it.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(v-model="selection" :data="tree" selectable)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree v-model="selection" :data="tree" selectable></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree1,selectable:""},model:{value:e.selection,callback:function(a){e.selection=a},expression:"selection"}}),t("div",{staticClass:"w-flex mt6"},[t("strong",{staticClass:"mr3"},[e._v("Selection:")]),t("pre",{staticClass:"orange-light6--bg pa2"},[e._v(e._s(e.selection))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Events")]),e._m(4),e._m(5),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-tree(
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event)"
  @select="log('@select', $event)"
  selectable)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-tree
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event
  @select="log('@select', $event)"
  selectable>
</w-tree>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-flex",{attrs:{gap:"12"}},[t("w-tree",{attrs:{data:e.tree2,selectable:""},on:{"before-open":function(a){return e.log("@before-open",a)},open:function(a){return e.log("@open",a)},"before-close":function(a){return e.log("@before-close",a)},close:function(a){return e.log("@close",a)},click:function(a){return e.log("@click",a)},select:function(a){return e.log("@select",a)}}}),t("w-card",{attrs:{"bg-color":"amber-light6",title:"Event log","title-class":"amber-light5--bg"}},[t("pre",{domProps:{innerHTML:e._s(e.logs)}})])],1)],1),t("title-link",{attrs:{h3:""}},[e._v("Real-case scenario: Renaming a leaf item on click")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree3" @click="renameLeafItem" deep-reactivity)')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-tree
  :data="tree"
  @click="renameLeafItem"
  deep-reactivity>
</w-tree>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
}`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree3,"deep-reactivity":""},on:{click:e.renameLeafItem}})],1),t("alert",{attrs:{tip:""}},[t("strong",{staticClass:"black"},[e._v("Note on reactivity")]),t("p",{staticClass:"black mt2"},[e._v(`By default the tree items key-value pairs will not be watched as this is a more expensive
operation. This means that if you want to have reactivity when you modify a key or value,
like the label, you will need to add the `),t("code",[e._v("deep-reactivity")]),e._v(" option."),t("br"),t("a",{attrs:{href:"https://vuejs.org/guide/essentials/watchers.html#deep-watchers",target:"_blank"}},[e._v("Read on deep watchers on the Vue.js official documentation"),t("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-open-in-new")])],1)])]),t("title-link",{attrs:{h2:""}},[e._v("Custom item (icon + label)")]),e._m(6),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-tree.lh5(:data="tree")
  template(#item="{ item, open }")
    span `+e._s("{{ item.label }}")+`
    w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
    w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
    w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-tree :data="tree">
  <template #item="{ item, open }">
      <span>`+e._s("{{ item.label }}")+`</span>
      <w-icon
        v-if="item.status === 'error'"
        bg-color="error"
        xs
        class="ml1">
        mdi mdi-close
      </w-icon>
      <w-icon
        v-else-if="item.status === 'success'"
        bg-color="success"
        xs
        class="ml1">
        mdi mdi-check
      </w-icon>
      <w-icon
        v-else-if="item.status === 'syncing'"
        bg-color="warning"
        xs
        class="ml1">
        mdi mdi-clock-outline
      </w-icon>
</w-tree>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("w-tree",{staticClass:"lh5",attrs:{data:e.tree4},scopedSlots:e._u([{key:"item",fn:function(a){var l=a.item;return a.open,[t("span",[e._v(e._s(l.label))]),l.status==="error"?t("w-icon",{staticClass:"ml1",attrs:{"bg-color":"error",xs:""}},[e._v("mdi mdi-close")]):l.status==="success"?t("w-icon",{staticClass:"ml1",attrs:{"bg-color":"success",xs:""}},[e._v("mdi mdi-check")]):l.status==="syncing"?t("w-icon",{staticClass:"ml1",attrs:{"bg-color":"warning",xs:""}},[e._v("mdi mdi-clock-outline")]):e._e()]}}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Expand all, by default")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-tree(:data="tree" expand-all)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-tree :data="tree" expand-all></w-tree>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
})`)]},proxy:!0}])},[t("w-tree",{attrs:{data:e.tree5,"expand-all":""}})],1)],1)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("code",[e._v("expand-icon")]),e._v(": for the expand icon.")]),t("li",[t("code",[e._v("expand-open-icon")]),e._v(": for the expand icon when open (if different than the "),t("code",[e._v("expand-icon")]),e._v(").")]),t("li",[t("code",[e._v("branch-icon")]),e._v(": if the item has children.")]),t("li",[t("code",[e._v("branch-open-icon")]),e._v(": if the item has children and it is open.")]),t("li",[t("code",[e._v("leaf-icon")]),e._v(": for items which don't contain anything.")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("It is possible to set a specific icon in any/each item of the tree."),t("br"),e._v(`
By default, the `),t("strong",{staticClass:"code"},[e._v("w-tree")]),e._v(" component will look for any icon in the "),t("code",[e._v("icon")]),e._v(` key,
but you can override that with the `),t("code",[e._v("item-icon-key")]),e._v(" prop.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("It is also possible to set a specific color for the icon of any/each item of the tree."),t("br"),e._v(`
By default, the `),t("strong",{staticClass:"code"},[e._v("w-tree")]),e._v(" component will look for any icon color in the "),t("code",[e._v("iconColor")]),e._v(` key,
but you can override that with the `),t("code",[e._v("item-icon-color-key")]),e._v(" prop.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("When the tree is "),t("code",[e._v("selectable")]),e._v(", you can use the "),t("code",[e._v("v-model")]),e._v(" to get the selected item.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Multiple events are fired from the "),t("strong",{staticClass:"code"},[e._v("w-tree")]),e._v(" component:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"lh0"},[t("li",[t("code",[e._v("before-open")]),e._v(": fired as soon as the user clicks a tree item that is expandable and before the subitems are revealed.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("open")]),e._v(": fired after a user clicks a tree item that is expandable, and after the expand animation.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("before-close")]),e._v(": fired as soon as the user clicks a tree item to close its subtree.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("close")]),e._v(": fired after a user clicks a tree item to close its subtree, and after the collapse animation.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("click")]),e._v(": fired when the user clicks any tree item.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("select")]),e._v(": fired when the user selects any selectable tree item. The "),t("code",[e._v("selectable")]),e._v(" option must be set to true.")]),t("li",{staticClass:"mt1"},[t("code",[e._v("update:model-value")]),e._v(": (or "),t("code",[e._v("input")]),e._v(" in Vue 2.x) fired when the user selects any selectable tree item. The "),t("code",[e._v("selectable")]),e._v(" option must be set to true.")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("If you need to customize the layout of the item label and/or icon, you can use the "),t("code",[e._v("#item")]),e._v(" slot.")])}];const h={data:()=>({tree1:[{label:"Branch 1",children:[{label:"Leaf 1"},{label:"Leaf 2"},{label:"Leaf 3"}]},{label:"Branch 2",branch:!0},{label:"Leaf 1"},{label:"Leaf 2"}],tree2:[{label:"src",children:[{label:"assets",children:[{label:"wave.svg"}]},{label:"views",branch:!0},{label:"app.vue"},{label:"router.js"},{label:"main.js"},{label:"scss",children:[{label:"index.scss"},{label:"_variables.scss"},{label:"_base.scss"}]},{label:"store.js"}]},{label:".editorconfig"},{label:".gitignore"},{label:".npmrc"},{label:"index.html"},{label:"jsconfig.json"},{label:"LICENSE"},{label:"package.json"},{label:"pnpm-lock.yaml"},{label:"postcss.config.js"},{label:"README.md"},{label:"vite.config.js"}],tree3:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub item 2"}]},{label:"Item 2"}],tree4:[{label:"Item 1",children:[{label:"Sub item 1",status:"success"},{label:"Sub item 2",status:"error"}]},{label:"Item 2",status:"syncing"}],tree5:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub Item 1",children:[{label:"Sub Sub item 1"},{label:"Sub Sub item 2"}]},{label:"Sub item 2"}]},{label:"Item 2"}],tree6:[{label:"src",icon:"mdi mdi-code-not-equal-variant",iconColor:"green",children:[{label:"assets",icon:"mdi mdi-star",iconColor:"yellow-dark1",children:[{label:"wave.svg",icon:"mdi mdi-svg",iconColor:"yellow-dark1"}]},{label:"views",branch:!0,icon:"mdi mdi-code-greater-than",iconColor:"orange"},{label:"app.vue",icon:"mdi mdi-vuejs",iconColor:"green"},{label:"router.js",icon:"mdi mdi-routes",iconColor:"green"},{label:"main.js",icon:"mdi mdi-language-javascript",iconColor:"yellow-dark1"},{label:"scss",icon:"mdi mdi-sass",iconColor:"pink",children:[{label:"index.scss",icon:"mdi mdi-sass",iconColor:"pink"},{label:"_variables.scss",icon:"mdi mdi-sass",iconColor:"pink"},{label:"_base.scss",icon:"mdi mdi-sass",iconColor:"pink"}]},{label:"store.js",icon:"mdi mdi-language-javascript",iconColor:"yellow-dark1"}]},{label:".editorconfig",icon:"mdi mdi-cog",iconColor:"grey"},{label:".gitignore",icon:"mdi mdi-git",iconColor:"red"},{label:".npmrc",icon:"mdi mdi-npm",iconColor:"red"},{label:"index.html",icon:"mdi mdi-language-html5",iconColor:"red"},{label:"jsconfig.json",icon:"mdi mdi-code-json",iconColor:"yellow-dark1"},{label:"LICENSE",icon:"mdi mdi-license",iconColor:"red"},{label:"package.json",icon:"mdi mdi-nodejs",iconColor:"lime-dark1"},{label:"pnpm-lock.yaml",icon:"mdi mdi-code-json",iconColor:"yellow-dark1"},{label:"postcss.config.js",icon:"mdi mdi-cog",iconColor:"red"},{label:"README.md",icon:"mdi mdi-information-outline",iconColor:"blue"},{label:"vite.config.js",icon:"mdi mdi-flash",iconColor:"amber"}],selection:null,logs:[]}),methods:{renameLeafItem({item:e}){e.children||(e.label="Hello!")},log(...e){console.log(...e);const[n,t]=e;this.logs=`<strong>${n}:</strong><br>${JSON.stringify(t,null,"  ")}`}}},r={};var b=o(h,d,m,!1,p,null,null,null);function p(e){for(let n in r)this[n]=r[n]}var u=function(){return b.exports}(),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The missing props descriptions will be added shortly (all the props are already listed).")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},v=[];const g={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This value gets updated with the tree selected item when using a <code>v-model</code> and when <code>selectable</code> is set to <code>true</code>.',data:`The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[
  {
    label: 'Item 1',
    children: [
      { label: 'Child 1' },
      { label: 'Child 2' }
    ]
  },
  { label: 'Item 2' }
]</pre>`,depth:!1,branchClass:"Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.",leafClass:"Adds the specified CSS class to all the leaf-type items.<br>Any item that that don't contain children is a leaf.",branchIcon:"Provide an icon for all the branch items.",branchOpenIcon:"Provide an icon for any branch item that is open.",leafIcon:"Provide an icon for all the leaf items.",expandIcon:"Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).",expandOpenIcon:"Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.",expandAll:"Expand all the expandable branches of the tree by default, including sub-items.",deepReactivity:'By default the tree items key-value pairs will not be watched as this is a more expensive operation. This means that if you want to have reactivity when you modify a key or value, like the label, you will need to add the <code>deep-reactivity</code> option.<br><a href="https://vuejs.org/guide/essentials/watchers.html#deep-watchers" target="_blank">Read on deep watchers on the Vue.js official documentation<i class="ml1 w-icon mdi mdi-open-in-new"></i></a>',unexpandableEmpty:"When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).",disabled:"When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).",noTransition:"When set to <code>true</code>, disables the expand/collapse transition.",selectable:"Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.",counts:"Display the branch children counts on each branch item.",iconColor:'Define a color for all the items icons.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',itemIconKey:"Specifies the name of the optional attribute in each item object where to find the item's icon.",itemIconColorKey:`Specifies the name of the optional attribute in each item object where to find the item's icon color.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,itemRouteKey:"Specifies the name of the optional attribute in each item object where to find the item's route. It can be an internal or external link.<br>If the link is internal and Vue Router is detected, it will use a &lt;router-link&gt; tag.",itemDisabledKey:"Specifies the name of the optional attribute in each item object, that will disable the interactivity of this item (expand, collapse selection, click, tab).",itemOpenKey:"Specifies the name of the optional attribute in each item object, that will make this item open by default.",itemLabelKey:"Specifies the name of the label attribute in each item object. <code>label</code> by default."},_={item:{description:"Provide a custom template for all the items (includes the item icon if any, label, and count if active).",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}}},y={"before-close":{description:"Fired right before closing a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},"before-open":{description:"Fired right before opening a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},click:{description:"Fired on tree item click and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`,e:"The associated native click event."}},close:{description:"Fired after closing a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},open:{description:"Fired after opening a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},select:{description:"test",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",selected:"A boolean representing the selected state of the tree item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},"update:model-value":{description:"test",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}}},w={data:()=>({propsDescs:g,slots:_}),computed:{props(){return i.props},events(){return i.emits.reduce((e,n)=>(e[n]=y[n]||{})&&e,{})}}},s={};var k=o(w,f,v,!1,x,null,null,null);function x(e){for(let n in s)this[n]=s[n]}var j=function(){return k.exports}(),C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("ui-component-title",{attrs:{slug:"w-tree"}},[e._v("w-tree")]),t("examples"),t("api")],1)},S=[];const E={components:{Examples:u,Api:j}},c={};var L=o(E,C,S,!1,I,null,null,null);function I(e){for(let n in c)this[n]=c[n]}var $=function(){return L.exports}();export{$ as default};
