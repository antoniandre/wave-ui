import{n as m,I as c}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Basic")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items}})],1),t("title-link",{attrs:{h2:""}},[e._v("When there is no data")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:[]}}),t("br"),t("w-table",{attrs:{headers:e.table1.headers,items:[]},scopedSlots:e._u([{key:"no-data",fn:function(){return[e._v("\u{1F44C} There is no data! \u{1F44C}")]},proxy:!0}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Alignments")]),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table2.headers,items:e.table2.items}})],1),t("title-link",{attrs:{h2:"",slug:"example--no-headers"}},[e._v("No headers")]),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table.items" :headers="table.headers" no-headers)')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"no-headers":""}})],1),t("title-link",{attrs:{h2:"",slug:"example--fixed-headers"}},[e._v("Fixed headers")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{staticStyle:{height:"250px"},attrs:{headers:e.table3.headers,items:e.table3.items,"fixed-headers":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Built-in column resizing")]),e._m(3),t("ssh-pre",{attrs:{language:"css"}},[e._v(`.w-table__cell {
  white-space: nowrap;
}
`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table7.headers,items:e.table7.items,"resizable-columns":""}})],1),t("title-link",{attrs:{h3:""}},[e._v("Saving the table layout in localStorage")]),e._m(4),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
}),

methods: {
  onColumnResize ({ index, widths }) {
    widths.forEach((width, i) => (this.table.headers[i].width = width))

    // Save the table layout in localStorage.
    localStorage.tableWidths = widths
  }
},

mounted () {
  // Reapply the saved table layout.
  localStorage.tableWidths?.split(',').forEach((width, i) => (this.table.headers[i].width = width))
}
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table8.headers,items:e.table8.items,"resizable-columns":""},on:{"column-resize":e.onColumnResize}})],1),t("title-link",{attrs:{h2:""}},[e._v("Toggling column visibility")]),t("p",[e._v(`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+e._s("{{ header.hidden ? '-off' : ''}}")+`
  | `+e._s("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+e._s("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+e._s("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', hidden: false },
      { label: 'First name', key: 'firstName', hidden: false },
      { label: 'Last name', key: 'lastName', hidden: false }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[e._v("Toggle columns:"),e._l(e.table6.headers,function(n,s){return t("w-tag",{key:s,staticClass:"ma1",attrs:{"bg-color":n.hidden?"grey-light4":"primary"},on:{click:function(i){i.stopPropagation(),n.hidden=!n.hidden}}},[t("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-eye"+e._s(n.hidden?"-off":""))]),e._v(e._s(n.label))],1)}),t("w-table",{staticClass:"mt2",attrs:{headers:e.table6.headers.filter(function(n){return!n.hidden}),items:e.table6.items}})],2),t("title-link",{attrs:{h2:""}},[e._v("Initial Sorting")]),e._m(5),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items" :sort.sync="table.sort")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  :sort.sync="table.sort">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    sort: '+firstName'
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,sort:e.table1.sort},on:{"update:sort":function(n){return e.$set(e.table1,"sort",n)}}})],1),t("title-link",{attrs:{h2:""}},[e._v("Filtering")]),e._m(6),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.w-flex.wrap.mb3
  w-button.mr2.mb1(
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0")
    | No filter
  w-button.mr2.mb1(
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1")
    | Last name starting with 'M'
  w-button.mr2.mb1(
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2")
    | ID >= 10
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="w-flex wrap mb3">
  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0">
    No filter
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1">
    Last name starting with 'M'
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2">
    ID >= 10
  </w-button>
</div>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    filters: [
      null,
      item => item.lastName[0] === 'M',
      item => item.id >= 10
    ],
    activeFilter: 0
  }
})
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex wrap mb3"},[t("w-button",{staticClass:"mr2 mb1",attrs:{round:"",outline:e.table3.activeFilter!==0},on:{click:function(n){e.table3.activeFilter=0}}},[e._v("No filter")]),t("w-button",{staticClass:"mr2 mb1",attrs:{round:"",outline:e.table3.activeFilter!==1},on:{click:function(n){e.table3.activeFilter=1}}},[e._v("Last name starting with 'M'")]),t("w-button",{staticClass:"mr2 mb1",attrs:{round:"",outline:e.table3.activeFilter!==2},on:{click:function(n){e.table3.activeFilter=2}}},[e._v("ID >= 10")])],1),t("w-table",{attrs:{headers:e.table3.headers,items:e.table3.items,filter:e.table3.filters[e.table3.activeFilter]}})],1),t("title-link",{attrs:{h3:""}},[e._v("Global filter")]),e._m(7),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    keyword: '',
    keywordFilter: keyword => item => {
      // Concatenate all the columns into a single string for a faster lookup.
      const allTheColumns = \`\${item.id} \${item.firstName} \${item.lastName}\`

      // Lookup the keyword variable in the string with case-insensitive flag.
      return new RegExp(keyword, 'i').test(allTheColumns)
    }
  }
})`)]},proxy:!0}])},[t("w-input",{staticClass:"mb3",attrs:{placeholder:"Search anything...","inner-icon-left":"wi-search"},model:{value:e.table4.keyword,callback:function(n){e.$set(e.table4,"keyword",n)},expression:"table4.keyword"}}),t("w-table",{attrs:{headers:e.table4.headers,items:e.table4.items,filter:e.table4.keywordFilter(e.table4.keyword)}})],1),t("alert",{attrs:{tip:""}},[t("strong",[e._v(`If you don't need the RegExp power, you can simply return
`),t("code",[e._v("allTheColumns.toLowerCase().includes(keyword)")]),e._v(` instead.
`)]),t("br"),t("br"),e._v(`But the real power of using a regular expression
`),t("w-icon",{staticClass:"red mr1",attrs:{size:"0.9em"}},[e._v("mdi mdi-heart")]),e._v(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),t("code",[e._v("|")]),e._v(" etc."),t("br"),e._v(`
You could also match only the full words by replacing `),t("code",[e._v("new RegExp(keyword, 'i')")]),e._v(` with
`),t("code",[e._v("new RegExp(`\\\\b${keyword}\\\\b`, 'i')")]),e._v(" (it would return a result when typing "),t("code",[e._v("floretta")]),e._v(`
but not `),t("code",[e._v("florett")]),e._v(" for instance).")],1),t("title-link",{attrs:{h2:""}},[e._v("Loading state")]),e._m(8),t("w-button",{staticClass:"mb2",attrs:{disabled:e.table1.loading},on:{click:e.reload}},[t("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-sync")]),e._v("reload")],1),t("title-link",{attrs:{h3:""}},[e._v("Simple table - no set height")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,loading:e.table1.loading}})],1),t("title-link",{attrs:{h3:"",slug:"loading-with-fixed-header"}},[e._v("Table with fixed header & set height of 200px")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]},proxy:!0}])},[t("w-table",{staticStyle:{height:"200px"},attrs:{headers:e.table1.headers,items:e.table3.items,"fixed-headers":"",loading:e.table1.loading}})],1),t("title-link",{attrs:{h2:"",slug:"pagination"}},[e._v("Pagination"),t("w-tag",{staticClass:"ml2 text-bold",attrs:{round:"",color:"warning",outline:"",sm:""}},[e._v("COMING SOON")])],1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[e._v("Coming soon.")]),t("title-link",{attrs:{h2:""}},[e._v("Rows selection")]),t("p",[e._v("Click a row to see it highlighted and get information about the selected item.")]),e._m(9),t("title-link",{attrs:{h3:"",slug:"example--selectable-rows"}},[e._v("The "),t("span",{staticClass:"code"},[e._v("selectable-rows")]),e._v(" prop")]),e._m(10),t("title-link",{attrs:{h3:"",slug:"example--force-selection"}},[e._v("The "),t("span",{staticClass:"code"},[e._v("force-selection")]),e._v(" prop")]),e._m(11),t("title-link",{attrs:{h3:"",slug:"example--row-select"}},[e._v("The "),t("span",{staticClass:"code"},[e._v("@row-select")]),e._v(" event")]),e._m(12),e._m(13),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex.mb4(wrap)
  w-radios.mr6(v-model="table.selectableRows" :items="selectableRowsOptions")
  w-button.my3(
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection")
    w-icon.mr2(v-if="table.forceSelection") wi-check
    | Force selection

w-table(
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event")

.mt4.title4 Selection info:
pre `+e._s("{{ selectionInfo }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap class="mb4">
  <w-radios
    v-model="table.selectableRows"
    :items="selectableRowsOptions"
    class="mr6">
  </w-radios>
  <w-button
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection"
    class="my3">
    <w-icon v-if="table.forceSelection" class="mr2">
      wi-check
    </w-icon>
    Force selection
  </w-button>
</w-flex>

<w-table
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event">
</w-table>

<div class="title4 mt4">Selection info:</div>
<pre>`+e._s("{{ selectionInfo }}")+"</pre>")]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectableRows: true,
    forceSelection: false
  },
  selectableRowsOptions: [
    { label: '<code class="mr2">:selectable-row="false"</code> (default)', value: false },
    { label: '<code>selectable-row</code>', value: true },
    { label: '<code>:selectable-row="1"</code>', value: 1 }
  ],
  selectionInfo: {}
})
`)]},proxy:!0}])},[t("w-flex",{staticClass:"mb4",attrs:{wrap:""}},[t("w-radios",{staticClass:"mr6",attrs:{items:e.selectableRowsOptions},model:{value:e.table1.selectableRows,callback:function(n){e.$set(e.table1,"selectableRows",n)},expression:"table1.selectableRows"}}),t("w-button",{staticClass:"my3",attrs:{round:"",outline:!e.table1.forceSelection},on:{click:function(n){e.table1.forceSelection=!e.table1.forceSelection}}},[e.table1.forceSelection?t("w-icon",{staticClass:"mr2"},[e._v("wi-check")]):e._e(),e._v("Force selection")],1)],1),t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"selectable-rows":e.table1.selectableRows,"force-selection":e.table1.forceSelection},on:{"row-select":function(n){e.selectionInfo=n}}}),t("div",{staticClass:"mt4 title4"},[e._v("Selection info:")]),t("pre",[e._v(e._s(e.selectionInfo))])],1),t("title-link",{attrs:{h3:""}},[e._v("Updating the selected rows programmatically")]),t("p",[e._v(`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`)]),t("alert",{attrs:{tip:""}},[t("ul",[t("li",[t("strong",[e._v("In Vue 2")]),e._v(", you can do 2-way binding on any variable other than the "),t("strong",{staticClass:"code"},[e._v("v-model")]),e._v(" using the "),t("code",[e._v(".sync")]),e._v(" modifier.")]),t("li",[t("strong",[e._v("In Vue 3")]),e._v(", multiple "),t("strong",{staticClass:"code"},[e._v("v-model")]),e._v(" are supported in order to achieve 2-way binding. So you don't need "),t("code",[e._v(".sync")]),e._v(".")])])]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  :selected-rows.sync="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+e._s("{{ table.selectedRows }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  :selected-rows.sync="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+e._s("{{ table.selectedRows }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectedRows: [2, 4]
  }
})`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"selectable-rows":"","selected-rows":e.table1.selectedRows},on:{"update:selectedRows":function(n){return e.$set(e.table1,"selectedRows",n)},"update:selected-rows":function(n){return e.$set(e.table1,"selectedRows",n)}}}),t("div",{staticClass:"mt4"},[e._v("Selected rows:"),t("code",{staticClass:"ml2"},[e._v(e._s(e.table1.selectedRows))])])],1),t("alert",{attrs:{info:""}},[e._v("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),t("br"),e._v(`
By default the expanded rows array will use an `),t("code",[e._v("id")]),e._v(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),t("code",[e._v("uid-key")]),e._v(` prop, which is set to "id" by default.
`)]),t("title-link",{attrs:{h2:"",slug:"example--expandable-rows"}},[e._v("Expandable rows")]),t("alert",{attrs:{warning:""}},[e._v("This feature is in progress.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]") mdi `+e._s("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+e._s("{{ item.firstName }}")+" weighs "),t("strong",[e._v(e._s("{{ item.weight }}")+"kg")]),e._v(" and is "),t("strong",[e._v(e._s("{{ item.height }}")+"m")]),e._v(" tall.")]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+e._s("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+e._s("{{ item.firstName }}")+" weighs "),t("strong",[e._v(e._s("{{ item.weight }}")+"kg")]),e._v(" and is "),t("strong",[e._v(e._s("{{ item.height }}")+"m")]),e._v(` tall.
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', gender: 1, weight: 56, height: 1.69 },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', gender: 1, weight: 62, height: 1.77 },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', gender: 0, weight: 71, height: 1.75 },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', gender: 0, weight: 84, height: 1.83 },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', gender: 0, weight: 74, height: 1.72 }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table5.headers,items:e.table5.items,"expandable-rows":""},scopedSlots:e._u([{key:"row-expansion",fn:function(n){var s=n.item;return[t("w-icon",{staticClass:"mr2",attrs:{color:["blue","pink"][s.gender]}},[e._v("mdi "+e._s(["mdi-gender-male","mdi-gender-female"][s.gender]))]),e._v(e._s(s.firstName)+" weighs "),t("strong",[e._v(e._s(s.weight)+"kg")]),e._v(" and is "),t("strong",[e._v(e._s(s.height)+"m")]),e._v(" tall.")]}}])})],1),t("title-link",{attrs:{h2:"",slug:"slots"}},[e._v("Headers & cells customization via slots")]),t("p",[e._v("You can customize the headers labels and/or each row cells.")]),t("title-link",{attrs:{h3:""}},[e._v("Headers")]),e._m(14),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+e._s("{{ index }}: {{ label }}")+" \u{1F44C}")]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+e._s("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items},scopedSlots:e._u([{key:"header-label",fn:function(n){var s=n.label,i=n.index;return[e._v(e._s(i)+": "+e._s(s)+" \u{1F44C}")]}}])})],1),t("title-link",{attrs:{h3:"",slug:"item-cells"}},[e._v("Item cells (inside <td> element)")]),e._m(15),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+e._s("{{ header.label }}")+`:
    span `+e._s("{{ label }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+e._s("{{ header.label }}")+`:</small>
    <span>`+e._s("{{ label }}")+`</span>
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,"no-headers":"",items:e.table1.items},scopedSlots:e._u([{key:"item-cell",fn:function(n){n.item;var s=n.label,i=n.header,l=n.index;return[i.key==="id"?t("small",[e._v("#"+e._s(l))]):[t("small",{staticClass:"grey mr2"},[e._v(e._s(i.label)+":")]),t("span",[e._v(e._s(s))])]]}}])})],1),t("title-link",{attrs:{h3:"",slug:"override-1-particular-item-cell"}},[e._v("override 1 particular item cell or column cells (inside <td> element)")]),e._m(16),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.green-light5--bg.text-bold `+e._s("{{ label }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center green-light5--bg text-bold">
      `+e._s("{{ label }}")+`
    </div>
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"no-headers":""},scopedSlots:e._u([{key:"item-cell.id",fn:function(n){n.item;var s=n.label;return n.header,n.index,[t("div",{staticClass:"px2 text-center green-light5--bg text-bold"},[e._v(e._s(s))])]}}])})],1),t("title-link",{attrs:{h2:"",slug:"full-custom-rows"}},[e._v("Full custom row (<tr> element itself)")]),e._m(17),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" :items="table.items" selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+e._s("{{ item[header.key] || '' }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+e._s("{{ item[header.key] || '' }}")+`
      </td>
    </tr>
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"selectable-rows":""},scopedSlots:e._u([{key:"item",fn:function(n){var s=n.item;n.index;var i=n.select,l=n.classes;return[t("tr",{class:l,on:{click:i}},e._l(e.table1.headers,function(o,d){return t("td",{key:d,class:"pa4 text-"+(o.align||"left")},[e._v(e._s(s[o.key]||""))])}),0)]}}])})],1),t("title-link",{attrs:{h3:"",slug:"colspan-on-td"}},[t("span",{staticClass:"code"},[e._v("colspan")]),e._v(" on <td>")]),e._m(18),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-table(:headers="table.headers" :items="table.items" no-headers selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+e._s("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+e._s("{{ header.label }}")+`:
            | `+e._s("{{ item[header.key] || '' }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr
      :class="{
        ...classes,
        'indigo-light5--bg': index % 2,
        'blue-light5--bg': !(index % 2)
      }"
      @click="select">
      <td :class="pa2" :colspan="table.headers.length">
        <div class="title3">
          Row #`+e._s("{{ index }}")+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+e._s("{{ header.label }}")+`:
            </strong>
            `+e._s("{{ item[header.key] || '' }}")+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"no-headers":"","selectable-rows":""},scopedSlots:e._u([{key:"item",fn:function(n){var s=n.item,i=n.index,l=n.select,o=n.classes;return[t("tr",{class:Object.assign({},o,{"indigo-light5--bg":i%2,"blue-light5--bg":!(i%2)}),on:{click:l}},[t("td",{staticClass:"pa2",attrs:{colspan:e.table1.headers.length}},[t("div",{staticClass:"title3"},[e._v("Row #"+e._s(i))]),t("ul",e._l(e.table1.headers,function(d,f){return t("li",{key:f},[t("strong",{staticClass:"mr2"},[e._v(e._s(d.label)+":")]),e._v(e._s(s[d.key]||""))])}),0)])])]}}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Responsiveness & mobile layout")]),e._m(19),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:headers="table.headers" :items="table.items" :mobile-breakpoint="700")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]},proxy:!0}])},[t("w-table",{attrs:{headers:e.table2.headers,items:e.table2.items,"mobile-breakpoint":700}})],1),t("alert",{attrs:{tip:""}},[t("p",[e._v("To stay lean and efficient, the minimum JavaScript behavior is added to the "),t("code",[e._v("w-table")]),e._v(`
component.`),t("br"),e._v(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),t("br"),e._v(`
You can override it to set the width you want via:
`)]),t("ssh-pre",{staticClass:"mt5 mb0",attrs:{language:"css",label:"CSS"}},[e._v(".w-table--mobile .w-table__cell:before {width: 8em;}")])],1)],1)},v=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("When there is no data, a default text will be displayed. You can override it via the "),t("code",[e._v("no-data")]),e._v(" slot.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can align the columns contents separately by adding an "),t("code",[e._v("align")]),e._v(` key in each header
definition (`),t("code",[e._v("left")]),e._v(", "),t("code",[e._v("center")]),e._v(" or "),t("code",[e._v("right")]),e._v(")."),t("br"),e._v(`
If you don't define any, `),t("code",[e._v("left")]),e._v(` will be implicit.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Even with the "),t("code",[e._v("no-headers")]),e._v(" option, the "),t("code",[e._v("headers")]),e._v(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can resize the columns by dragging their edges left or right."),t("br"),e._v(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),t("code",[e._v("...")]),e._v("), you can apply this CSS.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),t("br"),e._v(`
To test it, first resize the columns, then refresh the page to see the same layout.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),t("strong",{staticClass:"code"},[e._v("w-table")]),e._v("'s sorting is defined with a header key string preceded by a "),t("code",[e._v("+")]),e._v(` for ASC,
or a `),t("code",[e._v("-")]),e._v(" for DESC. For instance, in this example: "),t("code",[e._v("'+firstName'")]),e._v(".")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),t("strong",{staticClass:"code"},[e._v("w-table")]),e._v(" component and it will be applied to the table."),t("br"),e._v(`
Setting the filter to `),t("code",[e._v("null")]),e._v(" or "),t("code",[e._v("false")]),e._v(" or "),t("code",[e._v("undefined")]),e._v(" will remove any previous filter.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You could also apply a filter globally, which looks into all the columns at once."),t("br"),e._v(`
Here is one cool way to do it.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("When the table content is not ready straight away, you can use the "),t("code",[e._v("loading")]),e._v(` prop to display
a progress bar while loading.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("By default, the selection will use the "),t("code",[e._v("primary")]),e._v(" color and apply an opacity of "),t("code",[e._v("0.2")]),e._v(`.
If this is not what you want, you can override it via CSS (`),t("code",[e._v(".w-table__row--selected td:before")]),e._v(`).
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can enable the rows selection by adding the "),t("code",[e._v("selectable-rows")]),e._v(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),t("code",[e._v("1")]),e._v(`
to allow a single selection only.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Eventually, you can use the "),t("code",[e._v("force-selection")]),e._v(` prop to prevent unselecting a row when only
one remain selected.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("This event is fired each time a row is selected "),t("strong",[e._v("or unselected")]),e._v(` (so you don't need to listen
to 2 different events). `),t("br"),e._v(`
As shown in this example (under the table), the `),t("span",{staticClass:"code"},[e._v("@row-select")]),e._v(` event will give you access to useful
information such as:`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",[t("li",[t("code",[e._v("item")]),e._v(": the clicked row object")]),t("li",[t("code",[e._v("selected")]),e._v(": a boolean telling if the row is being selected or unselected")]),t("li",[t("code",[e._v("selectedRows")]),e._v(": an array of all the selected rows objects")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("In this example, only the headers are customized via the "),t("code",[e._v("header-label")]),e._v(" slot.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("In this example, only the items cells are customized via the "),t("code",[e._v("item")]),e._v(` slot
(and the headers are hidden).`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("If you only need to override 1 particular column you can do it via the "),t("code",[e._v("item-cell.xxx")]),e._v(` slot,
where `),t("code",[e._v("xxx")]),e._v(` is a key defined in the headers.
In this example: `),t("code",[e._v("id")]),e._v(", "),t("code",[e._v("firstName")]),e._v(", "),t("code",[e._v("lastName")]),e._v("."),t("br"),t("br"),e._v(`

If it's more convenient, you can also override a particular cell by its index like `),t("code",[e._v("item-cell.i")]),e._v(`,
where `),t("code",[e._v("i")]),e._v(" is a an integer starting at 1.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`In this example, the full <tr> DOM element is customized, so you can add your own classes and
full layout.`),t("br"),e._v(`
As you notice, the `),t("code",[e._v("item")]),e._v(` slot gives you full flexibility, but the drawback is that's also
harder to write (more verbose).`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("This example is showcasing another useful case: handling a colspan attribute."),t("br"),e._v(`
All the cells of all the rows are `),t("code",[e._v("colspan")]),e._v("'d to one, and a custom row layout is applied.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("In addition to the full responsiveness, the "),t("code",[e._v("w-table")]),e._v(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),t("br"),e._v(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),t("code",[e._v("mobile-breakpoint")]),e._v(`
parameter.`),t("br"),e._v(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),t("br"),t("br"),e._v(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)])}];const r=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],y={data:()=>({table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:r.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:r.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:r,filters:[null,e=>e.lastName[0]==="M",e=>e.id>=10],activeFilter:0},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:r,keyword:"",keywordFilter:e=>a=>{const t=`${a.id} ${a.firstName} ${a.lastName}`;return new RegExp(e,"i").test(t)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:r.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}),methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(e){this.table6.headers[e].hidden=!this.table6.headers[e].hidden},onColumnResize({index:e,widths:a}){a.forEach((t,n)=>this.table8.headers[n].width=t),localStorage.tableWidths=a}},mounted(){var e;this.reload(),(e=localStorage.tableWidths)==null||e.split(",").forEach((a,t)=>this.table8.headers[t].width=a)}},u={};var _=m(y,p,v,!1,w,null,null,null);function w(e){for(let a in u)this[a]=u[a]}var g=function(){return _.exports}(),N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},k=[];const x={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",loading:"When set to <code>true</code>, a progress bar will be displayed. Convenient when the table data is not ready.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize."},S={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}}},F={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},R={data:()=>({propsDescs:x,slots:S}),computed:{props(){return c.props},events(){return c.emits.reduce((e,a)=>(e[a]=F[a]||{})&&e,{})}}},h={};var C=m(R,N,k,!1,I,null,null,null);function I(e){for(let a in h)this[a]=h[a]}var E=function(){return C.exports}(),D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("ui-component-title",{attrs:{slug:"w-table"}},[e._v("w-table")]),t("examples"),t("api")],1)},L=[];const q={components:{Examples:g,Api:E}},b={};var T=m(q,D,L,!1,$,null,null,null);function $(e){for(let a in b)this[a]=b[a]}var B=function(){return T.exports}();export{B as default};
