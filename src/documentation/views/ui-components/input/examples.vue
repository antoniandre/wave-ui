<template lang="pug">
div
  title-link(h2) Default
  p.
    By default the #[span.code w-input] component has a label inside the input field, that moves up
    above the field on focus or when the field has some content or a placeholder.#[br]
  example
    w-input Label
    template(#pug).
      w-input Label
    template(#html).
      &lt;w-input&gt;Label&lt;/w-input&gt;

  title-link(h2) Label and / or placeholder
  example
    w-input.mb4(label="Label")
    w-input.mb4(placeholder="Placeholder")
    w-input.mb4(label="Label" placeholder="Placeholder")
    template(#pug).
      w-input.mb4(label="Label")
      w-input.mb4(placeholder="Placeholder")
      w-input.mb4(label="Label" placeholder="Placeholder")
    template(#html).
      &lt;w-input
        class="mb4"
        label="Label"&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb4"
        placeholder="Placeholder"&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb4"
        label="Label"
        placeholder="Placeholder"&gt;
      &lt;/w-input&gt;

  title-link(h2) Static label
  p.
    By default the label is positioned inside and on field focus, it will move up above the field
    and shrink.#[br]
    It is possible to keep it inside and disable the animation with the #[code static-label] option.
  p.mt4.
    #[strong Note:] If this option is set to true and the label is positioned inside when a placeholder is set,
    only the placeholder will be displayed.

  example
    w-input(label="Label" static-label)
    template(#pug).
      w-input(label="Label" static-label)
    template(#html).
      &lt;w-input
        label="Label"
        static-label&gt;
      &lt;/w-input&gt;

  title-link(h2) Outline
  example
    w-input.mb6(label="Outline" outline)
    w-input.mb3(placeholder="Outline" outline)
    w-input.mb3(label="Outline" color="info" outline)
    w-input.mb3(label="Outline" bg-color="blue-light5" outline)
    template(#pug).
      w-input.mb6(label="Outline" outline)
      w-input.mb3(placeholder="Outline" outline)
      w-input.mb3(label="Outline" color="info" outline)
      w-input.mb3(label="Outline" bg-color="blue-light5" outline)
    template(#html).
      &lt;w-input
        class="mb6"
        label="Outline"
        outline&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        placeholder="Outline"
        outline&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Outline"
        color="info"
        outline&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Outline"
        bg-color="blue-light5"
        outline&gt;
      &lt;/w-input&gt;

  title-link(h2) Shadow
  example
    w-input.mb4(label="Shadow" shadow)
    w-input(label="Outline with shadow" shadow outline)
    template(#pug).
      w-input.mb4(label="Shadow" shadow)
      w-input(label="Outline with shadow" shadow outline)
    template(#html).
      &lt;w-input
        class="mb4"
        label="Shadow"
        shadow&gt;
      &lt;/w-input&gt;

      &lt;w-input
        label="Outline
        with shadow"
        shadow
        outline&gt;
      &lt;/w-input&gt;

  title-link(h2) Round &amp; Tile
  example
    w-flex(wrap :gap="2")
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Underline style (default)
        w-input.mb1(label="Round" round)
        w-input.mb1(label="Round and shadow" round shadow)
        w-input(label="Tile" tile)
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Outline style
        w-input.mb1(label="Round" round outline)
        w-input.mb1(label="Round and shadow" round outline shadow)
        w-input.mb1(label="Tile" tile outline)
    template(#pug).
      w-flex(wrap :gap="2")
        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Underline style (default)
          w-input.mb1(label="Round" round)
          w-input.mb1(label="Round and shadow" round shadow)
          w-input.mb1(label="Tile" tile)

        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Outline style
          w-input.mb1(label="Round" round outline)
          w-input.mb1(label="Round and shadow" round outline shadow)
          w-input.mb1(label="Tile" tile outline)
    template(#html).
      &lt;w-flex wrap :gap="2"&gt;
        &lt;div
          class="grow mb4"
          style="min-width: 200px"&gt;
          &lt;div class="title4 mb2"&gt;
            Underline style (default)
          &lt;/div&gt;

          &lt;w-input
            class="mb1"
            label="Round"
            round&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            label="Round and shadow"
            round
            shadow&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            label="Tile"
            tile&gt;
          &lt;/w-input&gt;
        &lt;/div&gt;

        &lt;div
          class="grow mb4"
          style="min-width: 200px"&gt;

          &lt;div class="title4 mb2"&gt;
            Outline style
          &lt;/div&gt;

          &lt;w-input
            class="mb1"
            label="Round"
            round
            outline&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            label="Round and shadow"
            round
            outline
            shadow&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            label="Tile"
            tile
            outline&gt;
          &lt;/w-input&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

  title-link(h2) Colors
  p.mb4.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
    By default, the text has the "#[span.code primary]" color.
  example
    w-flex(wrap :gap="2")
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Underline style (default)
        w-input.mb1(value="Some content")
        w-input.mb1(color="red" value="Some content")
        w-input.mb1(bg-color="red-light5" value="Some content")
        w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content")
        w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content")
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Outline style
        w-input.mb1(value="Some content" outline)
        w-input.mb1(color="red" value="Some content" outline)
        w-input.mb1(bg-color="red-light5" value="Some content" outline)
        w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content" outline)
        w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content" outline)
    template(#pug).
      w-flex(wrap :gap="2")
        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Underline style (default)
          w-input.mb1(value="Some content")
          w-input.mb1(color="red" value="Some content")
          w-input.mb1(bg-color="red-light5" value="Some content")
          w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content")
          w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content")

        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Outline style
          w-input.mb1(value="Some content" outline)
          w-input.mb1(color="red" value="Some content" outline)
          w-input.mb1(bg-color="red-light5" value="Some content" outline)
          w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content" outline)
          w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content" outline)
    template(#html).
      &lt;w-flex wrap :gap="2"&gt;
        &lt;div class="grow mb4" style="min-width: 200px"&gt;
          &lt;div class="title4 mb2"&gt;
            Underline style (default)
          &lt;/div&gt;

          &lt;w-input
            class="mb1"
            value="Some content"&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            color="red"
            value="Some
            content"&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            bg-color="red-light5"
            value="Some
            content"&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            color="red-dark1"
            bg-color="red-light5"
            value="Some content"&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            color="orange-dark1"
            bg-color="orange-light5"
            value="Some content"&gt;
          &lt;/w-input&gt;
        &lt;/div&gt;

        &lt;div class="grow mb4" style="min-width: 200px"&gt;
          &lt;div class="title4 mb2"&gt;
            Outline style
          &lt;/div&gt;

          &lt;w-input
            class="mb1"
            value="Some content"
            outline&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            color="red"
            value="Some content"
            outline&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            bg-color="red-light5"
            value="Some content"
            outline&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            color="red-dark1"
            bg-color="red-light5"
            value="Some content"
            outline&gt;
          &lt;/w-input&gt;

          &lt;w-input
            class="mb1"
            color="orange-dark1"
            bg-color="orange-light5"
            value="Some content"
            outline&gt;
          &lt;/w-input&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

  title-link(h2) Label position
  p The default label position is "#[span.code inside]", but it can also be "#[span.code left]" or "#[span.code right]".
  alert(tip).
    You could also set a label outside of the #[span.code w-input] and display it nicely with flex.
    But it is convenient to let the #[span.code w-input] component handle the field focus event on
    label click.#[br]
    The #[span.code label] prop is here for this purpose and accepts any HTML.

  example
    w-input.mb3(label="Inside" label-position="inside" outline)
    w-input.mb3(label="Left" label-position="left" outline)
    w-input.mb3(label="Right" label-position="right" outline)
    template(#pug).
      w-input.mb3(label="Inside" label-position="inside" outline)
      w-input.mb3(label="Left" label-position="left" outline)
      w-input.mb3(label="Right" label-position="right" outline)
    template(#html).
      &lt;w-input
        class="mb3"
        label="Inside"
        label-position="inside"
        outline&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Left"
        label-position="left"
        outline&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Right"
        label-position="right"
        outline&gt;
      &lt;/w-input&gt;

  title-link(h2) Custom label via default slot
  p.
    It is convenient to have the label inside the #[span.code w-input] component to let it handle
    the field focus event on label click.#[br]
    The #[span.code label] prop accepts any HTML, but because passing complex html via a prop is not fun,
    there is also a prop for setting the label wish will grant more freedom.

  example
    w-input.mb3(label-position="inside" outline)
      w-icon.orange mdi mdi-arrow-right
      span.purple.mx1 Inside
      w-icon.orange mdi mdi-arrow-left
    w-input.mb3(label-position="left" outline)
      span.green.mr1 Left
      w-icon.orange mdi mdi-arrow-right
    w-input.mb3(label-position="right" outline)
      w-icon.orange mdi mdi-arrow-left
      span.red.ml1 Right
    template(#pug).
      w-input.mb3(label-position="inside" outline)
        w-icon.orange mdi mdi-arrow-right
        span.purple.mx1 Inside
        w-icon.orange mdi mdi-arrow-left
      w-input.mb3(label-position="left" outline)
        span.green.mr1 Left
        w-icon.orange mdi mdi-arrow-right
      w-input.mb3(label-position="right" outline)
        w-icon.orange mdi mdi-arrow-left
        span.red.ml1 Right
    template(#html).
      &lt;w-input
        class="mb3"
        label-position="inside"
        outline&gt;
        &lt;w-icon class="orange"&gt;
          mdi mdi-arrow-right
        &lt;/w-icon&gt;

        &lt;span class="purple mx1"&gt;
          Inside
        &lt;/span&gt;

        &lt;w-icon class="orange"&gt;
          mdi mdi-arrow-left
        &lt;/w-icon&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label-position="left"
        outline&gt;
        &lt;span class="green mr1"&gt;
          Left
        &lt;/span&gt;

        &lt;w-icon class="orange"&gt;
          mdi mdi-arrow-right
        &lt;/w-icon&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label-position="right"
        outline&gt;
        &lt;w-icon class="orange"&gt;
          mdi mdi-arrow-left
        &lt;/w-icon&gt;

        &lt;span class="red ml1"&gt;
          Right
        &lt;/span&gt;
      &lt;/w-input&gt;

  title-link(h2) Inner icons
  example
    .title4.mb2 Label outside
    w-input.mb2(label="Username" label-position="left" outline inner-icon-left="mdi mdi-account")
    w-input.mb2(
      label="Password"
      :type="isPassword ? 'password' : 'text'"
      :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      @click:inner-icon-right="isPassword = !isPassword")
    w-input.mb2(
      label="Password"
      :type="isPassword ? 'password' : 'text'"
      label-position="left"
      outline
      :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      @click:inner-icon-right="isPassword = !isPassword")
    w-input.mb2(label="Right" label-position="right" outline inner-icon-left="wi-check")
    w-input.mb2(label="Right" label-position="right" outline inner-icon-right="wi-check")
    .title4.mt6.mb2 Label inside
    w-input.mb2(label="Inside" label-position="inside" outline inner-icon-left="wi-search")
    w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")
    template(#pug).
      .title4.mb2 Label outside
      w-input.mb2(label="Username" label-position="left" outline inner-icon-left="mdi mdi-account")
      w-input.mb2(
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword")
      w-input.mb2(
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        label-position="left"
        outline
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword")
      w-input.mb2(label="Right" label-position="right" outline inner-icon-left="wi-check")
      w-input.mb2(label="Right" label-position="right" outline inner-icon-right="wi-check")
      .title4.mt6.mb2 Label inside
      w-input.mb2(label="Inside" label-position="inside" outline inner-icon-left="wi-search")
      w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")
    template(#html).
      &lt;div class="title4 mb2"&gt;
        Label outside
      &lt;/div&gt;

      &lt;w-input
        class="mb2"
        label="Username"
        label-position="left"
        outline
        inner-icon-left="mdi mdi-account"&gt;
      &lt;/w-input&gt;

      &lt;w-input class="mb2"
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword"&gt;
      &lt;/w-input&gt;

      &lt;w-input class="mb2"
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        label-position="left"
        outline
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword"&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb2"
        label="Right"
        label-position="right"
        outline
        inner-icon-left="wi-check"&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb2"
        label="Right"
        label-position="right"
        outline
        inner-icon-right="wi-check"&gt;
      &lt;/w-input&gt;

      &lt;div class="title4 mt6 mb2"&gt;
        Label inside
      &lt;/div&gt;

      &lt;w-input
        class="mb2"
        label="Inside"
        label-position="inside"
        outline
        inner-icon-left="wi-search"&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb2"
        label="Inside"
        label-position="inside"
        outline
        inner-icon-right="wi-search"&gt;
      &lt;/w-input&gt;
    template(#js).
      data: () => ({
        isPassword: true
      })

  title-link(h2) Disabled &amp; readonly
  example
    w-input.mb3(label="Disabled & empty" outline disabled)
    w-input.mb3(label="Disabled & filled" value="Some content" outline disabled)
    w-input.mb3(label="Readonly & empty" outline readonly)
    w-input.mb3(label="Readonly & filled" value="Some content" outline readonly)
    template(#pug).
      w-input.mb3(label="Disabled &amp; empty" outline disabled)
      w-input.mb3(label="Disabled &amp; filled" value="Some content" outline disabled)
      w-input.mb3(label="Readonly &amp; empty" outline readonly)
      w-input.mb3(label="Readonly &amp; filled" value="Some content" outline readonly)
    template(#html).
      &lt;w-input
        class="mb3"
        label="Disabled &amp; empty"
        outline
        disabled&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Disabled &amp; filled"
        value="Some content"
        outline
        disabled&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Readonly &amp; empty"
        outline
        readonly&gt;
      &lt;/w-input&gt;

      &lt;w-input
        class="mb3"
        label="Readonly &amp; filled"
        value="Some content"
        outline
        readonly&gt;
      &lt;/w-input&gt;

  title-link(h2 slug="file-input") File input
  alert(success) A #[strong.code.mx1 w-input] field only needs a #[code type="file"] to become a file input.
  p.
    By default, the file input will show a preview of the image you are uploading.#[br]
    If the file can't be previewed a file icon will show up to the right of the field instead of
    a preview.
  p.
    When uploading a larger file, a spinner will show up to the right of the field until
    the file is completely transferred.
  example
    w-input(type="file") File
    template(#pug).
      w-input(type="file") File
    template(#html).
      &lt;w-input type="file"&gt;File&lt;/w-input&gt;

  title-link(h3) Disabled preview
  p.
    The file preview can be disabled if not needed by setting the #[code preview] prop to
    #[code false].
  example
    w-input(type="file" :preview="false") File
    template(#pug).
      w-input(type="file" :preview="false") File
    template(#html).
      &lt;w-input type="file" :preview="false"&gt;File&lt;/w-input&gt;

  title-link(h3) Custom preview icon
  p.
    By default, when the file is not an image, the preview will be a generic file icon.#[br]
    It is possible to set a custom icon instead.
  example
    w-input(type="file" preview="mdi mdi-star") File
    template(#pug).
      w-input(type="file" preview="mdi mdi-star") File
    template(#html).
      &lt;w-input type="file" preview="mdi mdi-star"&gt;File&lt;/w-input&gt;

  p You could even compute a variable to show a different icon per detected file type.
  example
    w-input(
      type="file"
      v-model="files3"
      :preview="!!files3.length && filePreviewIcon") File
    template(#pug).
      w-input(
        type="file"
        v-model="files"
        :preview="!!files.length &amp;&amp; filePreviewIcon") File
    template(#html).
      &lt;w-input
        type="file"
        v-model="files"
        :preview="!!files.length &amp;&amp; filePreviewIcon"&gt;
        File
      &lt;/w-input&gt;
    template(#js).
      data: () => ({
        files: []
      }),

      computed: {
        filePreviewIcon () {
          const { extension } = this.files[0]
          switch (extension) {
            case 'jpg':
            case 'png':
            case 'gif':
            case 'pdf':
              return `mdi mdi-file-${extension}-box`
            case 'jpeg':
              return 'mdi mdi-file-jpg-box'
            case 'svg':
            case 'webp':
              return 'mdi mdi-image'
            case 'mov':
              return 'mdi mdi-filmstrip'
            case 'zip':
              return 'mdi mdi-folder-zip'
            default:
              return 'mdi mdi-file'
          }
        }
      },

  title-link(h3) Reading the files
  p.
    On the frontend, you can read all the file details and contents on input when the user selects
    a file, or you can provide a files array that you keep in sync with Wave UI.
  title-link.mt6(h4) Via @input
  example
    w-input(type="file" @input="onFileInput") File
    pre.mt3(v-html="files1")
    template(#pug).
        w-input(type="file" @input="onFileInput") File

        pre.mt3(v-html="files")
    template(#html).
      &lt;w-input type="file" @input="onFileInput&gt;File&lt;/w-input&gt;

      &lt;pre v-html="files" class="mt3" /&gt;
    template(#js).
      data: () => ({
        files: []
      }),

      methods: {
        onFileInput (files) {
          this.files = files
        }
      }

  title-link.mt6.mb2(h4) Via v-model
  p.
    The v-model can be used to access the files added by the user.#[br]
  alert(warning)
    strong Important
    br
    | Even if a v-model is allowing a two-way binding,
    | there is no way to prefill an input type file:
    | that would be a security breach and is therefore not allowed in HTML.
  example
    w-input(type="file" v-model="files2") File
    pre.mt3(v-html="files2")
    template(#pug).
        w-input(type="file" v-model="files") File

        pre.mt3(v-html="files")
    template(#html).
      &lt;w-input type="file" v-model="files"&gt;File&lt;/w-input&gt;

      &lt;pre v-html="files" class="mt3" /&gt;
    template(#js).
      data: () => ({
        files: []
      })

  title-link(h3) Uploading the file to a backend server
  p.
    There are different ways you can do this. The 2 most common ways would be to:
  ul
    li.
      Use Axios or other AJAX library to send the file on #[strong.code w-form]
      #[code @success] (emitted upon successful validation).
    li.
      Use the #[code allow-submit] option on the #[strong.code w-form] as well as
      #[code enctype="multipart/form-data"], #[code method] and #[code action] fields
      in order to submit the file in a full HTML built-in process (But this will reload
      the page).

  p.mt3.
    The first option is recommended for a more modern approach. Here are two examples how to
    set this up.
  title-link.mt8(h4) 1st example
  p.
    In this example, the file is uploaded to #[a(href="https://filebin.net" target="_blank") Filebin].
    The file is transferred as #[code application/x-www-form-urlencoded] similar to
    #[code application/octet-stream] with the file in the body of the request as per the
    expectation of the Filebin API.
  example(reactive external-js="https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js")
    w-form(@success="onFormSuccess")
      w-input(
        type="file"
        v-model="files5"
        :validators="[() => files5.length || 'Please add a file']") File
      w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send
    template(#pug).
      w-form(@success="onFormSuccess")
        w-input(
          type="file"
          v-model="files"
          :validators="[() => files.length || 'Please add a file']") File
        w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send
    template(#html).
      &lt;w-form @success="onFormSuccess"&gt;
        &lt;w-input
          type="file"
          v-model="files"
          :validators="[() => files.length || 'Please add a file']"&gt;
          File
        &lt;/w-input&gt;

        &lt;w-button
          type="submit"
          :loading="loading"
          class="d-flex mla mt4"&gt;
          Send
        &lt;/w-button&gt;
      &lt;/w-form&gt;
    template(#js).
      methods: {
        // This method uses the Axios library.
        // import axios from 'axios' // If you use NPM.
        async onFormSuccess () {
          this.loading = true

          const binURL = 'https://filebin.net/waveui-{{ todayFormatted }}{{ userIP }}'
          const { name: filename, file } = this.files[0]

          axios.post(`${binURL}/${filename}`, file)
            .then(data =&gt; {
              this.loading = false
              this.$waveui.notify(
                `&lt;div&gt;
                File transferred successfully.&lt;br&gt;Now check your
                &lt;a href="${binURL}" target="_blank"&gt;
                  Filebin &lt;i class="w-icon mdi mdi-open-in-new"&gt;&lt;/i&gt;&lt;/a&gt;.
                &lt;/div&gt;`,
                'success',
                0)
            })
            .catch(() =&gt; {
              this.$waveui.notify(
                '&lt;div&gt;An error occurred.&lt;br&gt;Is Filebin down?&lt;br&gt;Or is there a problem with the file?&lt;/div&gt;',
                'error',
                0)
              this.loading = false
            })
        }
      }

  title-link.mt8(h4) 2nd example
  p.
    In this example (more common case) the file is transferred as #[code multipart/form-data] with
    the use of #[code FormData] and using the same HTML as the previous example.
  ssh-pre(language="js" label="JavaScript").
    import axios from 'axios'

    export default {
      data: () => ({
        files: []
      }),

      methods: {
        onFormSuccess () {
          const formData = new FormData()
          formData.append('file', this.files[0].file)

          axios.post(
            '/api/your-backend-script',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          ).then(
            data => console.log('Success!', data),
            error => console.log('Failure!', error)
          )
        }
      }
    }

  p.
    Here is an example of a very minimalist way to receive and display the file on server side
    with PHP. Of course you should add more checks, and move the temporary uploaded file when all
    the checks are passed.
  ssh-pre(language="php" label="PHP").
    &lt;?php
    // You can check the structure of the file upload.
    // print_r($_FILES);die;

    // Set the content type to the file type for output.
    header('Content-Type: ' . $_FILES['file']['type']);

    // Read and output the uploaded file.
    die(file_get_contents($_FILES['file']['tmp_name']));
    ?&gt;

  title-link(h3) Loading state
  p.
    If you try to upload a very large file, you will see the progress value of the file transfer will
    be updated as the transfer goes on (e.g. :loading="overallProgress").#[br]
    You can also show a self-updated progress bar with the #[code show-progress] prop.
  example
    w-input(type="file"
      v-model="files4"
      :overall-progress.sync="overallProgress"
      show-progress
      progress-color="green") File

    .my4 Overall progress: {{ overallProgress }}
    w-flex
      | Files:
      pre.ml2(v-html="files4")
    template(#pug).
      w-input(type="file"
        v-model="files"
        :overall-progress.sync="overallProgress"
        show-progress
        progress-color="green") File

      .my4 Overall progress: {{ '\{\{ overallProgress \}\}' }}

      w-flex
        | Files:
        pre.ml2(v-html="files")
    template(#html).
      &lt;w-input type="file"
        v-model="files4"
        :overall-progress.sync="overallProgress"
        show-progress
        progress-color="green"&gt;
        File
      &lt;/w-input&gt;

      &lt;div class="my4"&gt;
        Overall progress: {{ '\{\{ overallProgress \}\}' }}
      &lt;/div&gt;

      &lt;w-flex&gt;
        Files:
        &lt;pre v-html="files" class="ml2" /&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        files: [],
        overallProgress: 0
      })

  title-link(h3) Accepting specific file extensions
  example
    w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg")
    template(#pug).
      w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg")
    template(#html).
      &lt;w-input
        type="file"
        label="File"
        accept=".jpg, .jpeg, .png, .gif, .svg"&gt;
      &lt;/w-input&gt;

  title-link(h3) Multiple files upload
  example
    w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg" multiple)
    template(#pug).
      w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg" multiple)
    template(#html).
      &lt;w-input
        type="file"
        label="File"
        accept=".jpg, .jpeg, .png, .gif, .svg"
        multiple&gt;
      &lt;/w-input&gt;

  //- OTHER TYPES.
  title-link(h2) Types
  p The default type is "#[span.code text]" but the types bellow are also supported.
  p.
    On desktop you will not notice the difference between the fields #[span.code email], #[span.code tel],
    #[span.code url], and the default text type. But on touch devices, the keyboard is adapted to the
    type of input.
  h3 Textual inputs
  example
    ul.input-types
      li
        .code.mb1 type="date"
        w-input(type="date") date
      li.mt4
        .code.mb1 type="email"
        w-input(type="email") Email address
      li.mt4
        .code.mb1 type="number"
        w-input(type="number" min="0" max="100") Age
      li.mt4
        .code.mb1 type="password"
        w-input(type="password") Password
      li.mt4
        .code.mb1 type="search"
        w-input(type="search") Search
      li.mt4
        .code.mb1 type="tel"
        w-input(type="tel") Tel
      li.mt4
        .code.mb1 type="text"
        w-input(type="text") Text
      li.mt4
        .code.mb1 type="time"
        w-input(type="time") time
      li.mt4
        .code.mb1 type="url"
        w-input(type="url") Url
      li.mt4
        span.code.mb1.mr2 type="hidden"
        | The hidden type is also accepted - but you don't need a #[span.code w-input] for that!
        w-input(type="hidden")
    template(#pug).
      &lt;ul.input-types&gt;
        &lt;li&gt;
          &lt;.code.mb1 type="date"&lt;
          &lt;w-input(type="date") date&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="email"&lt;
          &lt;w-input(type="email") Email address&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="number"&lt;
          &lt;w-input(type="number" min="0" max="100") Age&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="password"&lt;
          &lt;w-input(type="password") Password&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="search"&lt;
          &lt;w-input(type="search") Search&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="tel"&lt;
          &lt;w-input(type="tel") Tel&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="text"&lt;
          &lt;w-input Text&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="time"&lt;
          &lt;w-input(type="time") time&lt;
        &lt;li&gt;
          &lt;.code.mb1 type="url"&lt;
          &lt;w-input(type="url") Url&lt;
        &lt;li&gt;
          &lt;span.code.mb1.mr2 type="hidden"&lt;
          &lt;| The hidden type is also accepted - but you don't need a w-input for that!&lt;
          &lt;w-input(type="hidden")&lt;
    template(#html).
      &lt;ul class="input-types"&gt;
        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="date"&lt;/div&gt;
          &lt;w-input type="date"&gt;date&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="email"&lt;/div&gt;
          &lt;w-input type="email"&gt;Email address&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="number"&lt;/div&gt;
          &lt;w-input type="number" min="0" max="100"&gt;Age&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="password"&lt;/div&gt;
          &lt;w-input type="password"&gt;Password&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="search"&lt;/div&gt;
          &lt;w-input type="search"&gt;Search&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="tel"&lt;/div&gt;
          &lt;w-input type="tel"&gt;Tel&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="text"&lt;/div&gt;
          &lt;w-input&gt;Text&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="time"&lt;/div&gt;
          &lt;w-input type="time"&gt;time&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;div class="code mb1"&gt;type="url"&lt;/div&gt;
          &lt;w-input type="url"&gt;Url&lt;/w-input&gt;
        &lt;/li&gt;

        &lt;li&gt;
          &lt;span class="code mb1 mr2" type="hidden"&gt;
            The hidden type is also accepted - but you don't need a w-input for that!
          &lt;/span&gt;
          &lt;w-input type="hidden"&gt;
        &lt;/li&gt;

  h3 Other types of inputs
  p For all the other types of input listed bellow, a specific Wave UI component should be used instead:
  ul.other-input-types
    li.mt1
      span.code.mr2 type="button"
      span.grey use #[code w-button] instead
    li.mt1
      span.code.mr2 type="checkbox"
      span.grey use #[code w-checkbox] instead
    li.mt1
      span.code.mr2 type="color"
      span.grey use #[code w-color-picker] instead
      w-tag.px1.ml1(color="red" outline) coming soon
    //- li.mt1
      span.code.mr2 type="date"
      span.grey use #[code w-date-picker] instead
      w-tag.px1.ml1(color="red" outline) coming soon
    li.mt1
      span.code.mr2 type="image"
      span.grey use the #[code img] HTML tag instead
    li.mt1
      span.code.mr2 type="radio"
      span.grey use #[code w-radio] instead
    li.mt1
      span.code.mr2 type="range"
      span.grey use #[code w-slider] instead
    li.mt1
      span.code.mr2 type="reset"
      span.grey use #[code w-button] instead
    li.mt1
      span.code.mr2 type="submit"
      span.grey use #[code w-button] instead
    li.mt1
      span.code.mr2 type="time"
      span.grey use #[code w-time-picker] instead
      w-tag.px1.ml1(color="red" outline) coming soon
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    isPassword: true,
    files1: [],
    files2: [],
    files3: [],
    files4: [],
    files5: [],
    loading: false,
    overallProgress: undefined,
    todayFormatted: '',
    userIP: ''
  }),

  computed: {
    filePreviewIcon () {
      const { extension } = this.files3[0]
      switch (extension) {
        case 'jpg':
        case 'png':
        case 'gif':
        case 'pdf':
          return `mdi mdi-file-${extension}-box`
        case 'jpeg':
          return 'mdi mdi-file-jpg-box'
        case 'svg':
        case 'webp':
          return 'mdi mdi-image'
        case 'mov':
          return 'mdi mdi-filmstrip'
        case 'zip':
          return 'mdi mdi-folder-zip'
        default:
          return 'mdi mdi-file'
      }
    }
  },

  methods: {
    onFileInput (files) {
      this.files1 = files
    },

    getTodaysDate () {
      const today = new Date()
      const d = (today.getDate()).toString().padStart(2, 0)
      const m = (today.getMonth() + 1).toString().padStart(2, 0)
      const y = today.getFullYear()
      this.todayFormatted = `${y}${m}${d}`
    },

    async getUserIP () {
      await axios.get('https://api.ipify.org').then(data => {
        this.userIP = data.data.replace(/\./g, '')
      })
    },

    async onFormSuccess () {
      this.loading = true

      // Create the user unique Filebin ID.
      const binURL = `https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`
      const { name: filename, file } = this.files5[0]

      axios.post(`${binURL}/${filename}`, file)
        .then(
          data => {
            this.loading = false
            this.$waveui.notify(
              `<div>
              File transferred successfully.<br>Now check your
              <a href="${binURL}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,
              'success',
              0)
          },
          () => {
            this.$waveui.notify(
              '<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>',
              'error',
              0)
            this.loading = false
          }
        )
    }
  },

  created () {
    this.getTodaysDate()
    this.getUserIP()

    // Get the Filebin content.
    // axios.get(
    //   `https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,
    //   { headers: { accept: "application/json" } }
    // ).then(
    //   data => console.log('Success', data),
    //   error => console.log('Failure', error)
    // )
  }
}
</script>

<style lang="scss">
ul.input-types li {margin-bottom: 8px;}
</style>
