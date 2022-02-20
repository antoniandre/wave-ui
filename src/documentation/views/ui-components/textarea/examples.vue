<template lang="pug">
div
  title-link(h2) Default
  p.
    By default the #[span.code w-textarea] component has a label inside the textarea that moves up above
    the textarea on focus or when the textarea is filled by some content or a placeholder.#[br]
    The default number of rows is 3, and when adding lines the textarea will adjust its size.
  example
    w-textarea Label
    //- template(#pug).
      w-textarea Label
    template(#html).
      &lt;w-textarea&gt;Label&lt;/w-textarea&gt;

  title-link(h2) Label and / or placeholder
  example
    w-textarea Label
    w-textarea.mt4(placeholder="Placeholder")
    w-textarea.mt4(label="Label" placeholder="Placeholder")
    //- template(#pug).
      w-textarea Label
      w-textarea.mt4(placeholder="Placeholder")
      w-textarea.mt4(label="Label" placeholder="Placeholder")
    template(#html).
      &lt;w-textarea&gt;Label&lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        placeholder="Placeholder"&gt;
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        label="Label"
        placeholder="Placeholder"&gt;
      &lt;/w-textarea&gt;

  title-link(h2) v-model
  p.
    The value of the textarea can be provided via the #[code model-value] attribute (or #[code value]
    for Vue 2) or via #[code v-model] for two-way binding.#[br]
    By default the textarea's height adapts to the content like in this example.

  example
    w-textarea(model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\n\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\n\n\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\nObcaecati ea id nobis, ab neque porro iure.\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?")
    //- template(#pug).
      w-textarea(model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\n\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\n\n\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\nObcaecati ea id nobis, ab neque porro iure.\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?")
    template(#html).
      &lt;w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\n\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\n\n\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\nObcaecati ea id nobis, ab neque porro iure.\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"&gt;&lt;/w-textarea&gt;

  title-link(h2) No autogrow &amp; resizable
  example
    w-textarea(no-autogrow rows="6") Textarea label
    w-textarea.mt4(no-autogrow resizable rows="6") Textarea label
    //- template(#pug).
      w-textarea(no-autogrow rows="6") Textarea label
      w-textarea.mt4(no-autogrow resizable rows="6") Textarea label
    template(#html).
      &lt;w-textarea
        no-autogrow
        rows="6"&gt;
        Textarea label
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        no-autogrow
        resizable
        rows="6"&gt;
        Textarea label
      &lt;/w-textarea&gt;

  title-link(h2) Outline
  example
    w-textarea(outline) Textarea label
    //- template(#pug).
      w-textarea(outline) Textarea label
    template(#html).
      &lt;w-textarea outline&gt;Textarea label&lt;/w-textarea&gt;

  title-link(h2) Shadow
  example
    w-textarea(shadow) Textarea label
    w-textarea.mt4(outline shadow) Textarea label
    //- template(#pug).
      w-textarea(shadow) Textarea label
      w-textarea.mt4(outline shadow) Textarea label
    template(#html).
      &lt;w-textarea shadow&gt;
        Textarea label
      &lt;/w-textarea&gt;

      &lt;w-textarea class="mt4" outline shadow&gt;
        Textarea label
      &lt;/w-textarea&gt;

  title-link(h2) Tile
  example
    w-textarea(tile) Textarea label
    w-textarea.mt4(outline tile) Textarea label
    //- template(#pug).
      w-textarea(tile) Textarea label
      w-textarea.mt4(outline tile) Textarea label
    template(#html).
      &lt;w-textarea tile&gt;
        Textarea label
      &lt;/w-textarea&gt;

      &lt;w-textarea class="mt4" outline tile&gt;
        Textarea label
      &lt;/w-textarea&gt;

  title-link(h2) Colors
  p.mb4.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
    By default, the text has the "#[span.code primary]" color.
  example
    w-textarea(color="blue") Textarea label
    w-textarea.mt4(outline color="blue") Textarea label
    w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
    w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label
    //- template(#pug).
      w-textarea(color="blue") Textarea label
      w-textarea.mt4(outline color="blue") Textarea label
      w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
      w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label
    template(#html).
      &lt;w-textarea color="blue"&gt;
        Textarea label
      &lt;/w-textarea&gt;

      &lt;w-textarea class="mt4" outline color="blue"&gt;
        Textarea label
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        bg-color="blue-light5"
        color="blue-dark3"&gt;
        Textarea label
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        outline
        bg-color="blue-light5"
        color="blue-dark3"&gt;
        Textarea label
      &lt;/w-textarea&gt;

  title-link(h2) Label position
  p.
    By default the label is positioned inside, you can also place it on the left or right outside of
    the textarea.
  example
    w-textarea(outline) Label inside
    w-textarea.mt4(outline label-position="left") Label left
    w-textarea.mt4(outline label-position="right") Label right
    //- template(#pug).
      w-textarea(outline) Label inside
      w-textarea.mt4(outline label-position="left") Label left
      w-textarea.mt4(outline label-position="right") Label right
    template(#html).
      &lt;w-textarea outline&gt;Label inside&lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        outline
        label-position="left"&gt;
        Label left
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mt4"
        outline
        label-position="right"&gt;
        Label right
      &lt;/w-textarea&gt;

  title-link(h2) Custom label via default slot
  p.
    It is convenient to have the label inside the #[span.code w-textarea] component to let it handle
    the field focus event on label click.#[br]
    The #[span.code label] prop accepts any HTML, but because passing complex html via a prop is not fun,
    there is also a prop for setting the label wish will grant more freedom.

  example
    w-textarea(label-position="inside" outline)
      w-icon.orange mdi mdi-arrow-right
      span.purple.mx1 Inside
      w-icon.orange mdi mdi-arrow-left
    w-textarea.mt4(label-position="left" outline)
      span.green.mr1 Left
      w-icon.orange mdi mdi-arrow-right
    w-textarea.mt4(label-position="right" outline)
      w-icon.orange mdi mdi-arrow-left
      span.red.ml1 Right
    //- template(#pug).
      w-textarea(label-position="inside" outline)
        w-icon.orange mdi mdi-arrow-right
        span.purple.mx1 Inside
        w-icon.orange mdi mdi-arrow-left
      w-textarea.mt4(label-position="left" outline)
        span.green.mr1 Left
        w-icon.orange mdi mdi-arrow-right
      w-textarea.mt4(label-position="right" outline)
        w-icon.orange mdi mdi-arrow-left
        span.red.ml1 Right
    template(#html).
      &lt;w-textarea label-position="inside" outline&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-right&lt;/w-icon&gt;
        &lt;span class="purple mx1"&gt;Inside&lt;/span&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-left&lt;/w-icon&gt;
      &lt;/w-textarea&gt;

      &lt;w-textarea class="mt4" label-position="left" outline&gt;
        &lt;span class="green mr1"&gt;Left&lt;/span&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-right&lt;/w-icon&gt;
      &lt;/w-textarea&gt;

      &lt;w-textarea class="mt4" label-position="right" outline&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-left&lt;/w-icon&gt;
        &lt;span class="red ml1"&gt;Right&lt;/span&gt;
      &lt;/w-textarea&gt;

  title-link(h2) Inner icons
  example
    .title4.mb2 Label outside
    w-textarea(label="Message" label-position="left" outline inner-icon-left="mdi mdi-email")
    w-textarea.mt4(label="Message" label-position="right" outline inner-icon-right="mdi mdi-email")
    .title4.mt6.mb2 Label inside
    w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
    w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")
    //- template(#pug).
      .title4.mb2 Label outside
      w-textarea(label="Message" label-position="left" outline inner-icon-left="mdi mdi-email")
      w-textarea.mt4(label="Message" label-position="right" outline inner-icon-right="mdi mdi-email")
      .title4.mt6.mb2 Label inside
      w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
      w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")
    template(#html).
      &lt;div class="title4 mb2"&gt;Label outside&lt;/div&gt;
      &lt;w-textarea
        label="Left"
        label-position="left"
        outline
        inner-icon-left="mdi mdi-email"&gt;
      &lt;/w-textarea&gt;
      &lt;w-textarea
        class="mt4"
        label="Right"
        label-position="right"
        outline
        inner-icon-right="mdi mdi-email"&gt;
      &lt;/w-textarea&gt;

      &lt;div class="title4 mt6 mb2"&gt;Label inside&lt;/div&gt;
      &lt;w-textarea
        label="Message"
        label-position="inside"
        outline
        inner-icon-left="mdi mdi-email"&gt;
      &lt;/w-textarea&gt;
      &lt;w-textarea
        class="mt4"
        label="Message"
        label-position="inside"
        outline
        inner-icon-right="mdi mdi-email"&gt;
      &lt;/w-textarea&gt;

  title-link(h2) Disabled &amp; readonly
  example
    w-textarea.mb4(
      label="Disabled & empty"
      outline
      disabled)
    w-textarea.mb4(
      model-value="Some content"
      label="Disabled & filled"
      outline
      disabled)
    w-textarea.mb4(
      label="Readonly & empty"
      outline
      readonly)
    w-textarea(
      model-value="Some content"
      label="Readonly & filled"
      outline
      readonly)
    //- template(#pug).
      w-textarea.mb4(
        label="Disabled & empty"
        outline
        disabled)
      w-textarea.mb4(
        value="Some content"
        label="Disabled & filled"
        outline
        disabled)
      w-textarea.mb4(
        label="Readonly & empty"
        outline
        readonly)
      w-textarea(
        value="Some content"
        label="Readonly & filled"
        outline
        readonly)
    template(#html).
      &lt;w-textarea
        class="mb4"
        label="Disabled &amp; empty"
        outline
        disabled&gt;
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mb4"
        model-value="Some content"
        label="Disabled &amp; filled"
        outline
        disabled&gt;
      &lt;/w-textarea&gt;

      &lt;w-textarea
        class="mb4"
        label="Readonly &amp; empty"
        outline
        readonly&gt;
      &lt;/w-textarea&gt;

      &lt;w-textarea
        model-value="Some content"
        label="Readonly &amp; filled"
        outline
        readonly&gt;
      &lt;/w-textarea&gt;
</template>
