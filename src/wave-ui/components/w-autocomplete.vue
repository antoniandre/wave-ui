<template lang="pug">
.autocomplete(:class="classes")
  .autocomplete__selection(v-if="selection" v-html="selection.name")
  input.autocomplete__input(
    ref="input"
    v-model="keywords"
    @keydown="onKeydown")
  w-transition-slide-fade(y)
    ul.autocomplete__menu(v-if="menuOpen" ref="menu")
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
    items: { type: Array, required: true },
    value: { type: [String, Number] }
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
      if (this.highlightedItem === null) return -1
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
      const itemsCount = this.filteredItems.length
      if (!this.menuOpen) this.openMenu()

      // Delete key.
      if (e.which === 8 && !this.keywords) this.selection = ''
      // Enter key.
      else if (e.which === 13) {
        e.preventDefault() // Prevent form submissions.
        if (this.highlightedItemIndex >= 0) this.selectItem(this.filteredItems[this.highlightedItemIndex])
      }
      // Up & down arrow keys.
      else if (e.which === 38 || e.which === 40) {
        let index = this.highlightedItemIndex
        if (index === -1) index = e.which === 38 ? itemsCount - 1 : 0
        else index = (index + (e.which === 38 ? -1 : 1) + itemsCount) % itemsCount // Never out of range.

        this.highlightedItem = this.filteredItems[index].uid

        // Scroll the container if highlighted item is not in view.
        const menuEl = this.$refs.menu
        if (menuEl) {
          const { offsetHeight: itemElHeight, offsetTop: itemElTop } = menuEl.childNodes[index] || {}
          if (menuEl.scrollTop + menuEl.offsetHeight - itemElHeight < itemElTop) {
            menuEl.scrollTop = itemElTop - menuEl.offsetHeight + itemElHeight
          }
          else if (menuEl.scrollTop > itemElTop) menuEl.scrollTop = itemElTop
        }
      }
    },

    openMenu () {
      this.menuOpen = true
      document.addEventListener('click', this.onDocumentClick)
    },

    closeMenu () {
      this.menuOpen = false
      document.removeEventListener('click', this.onDocumentClick)
    },

    onDocumentClick (e) {
      if (!this.$refs.menu.contains(e.target) && !this.$refs.input.contains(e.target)) this.closeMenu()
    }
  },

  created () {
    if (this.value) this.selection = this.optimizedItemsForSearch.find(item => item.id === this.value)
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
  padding: 2px 4px;

  &--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &__selection {
    display: flex;
    align-items: center;
    background: rgba(#000, 0.035);
    border: 1px solid rgba(#000, 0.05);
    border-radius: 4px;
    padding: 0 2px 0 4px;
    flex-shrink: 0;
  }

  &__input {
    width: 100%;
    color: inherit;
    border: none;
    background-color: transparent;
    line-height: 18px;
  }

  &__menu {
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
