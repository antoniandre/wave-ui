import{f as D}from"./index-xJp9Kd2E.js";import{r as g,o as p,g as c,a as l,w as a,b as t,d as n,n as v,t as s,F as R,k as L,c as E,j as H,h as A,f as W,_ as B,a7 as P}from"./index-DJW-wguP.js";const K={class:"w-flex justify-end"},O={class:"w-flex align-center mb2"},U={class:"w-flex wrap mb3"},J={class:"w-flex align-center gap2 pa1"},Y={class:"w-flex gap2 no-grow"},G={class:"mb0"},X={class:"mt4"},Q={class:"ml2"},Z={key:0},$={class:"grey mr2"},_=["onClick"],ee=["onClick"],te=["colspan"],ae={class:"title3"},ne={class:"mr2"};function le(d,e,y,F,i,u){const r=g("title-link"),o=g("w-table"),b=g("example"),f=g("w-button"),I=g("w-icon"),j=g("w-flex"),T=g("ssh-pre"),q=g("w-tag"),M=g("w-radios"),S=g("alert"),z=g("w-input");return p(),c("div",null,[l(r,{h2:""},{default:a(()=>e[12]||(e[12]=[t("Basic")])),_:1}),l(b,null,{pug:a(()=>e[13]||(e[13]=[t('w-table(:headers="table.headers" :items="table.items")')])),html:a(()=>e[14]||(e[14]=[t(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)])),js:a(()=>e[15]||(e[15]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:a(()=>e[16]||(e[16]=[t("When there is no data")])),_:1}),e[180]||(e[180]=n("p",null,[t("When there is no data, a default text will be displayed. You can override it via the "),n("code",null,"no-data"),t(" slot.")],-1)),l(b,null,{pug:a(()=>e[18]||(e[18]=[t(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) 👌 There is no data! 👌`)])),html:a(()=>e[19]||(e[19]=[t(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    👌 There is no data! 👌
  </template>
</w-table>`)])),js:a(()=>e[20]||(e[20]=[t(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:[]},null,8,["headers"]),e[21]||(e[21]=n("br",null,null,-1)),l(o,{headers:i.table1.headers,items:[]},{"no-data":a(()=>e[17]||(e[17]=[t("👌 There is no data! 👌")])),_:1},8,["headers"])]),_:1}),l(r,{h2:""},{default:a(()=>e[22]||(e[22]=[t("Alignments")])),_:1}),e[181]||(e[181]=n("p",null,[t("You can align the columns contents separately by adding an "),n("code",null,"align"),t(` key in each header
definition (`),n("code",null,"left"),t(", "),n("code",null,"center"),t(" or "),n("code",null,"right"),t(")."),n("br"),t(`
If you don't define any, `),n("code",null,"left"),t(` will be implicit.
`)],-1)),l(b,null,{pug:a(()=>e[23]||(e[23]=[t('w-table(:headers="table.headers" :items="table.items")')])),html:a(()=>e[24]||(e[24]=[t(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)])),js:a(()=>e[25]||(e[25]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table2.headers,items:i.table2.items},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--no-headers"},{default:a(()=>e[26]||(e[26]=[t("No headers")])),_:1}),e[182]||(e[182]=n("p",null,[t("Even with the "),n("code",null,"no-headers"),t(" option, the "),n("code",null,"headers"),t(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1)),l(b,null,{pug:a(()=>e[27]||(e[27]=[t('w-table(:items="table.items" :headers="table.headers" no-headers)')])),html:a(()=>e[28]||(e[28]=[t(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`)])),js:a(()=>e[29]||(e[29]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--fixed-headers"},{default:a(()=>e[30]||(e[30]=[t("Fixed headers")])),_:1}),l(b,null,{pug:a(()=>e[31]||(e[31]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`)])),html:a(()=>e[32]||(e[32]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`)])),js:a(()=>e[33]||(e[33]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table3.headers,items:i.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--footer"},{default:a(()=>e[34]||(e[34]=[t("Footer")])),_:1}),l(r,{h3:"",slug:"example--footer-slot"},{default:a(()=>e[35]||(e[35]=[t("Footer slot")])),_:1}),e[183]||(e[183]=n("p",null,[t("A table footer can be added via the "),n("code",null,"footer"),t(` slot. If present, the footer will span on
all the columns by default.
`)],-1)),n("div",K,[l(f,{onClick:e[0]||(e[0]=m=>i.table3.fixedFooter=!i.table3.fixedFooter),outline:!i.table3.fixedFooter,round:""},{default:a(()=>[n("span",{class:v(["code",i.table3.fixedFooter?"contrast-color":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),l(b,null,{pug:a(()=>e[39]||(e[39]=[t(`w-table(
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
        | `+s("{{ table.items.length }}")+" persons")])),html:a(()=>e[40]||(e[40]=[t(`<w-table
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
</w-table>`)])),js:a(()=>e[41]||(e[41]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{ref:"table",headers:i.table3.headers,items:i.table3.items,"fixed-footer":i.table3.fixedFooter,style:{height:"250px"}},{footer:a(()=>[l(j,{"justify-space-between":""},{default:a(()=>[l(f,{round:"",sm:"",onClick:u.addRow},{default:a(()=>[l(I,{class:"mr1"},{default:a(()=>e[36]||(e[36]=[t("wi-plus")])),_:1}),e[37]||(e[37]=t("add person"))]),_:1},8,["onClick"]),n("div",null,[e[38]||(e[38]=n("strong",{class:"mr2"},"Total:",-1)),t(s(i.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),l(r,{h3:"",slug:"example--footer-slot"},{default:a(()=>e[42]||(e[42]=[t("Footer-row slot")])),_:1}),e[184]||(e[184]=n("p",null,[t("The "),n("code",null,"footer-row"),t(" slot will give you more flexibility as it lets you define the whole table row.")],-1)),e[185]||(e[185]=n("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1)),l(b,null,{pug:a(()=>e[43]||(e[43]=[t(`w-table(
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
        | `+s("{{ header.label }}"))])),html:a(()=>e[44]||(e[44]=[t(`<w-table
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
</w-table>`)])),js:a(()=>e[45]||(e[45]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table3.headers,"no-headers":"",items:i.table3.items,"fixed-footer":i.table3.fixedFooter,style:{height:"250px"}},{"footer-row":a(()=>[n("tr",null,[(p(!0),c(R,null,L(i.table3.headers,(m,h)=>(p(),c("th",{class:v(["py1",`${h?"px1":"px2"} text-${m.align||"left"}`]),key:h},s(m.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),l(r,{h2:""},{default:a(()=>e[46]||(e[46]=[t("Built-in column resizing")])),_:1}),e[186]||(e[186]=n("p",null,[t("You can resize the columns by dragging their edges left or right."),n("br"),t(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),n("code",null,"..."),t("), you can apply this CSS.")],-1)),l(T,{language:"css",dark:d.$store.state.darkMode},{default:a(()=>e[47]||(e[47]=[t(`.w-table__cell {
  white-space: nowrap;
}
`)])),_:1},8,["dark"]),l(b,null,{pug:a(()=>e[48]||(e[48]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`)])),html:a(()=>e[49]||(e[49]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`)])),js:a(()=>e[50]||(e[50]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table7.headers,items:i.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),l(r,{h3:""},{default:a(()=>e[51]||(e[51]=[t("Saving the table layout in localStorage")])),_:1}),e[187]||(e[187]=n("p",null,[t(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),n("br"),t(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1)),l(b,null,{pug:a(()=>e[52]||(e[52]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`)])),html:a(()=>e[53]||(e[53]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`)])),js:a(()=>e[54]||(e[54]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table8.headers,items:i.table8.items,"resizable-columns":"",onColumnResize:u.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),l(r,{h2:""},{default:a(()=>e[55]||(e[55]=[t("Toggling column visibility")])),_:1}),e[188]||(e[188]=n("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1)),l(b,null,{pug:a(()=>[t(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? `+s(d.$store.state.darkMode?"grey-dark4":"grey-light4")+` : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+s("{{ header.hidden ? '-off' : ''}}")+`
  | `+s("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:a(()=>e[56]||(e[56]=[t(`Toggle columns:
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
</w-table>`)])),js:a(()=>e[57]||(e[57]=[t(`data: () => ({
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
`)])),default:a(()=>[e[58]||(e[58]=t("Toggle columns:")),(p(!0),c(R,null,L(i.table6.headers,(m,h)=>(p(),E(q,{class:"ma1",key:h,"bg-color":m.hidden?d.$store.state.darkMode?"grey-dark4":"grey-light4":"primary",onClick:H(N=>m.hidden=!m.hidden,["stop"])},{default:a(()=>[l(I,{class:"mr2"},{default:a(()=>[t("mdi mdi-eye"+s(m.hidden?"-off":""),1)]),_:2},1024),t(s(m.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),l(o,{class:"mt2",headers:i.table6.headers.filter(m=>!m.hidden),items:i.table6.items},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:a(()=>e[59]||(e[59]=[t("Sticky columns")])),_:1}),e[189]||(e[189]=n("p",null,[t("To make a column sticky, you only need to add "),n("code",null,"sticky: true"),t(` to the header of that
column.`),n("br"),t(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1)),e[190]||(e[190]=n("p",{class:"grey"},"Scroll the table horizontally to observe the behavior.",-1)),l(b,{class:"example--sticky-columns"},{pug:a(()=>e[61]||(e[61]=[t(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`)])),html:a(()=>e[62]||(e[62]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`)])),js:a(()=>e[63]||(e[63]=[t(`data: () => ({
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
})`)])),css:a(()=>e[64]||(e[64]=[t(`/* This CSS is not needed. It's only to increase the scroll in the sticky columns demo. */
.w-table {white-space: nowrap;}
.w-table__header, .w-table__cell {padding-left: 20px;padding-right: 20px;}
`)])),default:a(()=>[n("div",O,[e[60]||(e[60]=t("Sticky columns:")),l(M,{class:"ml1 mr4",modelValue:i.table9.stickyColumn,"onUpdate:modelValue":e[1]||(e[1]=m=>i.table9.stickyColumn=m),items:i.table9.stickyColumnOptions,onChange:u.toggleStickyColumn,inline:""},null,8,["modelValue","items","onChange"]),l(f,{onClick:e[2]||(e[2]=m=>i.table9.fixedHeaders=!i.table9.fixedHeaders),outline:!i.table9.fixedHeaders,round:""},{default:a(()=>[n("span",{class:v(["code",i.table9.fixedHeaders?"contrast-color":"primary"])},"fixed-headers",2)]),_:1},8,["outline"])]),l(o,{class:"base-color--bg",headers:i.table9.headers,items:i.table9.items,"fixed-layout":"","fixed-headers":i.table9.fixedHeaders,style:{"max-width":"500px",height:"200px"}},null,8,["headers","items","fixed-headers"])]),_:1}),l(r,{h2:""},{default:a(()=>e[65]||(e[65]=[t("Sorting")])),_:1}),e[191]||(e[191]=n("p",null,[t(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),n("strong",{class:"code"},"w-table"),t("'s sorting is defined with a header key string preceded by a "),n("code",null,"+"),t(` for ASC,
or a `),n("code",null,"-"),t(" for DESC. For instance, in this example: "),n("code",null,"'+firstName'"),t(`.
`)],-1)),l(r,{h3:""},{default:a(()=>e[66]||(e[66]=[t("Initial Sorting")])),_:1}),l(b,null,{pug:a(()=>e[67]||(e[67]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort")`)])),html:a(()=>e[68]||(e[68]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`)])),js:a(()=>e[69]||(e[69]=[t(`data: () => ({
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
})`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,sort:i.table1.sort,"onUpdate:sort":e[3]||(e[3]=m=>i.table1.sort=m)},null,8,["headers","items","sort"])]),_:1}),l(S,{tip:""},{default:a(()=>e[70]||(e[70]=[t(`By default any column being sorted is highlighted. You can modify the style of the whole column
with the class `),n("code",null,".w-table__col--highlighted",-1),t("."),n("br",null,null,-1),t(`
Also, if you try to target it in the devtools and can't find it, it's in `),n("code",null,"table > colgroup",-1),t(`.
`)])),_:1}),l(r,{h3:""},{default:a(()=>e[71]||(e[71]=[t("Asynchronous Sorting")])),_:1}),e[192]||(e[192]=n("p",null,[t(`When dealing with a lot of table entries, you will most likely need the sorting to be done
in the backend.`),n("br"),t(`
For this you can use the asynchronous sorting and update the table rows from outside Wave UI.`)],-1)),l(b,{"blank-codepen":["js"]},{html:a(()=>e[73]||(e[73]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  :sort-function="sortFunction"
  :loading="table.loading"
  style="height: 140px">
</w-table>`)])),js:a(()=>e[74]||(e[74]=[t(`// This object is simulating content coming from the server.
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
`)])),default:a(()=>[l(o,{class:"my6",headers:i.table10.headers,items:i.table10.items,"sort-function":u.sortFunction,loading:i.table10.loading,style:{height:"145px"}},{pug:a(()=>e[72]||(e[72]=[t(`w-table.my6(
:headers="table.headers"
:items="table.items"
:sort-function="sortFunction"
:loading="table.loading"
style="height: 140px")`)])),_:1},8,["headers","items","sort-function","loading"])]),_:1}),l(r,{h2:""},{default:a(()=>e[75]||(e[75]=[t("Filtering")])),_:1}),e[193]||(e[193]=n("p",null,[t(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),n("strong",{class:"code"},"w-table"),t(" component and it will be applied to the table."),n("br"),t(`
Setting the filter to `),n("code",null,"null"),t(" or "),n("code",null,"false"),t(" or "),n("code",null,"undefined"),t(" will remove any previous filter.")],-1)),l(b,null,{pug:a(()=>e[79]||(e[79]=[t(`.w-flex.wrap.mb3
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
  :filter="table.filters[table.activeFilter]")`)])),html:a(()=>e[80]||(e[80]=[t(`<div class="w-flex wrap mb3">
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
</w-table>`)])),js:a(()=>e[81]||(e[81]=[t(`data: () => ({
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
`)])),default:a(()=>[n("div",U,[l(f,{class:"mr2 mb1",onClick:e[4]||(e[4]=m=>i.table3.activeFilter=0),round:"",outline:i.table3.activeFilter!==0},{default:a(()=>e[76]||(e[76]=[t("No filter")])),_:1},8,["outline"]),l(f,{class:"mr2 mb1",onClick:e[5]||(e[5]=m=>i.table3.activeFilter=1),round:"",outline:i.table3.activeFilter!==1},{default:a(()=>e[77]||(e[77]=[t("Last name starting with 'M'")])),_:1},8,["outline"]),l(f,{class:"mr2 mb1",onClick:e[6]||(e[6]=m=>i.table3.activeFilter=2),round:"",outline:i.table3.activeFilter!==2},{default:a(()=>e[78]||(e[78]=[t("ID >= 10")])),_:1},8,["outline"])]),l(o,{headers:i.table3.headers,items:i.table3.items,filter:i.table3.filters[i.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),l(r,{h3:""},{default:a(()=>e[82]||(e[82]=[t("Global filter")])),_:1}),e[194]||(e[194]=n("p",null,[t("You could also apply a filter globally, which looks into all the columns at once."),n("br"),t(`
Here is one cool way to do it.`)],-1)),l(b,null,{pug:a(()=>e[83]||(e[83]=[t(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`)])),html:a(()=>e[84]||(e[84]=[t(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`)])),js:a(()=>e[85]||(e[85]=[t(`data: () => ({
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
})`)])),default:a(()=>[l(z,{class:"mb3",modelValue:i.table4.keyword,"onUpdate:modelValue":e[7]||(e[7]=m=>i.table4.keyword=m),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),l(o,{headers:i.table4.headers,items:i.table4.items,filter:i.table4.keywordFilter(i.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),l(S,{tip:""},{default:a(()=>[e[87]||(e[87]=n("strong",null,[t(`If you don't need the RegExp power, you can simply return
`),n("code",null,"allTheColumns.toLowerCase().includes(keyword)"),t(` instead.
`)],-1)),e[88]||(e[88]=n("br",null,null,-1)),e[89]||(e[89]=n("br",null,null,-1)),e[90]||(e[90]=t(`But the real power of using a regular expression
`)),l(I,{class:"red mr1",size:"0.9em"},{default:a(()=>e[86]||(e[86]=[t("mdi mdi-heart")])),_:1}),e[91]||(e[91]=t(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `)),e[92]||(e[92]=n("code",null,"|",-1)),e[93]||(e[93]=t(" etc.")),e[94]||(e[94]=n("br",null,null,-1)),e[95]||(e[95]=t(`
You could also match only the full words by replacing `)),e[96]||(e[96]=n("code",null,"new RegExp(keyword, 'i')",-1)),e[97]||(e[97]=t(` with
`)),e[98]||(e[98]=n("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1)),e[99]||(e[99]=t(" (it would return a result when typing ")),e[100]||(e[100]=n("code",null,"floretta",-1)),e[101]||(e[101]=t(`
but not `)),e[102]||(e[102]=n("code",null,"florett",-1)),e[103]||(e[103]=t(" for instance)."))]),_:1}),l(r,{h2:""},{default:a(()=>e[104]||(e[104]=[t("Loading state")])),_:1}),e[195]||(e[195]=n("p",null,[t("When the table content is not ready straight away, you can use the "),n("code",null,"loading"),t(` prop to display
a progress bar while loading.`)],-1)),l(f,{class:"mb2",disabled:!!i.table1.loading,onClick:u.reload},{default:a(()=>[l(I,{class:"mr1"},{default:a(()=>e[105]||(e[105]=[t("mdi mdi-sync")])),_:1}),e[106]||(e[106]=t("reload"))]),_:1},8,["disabled","onClick"]),l(r,{h3:""},{default:a(()=>e[107]||(e[107]=[t("Simple table - no set height")])),_:1}),l(b,{style:{height:"170px"}},{pug:a(()=>e[108]||(e[108]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`)])),html:a(()=>e[109]||(e[109]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`)])),js:a(()=>e[110]||(e[110]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,loading:i.table1.loading},null,8,["headers","items","loading"])]),_:1}),l(r,{h3:"",slug:"loading-with-fixed-header"},{default:a(()=>e[111]||(e[111]=[t("Table with fixed header & set height of 200px")])),_:1}),l(b,null,{pug:a(()=>e[112]||(e[112]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`)])),html:a(()=>e[113]||(e[113]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`)])),js:a(()=>e[114]||(e[114]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table3.items,"fixed-headers":"",loading:i.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),l(r,{h2:""},{default:a(()=>e[115]||(e[115]=[t("Pagination")])),_:1}),e[196]||(e[196]=n("p",null,"The pagination can be provided as an object:",-1)),l(T,{language:"js"},{default:a(()=>e[116]||(e[116]=[t(`{
  itemsPerPage: Integer, // Number of rows to show per page.
  itemsPerPageOptions: Array, // Items per page options for the user.
  start: Integer, // The start of the results range.
  end: Integer, // The end of the results range.
  page: Integer, // The current page to display [itemsPerPage] number of rows.
  total: Integer // The total number of items available in the table.
}`)])),_:1}),e[197]||(e[197]=A(`<p>More details in the <a href="#pagination-prop">API section</a>.</p><p>The pagination is a two-way binding object: if you modify any property inside it, the table
will re-paginate and update.</p><p>You are free to use <code>start</code> &amp; <code>end</code> or <code>page</code> and <code>itemsPerPage</code>
options at your convenience when triggering a pagination.
</p>`,3)),l(r,{h3:""},{default:a(()=>e[117]||(e[117]=[t("Client-side pagination")])),_:1}),l(b,{"blank-codepen":["js"]},{pug:a(()=>e[118]||(e[118]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px")`)])),html:a(()=>e[119]||(e[119]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px">
</w-table>`)])),js:a(()=>e[120]||(e[120]=[t(`// import { faker } from '@faker-js/faker' // With npm.
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
`)])),default:a(()=>[l(o,{headers:i.table11.headers,items:i.table11.items,"fixed-headers":"","fixed-footer":"",pagination:i.table11.pagination,style:{"max-height":"500px"}},null,8,["headers","items","pagination"])]),_:1}),l(r,{h3:""},{default:a(()=>e[121]||(e[121]=[t("Server-side pagination")])),_:1}),e[198]||(e[198]=n("p",null,"This example showcases an asynchronous pagination with backend fetching of the table items.",-1)),l(b,{"blank-codepen":["js"]},{pug:a(()=>e[122]||(e[122]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px")`)])),html:a(()=>e[123]||(e[123]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px">
</w-table>`)])),js:a(()=>e[124]||(e[124]=[t(`// import { faker } from '@faker-js/faker' // With npm.
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
`)])),default:a(()=>[l(o,{headers:i.table12.headers,items:i.table12.items,"fixed-headers":"","fixed-footer":"",fetch:i.table12.fetch,pagination:i.table12.pagination,loading:i.table12.loading,style:{"max-height":"500px"}},null,8,["headers","items","fetch","pagination","loading"])]),_:1}),l(r,{h3:""},{default:a(()=>e[125]||(e[125]=[t("Custom pagination layout")])),_:1}),e[199]||(e[199]=n("p",null,[t("More details about the pagination slot in the "),n("a",{href:"#pagination-slot"},"API section"),t(".")],-1)),l(b,{"blank-codepen":["js"]},{pug:a(()=>e[126]||(e[126]=[t(`w-table(
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
          xs) `+s("{{ i }}")+`
        w-button(
          @click="goToPage(1)"
          :disabled="page === pagesCount"
          icon="wi-chevron-right"
          xs)
      p `+s("{{ range }}")+" of "+s("{{ total }}")+".")])),html:a(()=>e[127]||(e[127]=[t(`<w-table
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
          `+s("{{ i }}")+`
        </w-button>
        <w-button
          @click="goToPage('+1')"
          :disabled="page === pagesCount"
          icon="wi-chevron-right"
          xs>
        </w-button>
      </div>
      <p> `+s("{{ range }}")+" of "+s("{{ total }}")+`.</p>
    </div>
  </template>
</w-table>`)])),js:a(()=>e[128]||(e[128]=[t(`// import { faker } from '@faker-js/faker' // With npm.
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
`)])),default:a(()=>[l(o,{headers:i.table11.headers,items:i.table11.items,"fixed-headers":"","fixed-footer":"",pagination:i.table11.pagination,style:{"max-height":"500px"}},{pagination:a(({range:m,total:h,page:N,pagesCount:k,goToPage:x})=>[n("div",J,[n("div",Y,[l(f,{onClick:w=>x("-1"),disabled:N===1,icon:"wi-chevron-left",xs:""},null,8,["onClick","disabled"]),(p(!0),c(R,null,L(k,w=>(p(),E(f,{key:w,onClick:ge=>w!==N&&x(w),outline:N===w,round:"",xs:""},{default:a(()=>[t(s(w),1)]),_:2},1032,["onClick","outline"]))),128)),l(f,{onClick:w=>x("+1"),disabled:N===k,icon:"wi-chevron-right",xs:""},null,8,["onClick","disabled"])]),n("p",G,s(m)+" of "+s(h)+".",1)])]),_:1},8,["headers","items","pagination"])]),_:1}),l(r,{h3:""},{default:a(()=>e[129]||(e[129]=[t("Initing the pagination with a certain state")])),_:1}),l(b,{"blank-codepen":["js"]},{pug:a(()=>e[130]||(e[130]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px")`)])),html:a(()=>e[131]||(e[131]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px">
</w-table>`)])),js:a(()=>e[132]||(e[132]=[t(`// import { faker } from '@faker-js/faker' // With npm.
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
`)])),default:a(()=>[l(o,{headers:i.table13.headers,items:i.table13.items,"fixed-headers":"","fixed-footer":"",fetch:i.table13.fetch,pagination:i.table13.pagination,loading:i.table13.loading,style:{"max-height":"500px"}},null,8,["headers","items","fetch","pagination","loading"])]),_:1}),l(r,{h2:""},{default:a(()=>e[133]||(e[133]=[t("Rows selection")])),_:1}),e[200]||(e[200]=n("p",null,"Click a row to see it highlighted and get information about the selected item.",-1)),e[201]||(e[201]=n("p",null,[t("By default, the selection will use the "),n("code",null,"primary"),t(" color and apply an opacity of "),n("code",null,"0.2"),t(`.
If this is not what you want, you can override it via CSS (`),n("code",null,".w-table__row--selected td:before"),t(`).
`)],-1)),l(r,{h3:"",slug:"example--selectable-rows"},{default:a(()=>e[134]||(e[134]=[t("The "),n("span",{class:"code"},"selectable-rows",-1),t(" prop")])),_:1}),e[202]||(e[202]=n("p",null,[t("You can enable the rows selection by adding the "),n("code",null,"selectable-rows"),t(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),n("code",null,"1"),t(`
to allow a single selection only.
`)],-1)),l(r,{h3:"",slug:"example--force-selection"},{default:a(()=>e[135]||(e[135]=[t("The "),n("span",{class:"code"},"force-selection",-1),t(" prop")])),_:1}),e[203]||(e[203]=n("p",null,[t("Eventually, you can use the "),n("code",null,"force-selection"),t(` prop to prevent unselecting a row when only
one remain selected.
`)],-1)),l(r,{h3:"",slug:"example--row-select"},{default:a(()=>e[136]||(e[136]=[t("The "),n("span",{class:"code"},"@row-select",-1),t(" event")])),_:1}),e[204]||(e[204]=A(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2)),l(b,null,{pug:a(()=>e[139]||(e[139]=[t(`w-flex.mb4(wrap)
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
pre `+s("{{ selectionInfo }}"))])),html:a(()=>e[140]||(e[140]=[t(`<w-flex wrap class="mb4">
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
<pre>`+s("{{ selectionInfo }}")+"</pre>")])),js:a(()=>e[141]||(e[141]=[t(`data: () => ({
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
`)])),default:a(()=>[l(j,{class:"mb4",wrap:""},{default:a(()=>[l(M,{class:"mr6",modelValue:i.table1.selectableRows,"onUpdate:modelValue":e[8]||(e[8]=m=>i.table1.selectableRows=m),items:i.selectableRowsOptions},null,8,["modelValue","items"]),l(f,{class:"my3",onClick:e[9]||(e[9]=m=>i.table1.forceSelection=!i.table1.forceSelection),round:"",outline:!i.table1.forceSelection},{default:a(()=>[i.table1.forceSelection?(p(),E(I,{key:0,class:"mr2"},{default:a(()=>e[137]||(e[137]=[t("wi-check")])),_:1})):W("",!0),e[138]||(e[138]=t("Force selection"))]),_:1},8,["outline"])]),_:1}),l(o,{headers:i.table1.headers,items:i.table1.items,"selectable-rows":i.table1.selectableRows,"force-selection":i.table1.forceSelection,onRowSelect:e[10]||(e[10]=m=>i.selectionInfo=m)},null,8,["headers","items","selectable-rows","force-selection"]),e[142]||(e[142]=n("div",{class:"mt4 title4"},"Selection info:",-1)),n("pre",null,s(i.selectionInfo),1)]),_:1}),l(r,{h3:""},{default:a(()=>e[143]||(e[143]=[t("Updating the selected rows programmatically")])),_:1}),e[205]||(e[205]=n("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1)),l(S,{tip:""},{default:a(()=>e[144]||(e[144]=[n("ul",null,[n("li",null,[n("strong",null,"In Vue 2"),t(", you can do 2-way binding on any variable other than the "),n("strong",{class:"code"},"v-model"),t(" using the "),n("code",null,".sync"),t(" modifier.")]),n("li",null,[n("strong",null,"In Vue 3"),t(", multiple "),n("strong",{class:"code"},"v-model"),t(" are supported in order to achieve 2-way binding. So you don't need "),n("code",null,".sync"),t(".")])],-1)])),_:1}),l(b,null,{pug:a(()=>e[146]||(e[146]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+s("{{ table.selectedRows }}"))])),html:a(()=>e[147]||(e[147]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+s("{{ table.selectedRows }}")+`</code>
</div>`)])),js:a(()=>e[148]||(e[148]=[t(`data: () => ({
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
})`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,"selectable-rows":"","selected-rows":i.table1.selectedRows,"onUpdate:selectedRows":e[11]||(e[11]=m=>i.table1.selectedRows=m)},null,8,["headers","items","selected-rows"]),n("div",X,[e[145]||(e[145]=t("Selected rows:")),n("code",Q,s(i.table1.selectedRows),1)])]),_:1}),l(S,{info:""},{default:a(()=>e[149]||(e[149]=[t("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),n("br",null,null,-1),t(`
By default the expanded rows array will use an `),n("code",null,"id",-1),t(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),n("code",null,"uid-key",-1),t(` prop, which is set to "id" by default.
`)])),_:1}),l(r,{h2:"",slug:"example--expandable-rows"},{default:a(()=>e[150]||(e[150]=[t("Expandable rows")])),_:1}),l(S,{warning:""},{default:a(()=>e[151]||(e[151]=[t("This feature is in progress.")])),_:1}),l(b,null,{pug:a(()=>e[154]||(e[154]=[t(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+s("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+s("{{ item.firstName }}")+" weighs "),n("strong",null,s("{{ item.weight }}")+"kg",-1),t(" and is "),n("strong",null,s("{{ item.height }}")+"m",-1),t(" tall.")])),html:a(()=>e[155]||(e[155]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+s("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+s("{{ item.firstName }}")+" weighs "),n("strong",null,s("{{ item.weight }}")+"kg",-1),t(" and is "),n("strong",null,s("{{ item.height }}")+"m",-1),t(` tall.
  </template>
</w-table>`)])),js:a(()=>e[156]||(e[156]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table5.headers,items:i.table5.items,"expandable-rows":""},{"row-expansion":a(({item:m})=>[l(I,{class:"mr2",color:["blue","pink"][m.gender]},{default:a(()=>[t("mdi "+s(["mdi-gender-male","mdi-gender-female"][m.gender]),1)]),_:2},1032,["color"]),t(s(m.firstName)+" weighs ",1),n("strong",null,s(m.weight)+"kg",1),e[152]||(e[152]=t(" and is ")),n("strong",null,s(m.height)+"m",1),e[153]||(e[153]=t(" tall."))]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"slots"},{default:a(()=>e[157]||(e[157]=[t("Headers & cells customization via slots")])),_:1}),e[206]||(e[206]=n("p",null,"You can customize the headers labels and/or each row cells.",-1)),l(r,{h3:""},{default:a(()=>e[158]||(e[158]=[t("Headers")])),_:1}),e[207]||(e[207]=n("p",null,[t("In this example, only the headers are customized via the "),n("code",null,"header-label"),t(" slot.")],-1)),l(b,null,{pug:a(()=>e[159]||(e[159]=[t(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+s("{{ index }}: {{ label }}")+" 👌")])),html:a(()=>e[160]||(e[160]=[t(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+s("{{ index }}: {{ label }}")+` 👌
  </template>
</w-table>`)])),js:a(()=>e[161]||(e[161]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items},{"header-label":a(({label:m,index:h})=>[t(s(h)+": "+s(m)+" 👌",1)]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"item-cells"},{default:a(()=>e[162]||(e[162]=[t("Item cells (inside <td> element)")])),_:1}),e[208]||(e[208]=n("p",null,[t("In this example, only the items cells are customized via the "),n("code",null,"item"),t(` slot
(and the headers are hidden).`)],-1)),l(b,null,{pug:a(()=>e[163]||(e[163]=[t(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+s("{{ header.label }}")+`:
    span `+s("{{ label }}"))])),html:a(()=>e[164]||(e[164]=[t(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+s("{{ header.label }}")+`:</small>
    <span>`+s("{{ label }}")+`</span>
  </template>
</w-table>`)])),js:a(()=>e[165]||(e[165]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,"no-headers":"",items:i.table1.items},{"item-cell":a(({item:m,label:h,header:N,index:k})=>[N.key==="id"?(p(),c("small",Z,"#"+s(k),1)):(p(),c(R,{key:1},[n("small",$,s(N.label)+":",1),n("span",null,s(h),1)],64))]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"override-1-particular-item-cell"},{default:a(()=>e[166]||(e[166]=[t("override 1 particular item cell or column cells (inside <td> element)")])),_:1}),e[209]||(e[209]=A(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1)),l(b,null,{pug:a(()=>[t(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.`+s(d.$store.state.darkMode?"green-dark5--bg":"green-light5--bg")+".text-bold "+s("{{ label }}"),1)]),html:a(()=>[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center `+s(d.$store.state.darkMode?"green-dark5--bg":"green-light5--bg")+` text-bold">
      `+s("{{ label }}")+`
    </div>
  </template>
</w-table>`,1)]),js:a(()=>e[167]||(e[167]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,"no-headers":""},{"item-cell.id":a(({item:m,label:h,header:N,index:k})=>[n("div",{class:v(["px2 text-center text-bold",d.$store.state.darkMode?"green-dark5--bg":"green-light5--bg"])},s(h),3)]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"full-custom-rows"},{default:a(()=>e[168]||(e[168]=[t("Full custom row (<tr> element itself)")])),_:1}),e[210]||(e[210]=n("p",null,[t(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),n("br"),t(`
As you notice, the `),n("code",null,"item"),t(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1)),l(b,null,{pug:a(()=>e[169]||(e[169]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+s("{{ item[header.key] || '' }}"))])),html:a(()=>e[170]||(e[170]=[t(`<w-table
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
</w-table>`)])),js:a(()=>e[171]||(e[171]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,"selectable-rows":""},{item:a(({item:m,index:h,select:N,classes:k})=>[n("tr",{class:v(k),onClick:N},[(p(!0),c(R,null,L(i.table1.headers,(x,w)=>(p(),c("td",{key:w,class:v(`pa4 text-${x.align||"left"}`)},s(m[x.key]||""),3))),128))],10,_)]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"colspan-on-td"},{default:a(()=>e[172]||(e[172]=[n("span",{class:"code"},"colspan",-1),t(" on <td>")])),_:1}),e[211]||(e[211]=n("p",null,[t("This example is showcasing another useful case: handling a colspan attribute."),n("br"),t(`
All the cells of all the rows are `),n("code",null,"colspan"),t("'d to one, and a custom row layout is applied.")],-1)),l(b,null,{pug:a(()=>[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-`+s(d.$store.state.darkMode?"dark":"light")+"5--bg': index % 2, 'blue-"+s(d.$store.state.darkMode?"dark":"light")+`5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+s("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+s("{{ header.label }}")+`:
            | `+s("{{ item[header.key] || '' }}"),1)]),html:a(()=>[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr
      :class="{
        ...classes,
        'indigo-`+s(d.$store.state.darkMode?"dark":"light")+`5--bg': index % 2,
        'blue-`+s(d.$store.state.darkMode?"dark":"light")+`5--bg': !(index % 2)
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
</w-table>`,1)]),js:a(()=>e[173]||(e[173]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table1.headers,items:i.table1.items,"no-headers":"","selectable-rows":""},{item:a(({item:m,index:h,select:N,classes:k})=>[n("tr",{class:v({...k,[`indigo-${d.$store.state.darkMode?"dark":"light"}5--bg`]:h%2,[`blue-${d.$store.state.darkMode?"dark":"light"}5--bg`]:!(h%2)}),onClick:N},[n("td",{class:"pa2",colspan:i.table1.headers.length},[n("div",ae,"Row #"+s(h),1),n("ul",null,[(p(!0),c(R,null,L(i.table1.headers,(x,w)=>(p(),c("li",{key:w},[n("strong",ne,s(x.label)+":",1),t(s(m[x.key]||""),1)]))),128))])],8,te)],10,ee)]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:""},{default:a(()=>e[174]||(e[174]=[t("Responsiveness & mobile layout")])),_:1}),e[212]||(e[212]=n("p",null,[t("In addition to the full responsiveness, the "),n("code",null,"w-table"),t(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),n("br"),t(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),n("code",null,"mobile-breakpoint"),t(`
parameter.`),n("br"),t(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),n("br"),n("br"),t(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1)),l(b,null,{pug:a(()=>e[175]||(e[175]=[t(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`)])),html:a(()=>e[176]||(e[176]=[t(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`)])),js:a(()=>e[177]||(e[177]=[t(`data: () => ({
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
`)])),default:a(()=>[l(o,{headers:i.table2.headers,items:i.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),l(S,{tip:""},{default:a(()=>[e[179]||(e[179]=n("p",null,[t("To stay lean and efficient, the minimum JavaScript behavior is added to the "),n("code",null,"w-table"),t(`
component.`),n("br"),t(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),n("br"),t(`
You can override it to set the width you want via:
`)],-1)),l(T,{class:"mt5 mb0",language:"css",label:"CSS",dark:d.$store.state.darkMode},{default:a(()=>e[178]||(e[178]=[t(".w-table--mobile .w-table__cell:before {width: 8em;}")])),_:1},8,["dark"])]),_:1})])}const C=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],ie={null:[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"}],"+id":[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"}],"-id":[{id:5,firstName:"Virgil",lastName:"Carman"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"}],"+firstName":[{id:4,firstName:"Daley",lastName:"Elliott"},{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:5,firstName:"Virgil",lastName:"Carman"}],"-firstName":[{id:5,firstName:"Virgil",lastName:"Carman"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"},{id:4,firstName:"Daley",lastName:"Elliott"}],"+lastName":[{id:3,firstName:"Rory",lastName:"Bristol"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"}],"-lastName":[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:3,firstName:"Rory",lastName:"Bristol"}]},V=Array(2e3).fill("").map((d,e)=>({id:e+1,firstName:D.person.firstName(),lastName:D.person.lastName(),birthdate:D.date.birthdate().toISOString().substring(0,10)})),se={data(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:C.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:C.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:C,filters:[null,d=>d.lastName[0]==="M",d=>d.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:C,keyword:"",keywordFilter:d=>e=>{const y=`${e.id} ${e.firstName} ${e.lastName}`;return new RegExp(d,"i").test(y)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:C.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table9:{stickyColumn:1,fixedHeaders:!1,stickyColumnOptions:[{value:1,label:"#1"},{value:2,label:"#2"},{value:24,label:"#2 & #4"},{value:0,label:"None"}],headers:[{label:"ID",key:"id",hidden:!1,width:"60px",sticky:!0},{label:"First name",key:"firstName",hidden:!1,width:"120px"},{label:"Last name",key:"lastName",hidden:!1,width:"120px"},{label:"Birthday",key:"birthday",email:!1,width:"150px"},{label:"Email",key:"email",hidden:!1,width:"200px"},{label:"Phone",key:"phone",hidden:!1,width:"200px"},{label:"Country",key:"country",hidden:!1,width:"200px"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",birthday:"Feb. 12, 1976",email:"f.sampson@gmail.com",phone:"+21 234 567 8921",country:"United Kingdom"},{id:2,firstName:"Nellie",lastName:"Lynn",birthday:"Dec. 15, 1995",email:"n.lynn@gmail.com",phone:"+22 234 567 8922",country:"Luxembourg"},{id:3,firstName:"Rory",lastName:"Bristol",birthday:"Apr. 25, 1989",email:"r.bristol@gmail.com",phone:"+23 234 567 8923",country:"Montenegro"},{id:4,firstName:"Daley",lastName:"Elliott",birthday:"Mar. 24, 2002",email:"d.elliott@gmail.com",phone:"+24 234 567 8924",country:"Germany"},{id:5,firstName:"Virgil",lastName:"Carman",birthday:"Aug. 2, 1990",email:"v.carman@gmail.com",phone:"+25 234 567 8925",country:"Ukraine"},{id:6,firstName:"Baldwin",lastName:"Morison",birthday:"Feb. 12, 2008",email:"b.morison@gmail.com",phone:"+26 234 567 8926",country:"Lithuania"},{id:7,firstName:"Beckah",lastName:"Mann",birthday:"Nov. 6, 1991",email:"b.mann@gmail.com",phone:"+27 234 567 8927",country:"Finland"},{id:8,firstName:"Davie",lastName:"Forester",birthday:"Dec. 6, 1982",email:"d.forester@gmail.com",phone:"+28 234 567 8928",country:"Portugal"},{id:9,firstName:"Andi",lastName:"Montgomery",birthday:"Jan. 20, 1987",email:"a.montgomery@gmail.com",phone:"+29 234 567 8929",country:"Czechia"},{id:10,firstName:"Magnolia",lastName:"Kirk",birthday:"Dec. 31, 1992",email:"m.kirk@gmail.com",phone:"+30 234 567 8930",country:"Norway"},{id:11,firstName:"Hamilton",lastName:"Mallory",birthday:"Dec. 7, 1979",email:"h.mallory@gmail.com",phone:"+31 234 567 8931",country:"Greece"},{id:12,firstName:"Sheree",lastName:"Castle",birthday:"Feb. 16, 1980",email:"s.castle@gmail.com",phone:"+32 234 567 8932",country:"France"},{id:13,firstName:"Rebekah",lastName:"Eason",birthday:"Jun. 29, 2000",email:"r.eason@gmail.com",phone:"+33 234 567 8933",country:"Poland"},{id:14,firstName:"Maude",lastName:"Hayley",birthday:"Dec. 31, 2009",email:"m.hayley@gmail.com",phone:"+34 234 567 8934",country:"Hungary"},{id:15,firstName:"Josie",lastName:"Richard",birthday:"Aug. 16, 2004",email:"j.richard@gmail.com",phone:"+35 234 567 8935",country:"Italy"}]},table10:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:C.slice(0,5),loading:!1},table11:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"},{label:"Birthdate",key:"birthdate"}],items:Array(200).fill("").map((d,e)=>({id:e+1,firstName:D.person.firstName(),lastName:D.person.lastName(),birthdate:D.date.birthdate().toISOString().substring(0,10)})),pagination:{itemsPerPage:50,total:200}},table12:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"},{label:"Birthdate",key:"birthdate"}],items:[],loading:!1,pagination:{itemsPerPage:50,total:2e3},fetch:({page:d,start:e,end:y,total:F,itemsPerPage:i,sorting:u})=>{this.table12.loading="header",setTimeout(()=>{const r=V.slice(0);if(u.length){const o=u[0].substring(1);r.sort((b,f)=>u[0][0]==="+"?b[o]<f[o]?-1:1:b[o]>f[o]?-1:1)}this.table12.items=r.slice(e-1,y),this.table12.loading=!1},1e3)}},table13:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"},{label:"Birthdate",key:"birthdate"}],items:[],loading:!1,pagination:{page:17,itemsPerPage:50,total:2e3},fetch:({page:d,start:e,end:y,total:F,itemsPerPage:i,sorting:u})=>{this.table13.loading="header",setTimeout(()=>{const r=V.slice(0);if(u.length){const o=u[0].substring(1);r.sort((b,f)=>u[0][0]==="+"?b[o]<f[o]?-1:1:b[o]>f[o]?-1:1)}this.table13.items=r.slice(e-1,y),this.table13.loading=!1},1e3)}},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}},methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(d){this.table6.headers[d].hidden=!this.table6.headers[d].hidden},onColumnResize({index:d,widths:e}){e.forEach((y,F)=>this.table8.headers[F].width=y),localStorage.tableWidths=e},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:"John",lastName:"Doe"}),this.$nextTick(()=>{const d=this.$refs.table.$el;d.scrollTo({top:d.scrollHeight,behavior:"smooth"})})},toggleStickyColumn(){switch(this.table9.headers.forEach(d=>d.sticky=!1),this.table9.stickyColumn){case 1:return this.table9.headers[0].sticky=!0;case 2:return this.table9.headers[1].sticky=!0;case 24:return this.table9.headers[1].sticky=!0,this.table9.headers[3].sticky=!0}},async sortFunction(d){this.table10.loading="header";const e=new Promise(y=>setTimeout(()=>y(ie[d[0]||null]),1e3));this.table10.items=await e,this.table10.loading=!1}},mounted(){var d;this.reload(),(d=localStorage.tableWidths)==null||d.split(",").forEach((e,y)=>this.table8.headers[y].width=e)}},re=B(se,[["render",le]]);function oe(d,e,y,F,i,u){const r=g("title-link"),o=g("component-api");return p(),c("div",null,[e[1]||(e[1]=n("div",{class:"w-divider my12"},null,-1)),l(r,{class:"title1",h2:""},{default:a(()=>e[0]||(e[0]=[t("API")])),_:1}),l(o,{class:"mt0",items:u.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(o,{items:d.slots,title:"Slots"},null,8,["items"]),l(o,{items:u.events,title:"Events"},null,8,["items"])])}const de={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li><strong class="code">sortable:</strong> <span class="types teal">[Boolean]</span> Whether this column is sortable or not. If omitted, defaults to <code>true</code>.</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",fixedFooter:"When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.",fixedLayout:"When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.",loading:"When set to <code>true</code>, a progress bar will be displayed and any currently visible rows will be hidden.<br>When set to <code>'header', the loading bar will be placed in the header leaving any current rows visible while loading.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',sortFunction:"Optionally provide an asynchronous sorting function (usually for server-side sorting). This function receives an array of sorting keys as parameter. If the array is empty, the sorting is reset.",expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize.",pagination:'The pagination is a two-way binding object. It is always containing up-to-date properties that you can use for pagination.<br>You can also modify any property inside it and the table will re-paginate and update. This is particularly useful when the pagination is done server-side.<br>Here is the list of all the properties it contains:<ul><li><span class="teal code">{Integer}</span><code>itemsPerPage:</code><p>the number of rows to display in one page. <code>0</code> for "all" results in 1 page.</p></li><li><span class="teal code">{Array}</span><code>itemsPerPageOptions:</code><p>The <code>itemsPerPage</code> options to offer to the user. Each object of the array should have at least a <code>value</code> property, and a <code>label</code> property if different of the <code>value</code>.</p></li><li><span class="teal code">{Number}</span><code>start:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>start</code> is the first result number to load [itemsPerPage] results from.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>end:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>end</code> is the last result number to load.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>page:</code><p>An integer - to be used in conjunction with the <code>itemsPerPage</code> option - to define the range of results to load. E.g. page = 2 and itemsPerPage = 50, will load the results range [51-100].<br> This can be used instead of <code>start</code> and <code>end</code> if you find it more convenient.</p></li><li><span class="teal code">{Number}</span><code>total:</code><p>An integer defining the total number of items available in this match.</p></li></ul>'},me={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}},footer:{description:"If you need, you can provide a custom template for the table footer.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot."},"footer-row":{description:"If you need, you can provide a custom template for the table footer.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s."},pagination:{description:"If you need, you can provide a custom template for the table pagination in the table footer.<br>This slot lets you override the whole pagination, and a few variable are available to facilitate a fully custom pagination without to much work.",params:{range:"A string representing the current range of the visible rows. E.g. <code>75-100</code>",page:"An integer representing the current table page. E.g. <code>3</code>",pagesCount:"An integer representing the total number of pages in the array.",total:"An integer representing the total of items in the array, visible or not.",goToPage:"A function that you you can use to navigate through the pages. It accepts one parameter that can be an integer for an existing page, or exactly <code>+1</code> or <code>-1</code> as a string to increase or decrease the page number."}}},be={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},ue={data:()=>({propsDescs:de,slots:me}),computed:{props(){return P.props},events(){return P.emits.reduce((d,e)=>(d[e]=be[e]||{})&&d,{})}}},fe=B(ue,[["render",oe]]);function he(d,e,y,F,i,u){const r=g("ui-component-title"),o=g("examples"),b=g("api");return p(),c("main",null,[l(r,null,{default:a(()=>e[0]||(e[0]=[t("w-table")])),_:1}),l(o),l(b)])}const pe={components:{Examples:re,Api:fe}},ce=B(pe,[["render",he]]);export{ce as default};
