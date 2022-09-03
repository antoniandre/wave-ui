import{r as h,o as u,f as b,a as n,w as t,b as a,n as _,e,h as s,F as x,s as R,c as q,a9 as $,d as z,i as j,_ as I,aa as B}from"./index.7c0b9523.js";const A=e("Basic"),H=e('w-table(:headers="table.headers" :items="table.items")'),P=e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`),W=e(`data: () => ({
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
`),J=e("When there is no data"),Y=a("p",null,[e("When there is no data, a default text will be displayed. You can override it via the "),a("code",null,"no-data"),e(" slot.")],-1),O=a("br",null,null,-1),U=e("\u{1F44C} There is no data! \u{1F44C}"),K=e(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`),G=e(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`),Q=e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`),X=e("Alignments"),Z=a("p",null,[e("You can align the columns contents separately by adding an "),a("code",null,"align"),e(` key in each header
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
`),le=e("No headers"),ne=a("p",null,[e("Even with the "),a("code",null,"no-headers"),e(" option, the "),a("code",null,"headers"),e(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),se=e('w-table(:items="table.items" :headers="table.headers" no-headers)'),ie=e(`<w-table
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
`)],-1),fe={class:"w-flex justify-end"},pe=e("wi-plus"),ye=e("add person"),Ne=a("strong",{class:"mr2"},"Total:",-1),ge=e(`data: () => ({
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
`),we=e("Footer-row slot"),_e=a("p",null,[e("The "),a("code",null,"footer-row"),e(" slot will give you more flexibility as it lets you define the whole table row.")],-1),ke=a("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1),ve=e(`data: () => ({
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
(`),a("code",null,"..."),e("), you can apply this CSS.")],-1),Se=e(`.w-table__cell {
  white-space: nowrap;
}
`),Re=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`),Ce=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`),Ie=e(`data: () => ({
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
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),Me=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`),Te=e(`<w-table
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
`),qe=e("Toggling column visibility"),Be=a("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),je=e("Toggle columns:"),Ve=e(`data: () => ({
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
`),$e=e("Sticky columns"),ze=a("p",null,[e("To make a column sticky, you only need to add "),a("code",null,"sticky: true"),e(` to the header of that
column.`),a("br"),e(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1),Ae=a("p",{class:"grey"},"Scroll the table horizontally to observe the behavior.",-1),He={class:"w-flex align-center mb2"},Pe=e("Sticky columns:"),We=e(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`),Je=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`),Ye=e(`data: () => ({
  table: {
    fixedHeaders: false,
    headers: [
      { label: 'ID', key: 'id', hidden: false, width: '60px', sticky: true },
      { label: 'First name', key: 'firstName', hidden: false, width: '120px' },
      { label: 'Last name', key: 'lastName', hidden: false, width: '120px' },
      { label: 'Birthday', key: 'birthday', email: false, width: '150px' },
      { label: 'Email', key: 'email', hidden: false, width: '200px' },
      { label: 'Phone', key: 'phone', hidden: false, width: '200px' },
      { label: 'Country', key: 'country', hidden: false, width: '200px' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', birthday: 'Feb. 12, 1976', email: 'f.sampson@gmail.com', phone: '+21 234 567 8921', country: 'United Kingdom' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', birthday: 'Dec. 15, 1995', email: 'n.lynn@gmail.com', phone: '+22 234 567 8922', country: 'Luxembourg' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', birthday: 'Apr. 25, 1989', email: 'r.bristol@gmail.com', phone: '+23 234 567 8923', country: 'Montenegro' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', birthday: 'Mar. 24, 2002', email: 'd.elliott@gmail.com', phone: '+24 234 567 8924', country: 'Germany' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', birthday: 'Aug. 2, 1990', email: 'v.carman@gmail.com', phone: '+25 234 567 8925', country: 'Ukraine' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison', birthday: 'Feb. 12, 2008', email: 'b.morison@gmail.com', phone: '+26 234 567 8926', country: 'Lithuania' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann', birthday: 'Nov. 6, 1991', email: 'b.mann@gmail.com', phone: '+27 234 567 8927', country: 'Finland' },
      { id: 8, firstName: 'Davie', lastName: 'Forester', birthday: 'Dec. 6, 1982', email: 'd.forester@gmail.com', phone: '+28 234 567 8928', country: 'Portugal' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery', birthday: 'Jan. 20, 1987', email: 'a.montgomery@gmail.com', phone: '+29 234 567 8929', country: 'Czechia' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk', birthday: 'Dec. 31, 1992', email: 'm.kirk@gmail.com', phone: '+30 234 567 8930', country: 'Norway' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory', birthday: 'Dec. 7, 1979', email: 'h.mallory@gmail.com', phone: '+31 234 567 8931', country: 'Greece' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle', birthday: 'Feb. 16, 1980', email: 's.castle@gmail.com', phone: '+32 234 567 8932', country: 'France' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason', birthday: 'Jun. 29, 2000', email: 'r.eason@gmail.com', phone: '+33 234 567 8933', country: 'Poland' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley', birthday: 'Dec. 31, 2009', email: 'm.hayley@gmail.com', phone: '+34 234 567 8934', country: 'Hungary' },
      { id: 15, firstName: 'Josie', lastName: 'Richard', birthday: 'Aug. 16, 2004', email: 'j.richard@gmail.com', phone: '+35 234 567 8935', country: 'Italy' }
    ]
  }
})
`),Oe=e("Initial Sorting"),Ue=a("p",null,[e(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),a("strong",{class:"code"},"w-table"),e("'s sorting is defined with a header key string preceded by a "),a("code",null,"+"),e(` for ASC,
or a `),a("code",null,"-"),e(" for DESC. For instance, in this example: "),a("code",null,"'+firstName'"),e(".")],-1),Ke=e('w-table(:headers="table.headers" :items="table.items" v-model:sort="table.sort")'),Ge=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`),Qe=e(`data: () => ({
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
`),Xe=e("Filtering"),Ze=a("p",null,[e(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),a("strong",{class:"code"},"w-table"),e(" component and it will be applied to the table."),a("br"),e(`
Setting the filter to `),a("code",null,"null"),e(" or "),a("code",null,"false"),e(" or "),a("code",null,"undefined"),e(" will remove any previous filter.")],-1),et={class:"w-flex wrap mb3"},tt=e("No filter"),at=e("Last name starting with 'M'"),lt=e("ID >= 10"),nt=e(`.w-flex.wrap.mb3
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
  :filter="table.filters[table.activeFilter]")`),st=e(`<div class="w-flex wrap mb3">
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
</w-table>`),it=e(`data: () => ({
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
`),ot=e("Global filter"),rt=a("p",null,[e("You could also apply a filter globally, which looks into all the columns at once."),a("br"),e(`
Here is one cool way to do it.`)],-1),dt=e(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`),mt=e(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`),ht=e(`data: () => ({
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
})`),ct=a("strong",null,[e(`If you don't need the RegExp power, you can simply return
`),a("code",null,"allTheColumns.toLowerCase().includes(keyword)"),e(` instead.
`)],-1),ut=a("br",null,null,-1),bt=a("br",null,null,-1),ft=e(`But the real power of using a regular expression
`),pt=e("mdi mdi-heart"),yt=e(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),Nt=a("code",null,"|",-1),gt=e(" etc."),wt=a("br",null,null,-1),_t=e(`
You could also match only the full words by replacing `),kt=a("code",null,"new RegExp(keyword, 'i')",-1),vt=e(` with
`),xt=a("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),Ft=e(" (it would return a result when typing "),St=a("code",null,"floretta",-1),Rt=e(`
but not `),Ct=a("code",null,"florett",-1),It=e(" for instance)."),Dt=e("Loading state"),Lt=a("p",null,[e("When the table content is not ready straight away, you can use the "),a("code",null,"loading"),e(` prop to display
a progress bar while loading.`)],-1),Mt=e("mdi mdi-sync"),Tt=e("reload"),Et=e("Simple table - no set height"),qt=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`),Bt=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`),jt=e(`data: () => ({
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
`),Vt=e("Table with fixed header & set height of 200px"),$t=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`),zt=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`),At=e(`data: () => ({
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
`),Ht=e("Pagination"),Pt=e("COMING SOON"),Wt=e("Coming soon."),Jt=e(`data: () => ({
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
`),Yt=e("Rows selection"),Ot=a("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),Ut=a("p",null,[e("By default, the selection will use the "),a("code",null,"primary"),e(" color and apply an opacity of "),a("code",null,"0.2"),e(`.
If this is not what you want, you can override it via CSS (`),a("code",null,".w-table__row--selected td:before"),e(`).
`)],-1),Kt=e("The "),Gt=a("span",{class:"code"},"selectable-rows",-1),Qt=e(" prop"),Xt=a("p",null,[e("You can enable the rows selection by adding the "),a("code",null,"selectable-rows"),e(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),a("code",null,"1"),e(`
to allow a single selection only.
`)],-1),Zt=e("The "),ea=a("span",{class:"code"},"force-selection",-1),ta=e(" prop"),aa=a("p",null,[e("Eventually, you can use the "),a("code",null,"force-selection"),e(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),la=e("The "),na=a("span",{class:"code"},"@row-select",-1),sa=e(" event"),ia=j(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),oa=e("wi-check"),ra=e("Force selection"),da=a("div",{class:"mt4 title4"},"Selection info:",-1),ma=e(`w-flex.mb4(wrap)
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
pre `+s("{{ selectionInfo }}")),ha=e(`<w-flex wrap class="mb4">
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
<pre>`+s("{{ selectionInfo }}")+"</pre>"),ca=e(`data: () => ({
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
`),ua=e("Updating the selected rows programmatically"),ba=a("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),fa=a("ul",null,[a("li",null,[a("strong",null,"In Vue 2"),e(", you can do 2-way binding on any variable other than the "),a("strong",{class:"code"},"v-model"),e(" using the "),a("code",null,".sync"),e(" modifier.")]),a("li",null,[a("strong",null,"In Vue 3"),e(", multiple "),a("strong",{class:"code"},"v-model"),e(" are supported in order to achieve 2-way binding. So you don't need "),a("code",null,".sync"),e(".")])],-1),pa={class:"mt4"},ya=e("Selected rows:"),Na={class:"ml2"},ga=e(`data: () => ({
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
})`),wa=e("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),_a=a("br",null,null,-1),ka=e(`
By default the expanded rows array will use an `),va=a("code",null,"id",-1),xa=e(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),Fa=a("code",null,"uid-key",-1),Sa=e(` prop, which is set to "id" by default.
`),Ra=e("Expandable rows"),Ca=e("This feature is in progress."),Ia=e(" and is "),Da=e(" tall."),La=e(" and is "),Ma=e(" tall."),Ta=e(" and is "),Ea=e(` tall.
  </template>
</w-table>`),qa=e(`data: () => ({
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
`),Ba=e("Headers & cells customization via slots"),ja=a("p",null,"You can customize the headers labels and/or each row cells.",-1),Va=e("Headers"),$a=a("p",null,[e("In this example, only the headers are customized via the "),a("code",null,"header-label"),e(" slot.")],-1),za=e(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+s("{{ index }}: {{ label }}")+" \u{1F44C}"),Aa=e(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+s("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`),Ha=e(`data: () => ({
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
`),Pa=e("Item cells (inside <td> element)"),Wa=a("p",null,[e("In this example, only the items cells are customized via the "),a("code",null,"item"),e(` slot
(and the headers are hidden).`)],-1),Ja={key:0},Ya={class:"grey mr2"},Oa=e(`data: () => ({
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
`),Ua=e("override 1 particular item cell or column cells (inside <td> element)"),Ka=j(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),Ga={class:"px2 text-center green-light5--bg text-bold"},Qa=e(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.green-light5--bg.text-bold `+s("{{ label }}")),Xa=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center green-light5--bg text-bold">
      `+s("{{ label }}")+`
    </div>
  </template>
</w-table>`),Za=e(`data: () => ({
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
`),el=e("Full custom row (<tr> element itself)"),tl=a("p",null,[e(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),a("br"),e(`
As you notice, the `),a("code",null,"item"),e(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),al=["onClick"],ll=e(`data: () => ({
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
`),nl=a("span",{class:"code"},"colspan",-1),sl=e(" on <td>"),il=a("p",null,[e("This example is showcasing another useful case: handling a colspan attribute."),a("br"),e(`
All the cells of all the rows are `),a("code",null,"colspan"),e("'d to one, and a custom row layout is applied.")],-1),ol=["onClick"],rl=["colspan"],dl={class:"title3"},ml={class:"mr2"},hl=e(`data: () => ({
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
`),cl=e("Responsiveness & mobile layout"),ul=a("p",null,[e("In addition to the full responsiveness, the "),a("code",null,"w-table"),e(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),a("br"),e(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),a("code",null,"mobile-breakpoint"),e(`
parameter.`),a("br"),e(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),a("br"),a("br"),e(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),bl=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`),fl=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`),pl=e(`data: () => ({
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
`),yl=a("p",null,[e("To stay lean and efficient, the minimum JavaScript behavior is added to the "),a("code",null,"w-table"),e(`
component.`),a("br"),e(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),a("br"),e(`
You can override it to set the width you want via:
`)],-1),Nl=e(".w-table--mobile .w-table__cell:before {width: 8em;}");function gl(l,o,f,S,D,p){const r=h("title-link"),d=h("w-table"),m=h("example"),y=h("w-button"),g=h("w-icon"),L=h("w-flex"),M=h("ssh-pre"),T=h("w-tag"),E=h("w-radios"),V=h("w-input"),k=h("alert");return u(),b("div",null,[n(r,{h2:""},{default:t(()=>[A]),_:1}),n(m,null,{pug:t(()=>[H]),html:t(()=>[P]),js:t(()=>[W]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items},null,8,["headers","items"])]),_:1}),n(r,{h2:""},{default:t(()=>[J]),_:1}),Y,n(m,null,{pug:t(()=>[K]),html:t(()=>[G]),js:t(()=>[Q]),default:t(()=>[n(d,{headers:l.table1.headers,items:[]},null,8,["headers"]),O,n(d,{headers:l.table1.headers,items:[]},{"no-data":t(()=>[U]),_:1},8,["headers"])]),_:1}),n(r,{h2:""},{default:t(()=>[X]),_:1}),Z,n(m,null,{pug:t(()=>[ee]),html:t(()=>[te]),js:t(()=>[ae]),default:t(()=>[n(d,{headers:l.table2.headers,items:l.table2.items},null,8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"example--no-headers"},{default:t(()=>[le]),_:1}),ne,n(m,null,{pug:t(()=>[se]),html:t(()=>[ie]),js:t(()=>[oe]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"example--fixed-headers"},{default:t(()=>[re]),_:1}),n(m,null,{pug:t(()=>[de]),html:t(()=>[me]),js:t(()=>[he]),default:t(()=>[n(d,{headers:l.table3.headers,items:l.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"example--footer"},{default:t(()=>[ce]),_:1}),n(r,{h3:"",slug:"example--footer-slot"},{default:t(()=>[ue]),_:1}),be,a("div",fe,[n(y,{onClick:o[0]||(o[0]=i=>l.table3.fixedFooter=!l.table3.fixedFooter),outline:!l.table3.fixedFooter,round:""},{default:t(()=>[a("span",{class:_(["code",l.table3.fixedFooter?"white":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),n(m,null,{pug:t(()=>[e(`w-table(
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
        | `+s("{{ table.items.length }}")+" persons",1)]),html:t(()=>[e(`<w-table
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
        `+s("{{ table.items.length }}")+` persons
      </div>
    </w-flex>
  </template>
</w-table>`,1)]),js:t(()=>[ge]),default:t(()=>[n(d,{ref:"table",headers:l.table3.headers,items:l.table3.items,"fixed-footer":l.table3.fixedFooter,style:{height:"250px"}},{footer:t(()=>[n(L,{"justify-space-between":""},{default:t(()=>[n(y,{round:"",sm:"",onClick:p.addRow},{default:t(()=>[n(g,{class:"mr1"},{default:t(()=>[pe]),_:1}),ye]),_:1},8,["onClick"]),a("div",null,[Ne,e(s(l.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),n(r,{h3:"",slug:"example--footer-slot"},{default:t(()=>[we]),_:1}),_e,ke,n(m,null,{pug:t(()=>[e(`w-table(
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
        | `+s("{{ header.label }}"),1)]),html:t(()=>[e(`<w-table
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
        `+s("{{ header.label }}")+`
      </th>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[ve]),default:t(()=>[n(d,{ref:"table",headers:l.table3.headers,"no-headers":"",items:l.table3.items,"fixed-footer":l.table3.fixedFooter,style:{height:"250px"}},{"footer-row":t(()=>[a("tr",null,[(u(!0),b(x,null,R(l.table3.headers,(i,c)=>(u(),b("th",{class:_(["py1",`${c?"px1":"px2"} text-${i.align||"left"}`]),key:c},s(i.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),n(r,{h2:""},{default:t(()=>[xe]),_:1}),Fe,n(M,{language:"css"},{default:t(()=>[Se]),_:1}),n(m,null,{pug:t(()=>[Re]),html:t(()=>[Ce]),js:t(()=>[Ie]),default:t(()=>[n(d,{headers:l.table7.headers,items:l.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),n(r,{h3:""},{default:t(()=>[De]),_:1}),Le,n(m,null,{pug:t(()=>[Me]),html:t(()=>[Te]),js:t(()=>[Ee]),default:t(()=>[n(d,{headers:l.table8.headers,items:l.table8.items,"resizable-columns":"",onColumnResize:p.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),n(r,{h2:""},{default:t(()=>[qe]),_:1}),Be,n(m,null,{pug:t(()=>[e(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+s("{{ header.hidden ? '-off' : ''}}")+`
  | `+s("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:t(()=>[e(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+s("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+s("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,1)]),js:t(()=>[Ve]),default:t(()=>[je,(u(!0),b(x,null,R(l.table6.headers,(i,c)=>(u(),q(T,{class:"ma1",key:c,"bg-color":i.hidden?"grey-light4":"primary",onClick:$(N=>i.hidden=!i.hidden,["stop"])},{default:t(()=>[n(g,{class:"mr2"},{default:t(()=>[e("mdi mdi-eye"+s(i.hidden?"-off":""),1)]),_:2},1024),e(s(i.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),n(d,{class:"mt2",headers:l.table6.headers.filter(i=>!i.hidden),items:l.table6.items},null,8,["headers","items"])]),_:1}),n(r,{h2:""},{default:t(()=>[$e]),_:1}),ze,Ae,n(m,null,{pug:t(()=>[We]),html:t(()=>[Je]),js:t(()=>[Ye]),default:t(()=>[a("div",He,[Pe,n(E,{class:"ml1 mr4",modelValue:l.table9.stickyColumn,"onUpdate:modelValue":o[1]||(o[1]=i=>l.table9.stickyColumn=i),items:l.table9.stickyColumnOptions,onChange:p.toggleStickyColumn,inline:""},null,8,["modelValue","items","onChange"]),n(y,{onClick:o[2]||(o[2]=i=>l.table9.fixedHeaders=!l.table9.fixedHeaders),outline:!l.table9.fixedHeaders,round:""},{default:t(()=>[a("span",{class:_(["code",l.table9.fixedHeaders?"white":"primary"])},"fixed-headers",2)]),_:1},8,["outline"])]),n(d,{class:"white--bg",headers:l.table9.headers,items:l.table9.items,"fixed-layout":"","fixed-headers":l.table9.fixedHeaders,style:{"max-width":"500px",height:"200px"}},null,8,["headers","items","fixed-headers"])]),_:1}),n(r,{h2:""},{default:t(()=>[Oe]),_:1}),Ue,n(m,null,{pug:t(()=>[Ke]),html:t(()=>[Ge]),js:t(()=>[Qe]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,sort:l.table1.sort,"onUpdate:sort":o[3]||(o[3]=i=>l.table1.sort=i)},null,8,["headers","items","sort"])]),_:1}),n(r,{h2:""},{default:t(()=>[Xe]),_:1}),Ze,n(m,null,{pug:t(()=>[nt]),html:t(()=>[st]),js:t(()=>[it]),default:t(()=>[a("div",et,[n(y,{class:"mr2 mb1",onClick:o[4]||(o[4]=i=>l.table3.activeFilter=0),round:"",outline:l.table3.activeFilter!==0},{default:t(()=>[tt]),_:1},8,["outline"]),n(y,{class:"mr2 mb1",onClick:o[5]||(o[5]=i=>l.table3.activeFilter=1),round:"",outline:l.table3.activeFilter!==1},{default:t(()=>[at]),_:1},8,["outline"]),n(y,{class:"mr2 mb1",onClick:o[6]||(o[6]=i=>l.table3.activeFilter=2),round:"",outline:l.table3.activeFilter!==2},{default:t(()=>[lt]),_:1},8,["outline"])]),n(d,{headers:l.table3.headers,items:l.table3.items,filter:l.table3.filters[l.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),n(r,{h3:""},{default:t(()=>[ot]),_:1}),rt,n(m,null,{pug:t(()=>[dt]),html:t(()=>[mt]),js:t(()=>[ht]),default:t(()=>[n(V,{class:"mb3",modelValue:l.table4.keyword,"onUpdate:modelValue":o[7]||(o[7]=i=>l.table4.keyword=i),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),n(d,{headers:l.table4.headers,items:l.table4.items,filter:l.table4.keywordFilter(l.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),n(k,{tip:""},{default:t(()=>[ct,ut,bt,ft,n(g,{class:"red mr1",size:"0.9em"},{default:t(()=>[pt]),_:1}),yt,Nt,gt,wt,_t,kt,vt,xt,Ft,St,Rt,Ct,It]),_:1}),n(r,{h2:""},{default:t(()=>[Dt]),_:1}),Lt,n(y,{class:"mb2",disabled:l.table1.loading,onClick:p.reload},{default:t(()=>[n(g,{class:"mr1"},{default:t(()=>[Mt]),_:1}),Tt]),_:1},8,["disabled","onClick"]),n(r,{h3:""},{default:t(()=>[Et]),_:1}),n(m,null,{pug:t(()=>[qt]),html:t(()=>[Bt]),js:t(()=>[jt]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,loading:l.table1.loading},null,8,["headers","items","loading"])]),_:1}),n(r,{h3:"",slug:"loading-with-fixed-header"},{default:t(()=>[Vt]),_:1}),n(m,null,{pug:t(()=>[$t]),html:t(()=>[zt]),js:t(()=>[At]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table3.items,"fixed-headers":"",loading:l.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),n(r,{h2:"",slug:"pagination"},{default:t(()=>[Ht,n(T,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:t(()=>[Pt]),_:1})]),_:1}),n(m,null,{pug:t(()=>[]),js:t(()=>[Jt]),default:t(()=>[Wt]),_:1}),n(r,{h2:""},{default:t(()=>[Yt]),_:1}),Ot,Ut,n(r,{h3:"",slug:"example--selectable-rows"},{default:t(()=>[Kt,Gt,Qt]),_:1}),Xt,n(r,{h3:"",slug:"example--force-selection"},{default:t(()=>[Zt,ea,ta]),_:1}),aa,n(r,{h3:"",slug:"example--row-select"},{default:t(()=>[la,na,sa]),_:1}),ia,n(m,null,{pug:t(()=>[ma]),html:t(()=>[ha]),js:t(()=>[ca]),default:t(()=>[n(L,{class:"mb4",wrap:""},{default:t(()=>[n(E,{class:"mr6",modelValue:l.table1.selectableRows,"onUpdate:modelValue":o[8]||(o[8]=i=>l.table1.selectableRows=i),items:l.selectableRowsOptions},null,8,["modelValue","items"]),n(y,{class:"my3",onClick:o[9]||(o[9]=i=>l.table1.forceSelection=!l.table1.forceSelection),round:"",outline:!l.table1.forceSelection},{default:t(()=>[l.table1.forceSelection?(u(),q(g,{key:0,class:"mr2"},{default:t(()=>[oa]),_:1})):z("",!0),ra]),_:1},8,["outline"])]),_:1}),n(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":l.table1.selectableRows,"force-selection":l.table1.forceSelection,onRowSelect:o[10]||(o[10]=i=>l.selectionInfo=i)},null,8,["headers","items","selectable-rows","force-selection"]),da,a("pre",null,s(l.selectionInfo),1)]),_:1}),n(r,{h3:""},{default:t(()=>[ua]),_:1}),ba,n(k,{tip:""},{default:t(()=>[fa]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+s("{{ table.selectedRows }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+s("{{ table.selectedRows }}")+`</code>
</div>`,1)]),js:t(()=>[ga]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":"","selected-rows":l.table1.selectedRows,"onUpdate:selected-rows":o[11]||(o[11]=i=>l.table1.selectedRows=i)},null,8,["headers","items","selected-rows"]),a("div",pa,[ya,a("code",Na,s(l.table1.selectedRows),1)])]),_:1}),n(k,{info:""},{default:t(()=>[wa,_a,ka,va,xa,Fa,Sa]),_:1}),n(r,{h2:"",slug:"example--expandable-rows"},{default:t(()=>[Ra]),_:1}),n(k,{warning:""},{default:t(()=>[Ca]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+s("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+s("{{ item.firstName }}")+" weighs ",1),a("strong",null,s("{{ item.weight }}")+"kg",1),La,a("strong",null,s("{{ item.height }}")+"m",1),Ma]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+s("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+s("{{ item.firstName }}")+" weighs ",1),a("strong",null,s("{{ item.weight }}")+"kg",1),Ta,a("strong",null,s("{{ item.height }}")+"m",1),Ea]),js:t(()=>[qa]),default:t(()=>[n(d,{headers:l.table5.headers,items:l.table5.items,"expandable-rows":""},{"row-expansion":t(({item:i})=>[n(g,{class:"mr2",color:["blue","pink"][i.gender]},{default:t(()=>[e("mdi "+s(["mdi-gender-male","mdi-gender-female"][i.gender]),1)]),_:2},1032,["color"]),e(s(i.firstName)+" weighs ",1),a("strong",null,s(i.weight)+"kg",1),Ia,a("strong",null,s(i.height)+"m",1),Da]),_:1},8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"slots"},{default:t(()=>[Ba]),_:1}),ja,n(r,{h3:""},{default:t(()=>[Va]),_:1}),$a,n(m,null,{pug:t(()=>[za]),html:t(()=>[Aa]),js:t(()=>[Ha]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items},{"header-label":t(({label:i,index:c})=>[e(s(c)+": "+s(i)+" \u{1F44C}",1)]),_:1},8,["headers","items"])]),_:1}),n(r,{h3:"",slug:"item-cells"},{default:t(()=>[Pa]),_:1}),Wa,n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+s("{{ header.label }}")+`:
    span `+s("{{ label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+s("{{ header.label }}")+`:</small>
    <span>`+s("{{ label }}")+`</span>
  </template>
</w-table>`,1)]),js:t(()=>[Oa]),default:t(()=>[n(d,{headers:l.table1.headers,"no-headers":"",items:l.table1.items},{"item-cell":t(({item:i,label:c,header:N,index:w})=>[N.key==="id"?(u(),b("small",Ja,"#"+s(w),1)):(u(),b(x,{key:1},[a("small",Ya,s(N.label)+":",1),a("span",null,s(c),1)],64))]),_:1},8,["headers","items"])]),_:1}),n(r,{h3:"",slug:"override-1-particular-item-cell"},{default:t(()=>[Ua]),_:1}),Ka,n(m,null,{pug:t(()=>[Qa]),html:t(()=>[Xa]),js:t(()=>[Za]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":""},{"item-cell.id":t(({item:i,label:c,header:N,index:w})=>[a("div",Ga,s(c),1)]),_:1},8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"full-custom-rows"},{default:t(()=>[el]),_:1}),tl,n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+s("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+s("{{ item[header.key] || '' }}")+`
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[ll]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":""},{item:t(({item:i,index:c,select:N,classes:w})=>[a("tr",{class:_(w),onClick:N},[(u(!0),b(x,null,R(l.table1.headers,(v,C)=>(u(),b("td",{key:C,class:_(`pa4 text-${v.align||"left"}`)},s(i[v.key]||""),3))),128))],10,al)]),_:1},8,["headers","items"])]),_:1}),n(r,{h3:"",slug:"colspan-on-td"},{default:t(()=>[nl,sl]),_:1}),il,n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+s("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+s("{{ header.label }}")+`:
            | `+s("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
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
          Row #`+s("{{ index }}")+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+s("{{ header.label }}")+`:
            </strong>
            `+s("{{ item[header.key] || '' }}")+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[hl]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":"","selectable-rows":""},{item:t(({item:i,index:c,select:N,classes:w})=>[a("tr",{class:_({...w,"indigo-light5--bg":c%2,"blue-light5--bg":!(c%2)}),onClick:N},[a("td",{class:"pa2",colspan:l.table1.headers.length},[a("div",dl,"Row #"+s(c),1),a("ul",null,[(u(!0),b(x,null,R(l.table1.headers,(v,C)=>(u(),b("li",{key:C},[a("strong",ml,s(v.label)+":",1),e(s(i[v.key]||""),1)]))),128))])],8,rl)],10,ol)]),_:1},8,["headers","items"])]),_:1}),n(r,{h2:""},{default:t(()=>[cl]),_:1}),ul,n(m,null,{pug:t(()=>[bl]),html:t(()=>[fl]),js:t(()=>[pl]),default:t(()=>[n(d,{headers:l.table2.headers,items:l.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),n(k,{tip:""},{default:t(()=>[yl,n(M,{class:"mt5 mb0",language:"css",label:"CSS"},{default:t(()=>[Nl]),_:1})]),_:1})])}const F=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],wl={data:()=>({table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:F.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F,filters:[null,l=>l.lastName[0]==="M",l=>l.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F,keyword:"",keywordFilter:l=>o=>{const f=`${o.id} ${o.firstName} ${o.lastName}`;return new RegExp(l,"i").test(f)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:F.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table9:{stickyColumn:1,fixedHeaders:!1,stickyColumnOptions:[{value:1,label:"#1"},{value:2,label:"#2"},{value:24,label:"#2 & #4"},{value:0,label:"None"}],headers:[{label:"ID",key:"id",hidden:!1,width:"60px",sticky:!0},{label:"First name",key:"firstName",hidden:!1,width:"120px"},{label:"Last name",key:"lastName",hidden:!1,width:"120px"},{label:"Birthday",key:"birthday",email:!1,width:"150px"},{label:"Email",key:"email",hidden:!1,width:"200px"},{label:"Phone",key:"phone",hidden:!1,width:"200px"},{label:"Country",key:"country",hidden:!1,width:"200px"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",birthday:"Feb. 12, 1976",email:"f.sampson@gmail.com",phone:"+21 234 567 8921",country:"United Kingdom"},{id:2,firstName:"Nellie",lastName:"Lynn",birthday:"Dec. 15, 1995",email:"n.lynn@gmail.com",phone:"+22 234 567 8922",country:"Luxembourg"},{id:3,firstName:"Rory",lastName:"Bristol",birthday:"Apr. 25, 1989",email:"r.bristol@gmail.com",phone:"+23 234 567 8923",country:"Montenegro"},{id:4,firstName:"Daley",lastName:"Elliott",birthday:"Mar. 24, 2002",email:"d.elliott@gmail.com",phone:"+24 234 567 8924",country:"Germany"},{id:5,firstName:"Virgil",lastName:"Carman",birthday:"Aug. 2, 1990",email:"v.carman@gmail.com",phone:"+25 234 567 8925",country:"Ukraine"},{id:6,firstName:"Baldwin",lastName:"Morison",birthday:"Feb. 12, 2008",email:"b.morison@gmail.com",phone:"+26 234 567 8926",country:"Lithuania"},{id:7,firstName:"Beckah",lastName:"Mann",birthday:"Nov. 6, 1991",email:"b.mann@gmail.com",phone:"+27 234 567 8927",country:"Finland"},{id:8,firstName:"Davie",lastName:"Forester",birthday:"Dec. 6, 1982",email:"d.forester@gmail.com",phone:"+28 234 567 8928",country:"Portugal"},{id:9,firstName:"Andi",lastName:"Montgomery",birthday:"Jan. 20, 1987",email:"a.montgomery@gmail.com",phone:"+29 234 567 8929",country:"Czechia"},{id:10,firstName:"Magnolia",lastName:"Kirk",birthday:"Dec. 31, 1992",email:"m.kirk@gmail.com",phone:"+30 234 567 8930",country:"Norway"},{id:11,firstName:"Hamilton",lastName:"Mallory",birthday:"Dec. 7, 1979",email:"h.mallory@gmail.com",phone:"+31 234 567 8931",country:"Greece"},{id:12,firstName:"Sheree",lastName:"Castle",birthday:"Feb. 16, 1980",email:"s.castle@gmail.com",phone:"+32 234 567 8932",country:"France"},{id:13,firstName:"Rebekah",lastName:"Eason",birthday:"Jun. 29, 2000",email:"r.eason@gmail.com",phone:"+33 234 567 8933",country:"Poland"},{id:14,firstName:"Maude",lastName:"Hayley",birthday:"Dec. 31, 2009",email:"m.hayley@gmail.com",phone:"+34 234 567 8934",country:"Hungary"},{id:15,firstName:"Josie",lastName:"Richard",birthday:"Aug. 16, 2004",email:"j.richard@gmail.com",phone:"+35 234 567 8935",country:"Italy"}]},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}),methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(l){this.table6.headers[l].hidden=!this.table6.headers[l].hidden},onColumnResize({index:l,widths:o}){o.forEach((f,S)=>this.table8.headers[S].width=f),localStorage.tableWidths=o},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:"John",lastName:"Doe"}),this.$nextTick(()=>{this.$refs.table.$el.querySelector("tbody tr:last-child").scrollIntoView({behavior:"smooth",block:"nearest"})})},toggleStickyColumn(){switch(this.table9.headers.forEach(l=>l.sticky=!1),this.table9.stickyColumn){case 1:return this.table9.headers[0].sticky=!0;case 2:return this.table9.headers[1].sticky=!0;case 24:return this.table9.headers[1].sticky=!0,this.table9.headers[3].sticky=!0}}},mounted(){var l;this.reload(),(l=localStorage.tableWidths)==null||l.split(",").forEach((o,f)=>this.table8.headers[f].width=o)}};var _l=I(wl,[["render",gl]]);const kl=a("div",{class:"w-divider my12"},null,-1),vl=e("API");function xl(l,o,f,S,D,p){const r=h("title-link"),d=h("component-api");return u(),b("div",null,[kl,n(r,{class:"title1",h2:""},{default:t(()=>[vl]),_:1}),n(d,{class:"mt0",items:p.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(d,{items:l.slots,title:"Slots"},null,8,["items"]),n(d,{items:p.events,title:"Events"},null,8,["items"])])}const Fl={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",fixedFooter:"When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.",fixedLayout:"When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.",loading:"When set to <code>true</code>, a progress bar will be displayed. Convenient when the table data is not ready.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize."},Sl={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}},footer:{description:"Provide a custom template for the table footer if you want one.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot."},"footer-row":{description:"Provide a custom template for the table footer if you want one.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s."}},Rl={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},Cl={data:()=>({propsDescs:Fl,slots:Sl}),computed:{props(){return B.props},events(){return B.emits.reduce((l,o)=>(l[o]=Rl[o]||{})&&l,{})}}};var Il=I(Cl,[["render",xl]]);const Dl=e("w-table");function Ll(l,o,f,S,D,p){const r=h("ui-component-title"),d=h("examples"),m=h("api");return u(),b("main",null,[n(r,{slug:"w-table"},{default:t(()=>[Dl]),_:1}),n(d),n(m)])}const Ml={components:{Examples:_l,Api:Il}};var El=I(Ml,[["render",Ll]]);export{El as default};
