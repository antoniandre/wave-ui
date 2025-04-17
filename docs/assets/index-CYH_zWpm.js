import{r as m,g as w,o as b,a as l,h as f,b as a,w as n,e as t,n as L,t as h,c as g,d as I,_ as v,af as j}from"./index-B6QByf_F.js";const A={class:"w-flex wrap align-center"},E={class:"w-flex mt6"},$=["innerHTML"],B={class:"black mt2"},T={href:"https://vuejs.org/guide/essentials/watchers.html#deep-watchers",target:"_blank"};function N(o,e,u,y,k,c){const d=m("title-link"),s=m("w-tree"),i=m("example"),p=m("w-icon"),x=m("w-card"),C=m("w-flex"),S=m("alert");return b(),w("div",null,[l(d,{h2:""},{default:n(()=>e[7]||(e[7]=[t("Default")])),_:1}),l(i,null,{pug:n(()=>e[8]||(e[8]=[t('w-tree(:data="tree")')])),html:n(()=>e[9]||(e[9]=[t('<w-tree :data="tree"></w-tree>')])),js:n(()=>e[10]||(e[10]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{data:o.tree2},null,8,["data"])]),_:1}),l(d,{h2:""},{default:n(()=>e[11]||(e[11]=[t("Icons")])),_:1}),e[73]||(e[73]=f("<p>You can provide different icons for the expand button and tree items.</p><p>You can also provide icons for each item. Depending on the type of item:</p><ul><li><code>expand-icon</code>: for the expand icon.</li><li><code>expand-open-icon</code>: for the expand icon when open (if different than the <code>expand-icon</code>).</li><li><code>branch-icon</code>: if the item has children.</li><li><code>branch-open-icon</code>: if the item has children and it is open.</li><li><code>leaf-icon</code>: for items which don&#39;t contain anything.</li></ul>",3)),l(i,null,{pug:n(()=>e[12]||(e[12]=[t(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)])),html:n(()=>e[13]||(e[13]=[t(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md">
</w-tree>`)])),js:n(()=>e[14]||(e[14]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{class:"size--md",data:o.tree2,"expand-icon":"mdi mdi-plus","expand-open-icon":"mdi mdi-minus","branch-icon":"mdi mdi-folder-outline","branch-open-icon":"mdi mdi-folder-open-outline","leaf-icon":"mdi mdi-file-outline"},null,8,["data"])]),_:1}),l(d,{h3:""},{default:n(()=>e[15]||(e[15]=[t("Different icon per item")])),_:1}),e[74]||(e[74]=f(`<p>It is possible to set a specific icon in any/each item of the tree.<br>
By default, the <strong class="code">w-tree</strong> component will look for any icon in the <code>icon</code> key,
but you can override that with the <code>item-icon-key</code> prop.</p><p>It is also possible to set a specific color for the icon of any/each item of the tree.<br>
By default, the <strong class="code">w-tree</strong> component will look for any icon color in the <code>iconColor</code> key,
but you can override that with the <code>item-icon-color-key</code> prop.</p>`,2)),l(i,null,{pug:n(()=>e[16]||(e[16]=[t(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)])),html:n(()=>e[17]||(e[17]=[t(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md"></w-tree>`)])),js:n(()=>e[18]||(e[18]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{class:"size--md",data:o.tree6,"icon-color":"blue-dark1"},null,8,["data"])]),_:1}),l(d,{h3:""},{default:n(()=>e[19]||(e[19]=[t("No expand button")])),_:1}),l(i,null,{pug:n(()=>e[20]||(e[20]=[t('w-tree(:data="tree" :expand-icon="false")')])),html:n(()=>e[21]||(e[21]=[t('<w-tree :data="tree" :expand-icon="false"></w-tree>')])),js:n(()=>e[22]||(e[22]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{data:o.tree2,"expand-icon":!1},null,8,["data"])]),_:1}),l(d,{h2:""},{default:n(()=>e[23]||(e[23]=[t("Selectable")])),_:1}),l(i,null,{pug:n(()=>e[24]||(e[24]=[t('w-tree(:data="tree" selectable)')])),html:n(()=>e[25]||(e[25]=[t('<w-tree :data="tree" selectable></w-tree>')])),js:n(()=>e[26]||(e[26]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{data:o.tree1,selectable:""},null,8,["data"])]),_:1}),l(d,{h2:""},{default:n(()=>e[27]||(e[27]=[t("Counts")])),_:1}),l(i,null,{pug:n(()=>e[28]||(e[28]=[t('w-tree(:data="tree" counts)')])),html:n(()=>e[29]||(e[29]=[t('<w-tree :data="tree" counts></w-tree>')])),js:n(()=>e[30]||(e[30]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{data:o.tree1,counts:""},null,8,["data"])]),_:1}),l(d,{h2:""},{default:n(()=>e[31]||(e[31]=[t("No transition")])),_:1}),l(i,null,{pug:n(()=>e[32]||(e[32]=[t('w-tree(:data="tree" no-transition)')])),html:n(()=>e[33]||(e[33]=[t('<w-tree :data="tree" no-transition></w-tree>')])),js:n(()=>e[34]||(e[34]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{data:o.tree1,"no-transition":""},null,8,["data"])]),_:1}),l(d,{h2:""},{default:n(()=>e[35]||(e[35]=[t("Unexpandable empty branches")])),_:1}),l(i,null,{pug:n(()=>e[39]||(e[39]=[t('w-tree(:data="tree" unexpandable-empty)')])),html:n(()=>e[40]||(e[40]=[t('<w-tree :data="tree" unexpandable-empty></w-tree>')])),js:n(()=>e[41]||(e[41]=[t(`data: () => ({
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
`)])),default:n(()=>[a("div",A,[a("div",null,[e[36]||(e[36]=a("div",{class:"title3"},"Normal",-1)),l(s,{data:o.tree1},null,8,["data"])]),l(p,{class:"grey-light3 mx12",rotate90a:"",xl:""},{default:n(()=>e[37]||(e[37]=[t("wi-arrow-down")])),_:1}),a("div",null,[e[38]||(e[38]=a("div",{class:"title3"},"unexpandable-empty",-1)),l(s,{data:o.tree1,"unexpandable-empty":""},null,8,["data"])])])]),_:1}),l(d,{h2:""},{default:n(()=>e[42]||(e[42]=[t("V-model")])),_:1}),e[75]||(e[75]=a("p",null,[t("When the tree is "),a("code",null,"selectable"),t(", you can use the "),a("code",null,"v-model"),t(" to get the selected item.")],-1)),e[76]||(e[76]=a("p",null,"Click on a tree item to select it.",-1)),l(i,null,{pug:n(()=>e[44]||(e[44]=[t('w-tree(v-model="selection" :data="tree" selectable)')])),html:n(()=>e[45]||(e[45]=[t('<w-tree v-model="selection" :data="tree" selectable></w-tree>')])),js:n(()=>e[46]||(e[46]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{modelValue:o.selection,"onUpdate:modelValue":e[0]||(e[0]=r=>o.selection=r),data:o.tree1,selectable:""},null,8,["modelValue","data"]),a("div",E,[e[43]||(e[43]=a("strong",{class:"mr3"},"Selection:",-1)),a("pre",{class:L(["pa2",o.$store.state.darkMode?"grey-dark6--bg":"orange-light6--bg"])},h(o.selection),3)])]),_:1}),l(d,{h2:""},{default:n(()=>e[47]||(e[47]=[t("Events")])),_:1}),e[77]||(e[77]=f('<p>Multiple events are fired from the <strong class="code">w-tree</strong> component:</p><ul class="lh0"><li><code>before-open</code>: fired as soon as the user clicks a tree item that is expandable and before the subitems are revealed.</li><li class="mt1"><code>open</code>: fired after a user clicks a tree item that is expandable, and after the expand animation.</li><li class="mt1"><code>before-close</code>: fired as soon as the user clicks a tree item to close its subtree.</li><li class="mt1"><code>close</code>: fired after a user clicks a tree item to close its subtree, and after the collapse animation.</li><li class="mt1"><code>click</code>: fired when the user clicks any tree item.</li><li class="mt1"><code>select</code>: fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li><li class="mt1"><code>update:model-value</code>: (or <code>input</code> in Vue 2.x) fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li></ul>',2)),l(i,null,{pug:n(()=>e[48]||(e[48]=[t(`w-tree(
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event)"
  @select="log('@select', $event)"
  selectable)`)])),html:n(()=>e[49]||(e[49]=[t(`<w-tree
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event
  @select="log('@select', $event)"
  selectable>
</w-tree>`)])),js:n(()=>e[50]||(e[50]=[t(`data: () => ({
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
`)])),default:n(()=>[l(C,{gap:"12"},{default:n(()=>[l(s,{data:o.tree2,onBeforeOpen:e[1]||(e[1]=r=>c.log("@before-open",r)),onOpen:e[2]||(e[2]=r=>c.log("@open",r)),onBeforeClose:e[3]||(e[3]=r=>c.log("@before-close",r)),onClose:e[4]||(e[4]=r=>c.log("@close",r)),onClick:e[5]||(e[5]=r=>c.log("@click",r)),onSelect:e[6]||(e[6]=r=>c.log("@select",r)),selectable:""},null,8,["data"]),l(x,{"bg-color":o.$store.state.darkMode?"grey-dark6":"amber-light6",title:"Event log","title-class":o.$store.state.darkMode?"grey-dark5--bg":"amber-light5--bg"},{default:n(()=>[a("pre",{innerHTML:o.logs},null,8,$)]),_:1},8,["bg-color","title-class"])]),_:1})]),_:1}),l(d,{h3:""},{default:n(()=>e[51]||(e[51]=[t("Real-case scenario: Renaming a leaf item on click")])),_:1}),l(i,null,{pug:n(()=>e[52]||(e[52]=[t('w-tree(:data="tree3" @click="renameLeafItem" deep-reactivity)')])),html:n(()=>e[53]||(e[53]=[t(`<w-tree
  :data="tree"
  @click="renameLeafItem"
  deep-reactivity>
</w-tree>`)])),js:n(()=>e[54]||(e[54]=[t(`data: () => ({
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
}`)])),default:n(()=>[l(s,{data:o.tree3,onClick:c.renameLeafItem,"deep-reactivity":""},null,8,["data","onClick"])]),_:1}),l(S,{tip:""},{default:n(()=>[e[61]||(e[61]=a("strong",{class:"black"},"Note on reactivity",-1)),a("p",B,[e[57]||(e[57]=t(`By default the tree items key-value pairs will not be watched as this is a more expensive
operation. This means that if you want to have reactivity when you modify a key or value,
like the label, you will need to add the `)),e[58]||(e[58]=a("code",null,"deep-reactivity",-1)),e[59]||(e[59]=t(" option.")),e[60]||(e[60]=a("br",null,null,-1)),a("a",T,[e[56]||(e[56]=t("Read on deep watchers on the Vue.js official documentation")),l(p,{class:"ml1"},{default:n(()=>e[55]||(e[55]=[t("mdi mdi-open-in-new")])),_:1})])])]),_:1}),l(d,{h2:""},{default:n(()=>e[62]||(e[62]=[t("Custom item (icon + label)")])),_:1}),e[78]||(e[78]=a("p",null,[t("If you need to customize the layout of the item label and/or icon, you can use the "),a("code",null,"#item"),t(" slot.")],-1)),l(i,null,{pug:n(()=>e[66]||(e[66]=[t(`w-tree.lh5(:data="tree")
  template(#item="{ item, open }")
    span `+h("{{ item.label }}")+`
    w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
    w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
    w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline`)])),html:n(()=>e[67]||(e[67]=[t(`<w-tree :data="tree">
  <template #item="{ item, open }">
      <span>`+h("{{ item.label }}")+`</span>
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
</w-tree>`)])),js:n(()=>e[68]||(e[68]=[t(`data: () => ({
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
`)])),default:n(()=>[l(s,{class:"lh5",data:o.tree4},{item:n(({item:r,open:H})=>[a("span",null,h(r.label),1),r.status==="error"?(b(),g(p,{key:0,class:"ml1","bg-color":"error",xs:""},{default:n(()=>e[63]||(e[63]=[t("mdi mdi-close")])),_:1})):r.status==="success"?(b(),g(p,{key:1,class:"ml1","bg-color":"success",xs:""},{default:n(()=>e[64]||(e[64]=[t("mdi mdi-check")])),_:1})):r.status==="syncing"?(b(),g(p,{key:2,class:"ml1","bg-color":"warning",xs:""},{default:n(()=>e[65]||(e[65]=[t("mdi mdi-clock-outline")])),_:1})):I("",!0)]),_:1},8,["data"])]),_:1}),l(d,{h2:""},{default:n(()=>e[69]||(e[69]=[t("Expand all, by default")])),_:1}),l(i,null,{pug:n(()=>e[70]||(e[70]=[t('w-tree(:data="tree" expand-all)')])),html:n(()=>e[71]||(e[71]=[t('<w-tree :data="tree" expand-all></w-tree>')])),js:n(()=>e[72]||(e[72]=[t(`data: () => ({
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
})`)])),default:n(()=>[l(s,{data:o.tree5,"expand-all":""},null,8,["data"])]),_:1})])}const D={data:()=>({tree1:[{label:"Branch 1",children:[{label:"Leaf 1"},{label:"Leaf 2"},{label:"Leaf 3"}]},{label:"Branch 2",branch:!0},{label:"Leaf 1"},{label:"Leaf 2"}],tree2:[{label:"src",children:[{label:"assets",children:[{label:"wave.svg"}]},{label:"views",branch:!0},{label:"app.vue"},{label:"router.js"},{label:"main.js"},{label:"scss",children:[{label:"index.scss"},{label:"_variables.scss"},{label:"_base.scss"}]},{label:"store.js"}]},{label:".editorconfig"},{label:".gitignore"},{label:".npmrc"},{label:"index.html"},{label:"jsconfig.json"},{label:"LICENSE"},{label:"package.json"},{label:"pnpm-lock.yaml"},{label:"postcss.config.js"},{label:"README.md"},{label:"vite.config.js"}],tree3:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub item 2"}]},{label:"Item 2"}],tree4:[{label:"Item 1",children:[{label:"Sub item 1",status:"success"},{label:"Sub item 2",status:"error"}]},{label:"Item 2",status:"syncing"}],tree5:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub Item 1",children:[{label:"Sub Sub item 1"},{label:"Sub Sub item 2"}]},{label:"Sub item 2"}]},{label:"Item 2"}],tree6:[{label:"src",icon:"mdi mdi-code-not-equal-variant",iconColor:"green",children:[{label:"assets",icon:"mdi mdi-star",iconColor:"yellow-dark1",children:[{label:"wave.svg",icon:"mdi mdi-svg",iconColor:"yellow-dark1"}]},{label:"views",branch:!0,icon:"mdi mdi-code-greater-than",iconColor:"orange"},{label:"app.vue",icon:"mdi mdi-vuejs",iconColor:"green"},{label:"router.js",icon:"mdi mdi-routes",iconColor:"green"},{label:"main.js",icon:"mdi mdi-language-javascript",iconColor:"yellow-dark1"},{label:"scss",icon:"mdi mdi-sass",iconColor:"pink",children:[{label:"index.scss",icon:"mdi mdi-sass",iconColor:"pink"},{label:"_variables.scss",icon:"mdi mdi-sass",iconColor:"pink"},{label:"_base.scss",icon:"mdi mdi-sass",iconColor:"pink"}]},{label:"store.js",icon:"mdi mdi-language-javascript",iconColor:"yellow-dark1"}]},{label:".editorconfig",icon:"mdi mdi-cog",iconColor:"grey"},{label:".gitignore",icon:"mdi mdi-git",iconColor:"red"},{label:".npmrc",icon:"mdi mdi-npm",iconColor:"red"},{label:"index.html",icon:"mdi mdi-language-html5",iconColor:"red"},{label:"jsconfig.json",icon:"mdi mdi-code-json",iconColor:"yellow-dark1"},{label:"LICENSE",icon:"mdi mdi-license",iconColor:"red"},{label:"package.json",icon:"mdi mdi-nodejs",iconColor:"lime-dark1"},{label:"pnpm-lock.yaml",icon:"mdi mdi-code-json",iconColor:"yellow-dark1"},{label:"postcss.config.js",icon:"mdi mdi-cog",iconColor:"red"},{label:"README.md",icon:"mdi mdi-information-outline",iconColor:"blue"},{label:"vite.config.js",icon:"mdi mdi-flash",iconColor:"amber"}],selection:null,logs:[]}),methods:{renameLeafItem({item:o}){o.children||(o.label="Hello!")},log(...o){console.log(...o);const[e,u]=o;this.logs=`<strong>${e}:</strong><br>${JSON.stringify(u,null,"  ")}`}}},V=v(D,[["render",N]]);function M(o,e,u,y,k,c){const d=m("title-link"),s=m("alert"),i=m("component-api");return b(),w("div",null,[e[2]||(e[2]=a("div",{class:"w-divider my12"},null,-1)),l(d,{class:"title1",h2:""},{default:n(()=>e[0]||(e[0]=[t("API")])),_:1}),l(s,{class:"mb6",info:""},{default:n(()=>e[1]||(e[1]=[t("The missing props descriptions will be added shortly (all the props are already listed).")])),_:1}),l(i,{class:"mt0",items:c.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(i,{items:o.slots,title:"Slots"},null,8,["items"]),l(i,{items:c.events,title:"Events"},null,8,["items"])])}const R={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This value gets updated with the tree selected item when using a <code>v-model</code> and when <code>selectable</code> is set to <code>true</code>.',data:`The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[
  {
    label: 'Item 1',
    children: [
      { label: 'Child 1' },
      { label: 'Child 2' }
    ]
  },
  { label: 'Item 2' }
]</pre>`,depth:!1,branchClass:"Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.",leafClass:"Adds the specified CSS class to all the leaf-type items.<br>Any item that that don't contain children is a leaf.",branchIcon:"Provide an icon for all the branch items.",branchOpenIcon:"Provide an icon for any branch item that is open.",leafIcon:"Provide an icon for all the leaf items.",expandIcon:"Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).",expandOpenIcon:"Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.",expandAll:"Expand all the expandable branches of the tree by default, including sub-items.",deepReactivity:'By default the tree items key-value pairs will not be watched as this is a more expensive operation. This means that if you want to have reactivity when you modify a key or value, like the label, you will need to add the <code>deep-reactivity</code> option.<br><a href="https://vuejs.org/guide/essentials/watchers.html#deep-watchers" target="_blank">Read on deep watchers on the Vue.js official documentation<i class="ml1 w-icon mdi mdi-open-in-new"></i></a>',unexpandableEmpty:"When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).",disabled:"When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).",noTransition:"When set to <code>true</code>, disables the expand/collapse transition.",selectable:"Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.",counts:"Display the branch children counts on each branch item.",iconColor:'Define a color for all the items icons.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',itemIconKey:"Specifies the name of the optional attribute in each item object where to find the item's icon.",itemIconColorKey:`Specifies the name of the optional attribute in each item object where to find the item's icon color.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,itemRouteKey:"Specifies the name of the optional attribute in each item object where to find the item's route. It can be an internal or external link.<br>If the link is internal and Vue Router is detected, it will use a &lt;router-link&gt; tag.",itemDisabledKey:"Specifies the name of the optional attribute in each item object, that will disable the interactivity of this item (expand, collapse selection, click, tab).",itemOpenKey:"Specifies the name of the optional attribute in each item object, that will make this item open by default.",itemLabelKey:"Specifies the name of the label attribute in each item object. <code>label</code> by default."},W={item:{description:"Provide a custom template for all the items (includes the item icon if any, label, and count if active).",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}}},P={"before-close":{description:"Fired right before closing a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},"before-open":{description:"Fired right before opening a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},click:{description:"Fired on tree item click and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`,e:"The associated native click event."}},close:{description:"Fired after closing a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},open:{description:"Fired after opening a tree branch item and exposes the following parameters:",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},select:{description:"test",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",selected:"A boolean representing the selected state of the tree item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}},"update:model-value":{description:"test",params:{item:"The current tree item object.",depth:"An integer representing the item's depth in the tree. Starts at 0 for the root.",open:"When applicable, a boolean representing the open state of the tree branch item.",path:`An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.`}}},z={data:()=>({propsDescs:R,slots:W}),computed:{props(){return j.props},events(){return j.emits.reduce((o,e)=>(o[e]=P[e]||{})&&o,{})}}},K=v(z,[["render",M]]);function O(o,e,u,y,k,c){const d=m("ui-component-title"),s=m("examples"),i=m("api");return b(),w("main",null,[l(d,{slug:"w-tree"},{default:n(()=>e[0]||(e[0]=[t("w-tree")])),_:1}),l(s),l(i)])}const F={components:{Examples:V,Api:K}},U=v(F,[["render",O]]);export{U as default};
