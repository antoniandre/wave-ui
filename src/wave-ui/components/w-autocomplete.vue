<template lang="pug">
.autocomplete(:class="classes")
  div.selection(v-if="selection" v-html="selection.name")
  input(
    ref="input"
    v-model="keywords"
    @keydown="onKeydown")
  ul.menu(ref="menu")
    li(
      v-for="(item, i) in filteredItems"
      :key="i"
      @click="selectItem(item)"
      :class="{ 'highlighted': highlightedItem === item.uid }")
      span(v-html="item.name")
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true }
  },

  data: () => ({
    keywords: '',
    selection: '',
    menuOpen: false,
    highlightedItem: null
  }),

  computed: {
    normalizedKeywords () {
      return this.normalize(this.keywords)
    },

    normalizedSelection () {
      return this.normalize(this.selection?.searchable)
    },

    optimizedItemsForSearch () {
      return this.items.map((item, i) => ({
        ...item,
        uid: i,
        searchable: `${this.normalize(item.name || '')},${item.keywords || ''}`
      }))
    },

    filteredItems () {
      if (!this.selection && !this.normalizedKeywords) return this.optimizedItemsForSearch
      return this.optimizedItemsForSearch.filter(item => {
        const containsSelection = this.selection && item.searchable.includes(this.normalizedSelection)
        const containsKeywords = this.keywords && item.searchable.includes(this.normalizedKeywords)
        return containsSelection || containsKeywords
      })
    },

    highlightedItemIndex () {
      if (this.highlightedItem === null) return null
      return this.filteredItems.findIndex(item => item.uid === this.highlightedItem)
    },

    classes () {
      return {
        'autocomplete--open': this.menuOpen
      }
    }
  },

  methods: {
    normalize (string) {
      return string.toLowerCase().normalize('NFKD').replace(/\p{Diacritic}/gu, '').replace(/œ/g, 'oe')
    },

    // Selection can be made from click or enter key.
    selectItem (item) {
      this.selection = item
      this.highlightedItem = item.uid
      this.$refs.input.focus()
    },

    onKeydown (e) {
      const items = this.optimizedItemsForSearch
      const itemsCount = items.length
      if (!this.menuOpen) this.menuOpen = true

      if (e.which === 8 && !this.keywords) this.selection = '' // Delete key.
      else if (e.which === 13) { // Enter key.
        e.preventDefault() // Prevent form submissions.
        if (this.highlightedItemIndex !== null) this.selectItem(items[this.highlightedItemIndex])
      }
      else if (e.which === 38 || e.which === 40) { // Up & down arrow keys.
        let index = this.highlightedItemIndex
        if (index === null) index = e.which === 38 ? itemsCount - 1 : 0
        else index = (index + (e.which === 38 ? -1 : 1) + itemsCount) % itemsCount // Never out of range.

        this.highlightedItem = items[index].uid

        // Scroll the container if highlighted item is not in view.
        const menuEl = this.$refs.menu
        const highlightedItemEl = menuEl.childNodes[index]
        if (menuEl.scrollTop + menuEl.offsetHeight - highlightedItemEl.offsetHeight < highlightedItemEl.offsetTop) {
          menuEl.scrollTop = highlightedItemEl.offsetTop - menuEl.offsetHeight + highlightedItemEl.offsetHeight
        }
        else if (menuEl.scrollTop > highlightedItemEl.offsetTop) {
          menuEl.scrollTop = highlightedItemEl.offsetTop
        }
      }
    },

    closeMenu () {
    }
  }
}
</script>

<style lang="scss">
.autocomplete {
  display: flex;
  gap: 4px;
  position: relative;
  border-radius: 4px;
  border: 1px solid rgba(#000, 0.2);
  padding: 4px 4px;

  .selection {
    background: rgba(#000, 0.035);
    border: 1px solid rgba(#000, 0.05);
    border-radius: 4px;
    padding: 1px 4px;
  }
  input {
    width: 100%;
    border: none;
  }

  .menu {
    position: absolute;
    inset: 100% -1px auto;
    max-height: clamp(20px, 400px, 80vh);
    margin-top: -1px;
    margin-left: 0;
    background-color: #fff;
    border: 1px solid rgba(#000, 0.2);
    border-top: none;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    overflow: auto;
    z-index: 10;

    li {
      list-style-type: none;
      margin: 0;
      padding: 4px 8px;
      border-left: 2px solid transparent;

      &:hover {
        background-color: rgba($primary, 0.1);
      }

      &.highlighted {
        background-color: rgba($primary, 0.15);
        border-left-color: rgba($primary, 0.75);
      }
    }
  }
}
</style>
