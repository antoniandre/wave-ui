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
  p.
    Even with the #[code no-headers] option, the #[code headers] are still required for various
    reasons, like getting the number of columns and sorting/filtering keys.
  example
    w-table(:items="[]" :headers="table1.headers" no-headers)
    template(#pug).

  title-link(h2) Sorting
  example
    w-table(
      :items="table1.items"
      :headers="table1.headers"
      :sort="[{ firstName: 'asc' }]")
    template(#pug).

  title-link(h2) Filters
  example
    w-table(
      :items="[]"
      :headers="table1.headers"
      :filters="() => {}")
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
