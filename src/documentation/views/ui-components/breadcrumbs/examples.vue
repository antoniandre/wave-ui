<template lang="pug">
div
  title-link(h2) Default
  p.
    By default, each item except the last one will be a link providing that a route attribute is found
    in the item (you can use the #[code item-route-key] prop to name another attribute).#[br]
    If you are using Vue Router, all the links will automatically be #[strong.code router-link]s.
  p.
    The items should have a #[code label] attribute or otherwise nominated attribute via the
    #[code item-label-key] prop.

  example
    w-breadcrumbs(:items="items")
    template(#pug).
      w-breadcrumbs(:items="items")
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the component texts.
    This applies to all the links only.#[br]
    You can use the #[code separator-color] prop to specifically change the color of the separators.

  example
    w-breadcrumbs(:items="items" color="orange")
    template(#pug).
      w-breadcrumbs(:items="items" color="orange")
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h3) Separator color
  example
    w-breadcrumbs(:items="items" separator-color="orange")
    template(#pug).
      w-breadcrumbs(:items="items" separator-color="orange")
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h2) Custom separator
  p.
    You can customize the separator simply by providing a different icon, or using the #[code separator]
    slot.
  title-link(h3) Icon
  example
    w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")
    template(#pug).
      w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h3) Slot
  example
    w-breadcrumbs(:items="items")
      template(#separator) //
    template(#pug).
      w-breadcrumbs(:items="items")
        template(#separator) //
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h2) Custom item template
  p You can provide a custom template for the items via the #[code item] slot.
  example
    w-breadcrumbs(:items="items")
      template(#item="{ item, isLast }")
        w-tag(:color="isLast ? 'grey' : 'green'" round outline v-html="item.label")
    template(#pug).
      w-breadcrumbs(:items="items")
        template(#item="{ item, isLast }")
          w-tag(:color="isLast ? 'grey' : 'green'" round outline v-html="item.label")
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h2) Link on the last item
  p.
    The last item is usually the current page, therefore it's not useful to have a link on it.#[br]
    If it makes sense in your application, you can use the #[code link-last-item] prop.
  example
    w-breadcrumbs(:items="items" link-last-item)
    template(#pug).
      w-breadcrumbs(:items="items" link-last-item)
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })

  title-link(h2) Sizes
  p.
    The breadcrumbs size can be controlled via the preset sizes #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl] or via CSS override.
  example
    w-breadcrumbs.my4(:items="items" xs)
    w-breadcrumbs.my4(:items="items" sm)
    w-breadcrumbs.my4(:items="items" md)
    w-breadcrumbs.my4(:items="items" lg)
    w-breadcrumbs.my4(:items="items" xl)
    template(#pug).
      w-breadcrumbs.my4(:items="items" xs)
      w-breadcrumbs.my4(:items="items" sm)
      w-breadcrumbs.my4(:items="items" md)
      w-breadcrumbs.my4(:items="items" lg)
      w-breadcrumbs.my4(:items="items" xl)
    template(#js).
      data: () => ({
        items: [
          { label: 'Sitemap', route: '/sitemap' },
          { label: 'Home', route: '/' },
          { label: 'Current page', route: '/w-breadcrumbs' }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: 'Sitemap', route: '/sitemap' },
      { label: 'Home', route: '/' },
      { label: 'Current page', route: '/w-breadcrumbs' }
    ]
  })
}
</script>
