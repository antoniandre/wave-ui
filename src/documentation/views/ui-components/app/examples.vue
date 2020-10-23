<template lang="pug">
div
  p.
    This tag is required in your app for Wave UI proper functioning.#[br]
    You should place it #[strong at the root of your app].

  ssh-pre(language="html-vue").
    &lt;w-app&gt;
      &lt;!-- All your app's content goes here. --&gt;
    &lt;/w-app&gt;

  alert.mb2(info).
    By default, the #[span.code w-app] wrapper will have a flex layout with a column direction,
    and a height of 100% of the full HTML document.#[br]
  p.
    That will help a faster design in most cases, allowing a footer to always stick at the bottom
    of the screen without hiding any content.#[br]
    If you prefer to have a display: block layout, you can set the #[span.code block] prop to true.

  title-link(h2) Examples of common layouts
  w-flex.common-layouts.mt4(:gap="6" wrap basis-zero)
    w-badge(bg-color="orange" color="white" overlap :model-value="1")
      fieldset.app
        legend w-app
        section.header Header
        .w-flex
          section.nav-menu.block Nav menu
          section.content.block.grow Main content
        section.footer Footer

    w-badge(bg-color="orange" color="white" overlap :model-value="2")
      fieldset.app
        legend w-app
        .w-flex
          section.nav-menu.block Nav menu
          .grow
            section.header Header
            section.content.block.grow Main content
            section.footer Footer

    w-badge(bg-color="orange" color="white" overlap :model-value="3")
      fieldset.app
        legend w-app
        section.header Header
        section.content.block.grow Main content
        section.footer Footer

    w-badge(bg-color="orange" color="white" overlap :model-value="4")
      fieldset.app
        legend w-app
        section.header Header
        .w-flex
          section.content.block.grow Main content
          section.nav-menu.block Nav menu

  ul.mt6
    li.
      In the above cases
      #[w-badge(inline bg-color="orange" color="white" :model-value="1")],
      #[w-badge(inline bg-color="orange" color="white" :model-value="2")],
      #[w-badge(inline bg-color="orange" color="white" :model-value="3")],
      you always want the footer to stick to the bottom of the screen.#[br]
      But if possible without covering the content (so not #[code position: absolute]).#[br]
      Also you don't know the exact height of the footer since it may change if the screen is too
      small and the content flows onto multiple lines.#[br]
      For all these reasons, the best layout is to have a #[code display: flex] with a
      #[code flex-direction: column] and #[code flex-grow: 1] on the main content
      (and on the nav-menu in case 1 and 2).

    li.mt2.
      In #[w-badge(inline bg-color="orange" color="white" :model-value="4")], you may also want to have
      a flex column layout in the case your nav menu must remain in the screen while the main content
      is scrolled, for instance.

    li.mt2.
      In #[w-badge(inline bg-color="orange" color="white" :model-value="3")], if you don't need to have the
      footer always at the bottom of the page, a simple block layout would suffice. For that you can add
      the #[code block] prop on the #[code w-app] component.

    alert(tip).
      In all the layouts above, and in your app, the #[code w-flex] component will be very helpful to
      quickly switch to a flex layout. You can pass it props such as #[code column], #[code wrap],
      #[code basis-zero] and more. Discover all the options in the
      #[router-link.mx1(to="/layout--flex") Layout &gt; Flex] knowledge base page.
</template>

<style lang="scss">
.common-layouts {
  .w-badge-wrap {flex-grow: 1;min-width: 240px;}
  fieldset, section {
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.8em;
    text-transform: uppercase;
    font-size: 0.95em;
  }
  fieldset {
    position: relative;
    border-color: rgba(0, 0, 0, 0.15);
    width: 100%;
  }
  legend {padding: 0 0.5em;}
  section {margin: 0.4em;color: rgba(0, 0, 0, 0.6);}
  .block {min-height: 100px;}
  .app {background-color: #fffeed;}
  .header, .footer {background-color: #e9f8fe;}
  .nav-menu {background-color: #fef2ff;}
  .content {background-color: #efffed;}
}
</style>