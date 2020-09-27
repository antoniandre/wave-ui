<template lang="pug">
.api
  title-link.title2.api__title(h3) {{ title }}
  ul
    li.api__item(v-for="item in sortedItems" :key="item.label")
      title-link(h4 :slug="item.label") {{ item.label }}
      template(v-if="title === 'Props'")
        span.types.teal="[{{ item.type.join(', ') }}]"
        | ,
        w-tag.text-upper.ml2(v-if="item.required" sm outline color="red") Required
        span.grey.ml2(v-else)
          | Default:
          strong.default-value.code.deep-orange-light1.ml2 {{ item.default }}
      p(v-html="item.description")
</template>

<script>
export default {
  props: {
    items: { type: Object, required: true }, // The raw $props object from each component.
    descriptions: { type: Object, default: () => ({}) },
    title: { type: String }
  },

  computed: {
    sortedItems () {
      const keys = Object.keys(this.items).sort()

      return keys.map(key => {
        const item = { ...this.items[key] } // Keep original intact.
        if (this.title === 'Props') {
          item.type = Array.isArray(item.type) ? item.type.map(f => f.name) : [item.type.name]
          if (item.type[0] === 'Number') item.default = item.default === undefined ? '0' : item.default
          else if (item.type[0] === 'String') item.default = `'${item.default || ''}'`
          else if (item.type[0] === 'Boolean') item.default = item.default ? 'true' : 'false'
          else if (item.type[0] === 'Array') item.default = item.default === undefined ? '[]' : item.default
          else if (item.type[0] === 'Object') item.default = item.default === undefined ? '() => ({})' : item.default
          else if (item.type[0] === 'Function') item.default = item.default === undefined ? '() => {}' : item.default
        }

        return {
          label: key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase(), // Convert camelCase to kebab-case.
          ...item,
          description: item.description || this.descriptions[key] || ''
        }
      })
    }
  }
}
</script>

<style lang="scss">
.api {
  margin-top: 5em;

  ul {list-style-type: none;}

  &__item {
    margin-top: 1.4em;

    .title-link {
      font: bold 1.3rem monospace;
      color: $primary;
      display: inline-block;
      margin-right: 6px;
    }
    .types {font-size: 1.1em;}
    .default-value {font-size: 1.1em;}
    .w-tag {padding-top: 2px;}
    p {margin-top: 0.4em;}
  }
}
</style>
