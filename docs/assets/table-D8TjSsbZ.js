import{N as e,U as t,c as n,d as r,g as i,gt as a,h as o,j as s,k as c,l,m as u,r as d,u as f,yt as p}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{l as m}from"./runtime-dom.esm-bundler-Cc0sF0om.js";import{t as h}from"./_plugin-vue_export-helper-S3RvzygF.js";import{s as g}from"./index-CKcZQ2YR.js";import{t as _}from"./chunk-NAVWDHVN-DSO01vmb.js";var v={class:`w-flex justify-end`},y={class:`w-flex align-center mb2`},b={class:`w-flex wrap mb3`},x={class:`w-flex align-center gap2 pa1`},S={class:`w-flex gap2 no-grow`},C={class:`mb0`},w={class:`mt4`},T={class:`ml2`},E={key:0},D={class:`grey mr2`},O=[`onClick`],k=[`onClick`],A=[`colspan`],j={class:`title3`},M={class:`mr2`};function N(h,g,_,N,P,F){let I=e(`title-link`),L=e(`w-table`),R=e(`example`),z=e(`w-button`),B=e(`w-icon`),V=e(`w-flex`),H=e(`ssh-pre`),U=e(`w-tag`),W=e(`w-radios`),G=e(`alert`),K=e(`w-input`);return c(),r(`div`,null,[i(I,{h2:``},{default:t(()=>[...g[12]||=[o(`Basic`,-1)]]),_:1}),g[180]||=n(`p`,null,[o(`Providing an array of items will automatically create a table row for each item.`),n(`br`),o(`
Note that the `),n(`code`,null,`class`),o(` key is used to add a custom class to the table row for easy row styling.`)],-1),i(R,null,{pug:t(()=>[...g[13]||=[o(`w-table(:headers="table.headers" :items="table.items")`,-1)]]),html:t(()=>[...g[14]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`,-1)]]),js:t(()=>[...g[15]||=[o(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, class: 'row--1', firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, class: 'row--2', firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, class: 'row--3', firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, class: 'row--4', firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, class: 'row--5', firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items},null,8,[`headers`,`items`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[16]||=[o(`When there is no data`,-1)]]),_:1}),g[181]||=n(`p`,null,[o(`When there is no data, a default text will be displayed. You can override it via the `),n(`code`,null,`no-data`),o(` slot.`)],-1),i(R,null,{pug:t(()=>[...g[18]||=[o(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) 👌 There is no data! 👌`,-1)]]),html:t(()=>[...g[19]||=[o(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    👌 There is no data! 👌
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[20]||=[o(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:[]},null,8,[`headers`]),g[21]||=n(`br`,null,null,-1),i(L,{headers:P.table1.headers,items:[]},{"no-data":t(()=>[...g[17]||=[o(`👌 There is no data! 👌`,-1)]]),_:1},8,[`headers`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[22]||=[o(`Alignments`,-1)]]),_:1}),g[182]||=n(`p`,null,[o(`You can align the columns contents separately by adding an `),n(`code`,null,`align`),o(` key in each header
definition (`),n(`code`,null,`left`),o(`, `),n(`code`,null,`center`),o(` or `),n(`code`,null,`right`),o(`).`),n(`br`),o(`
If you don't define any, `),n(`code`,null,`left`),o(` will be implicit.
`)],-1),i(R,null,{pug:t(()=>[...g[23]||=[o(`w-table(:headers="table.headers" :items="table.items")`,-1)]]),html:t(()=>[...g[24]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`,-1)]]),js:t(()=>[...g[25]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table2.headers,items:P.table2.items},null,8,[`headers`,`items`])]),_:1}),i(I,{h2:``,slug:`example--no-headers`},{default:t(()=>[...g[26]||=[o(`No headers`,-1)]]),_:1}),g[183]||=n(`p`,null,[o(`Even with the `),n(`code`,null,`no-headers`),o(` option, the `),n(`code`,null,`headers`),o(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),i(R,null,{pug:t(()=>[...g[27]||=[o(`w-table(:items="table.items" :headers="table.headers" no-headers)`,-1)]]),html:t(()=>[...g[28]||=[o(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`,-1)]]),js:t(()=>[...g[29]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,"no-headers":``},null,8,[`headers`,`items`])]),_:1}),i(I,{h2:``,slug:`example--fixed-headers`},{default:t(()=>[...g[30]||=[o(`Fixed headers`,-1)]]),_:1}),i(R,null,{pug:t(()=>[...g[31]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`,-1)]]),html:t(()=>[...g[32]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`,-1)]]),js:t(()=>[...g[33]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table3.headers,items:P.table3.items,"fixed-headers":``,style:{height:`250px`}},null,8,[`headers`,`items`])]),_:1}),i(I,{h2:``,slug:`example--footer`},{default:t(()=>[...g[34]||=[o(`Footer`,-1)]]),_:1}),i(I,{h3:``,slug:`example--footer-slot`},{default:t(()=>[...g[35]||=[o(`Footer slot`,-1)]]),_:1}),g[184]||=n(`p`,null,[o(`A table footer can be added via the `),n(`code`,null,`footer`),o(` slot. If present, the footer will span on
all the columns by default.
`)],-1),n(`div`,v,[i(z,{onClick:g[0]||=e=>P.table3.fixedFooter=!P.table3.fixedFooter,outline:!P.table3.fixedFooter,round:``},{default:t(()=>[n(`span`,{class:a([`code`,P.table3.fixedFooter?`contrast-color`:`primary`])},`fixed-footer`,2)]),_:1},8,[`outline`])]),i(R,null,{pug:t(()=>[...g[39]||=[o(`w-table(
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
        | `+p(`{{ table.items.length }}`)+` persons`,-1)]]),html:t(()=>[...g[40]||=[o(`<w-table
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
        `+p(`{{ table.items.length }}`)+` persons
      </div>
    </w-flex>
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[41]||=[o(`data: () => ({
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
      const table = this.$refs.table.$el
      table.scrollTo({ top: table.scrollHeight, behavior: 'smooth' })
    })
  }
}
`,-1)]]),default:t(()=>[i(L,{ref:`table`,headers:P.table3.headers,items:P.table3.items,"fixed-footer":P.table3.fixedFooter,style:{height:`250px`}},{footer:t(()=>[i(V,{"justify-space-between":``},{default:t(()=>[i(z,{round:``,sm:``,onClick:F.addRow},{default:t(()=>[i(B,{class:`mr1`},{default:t(()=>[...g[36]||=[o(`wi-plus`,-1)]]),_:1}),g[37]||=o(`add person`,-1)]),_:1},8,[`onClick`]),n(`div`,null,[g[38]||=n(`strong`,{class:`mr2`},`Total:`,-1),o(p(P.table3.items.length)+` persons`,1)])]),_:1})]),_:1},8,[`headers`,`items`,`fixed-footer`])]),_:1}),i(I,{h3:``,slug:`example--footer-slot`},{default:t(()=>[...g[42]||=[o(`Footer-row slot`,-1)]]),_:1}),g[185]||=n(`p`,null,[o(`The `),n(`code`,null,`footer-row`),o(` slot will give you more flexibility as it lets you define the whole table row.`)],-1),g[186]||=n(`p`,null,`It can be useful if you want to keep the columns alignments in the footer.`,-1),i(R,null,{pug:t(()=>[...g[43]||=[o(`w-table(
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
        | `+p(`{{ header.label }}`),-1)]]),html:t(()=>[...g[44]||=[o(`<w-table
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
        `+p(`{{ header.label }}`)+`
      </th>
    </tr>
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[45]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table3.headers,"no-headers":``,items:P.table3.items,"fixed-footer":P.table3.fixedFooter,style:{height:`250px`}},{"footer-row":t(()=>[n(`tr`,null,[(c(!0),r(d,null,s(P.table3.headers,(e,t)=>(c(),r(`th`,{class:a([`py1`,`${t?`px1`:`px2`} text-${e.align||`left`}`]),key:t},p(e.label),3))),128))])]),_:1},8,[`headers`,`items`,`fixed-footer`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[46]||=[o(`Built-in column resizing`,-1)]]),_:1}),g[187]||=n(`p`,null,[o(`You can resize the columns by dragging their edges left or right.`),n(`br`),o(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),n(`code`,null,`...`),o(`), you can apply this CSS.`)],-1),i(H,{language:`css`,dark:h.$store.state.darkMode},{default:t(()=>[...g[47]||=[o(`.w-table__cell {
  white-space: nowrap;
}
`,-1)]]),_:1},8,[`dark`]),i(R,null,{pug:t(()=>[...g[48]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`,-1)]]),html:t(()=>[...g[49]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`,-1)]]),js:t(()=>[...g[50]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table7.headers,items:P.table7.items,"resizable-columns":``},null,8,[`headers`,`items`])]),_:1}),i(I,{h3:``},{default:t(()=>[...g[51]||=[o(`Saving the table layout in localStorage`,-1)]]),_:1}),g[188]||=n(`p`,null,[o(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),n(`br`),o(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),i(R,null,{pug:t(()=>[...g[52]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`,-1)]]),html:t(()=>[...g[53]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`,-1)]]),js:t(()=>[...g[54]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table8.headers,items:P.table8.items,"resizable-columns":``,onColumnResize:F.onColumnResize},null,8,[`headers`,`items`,`onColumnResize`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[55]||=[o(`Toggling column visibility`,-1)]]),_:1}),g[189]||=n(`p`,null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),i(R,null,{pug:t(()=>[o(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? `+p(h.$store.state.darkMode?`grey-dark4`:`grey-light4`)+` : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+p(`{{ header.hidden ? '-off' : ''}}`)+`
  | `+p(`{{ header.label }}`)+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:t(()=>[...g[56]||=[o(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+p(`{{ header.hidden ? '-off' : ''}}`)+`</w-icon>
  `+p(`{{ header.label }}`)+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,-1)]]),js:t(()=>[...g[57]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[g[58]||=o(`Toggle columns:`,-1),(c(!0),r(d,null,s(P.table6.headers,(e,n)=>(c(),l(U,{class:`ma1`,key:n,"bg-color":e.hidden?h.$store.state.darkMode?`grey-dark4`:`grey-light4`:`primary`,onClick:m(t=>e.hidden=!e.hidden,[`stop`])},{default:t(()=>[i(B,{class:`mr2`},{default:t(()=>[o(`mdi mdi-eye`+p(e.hidden?`-off`:``),1)]),_:2},1024),o(p(e.label),1)]),_:2},1032,[`bg-color`,`onClick`]))),128)),i(L,{class:`mt2`,headers:P.table6.headers.filter(e=>!e.hidden),items:P.table6.items},null,8,[`headers`,`items`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[59]||=[o(`Sticky columns`,-1)]]),_:1}),g[190]||=n(`p`,null,[o(`To make a column sticky, you only need to add `),n(`code`,null,`sticky: true`),o(` to the header of that
column.`),n(`br`),o(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1),g[191]||=n(`p`,{class:`grey`},`Scroll the table horizontally to observe the behavior.`,-1),i(R,{class:`example--sticky-columns`},{pug:t(()=>[...g[61]||=[o(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`,-1)]]),html:t(()=>[...g[62]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`,-1)]]),js:t(()=>[...g[63]||=[o(`data: () => ({
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
})`,-1)]]),css:t(()=>[...g[64]||=[o(`/* This CSS is not needed. It's only to increase the scroll in the sticky columns demo. */
.w-table {white-space: nowrap;}
.w-table__header, .w-table__cell {padding-left: 20px;padding-right: 20px;}
`,-1)]]),default:t(()=>[n(`div`,y,[g[60]||=o(`Sticky columns:`,-1),i(W,{class:`ml1 mr4`,modelValue:P.table9.stickyColumn,"onUpdate:modelValue":g[1]||=e=>P.table9.stickyColumn=e,items:P.table9.stickyColumnOptions,onChange:F.toggleStickyColumn,inline:``},null,8,[`modelValue`,`items`,`onChange`]),i(z,{onClick:g[2]||=e=>P.table9.fixedHeaders=!P.table9.fixedHeaders,outline:!P.table9.fixedHeaders,round:``},{default:t(()=>[n(`span`,{class:a([`code`,P.table9.fixedHeaders?`contrast-color`:`primary`])},`fixed-headers`,2)]),_:1},8,[`outline`])]),i(L,{class:`base-color--bg`,headers:P.table9.headers,items:P.table9.items,"fixed-layout":``,"fixed-headers":P.table9.fixedHeaders,style:{"max-width":`500px`,height:`200px`}},null,8,[`headers`,`items`,`fixed-headers`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[65]||=[o(`Sorting`,-1)]]),_:1}),g[192]||=n(`p`,null,[o(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),n(`strong`,{class:`code`},`w-table`),o(`'s sorting is defined with a header key string preceded by a `),n(`code`,null,`+`),o(` for ASC,
or a `),n(`code`,null,`-`),o(` for DESC. For instance, in this example: `),n(`code`,null,`'+firstName'`),o(`.
`)],-1),i(I,{h3:``},{default:t(()=>[...g[66]||=[o(`Initial Sorting`,-1)]]),_:1}),i(R,null,{pug:t(()=>[...g[67]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort")`,-1)]]),html:t(()=>[...g[68]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`,-1)]]),js:t(()=>[...g[69]||=[o(`data: () => ({
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
})`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,sort:P.table1.sort,"onUpdate:sort":g[3]||=e=>P.table1.sort=e},null,8,[`headers`,`items`,`sort`])]),_:1}),i(G,{tip:``},{default:t(()=>[...g[70]||=[o(`By default any column being sorted is highlighted. You can modify the style of the whole column
with the class `,-1),n(`code`,null,`.w-table__col--highlighted`,-1),o(`.`,-1),n(`br`,null,null,-1),o(`
Also, if you try to target it in the devtools and can't find it, it's in `,-1),n(`code`,null,`table > colgroup`,-1),o(`.
`,-1)]]),_:1}),i(I,{h3:``},{default:t(()=>[...g[71]||=[o(`Asynchronous Sorting`,-1)]]),_:1}),g[193]||=n(`p`,null,[o(`When dealing with a lot of table entries, you will most likely need the sorting to be done
in the backend.`),n(`br`),o(`
For this you can use the asynchronous sorting and update the table rows from outside Wave UI.`)],-1),i(R,{"blank-codepen":[`js`]},{html:t(()=>[...g[73]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  :sort-function="sortFunction"
  :loading="table.loading"
  style="height: 140px">
</w-table>`,-1)]]),js:t(()=>[...g[74]||=[o(`// This object is simulating content coming from the server.
const tableItemsInAPI = {
  null: [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '+id': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-id': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '+firstName': [
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-firstName': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' }
  ],
  '+lastName': [
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '-lastName': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' }
  ]
}

const app = Vue.createApp({
  data: () => ({
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
      loading: false
    }
  }),

  methods: {
    // For consistency, the received sortKeys parameter is always an array
    // (for multi-column sorting), whether the sorting is done on one or more columns.
    // Notice the async & await keywords.
    async sortFunction (sortKeys) {
      // Before the fetch set the loading flag, and display the progress bar in
      // the header only, so the current rows stay visible while loading.
      this.table.loading = 'header'

      // Simulating an AJAX call with 1 second latency.
      // Replace this in your app with a \`fetch\` or Axios call.
      const apiResponse = new Promise(resolve => setTimeout(() => resolve(tableItemsInAPI[sortKeys[0] || null]), 1000))

      // Fill up the array with rows from the API.
      this.table.items = await apiResponse

      this.table.loading = false
    }
  }
})

app.use(WaveUI, {})

app.mount('#app')
`,-1)]]),default:t(()=>[i(L,{class:`my6`,headers:P.table10.headers,items:P.table10.items,"sort-function":F.sortFunction,loading:P.table10.loading,style:{height:`145px`}},{pug:t(()=>[...g[72]||=[o(`w-table.my6(
:headers="table.headers"
:items="table.items"
:sort-function="sortFunction"
:loading="table.loading"
style="height: 140px")`,-1)]]),_:1},8,[`headers`,`items`,`sort-function`,`loading`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[75]||=[o(`Filtering`,-1)]]),_:1}),g[194]||=n(`p`,null,[o(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),n(`strong`,{class:`code`},`w-table`),o(` component and it will be applied to the table.`),n(`br`),o(`
Setting the filter to `),n(`code`,null,`null`),o(` or `),n(`code`,null,`false`),o(` or `),n(`code`,null,`undefined`),o(` will remove any previous filter.`)],-1),i(R,null,{pug:t(()=>[...g[79]||=[o(`.w-flex.wrap.mb3
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
  :filter="table.filters[table.activeFilter]")`,-1)]]),html:t(()=>[...g[80]||=[o(`<div class="w-flex wrap mb3">
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
</w-table>`,-1)]]),js:t(()=>[...g[81]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[n(`div`,b,[i(z,{class:`mr2 mb1`,onClick:g[4]||=e=>P.table3.activeFilter=0,round:``,outline:P.table3.activeFilter!==0},{default:t(()=>[...g[76]||=[o(`No filter`,-1)]]),_:1},8,[`outline`]),i(z,{class:`mr2 mb1`,onClick:g[5]||=e=>P.table3.activeFilter=1,round:``,outline:P.table3.activeFilter!==1},{default:t(()=>[...g[77]||=[o(`Last name starting with 'M'`,-1)]]),_:1},8,[`outline`]),i(z,{class:`mr2 mb1`,onClick:g[6]||=e=>P.table3.activeFilter=2,round:``,outline:P.table3.activeFilter!==2},{default:t(()=>[...g[78]||=[o(`ID >= 10`,-1)]]),_:1},8,[`outline`])]),i(L,{headers:P.table3.headers,items:P.table3.items,filter:P.table3.filters[P.table3.activeFilter]},null,8,[`headers`,`items`,`filter`])]),_:1}),i(I,{h3:``},{default:t(()=>[...g[82]||=[o(`Global filter`,-1)]]),_:1}),g[195]||=n(`p`,null,[o(`You could also apply a filter globally, which looks into all the columns at once.`),n(`br`),o(`
Here is one cool way to do it.`)],-1),i(R,null,{pug:t(()=>[...g[83]||=[o(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`,-1)]]),html:t(()=>[...g[84]||=[o(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`,-1)]]),js:t(()=>[...g[85]||=[o(`data: () => ({
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
})`,-1)]]),default:t(()=>[i(K,{class:`mb3`,modelValue:P.table4.keyword,"onUpdate:modelValue":g[7]||=e=>P.table4.keyword=e,placeholder:`Search anything...`,"inner-icon-left":`wi-search`},null,8,[`modelValue`]),i(L,{headers:P.table4.headers,items:P.table4.items,filter:P.table4.keywordFilter(P.table4.keyword)},null,8,[`headers`,`items`,`filter`])]),_:1}),i(G,{tip:``},{default:t(()=>[g[87]||=n(`strong`,null,[o(`If you don't need the RegExp power, you can simply return
`),n(`code`,null,`allTheColumns.toLowerCase().includes(keyword)`),o(` instead.
`)],-1),g[88]||=n(`br`,null,null,-1),g[89]||=n(`br`,null,null,-1),g[90]||=o(`But the real power of using a regular expression
`,-1),i(B,{class:`red mr1`,size:`0.9em`},{default:t(()=>[...g[86]||=[o(`mdi mdi-heart`,-1)]]),_:1}),g[91]||=o(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `,-1),g[92]||=n(`code`,null,`|`,-1),g[93]||=o(` etc.`,-1),g[94]||=n(`br`,null,null,-1),g[95]||=o(`
You could also match only the full words by replacing `,-1),g[96]||=n(`code`,null,`new RegExp(keyword, 'i')`,-1),g[97]||=o(` with
`,-1),g[98]||=n(`code`,null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),g[99]||=o(` (it would return a result when typing `,-1),g[100]||=n(`code`,null,`floretta`,-1),g[101]||=o(`
but not `,-1),g[102]||=n(`code`,null,`florett`,-1),g[103]||=o(` for instance).`,-1)]),_:1}),i(I,{h2:``},{default:t(()=>[...g[104]||=[o(`Loading state`,-1)]]),_:1}),g[196]||=n(`p`,null,[o(`When the table content is not ready straight away, you can use the `),n(`code`,null,`loading`),o(` prop to display
a progress bar while loading.`)],-1),i(z,{class:`mb2`,disabled:!!P.table1.loading,onClick:F.reload},{default:t(()=>[i(B,{class:`mr1`},{default:t(()=>[...g[105]||=[o(`mdi mdi-sync`,-1)]]),_:1}),g[106]||=o(`reload`,-1)]),_:1},8,[`disabled`,`onClick`]),i(I,{h3:``},{default:t(()=>[...g[107]||=[o(`Simple table - no set height`,-1)]]),_:1}),i(R,{style:{height:`170px`}},{pug:t(()=>[...g[108]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`,-1)]]),html:t(()=>[...g[109]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`,-1)]]),js:t(()=>[...g[110]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,loading:P.table1.loading},null,8,[`headers`,`items`,`loading`])]),_:1}),i(I,{h3:``,slug:`loading-with-fixed-header`},{default:t(()=>[...g[111]||=[o(`Table with fixed header & set height of 200px`,-1)]]),_:1}),i(R,null,{pug:t(()=>[...g[112]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`,-1)]]),html:t(()=>[...g[113]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`,-1)]]),js:t(()=>[...g[114]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table3.items,"fixed-headers":``,loading:P.table1.loading,style:{height:`200px`}},null,8,[`headers`,`items`,`loading`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[115]||=[o(`Pagination`,-1)]]),_:1}),g[197]||=n(`p`,null,`The pagination can be provided as an object:`,-1),i(H,{language:`js`},{default:t(()=>[...g[116]||=[o(`{
  itemsPerPage: Integer, // Number of rows to show per page.
  itemsPerPageOptions: Array, // Items per page options for the user.
  start: Integer, // The start of the results range.
  end: Integer, // The end of the results range.
  page: Integer, // The current page to display [itemsPerPage] number of rows.
  total: Integer // The total number of items available in the table.
}`,-1)]]),_:1}),g[198]||=u(`<p>More details in the <a href="#pagination-prop">API section</a>.</p><p>The pagination is a two-way binding object: if you modify any property inside it, the table
will re-paginate and update.</p><p>You are free to use <code>start</code> &amp; <code>end</code> or <code>page</code> and <code>itemsPerPage</code>
options at your convenience when triggering a pagination.
</p>`,3),i(I,{h3:``},{default:t(()=>[...g[117]||=[o(`Client-side pagination`,-1)]]),_:1}),i(R,{"blank-codepen":[`js`]},{pug:t(()=>[...g[118]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px")`,-1)]]),html:t(()=>[...g[119]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px">
</w-table>`,-1)]]),js:t(()=>[...g[120]||=[o(`// import { faker } from '@faker-js/faker' // With npm.
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'Birthdate', key: 'birthdate' },
      ],
      items: Array(200).fill('').map((item, i) => ({
        id: i + 1,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthdate: (faker.date.birthdate()).toISOString().substring(0, 10)
      })),
      pagination: {
        itemsPerPage: 50,
        total: 200
      }
    }
  })
})

app.use(WaveUI, { theme: 'auto' })

app.mount('#app')
`,-1)]]),default:t(()=>[i(L,{headers:P.table11.headers,items:P.table11.items,"fixed-headers":``,"fixed-footer":``,pagination:P.table11.pagination,style:{"max-height":`500px`}},null,8,[`headers`,`items`,`pagination`])]),_:1}),i(I,{h3:``},{default:t(()=>[...g[121]||=[o(`Server-side pagination`,-1)]]),_:1}),g[199]||=n(`p`,null,`This example showcases an asynchronous pagination with backend fetching of the table items.`,-1),i(R,{"blank-codepen":[`js`]},{pug:t(()=>[...g[122]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px")`,-1)]]),html:t(()=>[...g[123]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px">
</w-table>`,-1)]]),js:t(()=>[...g[124]||=[o(`// import { faker } from '@faker-js/faker' // With npm.
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

// Generate a server-side array of objects of 2000 random persons
// that we assume will be returned paginated from our backend.
const tableItemsInApi = Array(2000).fill('').map((item, i) => ({
  id: i + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthdate: (faker.date.birthdate()).toISOString().substring(0, 10)
}))

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'Birthdate', key: 'birthdate' },
      ],
      items: [], // The frontend has no data by default.
      loading: false,
      pagination: {
        itemsPerPage: 50,
        total: 2000
      }
    }
  }),

  methods: {
    // All these parameters are available from Wave UI.
    fetch ({ page, start, end, total, itemsPerPage, sorting }) {
      this.table.loading = 'header' // Display the loading bar.

      // Simulating a call to the backend with a delay of 1 second.
      // Once you receive the rows from the backend assign them to the table.items var.
      setTimeout(() => {
        const itemsFromApi = tableItemsInApi.slice(0) // Clone the array before sorting.
        if (sorting.length) {
          const sortKey = sorting[0].substring(1)
          itemsFromApi.sort((a, b) => {
            if (sorting[0][0] === '+') return a[sortKey] < b[sortKey] ? -1 : 1
            else return a[sortKey] > b[sortKey] ? -1 : 1
          })
        }
        this.table.items = itemsFromApi.slice(start - 1, end)
        this.table.loading = false
      }, 1000)
    }
  }
})

app.use(WaveUI, { theme: 'auto' })

app.mount('#app')
`,-1)]]),default:t(()=>[i(L,{headers:P.table12.headers,items:P.table12.items,"fixed-headers":``,"fixed-footer":``,fetch:P.table12.fetch,pagination:P.table12.pagination,loading:P.table12.loading,style:{"max-height":`500px`}},null,8,[`headers`,`items`,`fetch`,`pagination`,`loading`])]),_:1}),i(I,{h3:``},{default:t(()=>[...g[125]||=[o(`Custom pagination layout`,-1)]]),_:1}),g[200]||=n(`p`,null,[o(`More details about the pagination slot in the `),n(`a`,{href:`#pagination-slot`},`API section`),o(`.`)],-1),i(R,{"blank-codepen":[`js`]},{pug:t(()=>[...g[126]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px")
  template(#pagination="{ range, total, page, pagesCount, goToPage }")
    .w-flex.align-center.gap2.pa1
      .w-flex.gap2.no-grow
        w-button(
          @click="goToPage('-1')"
          :disabled="page === 1"
          icon="wi-chevron-left"
          xs)
        w-button(
          v-for="i in pagesCount"
          :key="i"
          @click="i !== page && goToPage(i)"
          :outline="page === i"
          round
          xs) `+p(`{{ i }}`)+`
        w-button(
          @click="goToPage(1)"
          :disabled="page === pagesCount"
          icon="wi-chevron-right"
          xs)
      p `+p(`{{ range }}`)+` of `+p(`{{ total }}`)+`.`,-1)]]),html:t(()=>[...g[127]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px">
  <template #pagination="{ range, total, page, pagesCount, goToPage }">
    <div class="w-flex align-center gap2 pa1">
      <div class="w-flex align-center gap2 pa1">
        <w-button
          @click="goToPage('-1')"
          :disabled="page === 1"
          icon="wi-chevron-left"
          xs>
        </w-button>
        <w-button
          v-for="i in pagesCount"
          :key="i"
          @click="i !== page && goToPage(i)"
          :outline="page === i"
          round
          xs>
          `+p(`{{ i }}`)+`
        </w-button>
        <w-button
          @click="goToPage('+1')"
          :disabled="page === pagesCount"
          icon="wi-chevron-right"
          xs>
        </w-button>
      </div>
      <p> `+p(`{{ range }}`)+` of `+p(`{{ total }}`)+`.</p>
    </div>
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[128]||=[o(`// import { faker } from '@faker-js/faker' // With npm.
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'Birthdate', key: 'birthdate' },
      ],
      items: Array(200).fill('').map((item, i) => ({
        id: i + 1,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthdate: (faker.date.birthdate()).toISOString().substring(0, 10)
      })),
      pagination: {
        itemsPerPage: 50,
        total: 200
      }
    }
  })
})

app.use(WaveUI, { theme: 'auto' })

app.mount('#app')
`,-1)]]),default:t(()=>[i(L,{headers:P.table11.headers,items:P.table11.items,"fixed-headers":``,"fixed-footer":``,pagination:P.table11.pagination,style:{"max-height":`500px`}},{pagination:t(({range:e,total:a,page:u,pagesCount:f,goToPage:m})=>[n(`div`,x,[n(`div`,S,[i(z,{onClick:e=>m(`-1`),disabled:u===1,icon:`wi-chevron-left`,xs:``},null,8,[`onClick`,`disabled`]),(c(!0),r(d,null,s(f,e=>(c(),l(z,{key:e,onClick:t=>e!==u&&m(e),outline:u===e,round:``,xs:``},{default:t(()=>[o(p(e),1)]),_:2},1032,[`onClick`,`outline`]))),128)),i(z,{onClick:e=>m(`+1`),disabled:u===f,icon:`wi-chevron-right`,xs:``},null,8,[`onClick`,`disabled`])]),n(`p`,C,p(e)+` of `+p(a)+`.`,1)])]),_:1},8,[`headers`,`items`,`pagination`])]),_:1}),i(I,{h3:``},{default:t(()=>[...g[129]||=[o(`Initing the pagination with a certain state`,-1)]]),_:1}),i(R,{"blank-codepen":[`js`]},{pug:t(()=>[...g[130]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px")`,-1)]]),html:t(()=>[...g[131]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px">
</w-table>`,-1)]]),js:t(()=>[...g[132]||=[o(`// import { faker } from '@faker-js/faker' // With npm.
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

// Generate a server-side array of objects of 2000 random persons
// that we assume will be returned paginated from our backend.
const tableItemsInApi = Array(2000).fill('').map((item, i) => ({
  id: i + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthdate: (faker.date.birthdate()).toISOString().substring(0, 10)
}))

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'Birthdate', key: 'birthdate' },
      ],
      items: [], // The frontend has no data by default.
      loading: false,
      pagination: {
        page: 17,
        itemsPerPage: 50,
        total: 2000
      }
    }
  }),

  methods: {
    // All these parameters are available from Wave UI.
    fetch ({ page, start, end, total, itemsPerPage, sorting }) {
      this.table.loading = 'header' // Display the loading bar.

      // Simulating a call to the backend with a delay of 1 second.
      // Once you receive the rows from the backend assign them to the table.items var.
      setTimeout(() => {
        const itemsFromApi = tableItemsInApi.slice(0) // Clone the array before sorting.
        if (sorting.length) {
          const sortKey = sorting[0].substring(1)
          itemsFromApi.sort((a, b) => {
            if (sorting[0][0] === '+') return a[sortKey] < b[sortKey] ? -1 : 1
            else return a[sortKey] > b[sortKey] ? -1 : 1
          })
        }
        this.table.items = itemsFromApi.slice(start - 1, end)
        this.table.loading = false
      }, 1000)
    }
  }
})

app.use(WaveUI, { theme: 'auto' })

app.mount('#app')
`,-1)]]),default:t(()=>[i(L,{headers:P.table13.headers,items:P.table13.items,"fixed-headers":``,"fixed-footer":``,fetch:P.table13.fetch,pagination:P.table13.pagination,loading:P.table13.loading,style:{"max-height":`500px`}},null,8,[`headers`,`items`,`fetch`,`pagination`,`loading`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[133]||=[o(`Rows selection`,-1)]]),_:1}),g[201]||=n(`p`,null,`Click a row to see it highlighted and get information about the selected item.`,-1),g[202]||=n(`p`,null,[o(`By default, the selection will use the `),n(`code`,null,`primary`),o(` color and apply an opacity of `),n(`code`,null,`0.2`),o(`.
If this is not what you want, you can override it via CSS (`),n(`code`,null,`.w-table__row--selected td:before`),o(`).
`)],-1),i(I,{h3:``,slug:`example--selectable-rows`},{default:t(()=>[...g[134]||=[o(`The `,-1),n(`span`,{class:`code`},`selectable-rows`,-1),o(` prop`,-1)]]),_:1}),g[203]||=n(`p`,null,[o(`You can enable the rows selection by adding the `),n(`code`,null,`selectable-rows`),o(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),n(`code`,null,`1`),o(`
to allow a single selection only.
`)],-1),i(I,{h3:``,slug:`example--force-selection`},{default:t(()=>[...g[135]||=[o(`The `,-1),n(`span`,{class:`code`},`force-selection`,-1),o(` prop`,-1)]]),_:1}),g[204]||=n(`p`,null,[o(`Eventually, you can use the `),n(`code`,null,`force-selection`),o(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),i(I,{h3:``,slug:`example--row-select`},{default:t(()=>[...g[136]||=[o(`The `,-1),n(`span`,{class:`code`},`@row-select`,-1),o(` event`,-1)]]),_:1}),g[205]||=u(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),i(R,null,{pug:t(()=>[...g[139]||=[o(`w-flex.mb4(wrap)
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
pre `+p(`{{ selectionInfo }}`),-1)]]),html:t(()=>[...g[140]||=[o(`<w-flex wrap class="mb4">
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
<pre>`+p(`{{ selectionInfo }}`)+`</pre>`,-1)]]),js:t(()=>[...g[141]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(V,{class:`mb4`,wrap:``},{default:t(()=>[i(W,{class:`mr6`,modelValue:P.table1.selectableRows,"onUpdate:modelValue":g[8]||=e=>P.table1.selectableRows=e,items:P.selectableRowsOptions},null,8,[`modelValue`,`items`]),i(z,{class:`my3`,onClick:g[9]||=e=>P.table1.forceSelection=!P.table1.forceSelection,round:``,outline:!P.table1.forceSelection},{default:t(()=>[P.table1.forceSelection?(c(),l(B,{key:0,class:`mr2`},{default:t(()=>[...g[137]||=[o(`wi-check`,-1)]]),_:1})):f(``,!0),g[138]||=o(`Force selection`,-1)]),_:1},8,[`outline`])]),_:1}),i(L,{headers:P.table1.headers,items:P.table1.items,"selectable-rows":P.table1.selectableRows,"force-selection":P.table1.forceSelection,onRowSelect:g[10]||=e=>P.selectionInfo=e},null,8,[`headers`,`items`,`selectable-rows`,`force-selection`]),g[142]||=n(`div`,{class:`mt4 title4`},`Selection info:`,-1),n(`pre`,null,p(P.selectionInfo),1)]),_:1}),i(I,{h3:``},{default:t(()=>[...g[143]||=[o(`Updating the selected rows programmatically`,-1)]]),_:1}),g[206]||=n(`p`,null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),i(G,{tip:``},{default:t(()=>[...g[144]||=[n(`ul`,null,[n(`li`,null,[n(`strong`,null,`In Vue 2`),o(`, you can do 2-way binding on any variable other than the `),n(`strong`,{class:`code`},`v-model`),o(` using the `),n(`code`,null,`.sync`),o(` modifier.`)]),n(`li`,null,[n(`strong`,null,`In Vue 3`),o(`, multiple `),n(`strong`,{class:`code`},`v-model`),o(` are supported in order to achieve 2-way binding. So you don't need `),n(`code`,null,`.sync`),o(`.`)])],-1)]]),_:1}),i(R,null,{pug:t(()=>[...g[146]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+p(`{{ table.selectedRows }}`),-1)]]),html:t(()=>[...g[147]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+p(`{{ table.selectedRows }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...g[148]||=[o(`data: () => ({
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
})`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,"selectable-rows":``,"selected-rows":P.table1.selectedRows,"onUpdate:selectedRows":g[11]||=e=>P.table1.selectedRows=e},null,8,[`headers`,`items`,`selected-rows`]),n(`div`,w,[g[145]||=o(`Selected rows:`,-1),n(`code`,T,p(P.table1.selectedRows),1)])]),_:1}),i(G,{info:``},{default:t(()=>[...g[149]||=[o(`In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.`,-1),n(`br`,null,null,-1),o(`
By default the expanded rows array will use an `,-1),n(`code`,null,`id`,-1),o(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `,-1),n(`code`,null,`uid-key`,-1),o(` prop, which is set to "id" by default.
`,-1)]]),_:1}),i(I,{h2:``,slug:`example--expandable-rows`},{default:t(()=>[...g[150]||=[o(`Expandable rows`,-1)]]),_:1}),i(G,{warning:``},{default:t(()=>[...g[151]||=[o(`This feature is in progress.`,-1)]]),_:1}),i(R,null,{pug:t(()=>[...g[154]||=[o(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+p(`{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}`)+`
    | `+p(`{{ item.firstName }}`)+` weighs `,-1),n(`strong`,null,p(`{{ item.weight }}`)+`kg`,-1),o(` and is `,-1),n(`strong`,null,p(`{{ item.height }}`)+`m`,-1),o(` tall.`,-1)]]),html:t(()=>[...g[155]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+p(`{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}`)+`
    </w-icon>
    `+p(`{{ item.firstName }}`)+` weighs `,-1),n(`strong`,null,p(`{{ item.weight }}`)+`kg`,-1),o(` and is `,-1),n(`strong`,null,p(`{{ item.height }}`)+`m`,-1),o(` tall.
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[156]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table5.headers,items:P.table5.items,"expandable-rows":``},{"row-expansion":t(({item:e})=>[i(B,{class:`mr2`,color:[`blue`,`pink`][e.gender]},{default:t(()=>[o(`mdi `+p([`mdi-gender-male`,`mdi-gender-female`][e.gender]),1)]),_:2},1032,[`color`]),o(p(e.firstName)+` weighs `,1),n(`strong`,null,p(e.weight)+`kg`,1),g[152]||=o(` and is `,-1),n(`strong`,null,p(e.height)+`m`,1),g[153]||=o(` tall.`,-1)]),_:1},8,[`headers`,`items`])]),_:1}),i(I,{h2:``,slug:`slots`},{default:t(()=>[...g[157]||=[o(`Headers & cells customization via slots`,-1)]]),_:1}),g[207]||=n(`p`,null,`You can customize the headers labels and/or each row cells.`,-1),i(I,{h3:``},{default:t(()=>[...g[158]||=[o(`Headers`,-1)]]),_:1}),g[208]||=n(`p`,null,[o(`In this example, only the headers are customized via the `),n(`code`,null,`header-label`),o(` slot.`)],-1),i(R,null,{pug:t(()=>[...g[159]||=[o(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+p(`{{ index }}: {{ label }}`)+` 👌`,-1)]]),html:t(()=>[...g[160]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+p(`{{ index }}: {{ label }}`)+` 👌
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[161]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items},{"header-label":t(({label:e,index:t})=>[o(p(t)+`: `+p(e)+` 👌`,1)]),_:1},8,[`headers`,`items`])]),_:1}),i(I,{h3:``,slug:`item-cells`},{default:t(()=>[...g[162]||=[o(`Item cells (inside <td> element)`,-1)]]),_:1}),g[209]||=n(`p`,null,[o(`In this example, only the items cells are customized via the `),n(`code`,null,`item`),o(` slot
(and the headers are hidden).`)],-1),i(R,null,{pug:t(()=>[...g[163]||=[o(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+p(`{{ header.label }}`)+`:
    span `+p(`{{ label }}`),-1)]]),html:t(()=>[...g[164]||=[o(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+p(`{{ header.label }}`)+`:</small>
    <span>`+p(`{{ label }}`)+`</span>
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[165]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,"no-headers":``,items:P.table1.items},{"item-cell":t(({item:e,label:t,header:i,index:a})=>[i.key===`id`?(c(),r(`small`,E,`#`+p(a),1)):(c(),r(d,{key:1},[n(`small`,D,p(i.label)+`:`,1),n(`span`,null,p(t),1)],64))]),_:1},8,[`headers`,`items`])]),_:1}),i(I,{h3:``,slug:`override-1-particular-item-cell`},{default:t(()=>[...g[166]||=[o(`override 1 particular item cell or column cells (inside <td> element)`,-1)]]),_:1}),g[210]||=u(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),i(R,null,{pug:t(()=>[o(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.`+p(h.$store.state.darkMode?`green-dark5--bg`:`green-light5--bg`)+`.text-bold `+p(`{{ label }}`),1)]),html:t(()=>[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center `+p(h.$store.state.darkMode?`green-dark5--bg`:`green-light5--bg`)+` text-bold">
      `+p(`{{ label }}`)+`
    </div>
  </template>
</w-table>`,1)]),js:t(()=>[...g[167]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,"no-headers":``},{"item-cell.id":t(({item:e,label:t,header:r,index:i})=>[n(`div`,{class:a([`px2 text-center text-bold`,h.$store.state.darkMode?`green-dark5--bg`:`green-light5--bg`])},p(t),3)]),_:1},8,[`headers`,`items`])]),_:1}),i(I,{h2:``,slug:`full-custom-rows`},{default:t(()=>[...g[168]||=[o(`Full custom row (<tr> element itself)`,-1)]]),_:1}),g[211]||=n(`p`,null,[o(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),n(`br`),o(`
As you notice, the `),n(`code`,null,`item`),o(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),i(R,null,{pug:t(()=>[...g[169]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+p(`{{ item[header.key] || '' }}`),-1)]]),html:t(()=>[...g[170]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+p(`{{ item[header.key] || '' }}`)+`
      </td>
    </tr>
  </template>
</w-table>`,-1)]]),js:t(()=>[...g[171]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,"selectable-rows":``},{item:t(({item:e,index:t,select:i,classes:o})=>[n(`tr`,{class:a(o),onClick:i},[(c(!0),r(d,null,s(P.table1.headers,(t,n)=>(c(),r(`td`,{key:n,class:a(`pa4 text-${t.align||`left`}`)},p(e[t.key]||``),3))),128))],10,O)]),_:1},8,[`headers`,`items`])]),_:1}),i(I,{h3:``,slug:`colspan-on-td`},{default:t(()=>[...g[172]||=[n(`span`,{class:`code`},`colspan`,-1),o(` on <td>`,-1)]]),_:1}),g[212]||=n(`p`,null,[o(`This example is showcasing another useful case: handling a colspan attribute.`),n(`br`),o(`
All the cells of all the rows are `),n(`code`,null,`colspan`),o(`'d to one, and a custom row layout is applied.`)],-1),i(R,null,{pug:t(()=>[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-`+p(h.$store.state.darkMode?`dark`:`light`)+`5--bg': index % 2, 'blue-`+p(h.$store.state.darkMode?`dark`:`light`)+`5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+p(`{{ index }}`)+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+p(`{{ header.label }}`)+`:
            | `+p(`{{ item[header.key] || '' }}`),1)]),html:t(()=>[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr
      :class="{
        ...classes,
        'indigo-`+p(h.$store.state.darkMode?`dark`:`light`)+`5--bg': index % 2,
        'blue-`+p(h.$store.state.darkMode?`dark`:`light`)+`5--bg': !(index % 2)
      }"
      @click="select">
      <td :class="pa2" :colspan="table.headers.length">
        <div class="title3">
          Row #`+p(`{{ index }}`)+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+p(`{{ header.label }}`)+`:
            </strong>
            `+p(`{{ item[header.key] || '' }}`)+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[...g[173]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table1.headers,items:P.table1.items,"no-headers":``,"selectable-rows":``},{item:t(({item:e,index:t,select:i,classes:l})=>[n(`tr`,{class:a({...l,[`indigo-${h.$store.state.darkMode?`dark`:`light`}5--bg`]:t%2,[`blue-${h.$store.state.darkMode?`dark`:`light`}5--bg`]:!(t%2)}),onClick:i},[n(`td`,{class:`pa2`,colspan:P.table1.headers.length},[n(`div`,j,`Row #`+p(t),1),n(`ul`,null,[(c(!0),r(d,null,s(P.table1.headers,(t,i)=>(c(),r(`li`,{key:i},[n(`strong`,M,p(t.label)+`:`,1),o(p(e[t.key]||``),1)]))),128))])],8,A)],10,k)]),_:1},8,[`headers`,`items`])]),_:1}),i(I,{h2:``},{default:t(()=>[...g[174]||=[o(`Responsiveness & mobile layout`,-1)]]),_:1}),g[213]||=n(`p`,null,[o(`In addition to the full responsiveness, the `),n(`code`,null,`w-table`),o(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),n(`br`),o(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),n(`code`,null,`mobile-breakpoint`),o(`
parameter.`),n(`br`),o(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),n(`br`),n(`br`),o(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),i(R,null,{pug:t(()=>[...g[175]||=[o(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`,-1)]]),html:t(()=>[...g[176]||=[o(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`,-1)]]),js:t(()=>[...g[177]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[i(L,{headers:P.table2.headers,items:P.table2.items,"mobile-breakpoint":700},null,8,[`headers`,`items`])]),_:1}),i(G,{tip:``},{default:t(()=>[g[179]||=n(`p`,null,[o(`To stay lean and efficient, the minimum JavaScript behavior is added to the `),n(`code`,null,`w-table`),o(`
component.`),n(`br`),o(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),n(`br`),o(`
You can override it to set the width you want via:
`)],-1),i(H,{class:`mt5 mb0`,language:`css`,label:`CSS`,dark:h.$store.state.darkMode},{default:t(()=>[...g[178]||=[o(`.w-table--mobile .w-table__cell:before {width: 8em;}`,-1)]]),_:1},8,[`dark`])]),_:1})])}var P=[{id:1,class:`row--1`,firstName:`Floretta`,lastName:`Sampson`},{id:2,class:`row--2`,firstName:`Nellie`,lastName:`Lynn`},{id:3,class:`row--3`,firstName:`Rory`,lastName:`Bristol`},{id:4,class:`row--4`,firstName:`Daley`,lastName:`Elliott`},{id:5,class:`row--5`,firstName:`Virgil`,lastName:`Carman`},{id:6,class:`row--6`,firstName:`Baldwin`,lastName:`Morison`},{id:7,class:`row--7`,firstName:`Beckah`,lastName:`Mann`},{id:8,class:`row--8`,firstName:`Davie`,lastName:`Forester`},{id:9,class:`row--9`,firstName:`Andi`,lastName:`Montgomery`},{id:10,class:`row--10`,firstName:`Magnolia`,lastName:`Kirk`},{id:11,class:`row--11`,firstName:`Hamilton`,lastName:`Mallory`},{id:12,class:`row--12`,firstName:`Sheree`,lastName:`Castle`},{id:13,class:`row--13`,firstName:`Rebekah`,lastName:`Eason`},{id:14,class:`row--14`,firstName:`Maude`,lastName:`Hayley`},{id:15,class:`row--15`,firstName:`Josie`,lastName:`Richard`}],F={null:[{id:1,firstName:`Floretta`,lastName:`Sampson`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:3,firstName:`Rory`,lastName:`Bristol`},{id:4,firstName:`Daley`,lastName:`Elliott`},{id:5,firstName:`Virgil`,lastName:`Carman`}],"+id":[{id:1,firstName:`Floretta`,lastName:`Sampson`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:3,firstName:`Rory`,lastName:`Bristol`},{id:4,firstName:`Daley`,lastName:`Elliott`},{id:5,firstName:`Virgil`,lastName:`Carman`}],"-id":[{id:5,firstName:`Virgil`,lastName:`Carman`},{id:4,firstName:`Daley`,lastName:`Elliott`},{id:3,firstName:`Rory`,lastName:`Bristol`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:1,firstName:`Floretta`,lastName:`Sampson`}],"+firstName":[{id:4,firstName:`Daley`,lastName:`Elliott`},{id:1,firstName:`Floretta`,lastName:`Sampson`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:3,firstName:`Rory`,lastName:`Bristol`},{id:5,firstName:`Virgil`,lastName:`Carman`}],"-firstName":[{id:5,firstName:`Virgil`,lastName:`Carman`},{id:3,firstName:`Rory`,lastName:`Bristol`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:1,firstName:`Floretta`,lastName:`Sampson`},{id:4,firstName:`Daley`,lastName:`Elliott`}],"+lastName":[{id:3,firstName:`Rory`,lastName:`Bristol`},{id:5,firstName:`Virgil`,lastName:`Carman`},{id:4,firstName:`Daley`,lastName:`Elliott`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:1,firstName:`Floretta`,lastName:`Sampson`}],"-lastName":[{id:1,firstName:`Floretta`,lastName:`Sampson`},{id:2,firstName:`Nellie`,lastName:`Lynn`},{id:4,firstName:`Daley`,lastName:`Elliott`},{id:5,firstName:`Virgil`,lastName:`Carman`},{id:3,firstName:`Rory`,lastName:`Bristol`}]},I=Array(2e3).fill(``).map((e,t)=>({id:t+1,firstName:_.person.firstName(),lastName:_.person.lastName(),birthdate:_.date.birthdate().toISOString().substring(0,10)})),L=h({data(){return{table1:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`}],items:P.slice(0,5),sort:`+firstName`,loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`,align:`center`},{label:`Last name`,key:`lastName`,align:`right`}],items:P.slice(0,5)},table3:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`}],items:P,filters:[null,e=>e.lastName[0]===`M`,e=>e.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`}],items:P,keyword:``,keywordFilter:e=>t=>{let n=`${t.id} ${t.firstName} ${t.lastName}`;return new RegExp(e,`i`).test(n)}},table5:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`}],items:[{id:1,firstName:`Floretta`,lastName:`Sampson`,gender:1,weight:56,height:1.69},{id:2,firstName:`Nellie`,lastName:`Lynn`,gender:1,weight:62,height:1.77},{id:3,firstName:`Rory`,lastName:`Bristol`,gender:0,weight:71,height:1.75},{id:4,firstName:`Daley`,lastName:`Elliott`,gender:0,weight:84,height:1.83},{id:5,firstName:`Virgil`,lastName:`Carman`,gender:0,weight:74,height:1.72}]},table6:{headers:[{label:`ID`,key:`id`,hidden:!1},{label:`First name`,key:`firstName`,hidden:!1},{label:`Last name`,key:`lastName`,hidden:!1}],items:P.slice(0,5)},table7:{headers:[{label:`ID`,key:`id`,width:`50`},{label:`Content`,key:`content`,width:`70%`},{label:`First name`,key:`firstName`}],items:[{id:1,content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.`,firstName:`Floretta`},{id:2,content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.`,firstName:`Nellie`},{id:3,content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.`,firstName:`Rory`}]},table8:{headers:[{label:`ID`,key:`id`,width:`50`},{label:`Content`,key:`content`,width:`70%`},{label:`First name`,key:`firstName`}],items:[{id:1,content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.`,firstName:`Floretta`},{id:2,content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.`,firstName:`Nellie`},{id:3,content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.`,firstName:`Rory`}]},table9:{stickyColumn:1,fixedHeaders:!1,stickyColumnOptions:[{value:1,label:`#1`},{value:2,label:`#2`},{value:24,label:`#2 & #4`},{value:0,label:`None`}],headers:[{label:`ID`,key:`id`,hidden:!1,width:`60px`,sticky:!0},{label:`First name`,key:`firstName`,hidden:!1,width:`120px`},{label:`Last name`,key:`lastName`,hidden:!1,width:`120px`},{label:`Birthday`,key:`birthday`,email:!1,width:`150px`},{label:`Email`,key:`email`,hidden:!1,width:`200px`},{label:`Phone`,key:`phone`,hidden:!1,width:`200px`},{label:`Country`,key:`country`,hidden:!1,width:`200px`}],items:[{id:1,firstName:`Floretta`,lastName:`Sampson`,birthday:`Feb. 12, 1976`,email:`f.sampson@gmail.com`,phone:`+21 234 567 8921`,country:`United Kingdom`},{id:2,firstName:`Nellie`,lastName:`Lynn`,birthday:`Dec. 15, 1995`,email:`n.lynn@gmail.com`,phone:`+22 234 567 8922`,country:`Luxembourg`},{id:3,firstName:`Rory`,lastName:`Bristol`,birthday:`Apr. 25, 1989`,email:`r.bristol@gmail.com`,phone:`+23 234 567 8923`,country:`Montenegro`},{id:4,firstName:`Daley`,lastName:`Elliott`,birthday:`Mar. 24, 2002`,email:`d.elliott@gmail.com`,phone:`+24 234 567 8924`,country:`Germany`},{id:5,firstName:`Virgil`,lastName:`Carman`,birthday:`Aug. 2, 1990`,email:`v.carman@gmail.com`,phone:`+25 234 567 8925`,country:`Ukraine`},{id:6,firstName:`Baldwin`,lastName:`Morison`,birthday:`Feb. 12, 2008`,email:`b.morison@gmail.com`,phone:`+26 234 567 8926`,country:`Lithuania`},{id:7,firstName:`Beckah`,lastName:`Mann`,birthday:`Nov. 6, 1991`,email:`b.mann@gmail.com`,phone:`+27 234 567 8927`,country:`Finland`},{id:8,firstName:`Davie`,lastName:`Forester`,birthday:`Dec. 6, 1982`,email:`d.forester@gmail.com`,phone:`+28 234 567 8928`,country:`Portugal`},{id:9,firstName:`Andi`,lastName:`Montgomery`,birthday:`Jan. 20, 1987`,email:`a.montgomery@gmail.com`,phone:`+29 234 567 8929`,country:`Czechia`},{id:10,firstName:`Magnolia`,lastName:`Kirk`,birthday:`Dec. 31, 1992`,email:`m.kirk@gmail.com`,phone:`+30 234 567 8930`,country:`Norway`},{id:11,firstName:`Hamilton`,lastName:`Mallory`,birthday:`Dec. 7, 1979`,email:`h.mallory@gmail.com`,phone:`+31 234 567 8931`,country:`Greece`},{id:12,firstName:`Sheree`,lastName:`Castle`,birthday:`Feb. 16, 1980`,email:`s.castle@gmail.com`,phone:`+32 234 567 8932`,country:`France`},{id:13,firstName:`Rebekah`,lastName:`Eason`,birthday:`Jun. 29, 2000`,email:`r.eason@gmail.com`,phone:`+33 234 567 8933`,country:`Poland`},{id:14,firstName:`Maude`,lastName:`Hayley`,birthday:`Dec. 31, 2009`,email:`m.hayley@gmail.com`,phone:`+34 234 567 8934`,country:`Hungary`},{id:15,firstName:`Josie`,lastName:`Richard`,birthday:`Aug. 16, 2004`,email:`j.richard@gmail.com`,phone:`+35 234 567 8935`,country:`Italy`}]},table10:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`}],items:P.slice(0,5),loading:!1},table11:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`},{label:`Birthdate`,key:`birthdate`}],items:Array(200).fill(``).map((e,t)=>({id:t+1,firstName:_.person.firstName(),lastName:_.person.lastName(),birthdate:_.date.birthdate().toISOString().substring(0,10)})),pagination:{itemsPerPage:50,total:200}},table12:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`},{label:`Birthdate`,key:`birthdate`}],items:[],loading:!1,pagination:{itemsPerPage:50,total:2e3},fetch:({_page:e,start:t,end:n,_total:r,_itemsPerPage:i,sorting:a})=>{this.table12.loading=`header`,setTimeout(()=>{let e=I.slice(0);if(a.length){let t=a[0].substring(1);e.sort((e,n)=>a[0][0]===`+`?e[t]<n[t]?-1:1:e[t]>n[t]?-1:1)}this.table12.items=e.slice(t-1,n),this.table12.loading=!1},1e3)}},table13:{headers:[{label:`ID`,key:`id`},{label:`First name`,key:`firstName`},{label:`Last name`,key:`lastName`},{label:`Birthdate`,key:`birthdate`}],items:[],loading:!1,pagination:{page:17,itemsPerPage:50,total:2e3},fetch:({_page:e,start:t,end:n,_total:r,_itemsPerPage:i,sorting:a})=>{this.table13.loading=`header`,setTimeout(()=>{let e=I.slice(0);if(a.length){let t=a[0].substring(1);e.sort((e,n)=>a[0][0]===`+`?e[t]<n[t]?-1:1:e[t]>n[t]?-1:1)}this.table13.items=e.slice(t-1,n),this.table13.loading=!1},1e3)}},selectableRowsOptions:[{label:`<code class="mr2">:selectable-row="false"</code> (default)`,value:!1},{label:`<code>selectable-row</code>`,value:!0},{label:`<code>:selectable-row="1"</code>`,value:1}],selectionInfo:{}}},methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(e){this.table6.headers[e].hidden=!this.table6.headers[e].hidden},onColumnResize({_index:e,widths:t}){t.forEach((e,t)=>this.table8.headers[t].width=e),localStorage.tableWidths=t},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:`John`,lastName:`Doe`}),this.$nextTick(()=>{let e=this.$refs.table.$el;e.scrollTo({top:e.scrollHeight,behavior:`smooth`})})},toggleStickyColumn(){switch(this.table9.headers.forEach(e=>e.sticky=!1),this.table9.stickyColumn){case 1:return this.table9.headers[0].sticky=!0;case 2:return this.table9.headers[1].sticky=!0;case 24:return this.table9.headers[1].sticky=!0,this.table9.headers[3].sticky=!0}},async sortFunction(e){this.table10.loading=`header`;let t=new Promise(t=>setTimeout(()=>t(F[e[0]||null]),1e3));this.table10.items=await t,this.table10.loading=!1}},mounted(){this.reload(),localStorage.tableWidths?.split(`,`).forEach((e,t)=>this.table8.headers[t].width=e)}},[[`render`,N]]);function R(a,s,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return c(),r(`div`,null,[s[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...s[0]||=[o(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:a.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:a.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var z={items:`An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>`,headers:`An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li><strong class="code">sortable:</strong> <span class="types teal">[Boolean]</span> Whether this column is sortable or not. If omitted, defaults to <code>true</code>.</li><li>If needed, you can also add any custom property.</li></ul>`,noHeaders:`The table headings will be hidden. Only the table data will be visible.`,fixedHeaders:`When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.`,fixedFooter:`When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.`,fixedLayout:`When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.`,loading:`When set to <code>true</code>, a progress bar will be displayed and any currently visible rows will be hidden.<br>When set to <code>'header', the loading bar will be placed in the header leaving any current rows visible while loading.`,sort:`Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.`,sortFunction:`Optionally provide an asynchronous sorting function (usually for server-side sorting). This function receives an array of sorting keys as parameter. If the array is empty, the sorting is reset.`,expandableRows:`Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.`,expandedRows:`Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.`,selectableRows:`Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.`,selectedRows:`Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.`,forceSelection:`Prevent unselecting a row when only one remains selected.`,uidKey:`In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.`,filter:`An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>`,mobileBreakpoint:`When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.`,resizableColumns:`When this option is on, the columns will be separated by borders that you can drag to resize.`,pagination:`The pagination is a two-way binding object. It is always containing up-to-date properties that you can use for pagination.<br>You can also modify any property inside it and the table will re-paginate and update. This is particularly useful when the pagination is done server-side.<br>Here is the list of all the properties it contains:<ul><li><span class="teal code">{Integer}</span><code>itemsPerPage:</code><p>the number of rows to display in one page. <code>0</code> for "all" results in 1 page.</p></li><li><span class="teal code">{Array}</span><code>itemsPerPageOptions:</code><p>The <code>itemsPerPage</code> options to offer to the user. Each object of the array should have at least a <code>value</code> property, and a <code>label</code> property if different of the <code>value</code>.</p></li><li><span class="teal code">{Number}</span><code>start:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>start</code> is the first result number to load [itemsPerPage] results from.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>end:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>end</code> is the last result number to load.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>page:</code><p>An integer - to be used in conjunction with the <code>itemsPerPage</code> option - to define the range of results to load. E.g. page = 2 and itemsPerPage = 50, will load the results range [51-100].<br> This can be used instead of <code>start</code> and <code>end</code> if you find it more convenient.</p></li><li><span class="teal code">{Number}</span><code>total:</code><p>An integer defining the total number of items available in this match.</p></li></ul>`},B={"no-data":{description:`Provide a custom template when there is no data.`},loading:{description:`Provide a custom loading template.`},"header-label":{description:`Provide a custom header label template.`,params:{label:`The label of the header being rendered.`,header:`The full header object being rendered.`,index:`The index of the header cell being rendered. Starts at 1.`}},item:{description:`Provide a custom item template for each full &lt;tr&gt;.`,params:{item:`The full item object of the row being rendered.`,index:`The index of the row being rendered. Starts at 1.`,select:`When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).`,classes:`The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object.`}},"item-cell":{description:`Provide a custom item cell template (each &lt;td&gt; of each item row).`,params:{item:`The full item object of the row being rendered.`,header:`The related header object of the current column of the cell being rendered.`,label:`The content of the cell being rendered.`,index:`The index of the cell in the row being rendered. Starts at 1.`}},"row-expansion":{description:`Provide a custom template for the row expansions (to display in an expanded row).`,params:{item:`The full item object of the row being rendered.`,index:`The index of the row being rendered. Starts at 1.`}},footer:{description:`If you need, you can provide a custom template for the table footer.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot.`},"footer-row":{description:`If you need, you can provide a custom template for the table footer.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s.`},pagination:{description:`If you need, you can provide a custom template for the table pagination in the table footer.<br>This slot lets you override the whole pagination, and a few variable are available to facilitate a fully custom pagination without to much work.`,params:{range:`A string representing the current range of the visible rows. E.g. <code>75-100</code>`,page:`An integer representing the current table page. E.g. <code>3</code>`,pagesCount:`An integer representing the total number of pages in the array.`,total:`An integer representing the total of items in the array, visible or not.`,goToPage:`A function that you you can use to navigate through the pages. It accepts one parameter that can be an integer for an existing page, or exactly <code>+1</code> or <code>-1</code> as a string to increase or decrease the page number.`}}},V={"row-click":{description:``,params:{item:`The associated row item object.`,index:`The index of the row being clicked (starts at 0) in the current filtering state.`}},"row-select":{description:`<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.`,params:{item:`The associated row item object.`,index:`The index of the row being selected (starts at 0) in the current filtering state.`,selected:`A boolean representing the selected state of the clicked row.`,selectedRows:`An array containing all the expanded rows objects.`}},"row-expand":{description:`<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.`,params:{item:`The associated row item object.`,index:`The index of the row being expanded (starts at 0) in the current filtering state.`,expanded:`A boolean representing the expanded state of the clicked row.`,expandedRows:`An array containing all the expanded rows objects.`}},"update:sort":{description:`Emitted every time the sorting string is updated by a user interaction.`,params:{"[String]":`The currently applied sorting on the table rows. E.g. <code>+firstName</code>`}},"update:selected-rows":{description:`Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.`,params:{"[Array]":`The current array of selected rows.`}},"update:expanded-rows":{description:`Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.`,params:{"[Array]":`The current array of expanded rows.`}},"column-resize":{description:`Emitted on mouseup after a column has been resized.`,params:{index:`The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).`,widths:`An array containing all the new widths of the columns after resizing.`}}},H=h({data:()=>({propsDescs:z,slots:B}),computed:{props(){return g.props},events(){return g.emits.reduce((e,t)=>(e[t]=V[t]||{},e),{})}}},[[`render`,R]]);function U(n,a,s,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),r(`main`,null,[i(f,null,{default:t(()=>[...a[0]||=[o(`w-table`,-1)]]),_:1}),i(p),i(m)])}var W=h({components:{Examples:L,Api:H}},[[`render`,U]]);export{W as default};