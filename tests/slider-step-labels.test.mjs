import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import vm from 'node:vm'

const source = readFileSync(new URL('../src/wave-ui/components/w-slider.vue', import.meta.url), 'utf8')
const script = source.split('<script>')[1].split('</script>')[0]
  .replace(/^import .*$/gm, '')
  .replace('export default', 'globalThis.component =')
const context = { FormElementMixin: {}, FocusableMixin: {}, useWaveUiFormIds: () => ({}) }
vm.runInNewContext(script, context)

for (const [state, isDisabled, isReadonly] of [
  ['enabled', false, false],
  ['disabled', true, false],
  ['readonly', false, true],
  ['disabled and readonly', true, true]
]) {
  for (const percentage of [0, 50, 100]) {
    test(`${state}: clicking the ${percentage}% step label`, () => {
      const events = []
      const slider = {
        isDisabled, isReadonly, minVal: 10, scaledRange: 20,
        rangeValuePercent: 25, rangeValueScaled: 15,
        $emit: (...args) => events.push(args)
      }
      for (const [name, method] of Object.entries(context.component.methods)) slider[name] = method.bind(slider)
      slider.onStepLabelClick(percentage)
      const interactive = !isDisabled && !isReadonly
      assert.equal(slider.rangeValuePercent, interactive ? percentage : 25)
      assert.equal(slider.rangeValueScaled, interactive ? 10 + percentage / 5 : 15)
      assert.deepEqual(events, interactive
        ? [['update:modelValue', 10 + percentage / 5], ['input', 10 + percentage / 5]]
        : [])
    })
  }
}
