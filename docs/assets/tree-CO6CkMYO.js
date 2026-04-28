import{N as e,W as t,_t as n,bt as r,c as i,d as a,g as o,h as s,k as c,l,m as u,u as d}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as f}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{t as p}from"./index-DH7838aH.js";var m={class:`w-flex wrap align-center`},h={class:`w-flex mt6`},g=[`innerHTML`],_={class:`black mt2`},v={href:`https://vuejs.org/guide/essentials/watchers.html#deep-watchers`,target:`_blank`};function y(f,p,y,b,x,S){let C=e(`title-link`),w=e(`w-tree`),T=e(`example`),E=e(`w-icon`),D=e(`w-card`),O=e(`w-flex`),k=e(`alert`);return c(),a(`div`,null,[o(C,{h2:``},{default:t(()=>[...p[7]||=[s(`Default`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[8]||=[s(`w-tree(:data="tree")`,-1)]]),html:t(()=>[...p[9]||=[s(`<w-tree :data="tree"></w-tree>`,-1)]]),js:t(()=>[...p[10]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{data:f.tree2},null,8,[`data`])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[11]||=[s(`Icons`,-1)]]),_:1}),p[73]||=u(`<p>You can provide different icons for the expand button and tree items.</p><p>You can also provide icons for each item. Depending on the type of item:</p><ul><li><code>expand-icon</code>: for the expand icon.</li><li><code>expand-open-icon</code>: for the expand icon when open (if different than the <code>expand-icon</code>).</li><li><code>branch-icon</code>: if the item has children.</li><li><code>branch-open-icon</code>: if the item has children and it is open.</li><li><code>leaf-icon</code>: for items which don&#39;t contain anything.</li></ul>`,3),o(T,null,{pug:t(()=>[...p[12]||=[s(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`,-1)]]),html:t(()=>[...p[13]||=[s(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md">
</w-tree>`,-1)]]),js:t(()=>[...p[14]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{class:`size--md`,data:f.tree2,"expand-icon":`mdi mdi-plus`,"expand-open-icon":`mdi mdi-minus`,"branch-icon":`mdi mdi-folder-outline`,"branch-open-icon":`mdi mdi-folder-open-outline`,"leaf-icon":`mdi mdi-file-outline`},null,8,[`data`])]),_:1}),o(C,{h3:``},{default:t(()=>[...p[15]||=[s(`Different icon per item`,-1)]]),_:1}),p[74]||=u(`<p>It is possible to set a specific icon in any/each item of the tree.<br>
By default, the <strong class="code">w-tree</strong> component will look for any icon in the <code>icon</code> key,
but you can override that with the <code>item-icon-key</code> prop.</p><p>It is also possible to set a specific color for the icon of any/each item of the tree.<br>
By default, the <strong class="code">w-tree</strong> component will look for any icon color in the <code>iconColor</code> key,
but you can override that with the <code>item-icon-color-key</code> prop.</p>`,2),o(T,null,{pug:t(()=>[...p[16]||=[s(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`,-1)]]),html:t(()=>[...p[17]||=[s(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md"></w-tree>`,-1)]]),js:t(()=>[...p[18]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{class:`size--md`,data:f.tree6,"icon-color":`blue-dark1`},null,8,[`data`])]),_:1}),o(C,{h3:``},{default:t(()=>[...p[19]||=[s(`No expand button`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[20]||=[s(`w-tree(:data="tree" :expand-icon="false")`,-1)]]),html:t(()=>[...p[21]||=[s(`<w-tree :data="tree" :expand-icon="false"></w-tree>`,-1)]]),js:t(()=>[...p[22]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{data:f.tree2,"expand-icon":!1},null,8,[`data`])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[23]||=[s(`Selectable`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[24]||=[s(`w-tree(:data="tree" selectable)`,-1)]]),html:t(()=>[...p[25]||=[s(`<w-tree :data="tree" selectable></w-tree>`,-1)]]),js:t(()=>[...p[26]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{data:f.tree1,selectable:``},null,8,[`data`])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[27]||=[s(`Counts`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[28]||=[s(`w-tree(:data="tree" counts)`,-1)]]),html:t(()=>[...p[29]||=[s(`<w-tree :data="tree" counts></w-tree>`,-1)]]),js:t(()=>[...p[30]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{data:f.tree1,counts:``},null,8,[`data`])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[31]||=[s(`No transition`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[32]||=[s(`w-tree(:data="tree" no-transition)`,-1)]]),html:t(()=>[...p[33]||=[s(`<w-tree :data="tree" no-transition></w-tree>`,-1)]]),js:t(()=>[...p[34]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{data:f.tree1,"no-transition":``},null,8,[`data`])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[35]||=[s(`Unexpandable empty branches`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[39]||=[s(`w-tree(:data="tree" unexpandable-empty)`,-1)]]),html:t(()=>[...p[40]||=[s(`<w-tree :data="tree" unexpandable-empty></w-tree>`,-1)]]),js:t(()=>[...p[41]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[i(`div`,m,[i(`div`,null,[p[36]||=i(`div`,{class:`title3`},`Normal`,-1),o(w,{data:f.tree1},null,8,[`data`])]),o(E,{class:`grey-light3 mx12`,rotate90a:``,xl:``},{default:t(()=>[...p[37]||=[s(`wi-arrow-down`,-1)]]),_:1}),i(`div`,null,[p[38]||=i(`div`,{class:`title3`},`unexpandable-empty`,-1),o(w,{data:f.tree1,"unexpandable-empty":``},null,8,[`data`])])])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[42]||=[s(`V-model`,-1)]]),_:1}),p[75]||=i(`p`,null,[s(`When the tree is `),i(`code`,null,`selectable`),s(`, you can use the `),i(`code`,null,`v-model`),s(` to get the selected item.`)],-1),p[76]||=i(`p`,null,`Click on a tree item to select it.`,-1),o(T,null,{pug:t(()=>[...p[44]||=[s(`w-tree(v-model="selection" :data="tree" selectable)`,-1)]]),html:t(()=>[...p[45]||=[s(`<w-tree v-model="selection" :data="tree" selectable></w-tree>`,-1)]]),js:t(()=>[...p[46]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{modelValue:f.selection,"onUpdate:modelValue":p[0]||=e=>f.selection=e,data:f.tree1,selectable:``},null,8,[`modelValue`,`data`]),i(`div`,h,[p[43]||=i(`strong`,{class:`mr3`},`Selection:`,-1),i(`pre`,{class:n([`pa2`,f.$store.state.darkMode?`grey-dark6--bg`:`orange-light6--bg`])},r(f.selection),3)])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[47]||=[s(`Events`,-1)]]),_:1}),p[77]||=u(`<p>Multiple events are fired from the <strong class="code">w-tree</strong> component:</p><ul class="lh0"><li><code>before-open</code>: fired as soon as the user clicks a tree item that is expandable and before the subitems are revealed.</li><li class="mt1"><code>open</code>: fired after a user clicks a tree item that is expandable, and after the expand animation.</li><li class="mt1"><code>before-close</code>: fired as soon as the user clicks a tree item to close its subtree.</li><li class="mt1"><code>close</code>: fired after a user clicks a tree item to close its subtree, and after the collapse animation.</li><li class="mt1"><code>click</code>: fired when the user clicks any tree item.</li><li class="mt1"><code>select</code>: fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li><li class="mt1"><code>update:model-value</code>: (or <code>input</code> in Vue 2.x) fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li></ul>`,2),o(T,null,{pug:t(()=>[...p[48]||=[s(`w-tree(
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event)"
  @select="log('@select', $event)"
  selectable)`,-1)]]),html:t(()=>[...p[49]||=[s(`<w-tree
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event
  @select="log('@select', $event)"
  selectable>
</w-tree>`,-1)]]),js:t(()=>[...p[50]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(O,{gap:`12`},{default:t(()=>[o(w,{data:f.tree2,onBeforeOpen:p[1]||=e=>S.log(`@before-open`,e),onOpen:p[2]||=e=>S.log(`@open`,e),onBeforeClose:p[3]||=e=>S.log(`@before-close`,e),onClose:p[4]||=e=>S.log(`@close`,e),onClick:p[5]||=e=>S.log(`@click`,e),onSelect:p[6]||=e=>S.log(`@select`,e),selectable:``},null,8,[`data`]),o(D,{"bg-color":f.$store.state.darkMode?`grey-dark6`:`amber-light6`,title:`Event log`,"title-class":f.$store.state.darkMode?`grey-dark5--bg`:`amber-light5--bg`},{default:t(()=>[i(`pre`,{innerHTML:f.logs},null,8,g)]),_:1},8,[`bg-color`,`title-class`])]),_:1})]),_:1}),o(C,{h3:``},{default:t(()=>[...p[51]||=[s(`Real-case scenario: Renaming a leaf item on click`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[52]||=[s(`w-tree(:data="tree3" @click="renameLeafItem" deep-reactivity)`,-1)]]),html:t(()=>[...p[53]||=[s(`<w-tree
  :data="tree"
  @click="renameLeafItem"
  deep-reactivity>
</w-tree>`,-1)]]),js:t(()=>[...p[54]||=[s(`data: () => ({
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
}`,-1)]]),default:t(()=>[o(w,{data:f.tree3,onClick:S.renameLeafItem,"deep-reactivity":``},null,8,[`data`,`onClick`])]),_:1}),o(k,{tip:``},{default:t(()=>[p[61]||=i(`strong`,{class:`black`},`Note on reactivity`,-1),i(`p`,_,[p[57]||=s(`By default the tree items key-value pairs will not be watched as this is a more expensive
operation. This means that if you want to have reactivity when you modify a key or value,
like the label, you will need to add the `,-1),p[58]||=i(`code`,null,`deep-reactivity`,-1),p[59]||=s(` option.`,-1),p[60]||=i(`br`,null,null,-1),i(`a`,v,[p[56]||=s(`Read on deep watchers on the Vue.js official documentation`,-1),o(E,{class:`ml1`},{default:t(()=>[...p[55]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})])])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[62]||=[s(`Custom item (icon + label)`,-1)]]),_:1}),p[78]||=i(`p`,null,[s(`If you need to customize the layout of the item label and/or icon, you can use the `),i(`code`,null,`#item`),s(` slot.`)],-1),o(T,null,{pug:t(()=>[...p[66]||=[s(`w-tree.lh5(:data="tree")
  template(#item="{ item, open }")
    span `+r(`{{ item.label }}`)+`
    w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
    w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
    w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline`,-1)]]),html:t(()=>[...p[67]||=[s(`<w-tree :data="tree">
  <template #item="{ item, open }">
      <span>`+r(`{{ item.label }}`)+`</span>
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
</w-tree>`,-1)]]),js:t(()=>[...p[68]||=[s(`data: () => ({
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
`,-1)]]),default:t(()=>[o(w,{class:`lh5`,data:f.tree4},{item:t(({item:e,open:n})=>[i(`span`,null,r(e.label),1),e.status===`error`?(c(),l(E,{key:0,class:`ml1`,"bg-color":`error`,xs:``},{default:t(()=>[...p[63]||=[s(`mdi mdi-close`,-1)]]),_:1})):e.status===`success`?(c(),l(E,{key:1,class:`ml1`,"bg-color":`success`,xs:``},{default:t(()=>[...p[64]||=[s(`mdi mdi-check`,-1)]]),_:1})):e.status===`syncing`?(c(),l(E,{key:2,class:`ml1`,"bg-color":`warning`,xs:``},{default:t(()=>[...p[65]||=[s(`mdi mdi-clock-outline`,-1)]]),_:1})):d(``,!0)]),_:1},8,[`data`])]),_:1}),o(C,{h2:``},{default:t(()=>[...p[69]||=[s(`Expand all, by default`,-1)]]),_:1}),o(T,null,{pug:t(()=>[...p[70]||=[s(`w-tree(:data="tree" expand-all)`,-1)]]),html:t(()=>[...p[71]||=[s(`<w-tree :data="tree" expand-all></w-tree>`,-1)]]),js:t(()=>[...p[72]||=[s(`data: () => ({
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
})`,-1)]]),default:t(()=>[o(w,{data:f.tree5,"expand-all":``},null,8,[`data`])]),_:1})])}var b=f({data:()=>({tree1:[{label:`Branch 1`,children:[{label:`Leaf 1`},{label:`Leaf 2`},{label:`Leaf 3`}]},{label:`Branch 2`,branch:!0},{label:`Leaf 1`},{label:`Leaf 2`}],tree2:[{label:`src`,children:[{label:`assets`,children:[{label:`wave.svg`}]},{label:`views`,branch:!0},{label:`app.vue`},{label:`router.js`},{label:`main.js`},{label:`scss`,children:[{label:`index.scss`},{label:`_variables.scss`},{label:`_base.scss`}]},{label:`store.js`}]},{label:`.editorconfig`},{label:`.gitignore`},{label:`.npmrc`},{label:`index.html`},{label:`jsconfig.json`},{label:`LICENSE`},{label:`package.json`},{label:`pnpm-lock.yaml`},{label:`postcss.config.js`},{label:`README.md`},{label:`vite.config.js`}],tree3:[{label:`Item 1`,children:[{label:`Sub item 1`},{label:`Sub item 2`}]},{label:`Item 2`}],tree4:[{label:`Item 1`,children:[{label:`Sub item 1`,status:`success`},{label:`Sub item 2`,status:`error`}]},{label:`Item 2`,status:`syncing`}],tree5:[{label:`Item 1`,children:[{label:`Sub item 1`},{label:`Sub Item 1`,children:[{label:`Sub Sub item 1`},{label:`Sub Sub item 2`}]},{label:`Sub item 2`}]},{label:`Item 2`}],tree6:[{label:`src`,icon:`mdi mdi-code-not-equal-variant`,iconColor:`green`,children:[{label:`assets`,icon:`mdi mdi-star`,iconColor:`yellow-dark1`,children:[{label:`wave.svg`,icon:`mdi mdi-svg`,iconColor:`yellow-dark1`}]},{label:`views`,branch:!0,icon:`mdi mdi-code-greater-than`,iconColor:`orange`},{label:`app.vue`,icon:`mdi mdi-vuejs`,iconColor:`green`},{label:`router.js`,icon:`mdi mdi-routes`,iconColor:`green`},{label:`main.js`,icon:`mdi mdi-language-javascript`,iconColor:`yellow-dark1`},{label:`scss`,icon:`mdi mdi-sass`,iconColor:`pink`,children:[{label:`index.scss`,icon:`mdi mdi-sass`,iconColor:`pink`},{label:`_variables.scss`,icon:`mdi mdi-sass`,iconColor:`pink`},{label:`_base.scss`,icon:`mdi mdi-sass`,iconColor:`pink`}]},{label:`store.js`,icon:`mdi mdi-language-javascript`,iconColor:`yellow-dark1`}]},{label:`.editorconfig`,icon:`mdi mdi-cog`,iconColor:`grey`},{label:`.gitignore`,icon:`mdi mdi-git`,iconColor:`red`},{label:`.npmrc`,icon:`mdi mdi-npm`,iconColor:`red`},{label:`index.html`,icon:`mdi mdi-language-html5`,iconColor:`red`},{label:`jsconfig.json`,icon:`mdi mdi-code-json`,iconColor:`yellow-dark1`},{label:`LICENSE`,icon:`mdi mdi-license`,iconColor:`red`},{label:`package.json`,icon:`mdi mdi-nodejs`,iconColor:`lime-dark1`},{label:`pnpm-lock.yaml`,icon:`mdi mdi-code-json`,iconColor:`yellow-dark1`},{label:`postcss.config.js`,icon:`mdi mdi-cog`,iconColor:`red`},{label:`README.md`,icon:`mdi mdi-information-outline`,iconColor:`blue`},{label:`vite.config.js`,icon:`mdi mdi-flash`,iconColor:`amber`}],selection:null,logs:[]}),methods:{renameLeafItem({item:e}){e.children||(e.label=`Hello!`)},log(...e){console.log(...e);let[t,n]=e;this.logs=`<strong>${t}:</strong><br>${JSON.stringify(n,null,`  `)}`}}},[[`render`,y]]);function x(n,r,l,u,d,f){let p=e(`title-link`),m=e(`alert`),h=e(`component-api`);return c(),a(`div`,null,[r[2]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:t(()=>[...r[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mb6`,info:``},{default:t(()=>[...r[1]||=[s(`The missing props descriptions will be added shortly (all the props are already listed).`,-1)]]),_:1}),o(h,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(h,{items:n.slots,title:`Slots`},null,8,[`items`]),o(h,{items:f.events,title:`Events`},null,8,[`items`])])}var S={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This value gets updated with the tree selected item when using a <code>v-model</code> and when <code>selectable</code> is set to <code>true</code>.`,data:`The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[
  {
    label: 'Item 1',
    children: [
      { label: 'Child 1' },
      { label: 'Child 2' }
    ]
  },
  { label: 'Item 2' }
]</pre>`,depth:!1,branchClass:`Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.`,leafClass:`Adds the specified CSS class to all the leaf-type items.<br>Any item that that don't contain children is a leaf.`,branchIcon:`Provide an icon for all the branch items.`,branchOpenIcon:`Provide an icon for any branch item that is open.`,leafIcon:`Provide an icon for all the leaf items.`,expandIcon:`Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).`,expandOpenIcon:`Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.`,expandAll:`Expand all the expandable branches of the tree by default, including sub-items.`,deepReactivity:`By default the tree items key-value pairs will not be watched as this is a more expensive operation. This means that if you want to have reactivity when you modify a key or value, like the label, you will need to add the <code>deep-reactivity</code> option.<br><a href="https://vuejs.org/guide/essentials/watchers.html#deep-watchers" target="_blank">Read on deep watchers on the Vue.js official documentation<i class="ml1 w-icon mdi mdi-open-in-new"></i></a>`,unexpandableEmpty:`When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).`,disabled:`When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).`,noTransition:`When set to <code>true</code>, disables the expand/collapse transition.`,selectable:`Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.`,noRipple:`When <code>true</code>, disables the pointer ripple on selectable nodes for this tree. By default, ripple follows <code>$waveui.config.ripple</code>.`,counts:`Display the branch children counts on each branch item.`,iconColor:`Define a color for all the items icons.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,itemIconKey:`Specifies the name of the optional attribute in each item object where to find the item's icon.`,itemIconColorKey:`Specifies the name of the optional attribute in each item object where to find the item's icon color.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,itemRouteKey:`Specifies the name of the optional attribute in each item object where to find the item's route. It can be an internal or external link.<br>If the link is internal and Vue Router is detected, it will use a &lt;router-link&gt; tag.`,itemDisabledKey:`Specifies the name of the optional attribute in each item object, that will disable the interactivity of this item (expand, collapse selection, click, tab).`,itemOpenKey:`Specifies the name of the optional attribute in each item object, that will make this item open by default.`,itemLabelKey:`Specifies the name of the label attribute in each item object. <code>label</code> by default.`},C={item:{description:`Provide a custom template for all the items (includes the item icon if any, label, and count if active).`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}}},w={"before-close":{description:`Fired right before closing a tree branch item and exposes the following parameters:`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},"before-open":{description:`Fired right before opening a tree branch item and exposes the following parameters:`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},click:{description:`Fired on tree item click and exposes the following parameters:`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`,e:`The associated native click event.`}},close:{description:`Fired after closing a tree branch item and exposes the following parameters:`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},open:{description:`Fired after opening a tree branch item and exposes the following parameters:`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},select:{description:`test`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,selected:`A boolean representing the selected state of the tree item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},"update:model-value":{description:`test`,params:{item:`The current tree item object.`,depth:`An integer representing the item's depth in the tree. Starts at 0 for the root.`,open:`When applicable, a boolean representing the open state of the tree branch item.`,path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}}},T=f({data:()=>({propsDescs:S,slots:C}),computed:{props(){return p.props},events(){return p.emits.reduce((e,t)=>(e[t]=w[t]||{})&&e,{})}}},[[`render`,x]]);function E(n,r,i,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),a(`main`,null,[o(f,{slug:`w-tree`},{default:t(()=>[...r[0]||=[s(`w-tree`,-1)]]),_:1}),o(p),o(m)])}var D=f({components:{Examples:b,Api:T}},[[`render`,E]]);export{D as default};