<template lang="pug">
div
  title-link(h2) Basic
  example
    w-table(:headers="table1.headers" :items="table1.items")
    template(#pug).
      w-table(:headers="table.headers" :items="table.items")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  title-link(h2) When there is no data
  p When there is no data, a default text will be displayed. You can override it via the #[code no-data] slot.
  example
    w-table(:headers="table1.headers" :items="[]")
    br
    w-table(:headers="table1.headers" :items="[]")
      template(#no-data) 👌 There is no data! 👌
    template(#pug).
      w-table(:headers="table.headers" :items="[]")
      br
      w-table(:headers="table.headers" :items="[]")
        template(#no-data) 👌 There is no data! 👌
    template(#html).
      &lt;w-table :headers="table.headers" :items="[]"&gt;&lt;/w-table&gt;

      &lt;br /&gt;
      &lt;w-table :headers="table.headers" :items="[]"&gt;
        &lt;template #no-data&gt;
          👌 There is no data! 👌
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' }
          ]
        }
      })

  title-link(h2) Alignments
  p.
    You can align the columns contents separately by adding an #[code align] key in each header
    definition (#[code left], #[code center] or #[code right]).#[br]
    If you don't define any, #[code left] will be implicit.

  example
    w-table(:headers="table2.headers" :items="table2.items")
    template(#pug).
      w-table(:headers="table.headers" :items="table.items")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  title-link(h2 slug="example--no-headers") No headers
  p.
    Even with the #[code no-headers] option, the #[code headers] are still required for various
    reasons, like getting the number of columns and sorting/filtering keys.
  example
    w-table(:headers="table1.headers" :items="table1.items" no-headers)
    template(#pug).
      w-table(:items="table.items" :headers="table.headers" no-headers)
    template(#html).
      &lt;w-table
        :items="table.items"
        :headers="table.headers"
        no-headers&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  title-link(h2 slug="example--fixed-headers") Fixed headers
  example
    w-table(
      :headers="table3.headers"
      :items="table3.items"
      fixed-headers
      style="height: 250px")
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        fixed-headers
        style="height: 250px")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        fixed-headers
        style="height: 250px"&gt;
      &lt;/w-table&gt;
    template(#js).
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

  title-link(h2 slug="example--footer") Footer
  title-link(h3 slug="example--footer-slot") Footer slot
  p.
    A table footer can be added via the #[code footer] slot. If present, the footer will span on
    all the columns by default.

  .w-flex.justify-end
    w-button(
      @click="table3.fixedFooter = !table3.fixedFooter"
      :outline="!table3.fixedFooter"
      round)
      span.code(:class="table3.fixedFooter ? 'white' : 'primary'") fixed-footer
  example
    w-table(
      ref="table"
      :headers="table3.headers"
      :items="table3.items"
      :fixed-footer="table3.fixedFooter"
      style="height: 250px")
      template(#footer)
        w-flex(justify-space-between)
          w-button(round sm @click="addRow")
            w-icon.mr1 wi-plus
            | add person
          div
            strong.mr2 Total:
            | {{ table3.items.length }} persons
    template(#pug).
      w-table(
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
              | {{ '\{\{ table.items.length \}\}' }} persons
    template(#html).
      &lt;w-table
        ref="table"
        :headers="table.headers"
        :items="table.items"
        :fixed-footer="table.fixedFooter"
        style="height: 250px"&gt;
        &lt;template #footer&gt;
          &lt;w-flex justify-space-between&gt;
            &lt;w-button round sm @click="addRow"&gt;
              &lt;w-icon class="mr1"&gt;wi-plus&lt;/w-icon&gt;
              add person
            &lt;/w-button&gt;

            &lt;div&gt;
              &lt;strong class="mr2"&gt;Total:&lt;/strong&gt;
              {{ '\{\{ table.items.length \}\}' }} persons
            &lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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

  title-link(h3 slug="example--footer-slot") Footer-row slot
  p The #[code footer-row] slot will give you more flexibility as it lets you define the whole table row.
  p It can be useful if you want to keep the columns alignments in the footer.
  example
    w-table(
      ref="table"
      :headers="table3.headers"
      no-headers
      :items="table3.items"
      :fixed-footer="table3.fixedFooter"
      style="height: 250px")
      template(#footer-row)
        tr
          th.py1(
            v-for="(header, i) in table3.headers"
            :key="i"
            :class="`${i ? 'px1' : 'px2'} text-${header.align || 'left'}`")
            | {{ header.label }}
    template(#pug).
      w-table(
        ref="table"
        :headers="table.headers"
        no-headers
        :items="table.items"
        fixed-footer
        style="height: 250px")
        template(#footer-row)
          tr
            th.py1(
              v-for="&amp;#40;header, i&amp;#41; in table3.headers"
              :key="i"
              :class="`${i ? 'px1' : 'px2'} text-${header.align || 'left'}`")
              | {{ '\{\{ header.label \}\}' }}
    template(#html).
      &lt;w-table
        ref="table"
        :headers="table.headers"
        no-headers
        :items="table.items"
        fixed-footer
        style="height: 250px"&gt;
        &lt;template #footer-row&gt;
          &lt;tr&gt;
            &lt;th
              v-for="(header, i) in table.headers"
              :key="i"
              :class="`py1 ${i ? 'px1' : 'px2'} text-${header.align || 'left'}`"&gt;
              {{ '\{\{ header.label \}\}' }}
            &lt;/th&gt;
          &lt;/tr&gt;
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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

  title-link(h2) Built-in column resizing
  p.
    You can resize the columns by dragging their edges left or right.#[br]
    If you want the whole cell content to be on a single line and truncated with the ellipsis
    (#[code ...]), you can apply this CSS.
  ssh-pre(language="css").
    .w-table__cell {
      white-space: nowrap;
    }

  example
    w-table(:headers="table7.headers" :items="table7.items" resizable-columns)
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        resizable-columns)
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        resizable-columns&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  title-link(h3) Saving the table layout in localStorage
  p.
    In some apps, it makes sense to save the prefered table layout of the user, and reapply it
    every time this table is loaded. Here is a demo of how to do so.#[br]
    To test it, first resize the columns, then refresh the page to see the same layout.
  example
    w-table(
      :headers="table8.headers"
      :items="table8.items"
      resizable-columns
      @column-resize="onColumnResize")
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        resizable-columns
        @column-resize="onColumnResize")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        resizable-columns
        @column-resize="onColumnResize"&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  title-link(h2) Toggling column visibility
  p.
    This is completely external to Wave UI, but this example shows you a way to do it in your
    code as it is a frequent use case.
  example
    | Toggle columns:
    w-tag.ma1(
      v-for="(header, index) in table6.headers"
      :key="index"
      :bg-color="header.hidden ? 'grey-light4' : 'primary'"
      @click.stop="header.hidden = !header.hidden")
      w-icon.mr2 mdi mdi-eye{{ header.hidden ? '-off' : ''}}
      | {{ header.label }}

    w-table.mt2(:headers="table6.headers.filter(header => !header.hidden)" :items="table6.items")
    template(#pug).
      w-tag.ma1(
        v-for="&amp;#40;header, index&amp;#41; in table.headers"
        :key="index"
        :bg-color="header.hidden ? 'grey-light4' : 'primary'"
        @click.stop="header.hidden = !header.hidden")
        w-icon.mr2 mdi mdi-eye{{ "\{\{ header.hidden ? '-off' : ''\}\}" }}
        | {{ "\{\{ header.label \}\}" }}

      w-table.mt2(:headers="table.headers.filter&amp;#40;header => !header.hidden&amp;#41;" :items="table.items")
    template(#html).
      Toggle columns:
      &lt;w-tag
        v-for="(header, index) in table.headers"
        :key="index"
        class="ma1"
        :bg-color="header.hidden ? 'grey-light4' : 'primary'"
        @click.stop="header.hidden = !header.hidden"&gt;
        &lt;w-icon class="mr2"&gt;mdi mdi-eye{{ "\{\{ header.hidden ? '-off' : ''\}\}" }}&lt;/w-icon&gt;
        {{ "\{\{ header.label \}\}" }}
      &lt;/w-tag&gt;

      &lt;w-table
        :headers="table.headers.filter(header => !header.hidden)"
        :items="table.items"
        class="mt2"&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  title-link(h2) Sticky columns
  p.
    To make a column sticky, you only need to add #[code sticky: true] to the header of that
    column.#[br]
    The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
    columns, one will overlap the previous one as you scroll.
  p.grey Scroll the table horizontally to observe the behavior.
  example
    .w-flex.align-center.mb2
      | Sticky columns:
      w-radios.ml1.mr4(
        v-model="table9.stickyColumn"
        :items="table9.stickyColumnOptions"
        @change="toggleStickyColumn"
        inline)
      w-button(
        @click="table9.fixedHeaders = !table9.fixedHeaders"
        :outline="!table9.fixedHeaders"
        round)
        span.code(:class="table9.fixedHeaders ? 'white' : 'primary'") fixed-headers

    w-table.white--bg(
      :headers="table9.headers"
      :items="table9.items"
      fixed-layout
      :fixed-headers="table9.fixedHeaders"
      style="max-width: 500px;height: 200px")
    template(#pug).
      w-table(
      :headers="table.headers"
      :items="table.items"
      fixed-layout
      :fixed-headers="table.fixedHeaders"
      style="max-width: 500px;height: 200px")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        fixed-layout
        :fixed-headers="table.fixedHeaders"
        style="max-width: 500px;height: 200px"&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  title-link(h2) Initial Sorting
  p.
    To make the sorting API very easy to use and remember (and avoid complex array or object structures),
    the #[strong.code w-table]'s sorting is defined with a header key string preceded by a #[code +] for ASC,
    or a #[code -] for DESC. For instance, in this example: #[code '+firstName'].
  example
    w-table(:headers="table1.headers" :items="table1.items" :sort.sync="table1.sort")
    template(#pug).
      w-table(:headers="table.headers" :items="table.items" :sort.sync="table.sort")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :sort.sync="table.sort"&gt;
      &lt;/w-table&gt;
    template(#js).
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
          sort: '+firstName'
        }
      })

  title-link(h2) Filtering
  p.
    Filtering the table rows is very straightforward: you only need to provide your filtering function to the
    #[strong.code w-table] component and it will be applied to the table.#[br]
    Setting the filter to #[code null] or #[code false] or #[code undefined] will remove any previous filter.
  example
    .w-flex.wrap.mb3
      w-button.mr2.mb1(
        @click="table3.activeFilter = 0"
        round
        :outline="table3.activeFilter !== 0")
        | No filter
      w-button.mr2.mb1(
        @click="table3.activeFilter = 1"
        round
        :outline="table3.activeFilter !== 1")
        | Last name starting with 'M'
      w-button.mr2.mb1(
        @click="table3.activeFilter = 2"
        round
        :outline="table3.activeFilter !== 2")
        | ID >= 10
    w-table(
      :headers="table3.headers"
      :items="table3.items"
      :filter="table3.filters[table3.activeFilter]")
    template(#pug).
      .w-flex.wrap.mb3
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
        :filter="table.filters[table.activeFilter]")
    template(#html).
      &lt;div class="w-flex wrap mb3"&gt;
        &lt;w-button
          class="mr2 mb1"
          @click="table.activeFilter = 0"
          round
          :outline="table.activeFilter !== 0"&gt;
          No filter
        &lt;/w-button&gt;

        &lt;w-button
          class="mr2 mb1"
          @click="table.activeFilter = 1"
          round
          :outline="table.activeFilter !== 1"&gt;
          Last name starting with 'M'
        &lt;/w-button&gt;

        &lt;w-button
          class="mr2 mb1"
          @click="table.activeFilter = 2"
          round
          :outline="table.activeFilter !== 2"&gt;
          ID >= 10
        &lt;/w-button&gt;
      &lt;/div&gt;

      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :filter="table.filters[table.activeFilter]"&gt;
      &lt;/w-table&gt;
    template(#js).
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

  title-link(h3) Global filter
  p.
    You could also apply a filter globally, which looks into all the columns at once.#[br]
    Here is one cool way to do it.
  example
    w-input.mb3(
      v-model="table4.keyword"
      placeholder="Search anything..."
      inner-icon-left="wi-search")
    w-table(
      :headers="table4.headers"
      :items="table4.items"
      :filter="table4.keywordFilter(table4.keyword)")
    template(#pug).
      w-input.mb3(
        v-model="table.keyword"
        placeholder="Search anything..."
        inner-icon-left="wi-search")
      w-table(
        :headers="table.headers"
        :items="table.items"
        :filter="table.keywordFilter&amp;#40;table.keyword&amp;#41;")
    template(#html).
      &lt;w-input
        v-model="table.keyword"
        placeholder="Search anything..."
        inner-icon-left="wi-search"
        class="mb3"&gt;
      &lt;/w-input&gt;

      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :filter="table.keywordFilter(table.keyword)"&gt;
      &lt;/w-table&gt;
    template(#js).
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
            const allTheColumns = `${item.id} ${item.firstName} ${item.lastName}`

            // Lookup the keyword variable in the string with case-insensitive flag.
            return new RegExp(keyword, 'i').test(allTheColumns)
          }
        }
      })
  alert(tip)
    strong.
      If you don't need the RegExp power, you can simply return
      #[code allTheColumns.toLowerCase().includes(keyword)] instead.

    | #[br]#[br]But the real power of using a regular expression
    | #[w-icon.red.mr1(size="0.9em") mdi mdi-heart] in this example's match, is that the user
    | can benefit from the Regexp engine and use interpreted characters like #[code |] etc.#[br]
    | You could also match only the full words by replacing #[code new RegExp(keyword, 'i')] with
    | #[code new RegExp(`\\b${keyword}\\b`, 'i')] (it would return a result when typing #[code floretta]
    | but not #[code florett] for instance).

  title-link(h2) Loading state
  p.
    When the table content is not ready straight away, you can use the #[code loading] prop to display
    a progress bar while loading.
  w-button.mb2(:disabled="table1.loading" @click="reload")
    w-icon.mr1 mdi mdi-sync
    | reload

  title-link(h3) Simple table - no set height
  example
    w-table(
      :headers="table1.headers"
      :items="table1.items"
      :loading="table1.loading")
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        :loading="loading")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :loading="loading"&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        },
        loading: true // Set this to false when the data is loaded.
      }),

      mounted () {
        setTimeout(() => {this.loading = false}, 3000)
      }

  title-link(h3 slug="loading-with-fixed-header") Table with fixed header &amp; set height of 200px
  example
    w-table(
      :headers="table1.headers"
      :items="table3.items"
      fixed-headers
      :loading="table1.loading"
      style="height: 200px")
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        fixed-headers
        :loading="loading"
        style="height: 200px")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        fixed-headers
        :loading="loading"
        style="height: 200px"&gt;
      &lt;/w-table&gt;
    template(#js).
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

  title-link(h2 slug="pagination")
    | Pagination
    w-tag.ml2.text-bold(round color="warning" outline sm) COMING SOON
  example
    | Coming soon.
    //- w-table(
      :headers="table1.headers"
      :items="table1.items"
      :pagination="table1.pagination")
    template(#pug).
    template(#js).
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
          ]
        }
      })

  title-link(h2) Rows selection
  p Click a row to see it highlighted and get information about the selected item.
  p.
    By default, the selection will use the #[code primary] color and apply an opacity of #[code 0.2].
    If this is not what you want, you can override it via CSS (#[code .w-table__row--selected td:before]).

  title-link(h3 slug="example--selectable-rows") The #[span.code selectable-rows] prop
  p.
    You can enable the rows selection by adding the #[code selectable-rows] prop, or disable it by
    removing it (by default) - and this is the same as passing a boolean - but you can also set it to #[code 1]
    to allow a single selection only.

  title-link(h3 slug="example--force-selection") The #[span.code force-selection] prop
  p.
    Eventually, you can use the #[code force-selection] prop to prevent unselecting a row when only
    one remain selected.

  title-link(h3 slug="example--row-select") The #[span.code @row-select] event
  p.
    This event is fired each time a row is selected #[strong or unselected] (so you don't need to listen
    to 2 different events). #[br]
    As shown in this example (under the table), the #[span.code @row-select] event will give you access to useful
    information such as:
  ul
    li #[code item]: the clicked row object
    li #[code selected]: a boolean telling if the row is being selected or unselected
    li #[code selectedRows]: an array of all the selected rows objects

  example
    w-flex.mb4(wrap)
      w-radios.mr6(v-model="table1.selectableRows" :items="selectableRowsOptions")
      w-button.my3(
        @click="table1.forceSelection = !table1.forceSelection"
        round
        :outline="!table1.forceSelection")
        w-icon.mr2(v-if="table1.forceSelection") wi-check
        | Force selection

    w-table(
      :headers="table1.headers"
      :items="table1.items"
      :selectable-rows="table1.selectableRows"
      :force-selection="table1.forceSelection"
      @row-select="selectionInfo = $event")

    .mt4.title4 Selection info:
    pre {{ selectionInfo }}
    template(#pug).
      w-flex.mb4(wrap)
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
      pre {{ "\{\{ selectionInfo \}\}" }}
    template(#html).
      &lt;w-flex wrap class="mb4"&gt;
        &lt;w-radios
          v-model="table.selectableRows"
          :items="selectableRowsOptions"
          class="mr6"&gt;
        &lt;/w-radios&gt;
        &lt;w-button
          @click="table.forceSelection = !table.forceSelection"
          round
          :outline="!table.forceSelection"
          class="my3"&gt;
          &lt;w-icon v-if="table.forceSelection" class="mr2"&gt;
            wi-check
          &lt;/w-icon&gt;
          Force selection
        &lt;/w-button&gt;
      &lt;/w-flex&gt;

      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :selectable-rows="table.selectableRows"
        :force-selection="table.forceSelection"
        @row-select="selectionInfo = $event"&gt;
      &lt;/w-table&gt;

      &lt;div class="title4 mt4"&gt;Selection info:&lt;/div&gt;
      &lt;pre&gt;{{ "\{\{ selectionInfo \}\}" }}&lt;/pre&gt;
    template(#js).
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
          selectableRows: true,
          forceSelection: false
        },
        selectableRowsOptions: [
          { label: '&lt;code class="mr2"&gt;:selectable-row="false"&lt;/code&gt; (default)', value: false },
          { label: '&lt;code&gt;selectable-row&lt;/code&gt;', value: true },
          { label: '&lt;code&gt;:selectable-row="1"&lt;/code&gt;', value: 1 }
        ],
        selectionInfo: {}
      })

  title-link(h3) Updating the selected rows programmatically
  p.
    Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
    with the selected rows after user interaction.
  alert(tip)
    ul
      li #[strong In Vue 2], you can do 2-way binding on any variable other than the #[strong.code v-model] using the #[code .sync] modifier.
      li #[strong In Vue 3], multiple #[strong.code v-model] are supported in order to achieve 2-way binding. So you don't need #[code .sync].

  example
    w-table(
      :headers="table1.headers"
      :items="table1.items"
      selectable-rows
      :selected-rows.sync="table1.selectedRows")
    .mt4
      | Selected rows:
      code.ml2 {{ table1.selectedRows }}
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        selectable-rows
        :selected-rows.sync="table.selectedRows")
      .mt4
        | Selected rows:
        code.ml2 {{ '\{\{ table.selectedRows \}\}' }}
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        selectable-rows
        :selected-rows.sync="table.selectedRows"&gt;
      &lt;/w-table&gt;

      &lt;div class="mt4"&gt;
        Selected rows:
        &lt;code class="ml2"&gt;{{ '\{\{ table.selectedRows \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
    template(#js).
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
          selectedRows: [2, 4]
        }
      })
  alert(info).
    In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.#[br]
    By default the expanded rows array will use an #[code id] key, if present in the item object,
    or will assign an internal unique ID otherwise.
    If you want, you can override the default unique ID key (when internally needed) with
    the #[code uid-key] prop, which is set to "id" by default.

  title-link(h2 slug="example--expandable-rows") Expandable rows
  alert(warning) This feature is in progress.
  example
    w-table(:headers="table5.headers" :items="table5.items" expandable-rows)
      template(#row-expansion="{ item }")
        w-icon.mr2(:color="['blue', 'pink'][item.gender]")
          | mdi {{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}
        | {{ item.firstName }} weighs #[strong {{ item.weight }}kg] and is #[strong {{ item.height }}m] tall.
    template(#pug).
      w-table(:headers="table.headers" :items="table.items" expandable-rows)
        template(#row-expansion="{ item }")
          w-icon.mr2(:color="['blue', 'pink'][item.gender]")
            | mdi {{ "\{\{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] \}\}" }}
          | {{ "\{\{ item.firstName \}\}" }} weighs #[strong {{ "\{\{ item.weight \}\}" }}kg] and is #[strong {{ "\{\{ item.height \}\}" }}m] tall.
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        expandable-rows&gt;
        &lt;template #row-expansion="{ item }"&gt;
          &lt;w-icon class="mr2" :color="['blue', 'pink'][item.gender]"&gt;
            mdi {{ "\{\{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] \}\}" }}
          &lt;/w-icon&gt;
          {{ '\{\{ item.firstName \}\}' }} weighs #[strong {{ '\{\{ item.weight \}\}' }}kg] and is #[strong {{ '\{\{ item.height \}\}' }}m] tall.
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  title-link(h2 slug="slots") Headers &amp; cells customization via slots
  p You can customize the headers labels and/or each row cells.

  title-link(h3) Headers
  p In this example, only the headers are customized via the #[code header-label] slot.
  example
    w-table(:headers="table1.headers" :items="table1.items")
      template(#header-label="{ label, index }") {{ index }}: {{ label }} 👌
    template(#pug).
      w-table(:headers="table.headers" :items="table.items")
        template(#header-label="{ label, index }") {{ '\{\{ index \}\}: \{\{ label \}\}' }} 👌
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"&gt;
        &lt;template #header-label="{ label, index }"&gt;
          {{ '\{\{ index \}\}: \{\{ label \}\}' }} 👌
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  title-link(h3 slug="item-cells") Item cells (inside &lt;td&gt; element)
  p.
    In this example, only the items cells are customized via the #[code item] slot
    (and the headers are hidden).
  example
    w-table(:headers="table1.headers" no-headers :items="table1.items")
      template(#item-cell="{ item, label, header, index }")
        small(v-if="header.key === 'id'") \#{{ index }}
        template(v-else)
          small.grey.mr2 {{ header.label }}:
          span {{ label }}
    template(#pug).
      w-table(:headers="table.headers" no-headers :items="table.items")
        template(#item-cell="{ item, label, header, index }")
          small.grey.mr2 {{ '\{\{ header.label \}\}' }}:
          span {{ '\{\{ label \}\}' }}
    template(#html).
      &lt;w-table
        :headers="table.headers"
        no-headers
        :items="table.items"&gt;
        &lt;template #item-cell="{ item, label, header, index }"&gt;
          &lt;small class="grey mr2"&gt;{{ '\{\{ header.label \}\}' }}:&lt;/small&gt;
          &lt;span&gt;{{ '\{\{ label \}\}' }}&lt;/span&gt;
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  title-link(h3 slug="override-1-particular-item-cell")
    | override 1 particular item cell or column cells (inside &lt;td&gt; element)
  p.
    If you only need to override 1 particular column you can do it via the #[code item-cell.xxx] slot,
    where #[code xxx] is a key defined in the headers.
    In this example: #[code id], #[code firstName], #[code lastName].#[br]#[br]

    If it's more convenient, you can also override a particular cell by its index like #[code item-cell.i],
    where #[code i] is a an integer starting at 1.
  example
    w-table(:headers="table1.headers" :items="table1.items" no-headers)
      template(#item-cell.id="{ item, label, header, index }")
        div.px2.text-center.green-light5--bg.text-bold {{ label }}
    template(#pug).
      w-table(:headers="table.headers" :items="table.items" no-headers)
        template(#item-cell.id="{ item, label, header, index }")
          div.px2.text-center.green-light5--bg.text-bold {{ '\{\{ label \}\}' }}
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        no-headers&gt;
        &lt;template #item-cell.id="{ item, label, header, index }"&gt;
          &lt;div class="px2 text-center green-light5--bg text-bold"&gt;
            {{ '\{\{ label \}\}' }}
          &lt;/div&gt;
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  title-link(h2 slug="full-custom-rows") Full custom row (&lt;tr&gt; element itself)
  p.
    In this example, the full &lt;tr&gt; DOM element is customized, so you can add your own classes
    and full layout.#[br]
    As you notice, the #[code item] slot gives you full flexibility, but the drawback is that's more
    code to write.
  example
    w-table(:headers="table1.headers" :items="table1.items" selectable-rows)
      template(#item="{ item, index, select, classes }")
        tr(:class="classes" @click="select")
          td(
            v-for="(header, i) in table1.headers"
            :key="i"
            :class="`pa4 text-${header.align || 'left'}`")
            | {{ item[header.key] || '' }}
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        selectable-rows)
        template(#item="{ item, index, select, classes }")
          tr(:class="classes" @click="select")
            td(
              v-for="(header, i) in table.headers"
              :key="i"
              :class="`pa4 text-${header.align || 'left'}`")
              | {{ "\{\{ item[header.key] || '' \}\}" }}
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        selectable-rows&gt;
        &lt;template #item="{ item, index, select, classes }"&gt;
          &lt;tr :class="classes" @click="select"&gt;
            &lt;td
              v-for="(header, i) in table.headers"
              :key="i"
              :class="`pa4 text-${header.align || 'left'}`"&gt;
              {{ "\{\{ item[header.key] || '' \}\}" }}
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  title-link(h3 slug="colspan-on-td") #[span.code colspan] on &lt;td&gt;
  p.
    This example is showcasing another useful case: handling a colspan attribute.#[br]
    All the cells of all the rows are #[code colspan]'d to one, and a custom row layout is applied.
  example
    w-table(:headers="table1.headers" :items="table1.items" no-headers selectable-rows)
      template(#item="{ item, index, select, classes }")
        tr(
          :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
          @click="select")
          td.pa2(:colspan="table1.headers.length")
            .title3 Row \#{{ index }}
            ul
              li(v-for="(header, i) in table1.headers" :key="i")
                strong.mr2 {{ header.label }}:
                | {{ item[header.key] || '' }}
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        no-headers
        selectable-rows)
        template(#item="{ item, index, select, classes }")
          tr(
            :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
            @click="select")
            td.pa2(:colspan="table.headers.length")
              .title3 Row \#{{ '\{\{ index \}\}' }}
              ul
                li(v-for="(header, i) in table.headers" :key="i")
                  strong.mr2 {{ '\{\{ header.label \}\}' }}:
                  | {{ "\{\{ item[header.key] || '' \}\}" }}
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        no-headers
        selectable-rows&gt;
        &lt;template #item="{ item, index, select, classes }"&gt;
          &lt;tr
            :class="{
              ...classes,
              'indigo-light5--bg': index % 2,
              'blue-light5--bg': !(index % 2)
            }"
            @click="select"&gt;
            &lt;td :class="pa2" :colspan="table.headers.length"&gt;
              &lt;div class="title3"&gt;
                Row \#{{ '\{\{ index \}\}' }}
              &lt;/div&gt;
              &lt;ul&gt;
                &lt;li v-for="(header, i) in table.headers" :key="i"&gt;
                  &lt;strong class="mr2"&gt;
                    {{ '\{\{ header.label \}\}' }}:
                  &lt;/strong&gt;
                  {{ "\{\{ item[header.key] || '' \}\}" }}
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/template&gt;
      &lt;/w-table&gt;
    template(#js).
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
          ]
        }
      })

  //- title-link(h2) Editable tables
  //- example

  title-link(h2) Responsiveness &amp; mobile layout
  p.
    In addition to the full responsiveness, the #[code w-table] can be presented in a mobile friendly layout,
    if the data it contains would not fit on mobile.#[br]
    You can decide to trigger the mobile layout or not on each table, individually, via the #[code mobile-breakpoint]
    parameter.#[br]
    It can be very useful when multiple tables of data are presented, with more or less content, which
    should be displayed differently.#[br]#[br]
    For this example, resize your browser to 700px or less to trigger the mobile layout.

  example
    w-table(:headers="table2.headers" :items="table2.items" :mobile-breakpoint="700")
    template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        :mobile-breakpoint="700")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :mobile-breakpoint="700"&gt;
      &lt;/w-table&gt;
    template(#js).
      data: () => ({
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

  alert(tip)
    p.
      To stay lean and efficient, the minimum JavaScript behavior is added to the #[code w-table]
      component.#[br]
      One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).#[br]
      You can override it to set the width you want via:

    ssh-pre.mt5.mb0(language="css" label="CSS").
      .w-table--mobile .w-table__cell:before {width: 8em;}
</template>

<script>
const allItems = [
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

export default {
  data: () => ({
    table1: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' }
      ],
      items: allItems.slice(0, 5),
      sort: '+firstName',
      loading: true,
      selectableRows: true,
      selectedRows: [2, 4],
      forceSelection: false
    },
    table2: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName', align: 'center' },
        { label: 'Last name', key: 'lastName', align: 'right' }
      ],
      items: allItems.slice(0, 5)
    },
    table3: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' }
      ],
      items: allItems,
      filters: [
        null,
        item => item.lastName[0] === 'M',
        item => item.id >= 10
      ],
      activeFilter: 0,
      fixedFooter: false
    },
    table4: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' }
      ],
      items: allItems,
      keyword: '',
      keywordFilter: keyword => item => {
        const allTheColumns = `${item.id} ${item.firstName} ${item.lastName}`
        return new RegExp(keyword, 'i').test(allTheColumns)
      }
    },
    table5: {
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
    },
    table6: {
      headers: [
        { label: 'ID', key: 'id', hidden: false },
        { label: 'First name', key: 'firstName', hidden: false },
        { label: 'Last name', key: 'lastName', hidden: false }
      ],
      items: allItems.slice(0, 5)
    },
    table7: {
      headers: [
        { label: 'ID', key: 'id', width: '50' },
        { label: 'Content', key: 'content', width: '70%' },
        { label: 'First name', key: 'firstName' }
      ],
      items: [
        { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
        { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
        { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' }
      ]
    },
    table8: {
      headers: [
        { label: 'ID', key: 'id', width: '50' },
        { label: 'Content', key: 'content', width: '70%' },
        { label: 'First name', key: 'firstName' }
      ],
      items: [
        { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
        { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
        { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' }
      ]
    },
    table9: {
      stickyColumn: 1,
      fixedHeaders: false,
      stickyColumnOptions: [
        { value: 1, label: '#1' },
        { value: 2, label: '#2' },
        { value: 24, label: '#2 & #4' },
        { value: 0, label: 'None' }
      ],
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
    },
    selectableRowsOptions: [
      { label: '<code class="mr2">:selectable-row="false"</code> (default)', value: false },
      { label: '<code>selectable-row</code>', value: true },
      { label: '<code>:selectable-row="1"</code>', value: 1 }
    ],
    selectionInfo: {}
  }),

  methods: {
    reload () {
      this.table1.loading = true
      setTimeout(() => (this.table1.loading = false), 2000)
    },

    hideColumn (columnIndex) {
      this.table6.headers[columnIndex].hidden = !this.table6.headers[columnIndex].hidden
    },

    onColumnResize ({ index, widths }) {
      widths.forEach((width, i) => (this.table8.headers[i].width = width))

      localStorage.tableWidths = widths
    },

    addRow () {
      this.table3.items.push({ id: this.table3.items.length + 1, firstName: 'John', lastName: 'Doe' })
      this.$nextTick(() => {
        this.$refs.table.$el.querySelector('tbody tr:last-child').scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      })
    },

    toggleStickyColumn () {
      this.table9.headers.forEach(header => header.sticky = false)

      switch (this.table9.stickyColumn) {
        case 1: return this.table9.headers[0].sticky = true
        case 2: return this.table9.headers[1].sticky = true
        case 24:
          this.table9.headers[1].sticky = true
          return this.table9.headers[3].sticky = true
      }
    }
  },

  mounted () {
    this.reload()

    localStorage.tableWidths?.split(',').forEach((width, i) => (this.table8.headers[i].width = width))
  }
}
</script>
