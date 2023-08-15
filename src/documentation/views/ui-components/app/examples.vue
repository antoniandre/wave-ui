<template lang="pug">
div
  .title2.red Required in Wave UI #[w-tag.error--bg(round) &lt; 3.0], removed in #[w-tag.error--bg(round) 3.0].
  p.mt6.
    This tag is required in your app for Wave UI proper functioning.#[br]
    You should place it #[strong at the root of your app].
  .caption.grey-light1.
    There should only be one &lt;w-app&gt; in your whole app.

  ssh-pre(language="html-vue" :dark="$store.state.darkMode").
    &lt;w-app&gt;
      &lt;!-- All your app's content goes here. --&gt;
    &lt;/w-app&gt;

  alert.mt8.mb2(info).
    By default, the #[span.code w-app] wrapper will have a flex layout with a column direction,
    and a height of 100% of the full HTML document.#[br]
  p.
    That will help a faster design in most cases, allowing a footer to always stick at the bottom
    of the screen without hiding any content.#[br]
    If you prefer to have a display: block layout, you can set the #[span.code block] prop to true.

  title-link(h2) Examples of common layouts
  p.
    You can explore the different examples source code and use one of them as a starter kit for your app.#[br]
    It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)
  w-flex.common-layouts.mt6(:gap="6" wrap basis-zero)
    w-badge(bg-color="orange" color="white" overlap :value="1")
      example.ma0.grow(content-class="pa0" :blank-codepen="['html', 'pug', 'css']")
        fieldset.app.w-flex.column
          legend w-app
          section.header Header
          .w-flex.grow
            section.nav-menu.block Nav menu
            section.content.block.grow Main content
          section.footer Footer
        template(#pug).
          w-app#app
            header Header
            w-flex(grow)
              aside Nav menu
              main.grow Main content
            footer Footer
        template(#html).
          &lt;w-app id="app"&gt;
            &lt;header&gt;Header&lt;/header&gt;
            &lt;w-flex grow&gt;
              &lt;aside&gt;Nav menu&lt;/aside&gt;
              &lt;main class="grow"&gt;Main content&lt;/main&gt;
            &lt;/w-flex&gt;
            &lt;footer&gt;Footer&lt;/footer&gt;
          &lt;/w-app&gt;
        template(#css).
          /* Demo styles - can be discarded. */
          .w-app {padding: 4px;background-color: #fffeed;}
          header, footer, aside, main {
            margin: 4px;
            padding: 12px;
            text-transform: uppercase;
            color: #666;
            border: 1px solid rgba(0, 0, 0, 0.07);
          }
          header, footer {background-color: #e9f8fe;min-height: 60px;}
          aside {background-color: #fef2ff;}
          main {background-color: #efffed;}

    w-badge(bg-color="orange" color="white" overlap :value="2")
      example.ma0.grow(content-class="pa0" :blank-codepen="['html', 'pug', 'css']")
        fieldset.app.w-flex.column
          legend w-app
          .w-flex
            section.nav-menu.block Nav menu
            .w-flex.column.grow
              section.header Header
              section.content.block.grow Main content
              section.footer Footer
        template(#pug).
          w-app#app(row)
            aside Nav menu
            w-flex(grow)
              header Header
              main.grow Main content
              footer Footer
        template(#html).
          &lt;div id="app" class="row"&gt;
            &lt;aside&gt;Nav menu&lt;/aside&gt;
            &lt;w-flex column&gt;
              &lt;header&gt;Header&lt;/header&gt;
              &lt;main class="grow"&gt;Main content&lt;/main&gt;
              &lt;footer&gt;Footer&lt;/footer&gt;
            &lt;/w-flex&gt;
          &lt;/div&gt;
        template(#css).
          /* Demo styles - can be discarded. */
          .w-app {padding: 4px;background-color: #fffeed;}
          header, footer, aside, main {
            margin: 4px;
            padding: 12px;
            text-transform: uppercase;
            color: #666;
            border: 1px solid rgba(0, 0, 0, 0.07);
          }
          header, footer {background-color: #e9f8fe;min-height: 60px;}
          aside {background-color: #fef2ff;}
          main {background-color: #efffed;}

    w-badge(bg-color="orange" color="white" overlap :value="3")
      example.ma0.grow(content-class="pa0" :blank-codepen="['html', 'pug', 'css']")
        fieldset.app.w-flex.column
          legend w-app
          section.header Header
          section.content.block.grow Main content
          section.footer Footer
        template(#pug).
          w-app#app
            header Header
            main.grow Main content
            footer Footer
        template(#html).
          &lt;w-app id="app"&gt;
            &lt;header&gt;Header&lt;/header&gt;
            &lt;main class="grow"&gt;Main content&lt;/main&gt;
            &lt;footer&gt;Footer&lt;/footer&gt;
          &lt;/w-app&gt;
        template(#css).
          /* Demo styles - can be discarded. */
          .w-app {padding: 4px;background-color: #fffeed;}
          header, footer, aside, main {
            margin: 4px;
            padding: 12px;
            text-transform: uppercase;
            color: #666;
            border: 1px solid rgba(0, 0, 0, 0.07);
          }
          header, footer {background-color: #e9f8fe;min-height: 60px;}
          aside {background-color: #fef2ff;}
          main {background-color: #efffed;}

    w-badge(bg-color="orange" color="white" overlap :value="4")
      example.ma0.grow(content-class="pa0" :blank-codepen="['html', 'pug', 'css']")
        fieldset.app.grow
          legend w-app
          section.header Header
          .w-flex
            section.content.block.grow Main content
            section.nav-menu.block Nav menu
        template(#pug).
          w-app#app(block)
            header Header
            w-flex
              main.grow.py12 Main content
              aside Nav menu
            footer Footer
        template(#html).
          &lt;w-app id="app" block&gt;
            &lt;header&gt;Header&lt;/header&gt;
            &lt;w-flex&gt;
              &lt;main class="grow py12"&gt;Main content&lt;/main&gt;
              &lt;aside&gt;Nav menu&lt;/aside&gt;
            &lt;/w-flex&gt;
            &lt;footer&gt;Footer&lt;/footer&gt;
          &lt;/w-app&gt;
        template(#css).
          /* Demo styles - can be discarded. */
          .w-app {padding: 4px;background-color: #fffeed;}
          header, footer, aside, main {
            margin: 4px;
            padding: 12px;
            text-transform: uppercase;
            color: #666;
            border: 1px solid rgba(0, 0, 0, 0.07);
          }
          header, footer {background-color: #e9f8fe;min-height: 60px;}
          aside {background-color: #fef2ff;}
          main {background-color: #efffed;}

  ul.mt6
    li.
      In the above cases
      #[w-badge(inline bg-color="orange" color="white" :value="1")],
      #[w-badge(inline bg-color="orange" color="white" :value="2")],
      #[w-badge(inline bg-color="orange" color="white" :value="3")],
      you always want the footer to stick to the bottom of the screen.#[br]
      But if possible without covering the main content (so not #[code position: absolute]).#[br]
      Also you don't know the exact height of the footer since it may change if the screen is too
      small and the content flows onto multiple lines.#[br]
      For all these reasons, the best layout is to have a #[code display: flex] with a
      #[code flex-direction: column] and #[code flex-grow: 1] on the main content
      (and on the nav-menu in case 1 and 2).

    li.mt2.
      In #[w-badge(inline bg-color="orange" color="white" :value="4")], you may also want to have
      a flex column layout in the case your nav menu must remain in the screen while the main content
      is scrolled, for instance.#[br]
      If there was a footer in this layout, it would start where the content stops and it would not be
      pushed at the bottom of the container.

    li.mt2.
      In #[w-badge(inline bg-color="orange" color="white" :value="3")], if you don't need to have the
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
  .example {
    border: none;
    display: flex;
    flex-direction: column;
  }

  .example > .w-flex {flex: 1;}

  .example__render {
    overflow: visible;
    display: flex;
    flex-direction: column;
  }

  .w-badge-wrap {
    flex-grow: 1;
    align-self: flex-start;
    min-width: 240px;
  }

  fieldset, section {
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.8em;
    text-transform: uppercase;
    font-size: 0.95em;
  }

  fieldset {
    margin-top: -6px;
    position: relative;
    border-color: rgba(0, 0, 0, 0.15);
    width: 100%;
    min-height: 240px;
  }

  legend {
    padding: 0 0.5em;
    border-radius: 99em;
  }
  section {
    margin: 0.4em;
    color: rgba(0, 0, 0, 0.6);
  }
  .block {min-height: 100px;}
  .app {background-color: #fffeed;}
  .header, .footer {background-color: #e9f8fe;}
  .nav-menu {background-color: #fef2ff;}
  .content {background-color: #efffed;}
}
</style>
