<template lang="pug">
div
  title-link(h2) Default
  .title3 With data
  example
    w-table(:items="table1.items" :headers="table1.headers")
    template(#pug).
      w-table(:items="table1.items" :headers="table1.headers")
    template(#js).
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
          ]
        }
      })

  .title3 Without data
  example
    w-table(:items="[]" :headers="table1.headers")
    template(#pug).
      w-table(:items="[]" :headers="table1.headers")
    template(#js).
      data: () => ({
        table1: {
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
      w-table(:items="table1.items" :headers="table1.headers" no-headers)
    template(#js).
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
          ]
        }
      })

  title-link(h2) Initial Sorting
  example
    w-table(:items="table1.items" :headers="table1.headers" :sort.sync="table1.sort")
    template(#pug).
      w-table(:items="table1.items" :headers="table1.headers" :sort.sync="table1.sort")
    template(#js).
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
          sort: [{ firstName: 'asc' }]
        }
      })

  title-link(h2) Filters
  example
    | Coming soon.
    //- w-table(
      :items="table1.items"
      :headers="table1.headers"
      :filters="() => {}")
    template(#pug).
    template(#js).
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
      sort: [{ firstName: 'asc' }]
    }
  })
}
</script>
