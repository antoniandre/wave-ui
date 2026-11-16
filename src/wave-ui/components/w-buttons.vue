<script>
import { h, cloneVNode } from 'vue'

export default {
  name: 'w-buttons',
  inheritAttrs: false,

  props: {
    // Items-driven mode.
    items: { type: Array },
    // Active state: index (or id/value) when single, array when multiple.
    modelValue: { type: [Number, String, Array] },
    // Key used to resolve the v-model value from each item.
    // Auto-detected if omitted: 'id' > 'value' > index.
    itemValueKey: { type: String },
    multiple: { type: Boolean },
    mandatory: { type: Boolean }, // Keep at least one active at all times.
    disabled: { type: Boolean },
    // Gap between buttons. 0 (default) = stuck together.
    gap: { type: [Number, String], default: 0 },
    // Class applied to every button.
    buttonClass: { type: [String, Object, Array] },
    // Colors.
    color: { type: String },
    bgColor: { type: String },
    activeColor: { type: String },
    activeBgColor: { type: String },
    // Style variants — forwarded to buttons and also applied globally on the wrapper in stuck mode.
    dark: { type: Boolean },
    light: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    // Forwarded to every button.
    type: { type: String },
    noRipple: { type: Boolean, default: undefined },
    // Sizes (forwarded).
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    width: { type: [Number, String] },
    height: { type: [Number, String] }
  },

  emits: ['update:modelValue', 'click'],

  computed: {
    hasGap () {
      return !!~~this.gap
    },

    // Key used to build v-model values from items.
    resolvedValueKey () {
      if (this.itemValueKey) return this.itemValueKey
      if (this.items?.length && this.items.every(i => i.id !== undefined)) return 'id'
      if (this.items?.length && this.items.every(i => i.value !== undefined)) return 'value'
      return null // → 0-based index mode
    },

    // Build internal item list with _active flag and _val for v-model.
    buttonItems () {
      return (this.items || []).map((item, i) => {
        const val = this.resolvedValueKey ? item[this.resolvedValueKey] : i
        const active = this.modelValue !== undefined && this.modelValue !== null
          ? (this.multiple
            ? (Array.isArray(this.modelValue) && this.modelValue.includes(val))
            : this.modelValue === val)
          : !!item.active
        return { ...item, _index: i, _val: val, _active: active }
      })
    },

    wrapperClasses () {
      return [
        'w-buttons',
        this.hasGap && 'w-buttons--gap',
        this.round && 'w-buttons--round',
        this.shadow && !this.hasGap && 'w-buttons--shadow',
        this.tile && 'w-buttons--tile'
      ]
    },

    wrapperStyle () {
      if (!this.hasGap) return null
      return { gap: `calc(var(--w-base-increment) * ${~~this.gap})` }
    },

    // Shared size/style props forwarded to every button.
    sharedProps () {
      return {
        type: this.type,
        dark: this.dark || null,
        light: this.light || null,
        tile: this.tile || null,
        noRipple: this.noRipple,
        xs: this.xs || null,
        sm: this.sm || null,
        md: this.md || null,
        lg: this.lg || null,
        xl: this.xl || null,
        width: this.width,
        height: this.height
      }
    }
  },

  methods: {
    isActive (val) {
      if (this.modelValue === undefined || this.modelValue === null) return false
      return this.multiple
        ? (Array.isArray(this.modelValue) && this.modelValue.includes(val))
        : this.modelValue === val
    },

    btnProps (item) {
      const active = item._active
      return {
        ...this.sharedProps,
        color:    active ? (this.activeColor || item.color || this.color) : (item.color || this.color || null),
        bgColor:  active ? (this.activeBgColor || item.bgColor || null) : null,
        outline:  !active && this.outline || null,
        text:     !active && !this.outline || null,
        shadow:   this.hasGap && this.shadow || null,
        round:    this.hasGap && this.round || null,
        disabled: this.disabled || item.disabled || null,
        active,
        'aria-pressed': active ? 'true' : 'false',
        class: [this.buttonClass, item.class, { 'w-buttons__btn--active': active }],
        onClick: e => {
          if (this.disabled || item.disabled) return
          this.toggle(item._val, item._index)
          this.$emit('click', item, item._index, e)
        }
      }
    },

    toggle (val, index) {
      let next
      if (this.multiple) {
        const current = Array.isArray(this.modelValue) ? [...this.modelValue] : []
        const idx = current.indexOf(val)
        if (idx === -1) {
          next = [...current, val]
        }
        else {
          if (this.mandatory && current.length === 1) return // keep at least one
          next = current.filter(v => v !== val)
        }
      }
      else {
        if (this.modelValue === val) {
          if (this.mandatory) return // keep at least one
          next = null
        }
        else {
          next = val
        }
      }
      this.$emit('update:modelValue', next)
    },

    // Slot mode: toggle by vnode index.
    toggleSlot (i) {
      this.toggle(i, i)
    }
  },

  render () {
    const { wrapperClasses, wrapperStyle } = this

    // ── Items mode ──────────────────────────────────────────────────────────
    if (this.items) {
      const buttons = this.buttonItems.map((item, i) => {
        const props = this.btnProps(item)
        const icon = item.icon || null
        return h('w-button', { key: i, ...props, icon }, icon ? null : {
          default: () => this.$slots.default
            ? this.$slots.default({ item, index: i, active: item._active })
            : (item.label ?? '')
        })
      })
      return h('div', {
        class: wrapperClasses,
        style: wrapperStyle,
        role: 'group'
      }, buttons)
    }

    // ── Slot mode ────────────────────────────────────────────────────────────
    const slotNodes = this.$slots.default?.() ?? []
    const enhanced = slotNodes.map((vnode, i) => {
      const active = this.isActive(i)
      return cloneVNode(vnode, {
        active,
        'aria-pressed': active ? 'true' : 'false',
        disabled: this.disabled || vnode.props?.disabled || null,
        class: { 'w-buttons__btn--active': active },
        onClick: e => {
          if (this.disabled || vnode.props?.disabled) return
          this.toggleSlot(i)
          this.$emit('click', null, i, e)
        }
      })
    })

    return h('div', {
      class: wrapperClasses,
      style: wrapperStyle,
      role: 'group'
    }, enhanced)
  }
}
</script>

<style lang="scss">
.w-buttons {
  display: inline-flex;
  vertical-align: middle;

  // --- Stuck mode (default, gap = 0) ---
  &:not(.w-buttons--gap) {
    .w-button {
      border-radius: 0;
      box-shadow: none;
    }
    .w-button:not(:first-child) { margin-left: -1px; }
    .w-button:hover, .w-button:focus-visible,
    .w-button.w-buttons__btn--active { z-index: 1; }

    .w-button:first-child { border-radius: var(--w-border-radius) 0 0 var(--w-border-radius); }
    .w-button:last-child { border-radius: 0 var(--w-border-radius) var(--w-border-radius) 0; }

    // Single button in the group gets full radius.
    .w-button:only-child { border-radius: var(--w-border-radius); }

    &.w-buttons--round {
      .w-button:first-child {
        border-radius: 99em 0 0 99em;
        padding-left: calc(var(--w-base-increment) * 3);
      }
      .w-button:last-child {
        border-radius: 0 99em 99em 0;
        padding-right: calc(var(--w-base-increment) * 3);
      }
      .w-button:only-child {
        border-radius: 99em;
        padding-left: calc(var(--w-base-increment) * 3);
        padding-right: calc(var(--w-base-increment) * 3);
      }
    }
    &.w-buttons--tile .w-button { border-radius: 0; }
    &.w-buttons--shadow { box-shadow: var(--w-box-shadow); }
  }

  // --- Gap mode ---
  // Gap is applied via inline style.
  // round / shadow / tile are forwarded per-button via btnProps().
}
</style>
