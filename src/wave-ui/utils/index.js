/**
 * Takes CSS classes as a string array or object and turn them into an object.
 * @param {string|Array<string>|object} classes the CSS classes to merge into an object
 * @returns {object} the CSS classes as an object
 */
export const objectifyClasses = (classes = {}) => {
  if (typeof classes === 'string') classes = { [classes]: true }
  else if (Array.isArray(classes)) classes = { [classes.join(' ')]: true }
  return classes
}
