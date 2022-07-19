import{r as h,o as u,f as b,a as s,w as t,b as a,n as v,e,h as n,X as x,aK as S,c as E,bq as $,d as z,i as M,_ as C,bZ as j}from"./index.6ba25376.js";const A=e("Basic"),H=e('w-table(:headers="table.headers" :items="table.items")'),W=e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`),P=e(`data: () => ({
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
`),Y=e("When there is no data"),O=a("p",null,[e("When there is no data, a default text will be displayed. You can override it via the "),a("code",null,"no-data"),e(" slot.")],-1),J=a("br",null,null,-1),K=e("\u{1F44C} There is no data! \u{1F44C}"),U=e(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`),G=e(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`),X=e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`),Z=e("Alignments"),Q=a("p",null,[e("You can align the columns contents separately by adding an "),a("code",null,"align"),e(` key in each header
definition (`),a("code",null,"left"),e(", "),a("code",null,"center"),e(" or "),a("code",null,"right"),e(")."),a("br"),e(`
If you don't define any, `),a("code",null,"left"),e(` will be implicit.
`)],-1),ee=e('w-table(:headers="table.headers" :items="table.items")'),te=e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`),ae=e(`data: () => ({
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
`),se=e("No headers"),le=a("p",null,[e("Even with the "),a("code",null,"no-headers"),e(" option, the "),a("code",null,"headers"),e(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),ne=e('w-table(:items="table.items" :headers="table.headers" no-headers)'),ie=e(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`),oe=e(`data: () => ({
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
`),re=e("Fixed headers"),de=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`),me=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`),he=e(`data: () => ({
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
`),ce=e("Footer"),ue=e("Footer slot"),be=a("p",null,[e("A table footer can be added via the "),a("code",null,"footer"),e(` slot. If present, the footer will span on
all the columns by default.
`)],-1),fe={class:"w-flex justify-end"},pe=e("wi-plus"),we=e("add person"),Ne=a("strong",{class:"mr2"},"Total:",-1),ye=e(`data: () => ({
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
    fixedFooter: false
  },
}),

methods: {
  addRow () {
    this.table.items.push({
      id: this.table.items.length + 1,
      firstName: 'John',
      lastName: 'Doe'
    })
    this.$nextTick(() => {
      this.$refs.table.$el
        .querySelector('tbody tr:last-child')
        .scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }
}
`),ge=e("Footer-row slot"),_e=a("p",null,[e("The "),a("code",null,"footer-row"),e(" slot will give you more flexibility as it lets you define the whole table row.")],-1),ke=a("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1),ve=e(`data: () => ({
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
})
`),xe=e("Built-in column resizing"),Fe=a("p",null,[e("You can resize the columns by dragging their edges left or right."),a("br"),e(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),a("code",null,"..."),e("), you can apply this CSS.")],-1),Re=e(`.w-table__cell {
  white-space: nowrap;
}
`),Se=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`),Ie=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`),Ce=e(`data: () => ({
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
`),De=e("Saving the table layout in localStorage"),Le=a("p",null,[e(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),a("br"),e(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),Te=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`),qe=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`),Ee=e(`data: () => ({
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
`),je=e("Toggling column visibility"),Me=a("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),Be=e("Toggle columns:"),Ve=e(`data: () => ({
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
`),$e=e("Initial Sorting"),ze=a("p",null,[e(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),a("strong",{class:"code"},"w-table"),e("'s sorting is defined with a header key string preceded by a "),a("code",null,"+"),e(` for ASC,
or a `),a("code",null,"-"),e(" for DESC. For instance, in this example: "),a("code",null,"'+firstName'"),e(".")],-1),Ae=e('w-table(:headers="table.headers" :items="table.items" v-model:sort="table.sort")'),He=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`),We=e(`data: () => ({
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
`),Pe=e("Filtering"),Ye=a("p",null,[e(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),a("strong",{class:"code"},"w-table"),e(" component and it will be applied to the table."),a("br"),e(`
Setting the filter to `),a("code",null,"null"),e(" or "),a("code",null,"false"),e(" or "),a("code",null,"undefined"),e(" will remove any previous filter.")],-1),Oe={class:"w-flex wrap mb3"},Je=e("No filter"),Ke=e("Last name starting with 'M'"),Ue=e("ID >= 10"),Ge=e(`.w-flex.wrap.mb3
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
  :filter="table.filters[table.activeFilter]")`),Xe=e(`<div class="w-flex wrap mb3">
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
</w-table>`),Ze=e(`data: () => ({
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
`),Qe=e("Global filter"),et=a("p",null,[e("You could also apply a filter globally, which looks into all the columns at once."),a("br"),e(`
Here is one cool way to do it.`)],-1),tt=e(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`),at=e(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`),st=e(`data: () => ({
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
})`),lt=a("strong",null,[e(`If you don't need the RegExp power, you can simply return
`),a("code",null,"allTheColumns.toLowerCase().includes(keyword)"),e(` instead.
`)],-1),nt=a("br",null,null,-1),it=a("br",null,null,-1),ot=e(`But the real power of using a regular expression
`),rt=e("mdi mdi-heart"),dt=e(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),mt=a("code",null,"|",-1),ht=e(" etc."),ct=a("br",null,null,-1),ut=e(`
You could also match only the full words by replacing `),bt=a("code",null,"new RegExp(keyword, 'i')",-1),ft=e(` with
`),pt=a("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),wt=e(" (it would return a result when typing "),Nt=a("code",null,"floretta",-1),yt=e(`
but not `),gt=a("code",null,"florett",-1),_t=e(" for instance)."),kt=e("Loading state"),vt=a("p",null,[e("When the table content is not ready straight away, you can use the "),a("code",null,"loading"),e(` prop to display
a progress bar while loading.`)],-1),xt=e("mdi mdi-sync"),Ft=e("reload"),Rt=e("Simple table - no set height"),St=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`),It=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`),Ct=e(`data: () => ({
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
`),Dt=e("Table with fixed header & set height of 200px"),Lt=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`),Tt=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`),qt=e(`data: () => ({
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
`),Et=e("Pagination"),jt=e("COMING SOON"),Mt=e("Coming soon."),Bt=e(`data: () => ({
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
`),Vt=e("Rows selection"),$t=a("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),zt=a("p",null,[e("By default, the selection will use the "),a("code",null,"primary"),e(" color and apply an opacity of "),a("code",null,"0.2"),e(`.
If this is not what you want, you can override it via CSS (`),a("code",null,".w-table__row--selected td:before"),e(`).
`)],-1),At=e("The "),Ht=a("span",{class:"code"},"selectable-rows",-1),Wt=e(" prop"),Pt=a("p",null,[e("You can enable the rows selection by adding the "),a("code",null,"selectable-rows"),e(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),a("code",null,"1"),e(`
to allow a single selection only.
`)],-1),Yt=e("The "),Ot=a("span",{class:"code"},"force-selection",-1),Jt=e(" prop"),Kt=a("p",null,[e("Eventually, you can use the "),a("code",null,"force-selection"),e(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),Ut=e("The "),Gt=a("span",{class:"code"},"@row-select",-1),Xt=e(" event"),Zt=M(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),Qt=e("wi-check"),ea=e("Force selection"),ta=a("div",{class:"mt4 title4"},"Selection info:",-1),aa=e(`w-flex.mb4(wrap)
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
pre `+n("{{ selectionInfo }}")),sa=e(`<w-flex wrap class="mb4">
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
<pre>`+n("{{ selectionInfo }}")+"</pre>"),la=e(`data: () => ({
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
`),na=e("Updating the selected rows programmatically"),ia=a("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),oa=a("ul",null,[a("li",null,[a("strong",null,"In Vue 2"),e(", you can do 2-way binding on any variable other than the "),a("strong",{class:"code"},"v-model"),e(" using the "),a("code",null,".sync"),e(" modifier.")]),a("li",null,[a("strong",null,"In Vue 3"),e(", multiple "),a("strong",{class:"code"},"v-model"),e(" are supported in order to achieve 2-way binding. So you don't need "),a("code",null,".sync"),e(".")])],-1),ra={class:"mt4"},da=e("Selected rows:"),ma={class:"ml2"},ha=e(`data: () => ({
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
})`),ca=e("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),ua=a("br",null,null,-1),ba=e(`
By default the expanded rows array will use an `),fa=a("code",null,"id",-1),pa=e(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),wa=a("code",null,"uid-key",-1),Na=e(` prop, which is set to "id" by default.
`),ya=e("Expandable rows"),ga=e("This feature is in progress."),_a=e(" and is "),ka=e(" tall."),va=e(" and is "),xa=e(" tall."),Fa=e(" and is "),Ra=e(` tall.
  </template>
</w-table>`),Sa=e(`data: () => ({
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
`),Ia=e("Headers & cells customization via slots"),Ca=a("p",null,"You can customize the headers labels and/or each row cells.",-1),Da=e("Headers"),La=a("p",null,[e("In this example, only the headers are customized via the "),a("code",null,"header-label"),e(" slot.")],-1),Ta=e(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+n("{{ index }}: {{ label }}")+" \u{1F44C}"),qa=e(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+n("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`),Ea=e(`data: () => ({
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
`),ja=e("Item cells (inside <td> element)"),Ma=a("p",null,[e("In this example, only the items cells are customized via the "),a("code",null,"item"),e(` slot
(and the headers are hidden).`)],-1),Ba={key:0},Va={class:"grey mr2"},$a=e(`data: () => ({
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
`),za=e("override 1 particular item cell or column cells (inside <td> element)"),Aa=M(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),Ha={class:"px2 text-center green-light5--bg text-bold"},Wa=e(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.green-light5--bg.text-bold `+n("{{ label }}")),Pa=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center green-light5--bg text-bold">
      `+n("{{ label }}")+`
    </div>
  </template>
</w-table>`),Ya=e(`data: () => ({
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
`),Oa=e("Full custom row (<tr> element itself)"),Ja=a("p",null,[e(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),a("br"),e(`
As you notice, the `),a("code",null,"item"),e(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),Ka=["onClick"],Ua=e(`data: () => ({
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
`),Ga=a("span",{class:"code"},"colspan",-1),Xa=e(" on <td>"),Za=a("p",null,[e("This example is showcasing another useful case: handling a colspan attribute."),a("br"),e(`
All the cells of all the rows are `),a("code",null,"colspan"),e("'d to one, and a custom row layout is applied.")],-1),Qa=["onClick"],es=["colspan"],ts={class:"title3"},as={class:"mr2"},ss=e(`data: () => ({
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
`),ls=e("Responsiveness & mobile layout"),ns=a("p",null,[e("In addition to the full responsiveness, the "),a("code",null,"w-table"),e(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),a("br"),e(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),a("code",null,"mobile-breakpoint"),e(`
parameter.`),a("br"),e(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),a("br"),a("br"),e(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),is=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`),os=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`),rs=e(`data: () => ({
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
`),ds=a("p",null,[e("To stay lean and efficient, the minimum JavaScript behavior is added to the "),a("code",null,"w-table"),e(`
component.`),a("br"),e(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),a("br"),e(`
You can override it to set the width you want via:
`)],-1),ms=e(".w-table--mobile .w-table__cell:before {width: 8em;}");function hs(l,r,f,R,D,w){const o=h("title-link"),d=h("w-table"),m=h("example"),N=h("w-button"),y=h("w-icon"),L=h("w-flex"),T=h("ssh-pre"),q=h("w-tag"),B=h("w-input"),_=h("alert"),V=h("w-radios");return u(),b("div",null,[s(o,{h2:""},{default:t(()=>[A]),_:1}),s(m,null,{pug:t(()=>[H]),html:t(()=>[W]),js:t(()=>[P]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items},null,8,["headers","items"])]),_:1}),s(o,{h2:""},{default:t(()=>[Y]),_:1}),O,s(m,null,{pug:t(()=>[U]),html:t(()=>[G]),js:t(()=>[X]),default:t(()=>[s(d,{headers:l.table1.headers,items:[]},null,8,["headers"]),J,s(d,{headers:l.table1.headers,items:[]},{"no-data":t(()=>[K]),_:1},8,["headers"])]),_:1}),s(o,{h2:""},{default:t(()=>[Z]),_:1}),Q,s(m,null,{pug:t(()=>[ee]),html:t(()=>[te]),js:t(()=>[ae]),default:t(()=>[s(d,{headers:l.table2.headers,items:l.table2.items},null,8,["headers","items"])]),_:1}),s(o,{h2:"",slug:"example--no-headers"},{default:t(()=>[se]),_:1}),le,s(m,null,{pug:t(()=>[ne]),html:t(()=>[ie]),js:t(()=>[oe]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),s(o,{h2:"",slug:"example--fixed-headers"},{default:t(()=>[re]),_:1}),s(m,null,{pug:t(()=>[de]),html:t(()=>[me]),js:t(()=>[he]),default:t(()=>[s(d,{headers:l.table3.headers,items:l.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),s(o,{h2:"",slug:"example--footer"},{default:t(()=>[ce]),_:1}),s(o,{h3:"",slug:"example--footer-slot"},{default:t(()=>[ue]),_:1}),be,a("div",fe,[s(N,{onClick:r[0]||(r[0]=i=>l.table3.fixedFooter=!l.table3.fixedFooter),outline:!l.table3.fixedFooter,round:""},{default:t(()=>[a("span",{class:v(["code",l.table3.fixedFooter?"white":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),s(m,null,{pug:t(()=>[e(`w-table(
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px")
  template(#footer)
    w-flex(justify-space-between)
      w-button(round sm @click="addRow")
        w-icon.mr1 wi-plus
        | add person
      div
        strong.mr2 Total:
        | `+n("{{ table.items.length }}")+" persons",1)]),html:t(()=>[e(`<w-table
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px">
  <template #footer>
    <w-flex justify-space-between>
      <w-button round sm @click="addRow">
        <w-icon class="mr1">wi-plus</w-icon>
        add person
      </w-button>

      <div>
        <strong class="mr2">Total:</strong>
        `+n("{{ table.items.length }}")+` persons
      </div>
    </w-flex>
  </template>
</w-table>`,1)]),js:t(()=>[ye]),default:t(()=>[s(d,{ref:"table",headers:l.table3.headers,items:l.table3.items,"fixed-footer":l.table3.fixedFooter,style:{height:"250px"}},{footer:t(()=>[s(L,{"justify-space-between":""},{default:t(()=>[s(N,{round:"",sm:"",onClick:w.addRow},{default:t(()=>[s(y,{class:"mr1"},{default:t(()=>[pe]),_:1}),we]),_:1},8,["onClick"]),a("div",null,[Ne,e(n(l.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),s(o,{h3:"",slug:"example--footer-slot"},{default:t(()=>[ge]),_:1}),_e,ke,s(m,null,{pug:t(()=>[e(`w-table(
  ref="table"
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px")
  template(#footer-row)
    tr
      th.py1(
        v-for="&#40;header, i&#41; in table3.headers"
        :key="i"
        :class="\`\${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`")
        | `+n("{{ header.label }}"),1)]),html:t(()=>[e(`<w-table
  ref="table"
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px">
  <template #footer-row>
    <tr>
      <th
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`py1 \${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`">
        `+n("{{ header.label }}")+`
      </th>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[ve]),default:t(()=>[s(d,{ref:"table",headers:l.table3.headers,"no-headers":"",items:l.table3.items,"fixed-footer":l.table3.fixedFooter,style:{height:"250px"}},{"footer-row":t(()=>[a("tr",null,[(u(!0),b(x,null,S(l.table3.headers,(i,c)=>(u(),b("th",{class:v(["py1",`${c?"px1":"px2"} text-${i.align||"left"}`]),key:c},n(i.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),s(o,{h2:""},{default:t(()=>[xe]),_:1}),Fe,s(T,{language:"css"},{default:t(()=>[Re]),_:1}),s(m,null,{pug:t(()=>[Se]),html:t(()=>[Ie]),js:t(()=>[Ce]),default:t(()=>[s(d,{headers:l.table7.headers,items:l.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),s(o,{h3:""},{default:t(()=>[De]),_:1}),Le,s(m,null,{pug:t(()=>[Te]),html:t(()=>[qe]),js:t(()=>[Ee]),default:t(()=>[s(d,{headers:l.table8.headers,items:l.table8.items,"resizable-columns":"",onColumnResize:w.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),s(o,{h2:""},{default:t(()=>[je]),_:1}),Me,s(m,null,{pug:t(()=>[e(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+n("{{ header.hidden ? '-off' : ''}}")+`
  | `+n("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:t(()=>[e(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+n("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+n("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,1)]),js:t(()=>[Ve]),default:t(()=>[Be,(u(!0),b(x,null,S(l.table6.headers,(i,c)=>(u(),E(q,{class:"ma1",key:c,"bg-color":i.hidden?"grey-light4":"primary",onClick:$(p=>i.hidden=!i.hidden,["stop"])},{default:t(()=>[s(y,{class:"mr2"},{default:t(()=>[e("mdi mdi-eye"+n(i.hidden?"-off":""),1)]),_:2},1024),e(n(i.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),s(d,{class:"mt2",headers:l.table6.headers.filter(i=>!i.hidden),items:l.table6.items},null,8,["headers","items"])]),_:1}),s(o,{h2:""},{default:t(()=>[$e]),_:1}),ze,s(m,null,{pug:t(()=>[Ae]),html:t(()=>[He]),js:t(()=>[We]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,sort:l.table1.sort,"onUpdate:sort":r[1]||(r[1]=i=>l.table1.sort=i)},null,8,["headers","items","sort"])]),_:1}),s(o,{h2:""},{default:t(()=>[Pe]),_:1}),Ye,s(m,null,{pug:t(()=>[Ge]),html:t(()=>[Xe]),js:t(()=>[Ze]),default:t(()=>[a("div",Oe,[s(N,{class:"mr2 mb1",onClick:r[2]||(r[2]=i=>l.table3.activeFilter=0),round:"",outline:l.table3.activeFilter!==0},{default:t(()=>[Je]),_:1},8,["outline"]),s(N,{class:"mr2 mb1",onClick:r[3]||(r[3]=i=>l.table3.activeFilter=1),round:"",outline:l.table3.activeFilter!==1},{default:t(()=>[Ke]),_:1},8,["outline"]),s(N,{class:"mr2 mb1",onClick:r[4]||(r[4]=i=>l.table3.activeFilter=2),round:"",outline:l.table3.activeFilter!==2},{default:t(()=>[Ue]),_:1},8,["outline"])]),s(d,{headers:l.table3.headers,items:l.table3.items,filter:l.table3.filters[l.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),s(o,{h3:""},{default:t(()=>[Qe]),_:1}),et,s(m,null,{pug:t(()=>[tt]),html:t(()=>[at]),js:t(()=>[st]),default:t(()=>[s(B,{class:"mb3",modelValue:l.table4.keyword,"onUpdate:modelValue":r[5]||(r[5]=i=>l.table4.keyword=i),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),s(d,{headers:l.table4.headers,items:l.table4.items,filter:l.table4.keywordFilter(l.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),s(_,{tip:""},{default:t(()=>[lt,nt,it,ot,s(y,{class:"red mr1",size:"0.9em"},{default:t(()=>[rt]),_:1}),dt,mt,ht,ct,ut,bt,ft,pt,wt,Nt,yt,gt,_t]),_:1}),s(o,{h2:""},{default:t(()=>[kt]),_:1}),vt,s(N,{class:"mb2",disabled:l.table1.loading,onClick:w.reload},{default:t(()=>[s(y,{class:"mr1"},{default:t(()=>[xt]),_:1}),Ft]),_:1},8,["disabled","onClick"]),s(o,{h3:""},{default:t(()=>[Rt]),_:1}),s(m,null,{pug:t(()=>[St]),html:t(()=>[It]),js:t(()=>[Ct]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,loading:l.table1.loading},null,8,["headers","items","loading"])]),_:1}),s(o,{h3:"",slug:"loading-with-fixed-header"},{default:t(()=>[Dt]),_:1}),s(m,null,{pug:t(()=>[Lt]),html:t(()=>[Tt]),js:t(()=>[qt]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table3.items,"fixed-headers":"",loading:l.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),s(o,{h2:"",slug:"pagination"},{default:t(()=>[Et,s(q,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:t(()=>[jt]),_:1})]),_:1}),s(m,null,{pug:t(()=>[]),js:t(()=>[Bt]),default:t(()=>[Mt]),_:1}),s(o,{h2:""},{default:t(()=>[Vt]),_:1}),$t,zt,s(o,{h3:"",slug:"example--selectable-rows"},{default:t(()=>[At,Ht,Wt]),_:1}),Pt,s(o,{h3:"",slug:"example--force-selection"},{default:t(()=>[Yt,Ot,Jt]),_:1}),Kt,s(o,{h3:"",slug:"example--row-select"},{default:t(()=>[Ut,Gt,Xt]),_:1}),Zt,s(m,null,{pug:t(()=>[aa]),html:t(()=>[sa]),js:t(()=>[la]),default:t(()=>[s(L,{class:"mb4",wrap:""},{default:t(()=>[s(V,{class:"mr6",modelValue:l.table1.selectableRows,"onUpdate:modelValue":r[6]||(r[6]=i=>l.table1.selectableRows=i),items:l.selectableRowsOptions},null,8,["modelValue","items"]),s(N,{class:"my3",onClick:r[7]||(r[7]=i=>l.table1.forceSelection=!l.table1.forceSelection),round:"",outline:!l.table1.forceSelection},{default:t(()=>[l.table1.forceSelection?(u(),E(y,{key:0,class:"mr2"},{default:t(()=>[Qt]),_:1})):z("",!0),ea]),_:1},8,["outline"])]),_:1}),s(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":l.table1.selectableRows,"force-selection":l.table1.forceSelection,onRowSelect:r[8]||(r[8]=i=>l.selectionInfo=i)},null,8,["headers","items","selectable-rows","force-selection"]),ta,a("pre",null,n(l.selectionInfo),1)]),_:1}),s(o,{h3:""},{default:t(()=>[na]),_:1}),ia,s(_,{tip:""},{default:t(()=>[oa]),_:1}),s(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+n("{{ table.selectedRows }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+n("{{ table.selectedRows }}")+`</code>
</div>`,1)]),js:t(()=>[ha]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":"","selected-rows":l.table1.selectedRows,"onUpdate:selected-rows":r[9]||(r[9]=i=>l.table1.selectedRows=i)},null,8,["headers","items","selected-rows"]),a("div",ra,[da,a("code",ma,n(l.table1.selectedRows),1)])]),_:1}),s(_,{info:""},{default:t(()=>[ca,ua,ba,fa,pa,wa,Na]),_:1}),s(o,{h2:"",slug:"example--expandable-rows"},{default:t(()=>[ya]),_:1}),s(_,{warning:""},{default:t(()=>[ga]),_:1}),s(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+n("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+n("{{ item.firstName }}")+" weighs ",1),a("strong",null,n("{{ item.weight }}")+"kg",1),va,a("strong",null,n("{{ item.height }}")+"m",1),xa]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+n("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+n("{{ item.firstName }}")+" weighs ",1),a("strong",null,n("{{ item.weight }}")+"kg",1),Fa,a("strong",null,n("{{ item.height }}")+"m",1),Ra]),js:t(()=>[Sa]),default:t(()=>[s(d,{headers:l.table5.headers,items:l.table5.items,"expandable-rows":""},{"row-expansion":t(({item:i})=>[s(y,{class:"mr2",color:["blue","pink"][i.gender]},{default:t(()=>[e("mdi "+n(["mdi-gender-male","mdi-gender-female"][i.gender]),1)]),_:2},1032,["color"]),e(n(i.firstName)+" weighs ",1),a("strong",null,n(i.weight)+"kg",1),_a,a("strong",null,n(i.height)+"m",1),ka]),_:1},8,["headers","items"])]),_:1}),s(o,{h2:"",slug:"slots"},{default:t(()=>[Ia]),_:1}),Ca,s(o,{h3:""},{default:t(()=>[Da]),_:1}),La,s(m,null,{pug:t(()=>[Ta]),html:t(()=>[qa]),js:t(()=>[Ea]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items},{"header-label":t(({label:i,index:c})=>[e(n(c)+": "+n(i)+" \u{1F44C}",1)]),_:1},8,["headers","items"])]),_:1}),s(o,{h3:"",slug:"item-cells"},{default:t(()=>[ja]),_:1}),Ma,s(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+n("{{ header.label }}")+`:
    span `+n("{{ label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+n("{{ header.label }}")+`:</small>
    <span>`+n("{{ label }}")+`</span>
  </template>
</w-table>`,1)]),js:t(()=>[$a]),default:t(()=>[s(d,{headers:l.table1.headers,"no-headers":"",items:l.table1.items},{"item-cell":t(({item:i,label:c,header:p,index:g})=>[p.key==="id"?(u(),b("small",Ba,"#"+n(g),1)):(u(),b(x,{key:1},[a("small",Va,n(p.label)+":",1),a("span",null,n(c),1)],64))]),_:1},8,["headers","items"])]),_:1}),s(o,{h3:"",slug:"override-1-particular-item-cell"},{default:t(()=>[za]),_:1}),Aa,s(m,null,{pug:t(()=>[Wa]),html:t(()=>[Pa]),js:t(()=>[Ya]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":""},{"item-cell.id":t(({item:i,label:c,header:p,index:g})=>[a("div",Ha,n(c),1)]),_:1},8,["headers","items"])]),_:1}),s(o,{h2:"",slug:"full-custom-rows"},{default:t(()=>[Oa]),_:1}),Ja,s(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+n("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+n("{{ item[header.key] || '' }}")+`
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[Ua]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":""},{item:t(({item:i,index:c,select:p,classes:g})=>[a("tr",{class:v(g),onClick:p},[(u(!0),b(x,null,S(l.table1.headers,(k,I)=>(u(),b("td",{key:I,class:v(`pa4 text-${k.align||"left"}`)},n(i[k.key]||""),3))),128))],10,Ka)]),_:1},8,["headers","items"])]),_:1}),s(o,{h3:"",slug:"colspan-on-td"},{default:t(()=>[Ga,Xa]),_:1}),Za,s(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+n("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+n("{{ header.label }}")+`:
            | `+n("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
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
          Row #`+n("{{ index }}")+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+n("{{ header.label }}")+`:
            </strong>
            `+n("{{ item[header.key] || '' }}")+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[ss]),default:t(()=>[s(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":"","selectable-rows":""},{item:t(({item:i,index:c,select:p,classes:g})=>[a("tr",{class:v({...g,"indigo-light5--bg":c%2,"blue-light5--bg":!(c%2)}),onClick:p},[a("td",{class:"pa2",colspan:l.table1.headers.length},[a("div",ts,"Row #"+n(c),1),a("ul",null,[(u(!0),b(x,null,S(l.table1.headers,(k,I)=>(u(),b("li",{key:I},[a("strong",as,n(k.label)+":",1),e(n(i[k.key]||""),1)]))),128))])],8,es)],10,Qa)]),_:1},8,["headers","items"])]),_:1}),s(o,{h2:""},{default:t(()=>[ls]),_:1}),ns,s(m,null,{pug:t(()=>[is]),html:t(()=>[os]),js:t(()=>[rs]),default:t(()=>[s(d,{headers:l.table2.headers,items:l.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),s(_,{tip:""},{default:t(()=>[ds,s(T,{class:"mt5 mb0",language:"css",label:"CSS"},{default:t(()=>[ms]),_:1})]),_:1})])}const F=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],cs={data:()=>({table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:F.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F,filters:[null,l=>l.lastName[0]==="M",l=>l.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F,keyword:"",keywordFilter:l=>r=>{const f=`${r.id} ${r.firstName} ${r.lastName}`;return new RegExp(l,"i").test(f)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:F.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}),methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(l){this.table6.headers[l].hidden=!this.table6.headers[l].hidden},onColumnResize({index:l,widths:r}){r.forEach((f,R)=>this.table8.headers[R].width=f),localStorage.tableWidths=r},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:"John",lastName:"Doe"}),this.$nextTick(()=>{this.$refs.table.$el.querySelector("tbody tr:last-child").scrollIntoView({behavior:"smooth",block:"nearest"})})}},mounted(){var l;this.reload(),(l=localStorage.tableWidths)==null||l.split(",").forEach((r,f)=>this.table8.headers[f].width=r)}};var us=C(cs,[["render",hs]]);const bs=a("div",{class:"w-divider my12"},null,-1),fs=e("API");function ps(l,r,f,R,D,w){const o=h("title-link"),d=h("component-api");return u(),b("div",null,[bs,s(o,{class:"title1",h2:""},{default:t(()=>[fs]),_:1}),s(d,{class:"mt0",items:w.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),s(d,{items:l.slots,title:"Slots"},null,8,["items"]),s(d,{items:w.events,title:"Events"},null,8,["items"])])}const ws={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",loading:"When set to <code>true</code>, a progress bar will be displayed. Convenient when the table data is not ready.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize."},Ns={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}},footer:{description:"Provide a custom template for the table footer if you want one.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot."},"footer-row":{description:"Provide a custom template for the table footer if you want one.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s."}},ys={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},gs={data:()=>({propsDescs:ws,slots:Ns}),computed:{props(){return j.props},events(){return j.emits.reduce((l,r)=>(l[r]=ys[r]||{})&&l,{})}}};var _s=C(gs,[["render",ps]]);const ks=e("w-table");function vs(l,r,f,R,D,w){const o=h("ui-component-title"),d=h("examples"),m=h("api");return u(),b("main",null,[s(o,{slug:"w-table"},{default:t(()=>[ks]),_:1}),s(d),s(m)])}const xs={components:{Examples:us,Api:_s}};var Rs=C(xs,[["render",vs]]);export{Rs as default};
