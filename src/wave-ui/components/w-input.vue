<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue, disabled: isDisabled, readonly: isReadonly, isFocused }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', inputValue = '');$emit('input', '')"
  :wrap="hasLabel && labelPosition !== 'inside'"
  :class="classes")
  input(v-if="type === 'hidden'" type="hidden" :name="name || null" v-model="inputValue")

  template(v-else)
    //- Left label.
    template(v-if="labelPosition === 'left'")
      label.w-input__label.w-input__label--left.w-form-el-shakable(
        v-if="$slots.default || label"
        :for="`w-input--${_.uid}`"
        :class="labelClasses")
        slot {{ label }}

    //- Input wrapper.
    .w-input__input-wrap(:class="inputWrapClasses")
      w-icon.w-input__icon.w-input__icon--inner-left(
        v-if="innerIconLeft"
        tag="label"
        :for="`w-input--${_.uid}`"
        @click="$emit('click:inner-icon-left', $event)") {{ innerIconLeft }}
      //- All types of input except file.
      input.w-input__input(
        v-if="type !== 'file'"
        ref="input"
        v-model="inputValue"
        v-on="listeners"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        :id="`w-input--${_.uid}`"
        :type="type"
        :name="inputName"
        :placeholder="placeholder || null"
        :step="step || null"
        :min="min || null"
        :max="max || null"
        :minlength="minlength || null"
        :maxlength="maxlength || null"
        :readonly="isReadonly || null"
        :aria-readonly="isReadonly ? 'true' : 'false'"
        :disabled="isDisabled || null"
        :required="required || null"
        :tabindex="tabindex || null"
        v-bind="attrs")
      //- Input type file.
      template(v-else)
        input(
          ref="input"
          :id="`w-input--${_.uid}`"
          type="file"
          :name="name || null"
          @focus="onFocus"
          @blur="onBlur"
          @change="onFileChange"
          :multiple="multiple || null"
          v-bind="attrs"
          :data-progress="overallFilesProgress /* Needed to emit the overallProgress. */")
        transition-group.w-input__input.w-input__input--file(
          tag="label"
          name="fade"
          :for="`w-input--${_.uid}`")
          span.w-input__no-file(v-if="!inputFiles.length && isFocused" key="no-file")
            slot(name="no-file")
              template(v-if="$slots['no-file'] === undefined") No file
          span(v-for="(file, i) in inputFiles" :key="file.lastModified")
            | {{ i ? ', ': '' }}
            span.filename(:key="`${i}b`") {{ file.base }}
            | {{ file.extension ? `.${file.extension}` : '' }}

      template(v-if="labelPosition === 'inside' && showLabelInside")
        label.w-input__label.w-input__label--inside.w-form-el-shakable(
          v-if="$slots.default || label"
          :for="`w-input--${_.uid}`"
          :class="labelClasses")
          slot {{ label }}
      w-icon.w-input__icon.w-input__icon--inner-right(
        v-if="innerIconRight"
        tag="label"
        :for="`w-input--${_.uid}`"
        @click="$emit('click:inner-icon-right', $event)") {{ innerIconRight }}

      w-progress.fill-width(
        v-if="hasLoading || (showProgress && (uploadInProgress || uploadComplete))"
        size="2"
        :color="progressColor || color"
        :model-value="showProgress ? (uploadInProgress || uploadComplete) && overallFilesProgress : loadingValue")

    //- Files preview.
    label.d-flex(v-if="type === 'file' && preview && inputFiles.length" :for="`w-input--${_.uid}`")
      template(v-for="(file, i) in inputFiles")
        i.w-icon.wi-spinner.w-icon--spin.size--sm.w-input__file-preview.primary(
          v-if="file.progress < 100"
          :key="`${i}a`")
        img.w-input__file-preview(
          v-else-if="file.preview"
          :key="`${i}b`"
          :src="file.preview"
          alt="")
        i.w-icon.w-input__file-preview.primary.size--md(
          v-else
          :key="`${i}c`"
          :class="preview && typeof preview === 'string' ? preview : 'wi-file'")

    //- Right label.
    template(v-if="labelPosition === 'right'")
      label.w-input__label.w-input__label--right.w-form-el-shakable(
        v-if="$slots.default || label"
        :for="`w-input--${_.uid}`"
        :class="labelClasses")
        slot {{ label }}
</template>

<script>
/**
 * @todo
 * - Share the common parts between w-input, w-textarea & w-select.
 * - option to fit to the content using contenteditable div
 **/

import FormElementMixin from '../mixins/form-elements'
import { reactive } from 'vue'

export default {
  name: 'w-input',
  mixins: [FormElementMixin],

  props: {
    modelValue: { default: '' },
    type: { type: String, default: 'text' },
    label: { type: String },
    labelPosition: { type: String, default: 'inside' },
    innerIconLeft: { type: String },
    innerIconRight: { type: String },
    staticLabel: { type: Boolean }, // When label is inside, fix the label above.
    placeholder: { type: String },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    labelColor: { type: String, default: 'primary' },
    progressColor: { type: String },
    minlength: { type: [Number, String] },
    maxlength: { type: [Number, String] },
    step: { type: [Number, String] },
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    multiple: { type: Boolean }, // Only for file uploads.
    preview: { type: [Boolean, String], default: true }, // Only for file uploads.
    loading: { type: [Boolean, Number], default: false }, // If a number is given, it will be the value of the progress.
    showProgress: { type: [Boolean] }, // Only for file uploads.
    // Allow syncing the files 1 way: prefilling a file is not possible.
    // https://stackoverflow.com/questions/16365668/pre-populate-html-form-file-input
    files: { type: Array },
    dark: { type: Boolean },
    light: { type: Boolean }
    // Props from mixin: name, disabled, readonly, required, tabindex, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus', 'blur', 'click:inner-icon-left', 'click:inner-icon-right', 'update:overallProgress'],

  data () {
    return {
      inputValue: this.modelValue,
      // In case of incorrect input type="number", the inputValue gets emptied,
      // and the label would come back on top of the input text.
      inputNumberError: false,
      isFocused: false,
      inputFiles: [], // For input type file.
      fileReader: null, // For input type file.
      isAutofilled: false
    }
  },

  computed: {
    attrs () {
      // Keep the `class` attribute bound to the wrapper and not the input.
      // eslint-disable-next-line no-unused-vars
      const { class: classes, ...htmlAttrs } = this.$attrs
      return htmlAttrs
    },

    listeners () {
      // Remove the events that are fired separately, so they don't fire twice.
      // eslint-disable-next-line no-unused-vars
      const { input, focus, blur, ...listeners } = this.$attrs
      return listeners
    },

    hasValue () {
      switch (this.type) {
        case 'file': return !!this.inputFiles.length
        case 'number': return this.inputValue || this.inputValue === 0 || this.inputNumberError
        case 'date':
        case 'time':
          return true
        default:
          return this.inputValue || this.inputValue === 0
      }
    },

    hasLabel () {
      return this.label || this.$slots.default
    },

    hasLoading () {
      return ![undefined, false].includes(this.loading)
    },

    loadingValue () {
      let value
      if (typeof this.loading === 'number') value = this.loading
      else if (this.loading) {
        value = this.type === 'file' && this.overallFilesProgress ? this.overallFilesProgress : undefined
      }
      return value
    },

    showLabelInside () {
      return !this.staticLabel || (!this.hasValue && !this.placeholder)
    },

    overallFilesProgress () {
      const progress = +this.inputFiles.reduce((total, file) => total + file.progress, 0)
      const total = progress / this.inputFiles.length
      this.$emit('update:overallProgress', this.inputFiles.length ? total : undefined)

      return total
    },

    uploadInProgress () {
      return this.overallFilesProgress > 0 && this.overallFilesProgress < 100
    },

    uploadComplete () {
      return this.overallFilesProgress === 100
    },

    classes () {
      return {
        'w-input': true,
        'w-input--file': this.type === 'file',
        'w-input--disabled': this.isDisabled,
        'w-input--readonly': this.isReadonly,
        [`w-input--${this.hasValue || this.isAutofilled ? 'filled' : 'empty'}`]: true,
        'w-input--focused': this.isFocused && !this.isReadonly,
        'w-input--dark': this.dark,
        'w-input--light': this.light,
        'w-input--floating-label': this.hasLabel && this.labelPosition === 'inside' && !this.staticLabel,
        'w-input--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
        'w-input--has-placeholder': this.placeholder,
        'w-input--inner-icon-left': this.innerIconLeft,
        'w-input--inner-icon-right': this.innerIconRight
      }
    },

    inputWrapClasses () {
      return {
        [this.valid === false ? this.validationColor : this.color]: this.color || this.valid === false,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-input__input-wrap--file': this.type === 'file',
        'w-input__input-wrap--round': this.round,
        'w-input__input-wrap--tile': this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        'w-input__input-wrap--box': this.outline || this.bgColor || this.shadow,
        'w-input__input-wrap--underline': !this.outline,
        'w-input__input-wrap--shadow': this.shadow,
        'w-input__input-wrap--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
        'w-input__input-wrap--loading': this.loading || (this.showProgress && this.uploadInProgress),
        'w-input__input-wrap--upload-complete': this.uploadComplete
      }
    }
  },

  methods: {
    onInput (e) {
      this.inputNumberError = e.target.validity.badInput // For input type number.
      this.$emit('update:modelValue', this.inputValue)
      this.$emit('input', this.inputValue)
    },

    onFocus (e) {
      this.isFocused = true
      this.$emit('focus', e)
    },

    onBlur (e) {
      this.isFocused = false
      this.$emit('blur', e)
    },

    // For file input.
    onFileChange (e) {
      this.inputFiles = [...e.target.files].map(original => {
        // `full` if there is no filename but only an extension.
        const [, base = '', extension = '', full = ''] = original.name.match(/^(.*?)\.([^.]*)$|(.*)/)

        const file = reactive({
          name: original.name,
          base: base || full,
          extension,
          type: original.type,
          size: original.size,
          lastModified: original.lastModified,
          preview: null,
          progress: 0,
          file: original
        })

        this.readFile(original, file)

        return file
      })
      this.$emit('update:modelValue', this.inputFiles)
      this.$emit('input', this.inputFiles)
    },

    // For file input.
    readFile (original, file) {
      const reader = new FileReader()

      // If the preview prop is a string, the user is setting the  preview to an icon and
      // don't need the actual file preview.
      const isPreviewAnIcon = typeof this.preview === 'string'
      const isFileAnImage = original.type && original.type.startsWith('image/')
      // Check if the file is an image and set a preview image.
      if (this.preview && !isPreviewAnIcon && isFileAnImage) {
        reader.addEventListener('load', e => {
          file.preview = e.target.result
        })
      }
      else delete file.preview

      // Used to display a spinner while the file is loading.
      reader.addEventListener('progress', e => {
        if (e.loaded && e.total) file.progress = e.loaded * 100 / e.total
      })

      reader.readAsDataURL(original)
    }
  },

  mounted () {
    // On page load, check if the field is autofilled by the browser.
    // 20211229. Only a problem on Chrome. Firefox ok, Safari always prompts before filling up.
    setTimeout(() => {
      if (this.$refs.input && this.$refs.input.matches(':-webkit-autofill')) this.isAutofilled = true
    }, 400) // Can't be less than 350: time for the browser to autofill.
  },

  watch: {
    modelValue (value) {
      this.inputValue = value
      // When clearing the field value, also reset the isAutofilled var for the CSS class.
      if (!value && value !== 0) this.isAutofilled = false
    }
  }
}
</script>

<style lang="scss">
$inactive-color: #777;

.w-input {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  font-size: $base-font-size;

  &--file {
    flex-wrap: nowrap;
    align-items: flex-end;

    span.fade-leave-to {position: absolute;}
  }

  &--loading {cursor: wait;}

  // Input field wrapper.
  // ------------------------------------------------------
  &__input-wrap {
    position: relative;
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    height: $form-field-height;
    border-radius: $border-radius;
    border: $border;
    transition: border $transition-duration;

    .w-input--floating-label & {margin-top: 3 * $base-increment;}
    .w-input[class^="bdrs"] &, .w-input[class*=" bdrs"] & {border-radius: inherit;}

    // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
    &--file {min-width: 0;}

    &--underline {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
      border-width: 0 0 1px;
    }

    &--round {border-radius: 99em;}
    &--tile {border-radius: initial;}
    &--shadow {box-shadow: $box-shadow;}
    &--loading, &--upload-complete {
      border-bottom-color: transparent;
      flex-wrap: wrap;
    }
    &--loading ~ .w-progress {
      height: 2px;
      position: absolute;
      top: 100%;
      margin-top: -2px;
    }

    .w-input--focused & {border-color: currentColor;}
    .w-input--focused &--loading,
    .w-input--focused &--upload-complete {border-bottom-color: transparent;}

    // Underline.
    &--underline:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 0;
      border-bottom: 2px solid currentColor;
      transition: $transition-duration;
      transform: scaleX(0);
      pointer-events: none;
    }

    &--loading:after {border-bottom-color: transparent;}

    .w-input--focused &--underline:after {transform: scaleX(1);}
    &--round.w-input__input-wrap--underline:after {
      border-radius: 99em;
      transition: $transition-duration, height 0.035s;
    }
    .w-input--focused &--round.w-input__input-wrap--underline:after {
      height: 100%;
      transition: $transition-duration, height 0s ($transition-duration - 0.035s);
    }
  }

  // Input field.
  // ------------------------------------------------------
  &__input {
    width: 100%;
    height: 100%;
    font: inherit;
    color: inherit;
    text-align: inherit;
    display: inline-flex;
    align-items: center;
    background: none;
    border: none;
    outline: none;
    padding-left: 2 * $base-increment;
    padding-right: 2 * $base-increment;

    // For type="search" on Safari.
    -webkit-appearance: none;
    &::-webkit-search-decoration {-webkit-appearance: none;}
  }

  &--no-padding &__input {
    padding-left: 0;
    padding-right: 0;
  }

  &__input-wrap--round &__input {
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }

  &--inner-icon-left &__input {padding-left: 27px;}
  &--inner-icon-right &__input {padding-right: 27px;}

  &--disabled &__input {
    color: $disabled-color;
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

  &--disabled input::placeholder {color: inherit;}

  // Upload field.
  // ------------------------------------------------------
  // Hides the built-in file input (replaced with a more stylable element).
  input[type="file"] {
    position: absolute;
    z-index: -1;
    pointer-events: none;
    opacity: 0;
  }

  &__input--file {
    > span {
      display: inline-flex;
      overflow: hidden;
      white-space: nowrap;
    }

    .filename {
      margin-left: 0.2em;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > span:first-child .filename {margin-left: 0;}
  }

  &__no-file {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    color: $disabled-color;
  }

  &__file-preview {
    margin-left: 4px;
    max-height: 2em;
    align-self: flex-end;

    &.w-icon {margin-bottom: 4px;}
  }

  // Icons inside.
  // ------------------------------------------------------
  &__icon {position: absolute;}
  &__icon--inner-left {left: 6px;}
  &__icon--inner-right {right: 6px;}
  &--no-padding &__icon--inner-left {left: 1px;}
  &--no-padding &__icon--inner-right {right: 1px;}

  .w-input--focused &__icon {color: currentColor;}

  &--disabled &__icon {
    color: $disabled-color;
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

  // Label.
  // ------------------------------------------------------
  &__label {
    transition: color $transition-duration;
    cursor: pointer;

    &--left {margin-right: 2 * $base-increment;}
    &--right {margin-left: 2 * $base-increment;}

    .w-input--disabled & {
      color: $disabled-color;
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }
    .w-input--readonly.w-input--empty & {
      opacity: 0.5;
      cursor: auto;
    }
  }

  &__label--inside {
    position: absolute;
    top: 50%;
    left: 0;
    padding-left: 2 * $base-increment;
    white-space: nowrap;
    transform: translateY(-50%);
    pointer-events: none;

    .w-input--no-padding & {
      left: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .w-input__input-wrap--round & {
      padding-left: round(3 * $base-increment);
      padding-right: round(3 * $base-increment);
    }
    .w-input--inner-icon-left & {left: 18px;}
    .w-input--no-padding.w-input--inner-icon-left & {left: 26px;}

    .w-input--floating-label & {
      transform-origin: 0 0;
      transition: $transition-duration ease;
      will-change: transform;
    }

    // move label with underline style.
    .w-input--focused.w-input--floating-label &,
    .w-input--filled.w-input--floating-label &,
    .w-input--has-placeholder.w-input--floating-label & {
      transform: translateY(-160%) scale(0.85);
    }
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-input--floating-label .w-input__input:-webkit-autofill & {
      transform: translateY(-160%) scale(0.85);
    }
    // Move label with outline style or with shadow.
    .w-input--focused.w-input--floating-label .w-input__input-wrap--box &,
    .w-input--filled.w-input--floating-label .w-input__input-wrap--box &,
    .w-input--has-placeholder.w-input--floating-label .w-input__input-wrap--box & {
      transform: translateY(-180%) scale(0.85);
    }
    .w-input--focused.w-input--floating-label.w-input--inner-icon-left &,
    .w-input--filled.w-input--floating-label.w-input--inner-icon-left & {left: 0;}
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-input--floating-label.w-input--inner-icon-left .w-input__input:-webkit-autofill & {left: 0;}
  }
}
</style>
