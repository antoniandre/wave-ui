<template lang="pug">
div
  title-link(h2) Default
  .title3 With data
  example
    w-table(:items="table1.items" :headers="table1.headers")
    template(#pug).
      w-table(:items="table.items" :headers="table.headers")
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' },
          ],
          items: [
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' },
          ]
        }
      })

  .title3 Without data
  example
    w-table(:items="[]" :headers="table1.headers")
    template(#pug).
      w-table(:items="[]" :headers="table.headers")
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' },
          ]
        }
      })

  title-link(h2) No headers
  p.
    Even with the #[code no-headers] option, the #[code headers] are still required for various
    reasons, like getting the number of columns and sorting/filtering keys.
  example
    w-table(:items="table1.items" :headers="table1.headers" no-headers)
    template(#pug).
      w-table(:items="table.items" :headers="table.headers" no-headers)
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' },
          ],
          items: [
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' },
          ]
        }
      })

  title-link(h2) Fixed headers
  example
    w-table(:items="table2.items" :headers="table2.headers" fixed-headers style="height: 250px")
    template(#pug).
      w-table(:items="table.items" :headers="table.headers" fixed-headers style="height: 250px")
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' },
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
            { id: '15', firstName: 'Josie', lastName: 'Richard' },
          ]
        }
      })

  title-link(h2) Initial Sorting
  p.
    To make the sorting API very easy to use and remember (and avoid complex array or object structures),
    the #[strong.code w-table]'s sorting is defined with a header key string preceded with a #[code +] for ASC,
    or a #[code -] for DESC. For instance, in this example: #[code '+firstName'].
  example
    w-table(:items="table1.items" :headers="table1.headers" :sort.sync="table1.sort")
    template(#pug).
      w-table(:items="table.items" :headers="table.headers" :sort.sync="table.sort")
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' },
          ],
          items: [
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' },
          ],
          sort: '+firstName'
        }
      })

  title-link(h2) Filters
  example
    | Coming soon.
    //- w-table(
      :items="table.items"
      :headers="table.headers"
      :filters="() => {}")
    template(#pug).
    template(#js).
      data: () => ({
        table: {
          headers: [
            { label: 'ID', key: 'id' },
            { label: 'First name', key: 'firstName' },
            { label: 'Last name', key: 'lastName' },
          ],
          items: [
            { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
            { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
            { id: '3', firstName: 'Rory', lastName: 'Bristol' },
            { id: '4', firstName: 'Daley', lastName: 'Elliott' },
            { id: '5', firstName: 'Virgil', lastName: 'Carman' },
          ]
        }
      })
</template>

<script>
export default {
  data: () => ({
    table1: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
      ],
      items: [
        { id: '1', firstName: 'Floretta', lastName: 'Sampson' },
        { id: '2', firstName: 'Nellie', lastName: 'Lynn' },
        { id: '3', firstName: 'Rory', lastName: 'Bristol' },
        { id: '4', firstName: 'Daley', lastName: 'Elliott' },
        { id: '5', firstName: 'Virgil', lastName: 'Carman' },
      ],
      sort: '+firstName'
    },
    table2: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
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
        { id: '15', firstName: 'Josie', lastName: 'Richard' },
      ]
    }
  })
}
</script>
