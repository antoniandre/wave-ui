<template lang="pug">
div
  title-link(h2) Default
  p.
    By default, each item except the last one will be a link providing that a route attribute is found
    in the item (you can use the #[code item-route-key] prop to name another attribute).#[br]
    If you are using Vue Router, all the links will automatically be #[strong.code router-link]s.
  example
    w-breadcrumbs(:items="items1")
    template(#pug).

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the component texts.
    This applies to all the links only.#[br]
    You can use the #[code separator-color] prop to specifically change the color of the separators.

  example
    w-breadcrumbs(:items="items1" color="orange")
    template(#pug).

  title-link(h3) Separator color
  example
    w-breadcrumbs(:items="items1" separator-color="orange")
    template(#pug).

  title-link(h2) Custom separator icon
  example
    w-breadcrumbs(:items="items1" icon="mdi mdi-arrow-right")
    template(#pug).

  title-link(h2) Custom separator via slot
  example
    w-breadcrumbs(:items="items1")
      template(#separator) //
    template(#pug).

  title-link(h2) Link on the last item
  p.
    The last item is usually the current page, therefore it's not useful to have a link on it.#[br]
    If it makes sense in your application, you can use the #[code link-last-item] prop.
  example
    w-breadcrumbs(:items="items1" link-last-item)
    template(#pug).
</template>

<script>
export default {
  data: () => ({
    items1: [
      { label: 'Sitemap', route: '/sitemap' },
      { label: 'Home', route: '/home' },
      { label: 'Current page', route: '/w-breadcrumbs' }
    ]
  })
}
</script>
