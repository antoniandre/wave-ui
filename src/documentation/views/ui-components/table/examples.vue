<template lang="pug">
div
  title-link(h2) Default
  example
    w-table(:headers="table1.headers" :items="table1.items")
    template(#pug).
      w-table(:headers="table.headers" :items="table.items")
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
  p When there is no data, a default text will be diplayed. You can override it via the #[code no-data] slot.
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

  title-link(h2) No headers
  p.
    Even with the #[code no-headers] option, the #[code headers] are still required for various
    reasons, like getting the number of columns and sorting/filtering keys.
  example
    w-table(:headers="table1.headers" :items="table1.items" no-headers)
    template(#pug).
      w-table(:items="table.items" :headers="table.headers" no-headers)
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

  title-link(h2) Fixed headers
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

  title-link(h2) Initial Sorting
  p.
    To make the sorting API very easy to use and remember (and avoid complex array or object structures),
    the #[strong.code w-table]'s sorting is defined with a header key string preceded with a #[code +] for ASC,
    or a #[code -] for DESC. For instance, in this example: #[code '+firstName'].
  example
    w-table(:headers="table1.headers" :items="table1.items" :sort.sync="table1.sort")
    template(#pug).
      w-table(:headers="table.headers" :items="table.items" :sort.sync="table.sort")
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

  title-link(h2) Filter
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
        :loading="table.loading")
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
          loading: true // Set this to false when the data is loaded.
        }
      })

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
        :loading="table.loading"
        style="height: 200px")
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
          loading: true // Set this to false when the data is loaded.
        }
      })

  title-link(h2) Pagination
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

  //- title-link(h2) Expandable rows
  //- example

  //- title-link(h2) Change layout on mobile
  //- example

  title-link(h2 slug="slots") Headers &amp; Cells customization via slots
  example
    p Coming soon

  //- title-link(h2) Rows selection
  //- example

  //- title-link(h2) Editable tables
  //- example

  title-link(h2) Responsiveness &amp; mobile layout
  p.
    In addition to the full responsiveness, the #[code w-table] can be presented in a mobile friendly layout,
    if the data it contains would not fit on mobile.#[br]
    You can decide to trigger the mobile layout on each table individually via the #[code mobile-breakpoint]
    parameter.#[br]
    It can be very useful when multiple tables of data are presented, with more or less content, which
    should be displayed differently.#[br]#[br]
    For this example, resize your browser to 700px or less to trigger the mobile layout.

  example
    w-table(:headers="table2.headers" :items="table2.items" :mobile-breakpoint="700")
    template(#pug).
      w-table(:headers="table.headers" :items="table.items" :mobile-breakpoint="700")
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
      loading: true
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
      activeFilter: 0
    }
  }),

  methods: {
    reload () {
      this.table1.loading = true
      setTimeout(() => (this.table1.loading = false), 2000)
    }
  },

  mounted () {
    this.reload()
  }
}
</script>
