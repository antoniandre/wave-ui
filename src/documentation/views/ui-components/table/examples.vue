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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' }
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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' }
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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' }
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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' },
            { id: '6', firstName: 'Baldwin', lastName: 'Morison' },
            { id: '7', firstName: 'Beckah', lastName: 'Mann' },
            { id: '8', firstName: 'Davie', lastName: 'Forester' },
            { id: '9', firstName: 'Andi', lastName: 'Montgomery' },
            { id: '10', firstName: 'Magnolia', lastName: 'Kirk' },
            { id: '11', firstName: 'Hamilton', lastName: 'Mallory' },
            { id: '12', firstName: 'Sheree', lastName: 'Castle' },
            { id: '13', firstName: 'Rebekah', lastName: 'Eason' },
            { id: '14', firstName: 'Maude', lastName: 'Hayley' },
            { id: '15', firstName: 'Josie', lastName: 'Richard' }
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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' }
          ],
          sort: '+firstName'
        }
      })

  title-link(h2) Filters
  example
    | Coming soon.
    //- w-table(
      :headers="table.headers"
      :items="table.items"
      :filters="() => {}")
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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' }
          ]
        }
      })

  title-link(h2) Pagination
  example
    | Coming soon.
    //- w-table(
      :headers="table.headers"
      :items="table.items"
      :filters="() => {}")
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
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' }
          ]
        }
      })
</template>

<script>
const allItems = [
  { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
  { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
  { id: '3', firstName: 'Rory', lastName: 'Bristol' },
  { id: '4', firstName: 'Daley', lastName: 'Elliott' },
  { id: '5', firstName: 'Virgil', lastName: 'Carman' },
  { id: '6', firstName: 'Baldwin', lastName: 'Morison' },
  { id: '7', firstName: 'Beckah', lastName: 'Mann' },
  { id: '8', firstName: 'Davie', lastName: 'Forester' },
  { id: '9', firstName: 'Andi', lastName: 'Montgomery' },
  { id: '10', firstName: 'Magnolia', lastName: 'Kirk' },
  { id: '11', firstName: 'Hamilton', lastName: 'Mallory' },
  { id: '12', firstName: 'Sheree', lastName: 'Castle' },
  { id: '13', firstName: 'Rebekah', lastName: 'Eason' },
  { id: '14', firstName: 'Maude', lastName: 'Hayley' },
  { id: '15', firstName: 'Josie', lastName: 'Richard' }
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
      sort: '+firstName'
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
      items: allItems
    }
  })
}
</script>
