<template lang="pug">
.autocomplete(:class="classes" @click="onClick")
  template(v-if="selection.length")
    .autocomplete__selection(v-for="(item, i) in selection")
      span(v-html="item[itemLabelKey]")
      w-button(@click.stop="unselectItem(i)" icon="i-cross" xs text color="currentColor")
  .autocomplete__placeholder(v-if="!selection.length && !keywords && placeholder" v-html="placeholder")
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
        span(v-html="item[itemLabelKey]")
      li.autocomplete__no-match(
        v-if="!filteredItems.length"
        :class="{ 'autocomplete__no-match--default': !$slots.noMatch }")
        slot(name="no-match")
          .caption(v-html="noMatch ?? 'No match.'")
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    value: { type: [String, Number, Array] }, // String or Number if single selections, Array if multiple.
    placeholder: { type: String },
    openOnKeydown: { type: Boolean }, // By default the menu is always open for selection.
    multiple: { type: Boolean },
    // When multiple is on, prevents duplicate items selections by default, unless this is set to true.
    allowDuplicates: { type: Boolean },
    noMatch: { type: String },
    // Contains the unique selection value for each item.
    // Can be a numeric ID, a slug, etc. (outside of Wave UI)
    itemValueKey: { type: String, default: 'value' },
    // Contains the string to display for each item.
    itemLabelKey: { type: String, default: 'label' },
    // Contains the string to search keywords into for each item.
    // This can for instance be an aggregation of multiple fields (outside of Wave UI).
    itemSearchableKey: { type: String, default: 'searchable' }
  },

  data: () => ({
    keywords: '',
    selection: [],
    menuOpen: false,
    highlightedItem: null
  }),

  computed: {
    // Keep the autocomplete matching as fast as possible by caching optimized search strings.
    normalizedKeywords () {
      return this.normalize(this.keywords)
    },

    // Keep the autocomplete matching as fast as possible by caching optimized search strings.
    // An array of optimized strings.
    normalizedSelection () {
      return this.selection.map(item => this.normalize(item?.searchable))
    },

    // Keep the autocomplete matching as fast as possible by caching optimized search strings.
    optimizedItemsForSearch () {
      return this.items.map((item, i) => ({
        ...item,
        uid: i,
        searchable: this.normalize(item[this.itemSearchableKey] || '')
      }))
    },

    filteredItems () {
      let items = this.optimizedItemsForSearch // Array of objects.
      const selection = this.normalizedSelection.join(',') // Optimized string of coma separated words.
      const isItemNotSelected = item => !selection.includes(item.searchable)

      if (this.keywords) {
        items = items.filter(item => {
          if (!item.searchable.includes(this.normalizedKeywords)) return false
          else if (this.multiple && !this.allowDuplicates) return isItemNotSelected(item)
          else return true
        })
      }

      else if (this.multiple && !this.allowDuplicates) items = items.filter(isItemNotSelected)

      return items
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
    // Replace all the accents and non-latin characters with equivalent letters. E.g. é -> e.
    normalize (string) {
      return string.toLowerCase().normalize('NFKD').replace(/\p{Diacritic}/gu, '').replace(/œ/g, 'oe')
    },

    // Selection can be made from click or enter key.
    selectItem (item) {
      if (!this.multiple) this.selection = []
      this.selection.push(item)
      this.highlightedItem = item.uid
      this.keywords = ''
      this.$emit('input', this.multiple ? this.selection.map(item => item[this.itemValueKey]) : item[this.itemValueKey])
      this.$refs.input.focus()
      if (!this.multiple) this.closeMenu()
    },

    unselectItem (i) {
      this.selection.splice(i ?? this.selection.length - 1, 1)
      this.highlightedItem = null
      this.$emit('input', null)
      this.$refs.input.focus()
    },

    onClick () {
      if (!this.openOnKeydown) this.openMenu()
      this.$refs.input.focus()
    },

    onFocus () {
      if (!this.openOnKeydown) this.openMenu()
    },

    onKeydown (e) {
      const itemsCount = this.filteredItems.length
      // `e.key.length === 1`: is all the keyboard keys that generate a character.
      if (!this.openOnKeydown || ((this.keywords || e.key.length === 1) && !this.menuOpen)) this.openMenu()

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
      else if (!this.multiple && this.selection.length && (e.key.length === 1)) e.preventDefault()
    },

    // On drag & drop of a text in the input field, don't paste if single selection and already selected.
    onDrop (e) {
      if (!this.multiple && this.selection.length) e.preventDefault()
    },

    // When starting a sequence of keys that produces a character.
    onCompositionStart (e) {
      // e.preventDefault() does not work. https://stackoverflow.com/a/77556830/2012407
      if (!this.multiple && this.selection.length) e.target.setAttribute('readonly', true)
    },
    onCompositionUpdate (e) {
      if (!this.multiple && this.selection.length) setTimeout(() => e.target.removeAttribute('readonly'), 200)
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
      if (!this.$el.contains(e.target) && !this.$el.isSameNode(e.target)) this.closeMenu()
    }
  },

  created () {
    if (this.value) {
      const arrayOfValues = Array.isArray(this.value) ? this.value : [this.value]
      arrayOfValues.forEach(value => {
        this.selection.push(this.optimizedItemsForSearch.find(item => item[this.itemValueKey] === +value))
      })
    }
  },

  beforeUnmount () {
    document.removeEventListener('click', this.onDocumentClick)
  }
}
</script>

<style lang="scss">
.autocomplete {
  display: flex;
  flex-wrap: wrap;
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
    min-width: 0;
    flex: 1 1 0;
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

      &:hover {background-color: rgba($primary, 0.1);}

      &.highlighted {
        background-color: rgba($primary, 0.15);
        border-left-color: rgba($primary, 0.75);
      }
    }
  }
}

li.autocomplete__no-match--default:hover {background-color: transparent;}
</style>
