export interface DetachableProps {
  /**
   * Target element to append the detachable component to.
   * - CSS selector string (e.g. '#my-container', '.some-class')
   * - DOM node
   * - 'activator' - appends to the previous sibling element
   * - true - appends to the default target (.w-app)
   * - false/undefined - uses default target (.w-app)
   */
  appendTo?: string | boolean | object

  /**
   * Use fixed positioning instead of absolute.
   * @default false
   */
  fixed?: boolean

  /**
   * Position the detachable element at the top of the activator.
   * @default false
   */
  top?: boolean

  /**
   * Position the detachable element at the bottom of the activator.
   * @default false
   */
  bottom?: boolean

  /**
   * Position the detachable element at the left of the activator.
   * @default false
   */
  left?: boolean

  /**
   * Position the detachable element at the right of the activator.
   * @default false
   */
  right?: boolean

  /**
   * Align the detachable element to the top when position is left/right.
   * @default false
   */
  alignTop?: boolean

  /**
   * Align the detachable element to the bottom when position is left/right.
   * @default false
   */
  alignBottom?: boolean

  /**
   * Align the detachable element to the left when position is top/bottom.
   * @default false
   */
  alignLeft?: boolean

  /**
   * Align the detachable element to the right when position is top/bottom.
   * @default false
   */
  alignRight?: boolean

  /**
   * Disable automatic positioning of the detachable element.
   * @default false
   */
  noPosition?: boolean

  /**
   * Set a custom z-index for the detachable element.
   */
  zIndex?: number | string | boolean

  /**
   * Allow the detachable element to flip position when it would overflow the viewport.
   * @default true
   */
  allowFlip?: boolean

  /**
   * External activator element. Can be a CSS selector string, Vue ref, or DOM node.
   */
  activator?: string | object
}
