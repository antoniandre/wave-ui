<template lang="pug">
div
  title-link(h2) Default
  .title3 With data
  example
    w-table(:items="table1.items" :headers="table1.headers")
    template(#pug).

  .title3 Without data
  example
    w-table(:items="[]" :headers="table1.headers")
    template(#pug).

  title-link(h2) No headers
  example
    w-table(:items="[]" :headers="table1.headers" no-headers)
    template(#pug).
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
      ]
    }
  })
}
</script>
