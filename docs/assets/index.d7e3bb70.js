import{r as b,o as m,f as g,a as l,w as e,b as n,d as i,h,c as f,e as L,i as y,_ as v,ae as x}from"./index.65420a29.js";const I=y("<p>You can provide different icons for the expand button and tree items.</p><p>You can also provide icons for each item. Depending on the type of item:</p><ul><li><code>expand-icon</code>: for the expand icon.</li><li><code>expand-open-icon</code>: for the expand icon when open (if different than the <code>expand-icon</code>).</li><li><code>branch-icon</code>: if the item has children.</li><li><code>branch-open-icon</code>: if the item has children and it is open.</li><li><code>leaf-icon</code>: for items which don&#39;t contain anything.</li></ul>",3),E={class:"w-flex wrap align-center"},S=i("div",{class:"title3"},"Normal",-1),C=i("div",{class:"title3"},"unexpandable-empty",-1),$=i("p",null,[n("When the tree is "),i("code",null,"selectable"),n(", you can use the "),i("code",null,"v-model"),n(" to get the selected item.")],-1),B=i("p",null,"Click on a tree item to select it.",-1),N={class:"w-flex mt6"},A=i("strong",{class:"mr3"},"Selection:",-1),D={class:"orange-light6--bg pa2"},V=y('<p>Multiple events are fired from the <strong class="code">w-tree</strong> component:</p><ul class="lh0"><li><code>before-open</code>: fired as soon as the user clicks a tree item that is expandable and before the subitems are revealed.</li><li class="mt1"><code>open</code>: fired after a user clicks a tree item that is expandable, and after the expand animation.</li><li class="mt1"><code>before-close</code>: fired as soon as the user clicks a tree item to close its subtree.</li><li class="mt1"><code>close</code>: fired after a user clicks a tree item to close its subtree, and after the collapse animation.</li><li class="mt1"><code>click</code>: fired when the user clicks any tree item.</li><li class="mt1"><code>select</code>: fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li><li class="mt1"><code>update:model-value</code>: (or <code>input</code> in Vue 2.x) fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li></ul>',2),M=["innerHTML"],T=i("p",null,[n("If you need to customize the layout of the item label, you can use the "),i("code",null,"#item-label"),n(" slot.")],-1);function P(a,t,u,_,w,d){const r=b("title-link"),c=b("w-tree"),s=b("example"),p=b("w-icon"),k=b("w-card"),j=b("w-flex");return m(),g("div",null,[l(r,{h2:""},{default:e(()=>[n("Default")]),_:1}),l(s,null,{pug:e(()=>[n('w-tree(:data="tree")')]),html:e(()=>[n('<w-tree :data="tree"></w-tree>')]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree2},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Icons")]),_:1}),I,l(s,null,{pug:e(()=>[n(`w-tree(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)]),html:e(()=>[n(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"></w-tree>`)]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree2,"expand-icon":"mdi mdi-plus","expand-open-icon":"mdi mdi-minus","branch-icon":"mdi mdi-folder-outline","branch-open-icon":"mdi mdi-folder-open-outline","leaf-icon":"mdi mdi-file-outline"},null,8,["data"])]),_:1}),l(r,{h3:""},{default:e(()=>[n("No expand button")]),_:1}),l(s,null,{pug:e(()=>[n(`w-tree(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)]),html:e(()=>[n(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"></w-tree>`)]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree2,"expand-icon":!1},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Selectable")]),_:1}),l(s,null,{pug:e(()=>[n('w-tree(:data="tree" selectable)')]),html:e(()=>[n('<w-tree :data="tree" selectable></w-tree>')]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree1,selectable:""},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Counts")]),_:1}),l(s,null,{pug:e(()=>[n('w-tree(:data="tree" counts)')]),html:e(()=>[n('<w-tree :data="tree" counts></w-tree>')]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree1,counts:""},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("No transition")]),_:1}),l(s,null,{pug:e(()=>[n('w-tree(:data="tree" no-transition)')]),html:e(()=>[n('<w-tree :data="tree" no-transition></w-tree>')]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree1,"no-transition":""},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Unexpandable empty branches")]),_:1}),l(s,null,{pug:e(()=>[n('w-tree(:data="tree" unexpandable-empty)')]),html:e(()=>[n('<w-tree :data="tree" unexpandable-empty></w-tree>')]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[i("div",E,[i("div",null,[S,l(c,{data:a.tree1},null,8,["data"])]),l(p,{class:"grey-light3 mx12",rotate90a:"",xl:""},{default:e(()=>[n("wi-arrow-down")]),_:1}),i("div",null,[C,l(c,{data:a.tree1,"unexpandable-empty":""},null,8,["data"])])])]),_:1}),l(r,{h2:""},{default:e(()=>[n("V-model")]),_:1}),$,B,l(s,null,{pug:e(()=>[n('w-tree(v-model="selection" :data="tree" selectable)')]),html:e(()=>[n('<w-tree v-model="selection" :data="tree" selectable></w-tree>')]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{modelValue:a.selection,"onUpdate:modelValue":t[0]||(t[0]=o=>a.selection=o),data:a.tree1,selectable:""},null,8,["modelValue","data"]),i("div",N,[A,i("pre",D,h(a.selection),1)])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Events")]),_:1}),V,l(s,null,{pug:e(()=>[n(`w-tree(
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event)"
  @select="log('@select', $event)"
  selectable)`)]),html:e(()=>[n(`<w-tree
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event
  @select="log('@select', $event)"
  selectable)">
</w-tree>`)]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(j,{gap:"12"},{default:e(()=>[l(c,{data:a.tree2,onBeforeOpen:t[1]||(t[1]=o=>d.log("@before-open",o)),onOpen:t[2]||(t[2]=o=>d.log("@open",o)),onBeforeClose:t[3]||(t[3]=o=>d.log("@before-close",o)),onClose:t[4]||(t[4]=o=>d.log("@close",o)),onClick:t[5]||(t[5]=o=>d.log("@click",o)),onSelect:t[6]||(t[6]=o=>d.log("@select",o)),selectable:""},null,8,["data"]),l(k,{"bg-color":"amber-light6",title:"Event log","title-class":"amber-light5--bg"},{default:e(()=>[i("pre",{innerHTML:a.logs},null,8,M)]),_:1})]),_:1})]),_:1}),l(r,{h3:""},{default:e(()=>[n("Real-case scenario: Renaming a leaf item on click")]),_:1}),l(s,null,{pug:e(()=>[n('w-tree(:data="tree3" @click="renameLeafItem" depth-reactivity)')]),html:e(()=>[n(`<w-tree
  :data="tree"
  @click="renameLeafItem"
  depth-reactivity>
</w-tree>`)]),js:e(()=>[n(`data: () => ({
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
`)]),default:e(()=>[l(c,{data:a.tree3,onClick:d.renameLeafItem,"depth-reactivity":""},null,8,["data","onClick"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Custom item label")]),_:1}),T,l(s,null,{pug:e(()=>[n(`w-tree.lh5(:data="tree4" @click="renameLeafItem")
  template(#item-label="{ item, open }")
    span `+h("{{ item.label }}")+`
    w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
    w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
    w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline`,1)]),html:e(()=>[n(`<w-tree
  :data="tree"
  @click="renameLeafItem">
</w-tree>`)]),js:e(()=>[n(`data: () => ({
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
}`)]),default:e(()=>[l(c,{class:"lh5",data:a.tree4,onClick:d.renameLeafItem},{"item-label":e(({item:o,open:K})=>[i("span",null,h(o.label),1),o.status==="error"?(m(),f(p,{key:0,class:"ml1","bg-color":"error",xs:""},{default:e(()=>[n("mdi mdi-close")]),_:1})):o.status==="success"?(m(),f(p,{key:1,class:"ml1","bg-color":"success",xs:""},{default:e(()=>[n("mdi mdi-check")]),_:1})):o.status==="syncing"?(m(),f(p,{key:2,class:"ml1","bg-color":"warning",xs:""},{default:e(()=>[n("mdi mdi-clock-outline")]),_:1})):L("",!0)]),_:1},8,["data","onClick"])]),_:1})])}const R={data:()=>({tree1:[{label:"Branch 1",children:[{label:"Leaf 1"},{label:"Leaf 2"},{label:"Leaf 3"}]},{label:"Branch 2",branch:!0},{label:"Leaf 1"},{label:"Leaf 2"}],tree2:[{label:"src",children:[{label:"assets",children:[{label:"wave.svg"}]},{label:"views",branch:!0},{label:"index.vue"},{label:"router.vue"},{label:"main.js"},{label:"scss",children:[{label:"index.scss"},{label:"_variables.scss"},{label:"_base.scss"}]},{label:"store.js"}]},{label:".editorconfig"},{label:".gitignore"},{label:"index.html"},{label:"jsconfig.json"},{label:"LICENSE"},{label:"package.json"},{label:"pnpm-lock.yaml"},{label:"postcss.config.js"},{label:"README.md"},{label:"vite.config.js"}],tree3:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub item 2"}]},{label:"Item 2"}],tree4:[{label:"Item 1",children:[{label:"Sub item 1",status:"success"},{label:"Sub item 2",status:"error"}]},{label:"Item 2",status:"syncing"}],selection:null,logs:[]}),methods:{renameLeafItem({item:a}){a.children||(a.label="Hello!")},log(...a){console.log(...a);const[t,u]=a;this.logs=`<strong>${t}:</strong><br>${JSON.stringify(u,null,"  ")}`}}},H=v(R,[["render",P]]),O=i("div",{class:"w-divider my12"},null,-1);function W(a,t,u,_,w,d){const r=b("title-link"),c=b("alert"),s=b("component-api");return m(),g("div",null,[O,l(r,{class:"title1",h2:""},{default:e(()=>[n("API")]),_:1}),l(c,{class:"mb6",info:""},{default:e(()=>[n("The missing props descriptions will be added shortly (all the props are already listed).")]),_:1}),l(s,{class:"mt0",items:d.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(s,{items:a.slots,title:"Slots"},null,8,["items"]),l(s,{items:d.events,title:"Events"},null,8,["items"])])}const U={data:`The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[
  {
    label: 'Item 1',
    children: [
      { label: 'Child 1' },
      { label: 'Child 2' }
    ]
  },
  { label: 'Item 2' }
]</pre>`,depth:!1,branchClass:"Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.",leafClass:"Adds the specified CSS class to all the leaf-type items.<br>Any item that that don't contain children is a leaf.",branchIcon:"Provide an icon for all the branch items.",branchOpenIcon:"Provide an icon for any branch item that is open.",leafIcon:"Provide an icon for all the leaf items.",expandIcon:"Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).",expandOpenIcon:"Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.",expandAll:"",unexpandableEmpty:"When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).",disabled:"When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).",noTransition:"When set to <code>true</code>, disables the expand/collapse transition.",selectable:"Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.",counts:"Display the branch children counts on each branch item."},Y={},z={},J={data:()=>({propsDescs:U,slots:Y}),computed:{props(){return x.props},events(){return x.emits.reduce((a,t)=>(a[t]=z[t]||{})&&a,{})}}},q=v(J,[["render",W]]);function F(a,t,u,_,w,d){const r=b("ui-component-title"),c=b("examples"),s=b("api");return m(),g("main",null,[l(r,{slug:"w-tree","in-progress":""},{default:e(()=>[n("w-tree")]),_:1}),l(c),l(s)])}const G={components:{Examples:H,Api:q}},X=v(G,[["render",F]]);export{X as default};
