<template lang="pug">
div
  title-link(h2) Default
  example
    w-table(:headers="table1.headers" :items="table1.items")
    //- template(#pug).
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
  p When there is no data, a default text will be diplayed. You can override it via the #[code no-data] slot.
  example
    w-table(:headers="table1.headers" :items="[]")
    br
    w-table(:headers="table1.headers" :items="[]")
      template(#no-data) 👌 There is no data! 👌
    //- template(#pug).
      w-table(:headers="table.headers" :items="[]")
      br
      w-table(:headers="table.headers" :items="[]")
        template(#no-data="") 👌 There is no data! 👌
    template(#html).
      &lt;w-table :headers="table.headers" :items="[]"&gt;&lt;/w-table&gt;

      &lt;br /&gt;
      &lt;w-table :headers="table.headers" :items="[]"&gt;
        &lt;template #no-data=""&gt;
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
    //- template(#pug).
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

  title-link(h2) No headers
  p.
    Even with the #[code no-headers] option, the #[code headers] are still required for various
    reasons, like getting the number of columns and sorting/filtering keys.
  example
    w-table(:headers="table1.headers" :items="table1.items" no-headers)
    //- template(#pug).
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

  title-link(h2) Fixed headers
  example
    w-table(
      :headers="table3.headers"
      :items="table3.items"
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

  title-link(h2) Initial Sorting
  p.
    To make the sorting API very easy to use and remember (and avoid complex array or object structures),
    the #[strong.code w-table]'s sorting is defined with a header key string preceded with a #[code +] for ASC,
    or a #[code -] for DESC. For instance, in this example: #[code '+firstName'].
  example
    w-table(:headers="table1.headers" :items="table1.items" :sort.sync="table1.sort")
    //- template(#pug).
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
    //- template(#pug).
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
    //- template(#pug).
      w-input.mb3(
        v-model="table.keyword"
        placeholder="Search anything..."
        inner-icon-left="wi-search")
      w-table(
        :headers="table.headers"
        :items="table.items"
        :filter="table.keywordFilter(table.keyword)")
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
            // Concatenate all the columns into a single string for a more performant lookup.
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
    //- template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        :loading="table.loading")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        :loading="table.loading"&gt;
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
    //- template(#pug).
      w-table(
        :headers="table.headers"
        :items="table.items"
        fixed-headers
        :loading="table.loading"
        style="height: 200px")
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        fixed-headers
        :loading="table.loading"
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

  title-link(h2) Rows selection
  p Click a row to see it highlighted and get information about the selected item.
  p.
    By default, the selection will use the #[code primary] color and apply an opacity of #[code 0.2].
    If this is not what you want, you can override it via CSS (#[code .w-table__row--selected td:before]).

  title-link(h3 slug="selectable-rows") The #[span.code selectable-rows] prop
  p.
    You can enable the rows selection by adding the #[code selectable-rows] prop, or disable it by
    removing it (by default) - and this is the same as passing a boolean - but you can also set it to #[code 1]
    to allow a single selection only.

  title-link(h3 slug="force-selection") The #[span.code force-selection] prop
  p.
    Eventually, you can use the #[code force-selection] prop to prevent unselecting a row when only
    one remain selected.

  title-link(h3 slug="row-select") The #[span.code @row-select] event
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
    //- template(#pug).
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
    //- template(#pug).
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
    In order to keep the same row selected after sorting or filtering, rows have unique identifiers.#[br]
    By default the expanded rows array will use an #[code id] key, if present in the item object,
    or will assign an internal unique ID otherwise.
    If you want you can override the default unique ID (when internally needed) with
    the #[code uid-key] prop, which is set to "id" by default.

  title-link(h2) Expandable rows
  alert(warning) This feature is in progress.
  example
    w-table(:headers="table1.headers" :items="table5.items" expandable-rows)
      template(#expanded-row="{ item }")
        w-icon.mr2(:color="['blue', 'pink'][item.gender]") mdi {{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}
        | {{ item.firstName }} weighs #[strong {{ item.weight }}kg] and is #[strong {{ item.height }}m] tall.
    //- template(#pug).
      w-table(:headers="table.headers" :items="table.items" expandable-rows)
        template(#expanded-row="{ item }")
          w-icon.mr2(:color="['blue', 'pink'][item.gender]") mdi {{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}
          | {{ item.firstName }} weighs #[strong {{ item.weight }}kg] and is #[strong {{ item.height }}m] tall.
    template(#html).
      &lt;w-table
        :headers="table.headers"
        :items="table.items"
        expandable-rows&gt;
        &lt;template #expanded-row="{ item }"&gt;
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
    //- template(#pug).
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
    //- template(#pug).
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
    //- template(#pug).
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

  title-link(h2) Fully custom row (&lt;tr&gt; element itself)
  p.
    In this example, the full &lt;tr&gt; DOM element is customized, so you can add your own classes and
    full layout.#[br]
    As you notice, the #[code item] slot gives you full flexibility, but the drawback is that's also
    harder to write (more verbose).
  example
    w-table(:headers="table1.headers" :items="table1.items" selectable-rows)
      template(#item="{ item, index, select, classes }")
        tr(:class="classes" @click="select")
          td(
            v-for="(header, i) in table1.headers"
            :key="i"
            :class="`pa4 text-${header.align || 'left'}`")
            | {{ item[header.key] || '' }}
    //- template(#pug).
      w-table(:headers="table.headers" :items="table.items" selectable-rows)
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
    //- template(#pug).
      w-table(:headers="table.headers" :items="table.items" no-headers selectable-rows)
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
    //- template(#pug).
      w-table(:headers="table.headers" :items="table.items" :mobile-breakpoint="700")
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
      To stay lean and performant, the minimum JavaScript behavior is added to the #[code w-table]
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
      activeFilter: 0
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
    }
  },

  mounted () {
    this.reload()
  }
}
</script>
