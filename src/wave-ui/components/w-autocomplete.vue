<template lang="pug">
.autocomplete(:class="classes")
  .autocomplete__selection(v-if="selection" @click="$refs.input.focus()")
    span(v-html="selection.name")
    w-button(@click.stop="unselectItem" icon="i-cross" xs text color="currentColor")
  .autocomplete__placeholder(v-if="!selection && !keywords && placeholder" v-html="placeholder")
  input.autocomplete__input(
    ref="input"
    v-model="keywords"
    @focus="onFocus"
    @keydown="onKeydown"
    @drop="onDrop"
    @compositionstart="onCompositionStart"
    @compositionupdate="onCompositionUpdate"
    v-on="$listeners")
  w-transition-slide-fade(y)
    ul.autocomplete__menu(v-if="menuOpen" ref="menu")
      li(
        v-for="(item, i) in filteredItems"
        :key="i"
        @click.stop="selectItem(item)"
        :class="{ highlighted: highlightedItem === item.uid }")
        span(v-html="item.name")
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    value: { type: [String, Number] },
    placeholder: { type: String },
    openOnFocus: { type: Boolean },
    multiple: { type: Boolean }
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
      if (this.multiple) {
        // @todo.
        return null
      }
      else {
        if (!this.normalizedKeywords) return this.optimizedItemsForSearch
        return this.optimizedItemsForSearch.filter(item => {
          const containsSelection = this.selection && item.searchable.includes(this.normalizedSelection)
          const containsKeywords = this.keywords && item.searchable.includes(this.normalizedKeywords)
          return containsSelection || containsKeywords
        })
      }
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
      this.keywords = ''
      this.$emit('input', item.id)
      this.$refs.input.focus()
      this.closeMenu()
    },

    unselectItem () {
      this.selection = null
      this.highlightedItem = null
      this.$emit('input', null)
      this.$refs.input.focus()
    },

    onFocus () {
      if (this.openOnFocus) this.openMenu()
    },

    onKeydown (e) {
      const itemsCount = this.filteredItems.length
      if (!this.menuOpen) this.openMenu()

      // Delete key.
      if (e.keyCode === 8 && (!this.keywords || (!e.target.selectionStart && !e.target.selectionEnd))) {
        this.unselectItem()
      }

      // Enter key.
      else if (e.keyCode === 13) {
        e.preventDefault() // Prevent form submissions.
        if (this.highlightedItemIndex >= 0) this.selectItem(this.filteredItems[this.highlightedItemIndex])
      }

      // Up & down arrow keys.
      else if ([38, 40].includes(e.keyCode)) {
        e.preventDefault() // Prevent moving the cursor to the left of the text while selecting item.
        let index = this.highlightedItemIndex
        if (index === -1) index = e.keyCode === 38 ? itemsCount - 1 : 0
        else index = (index + (e.keyCode === 38 ? -1 : 1) + itemsCount) % itemsCount // Never out of range.

        this.highlightedItem = this.filteredItems[index]?.uid || 0

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

      // `e.key.length === 1`: allow all control keys but no character creation.
      else if (!this.multiple && this.selection && (e.key.length === 1)) e.preventDefault()
    },

    // On drag & drop of a text in the input field, don't paste if single selection and already selected.
    onDrop (e) {
      if (!this.multiple && this.selection) e.preventDefault()
    },

    onCompositionStart (e) {
      // e.preventDefault() does not work. https://stackoverflow.com/a/77556830/2012407
      if (!this.multiple && this.selection) e.target.setAttribute('readonly', true)
    },
    onCompositionUpdate (e) {
      if (!this.multiple && this.selection) setTimeout(() => e.target.removeAttribute('readonly'), 200)
    },

    openMenu () {
      if (this.menuOpen) return
      this.menuOpen = true
      document.addEventListener('click', this.onDocumentClick)
    },

    closeMenu () {
      this.menuOpen = false
      document.removeEventListener('click', this.onDocumentClick)
    },

    onDocumentClick (e) {
      if (!this.$el.contains(e.target)) this.closeMenu()
    }
  },

  created () {
    if (this.value) this.selection = this.optimizedItemsForSearch.find(item => item.id === this.value)
  },

  beforeUnmount () {
    document.removeEventListener('click', this.onDocumentClick)
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
  user-select: none;

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

    span {margin-top: -1px;line-height: 1;}
    .w-button .w-icon:before {font-size: 0.8em;line-height: 0;}
  }

  &__input {
    width: 100%;
    color: inherit;
    border: none;
    background-color: transparent;
    line-height: 18px;
  }

  &__placeholder {
    position: absolute;
    color: #ccc;
    pointer-events: none;
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
