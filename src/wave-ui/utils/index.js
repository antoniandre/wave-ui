/**
 * Takes CSS classes as a string array or object and turn them into an object.
 *
 * @param {String|Array|Object} classes the CSS classes to merge into an object
 * @return {Object}
 */
export const objectifyClasses = (classes = {}) => {
  if (typeof classes === 'string') classes = { [classes]: true }
  else if (Array.isArray(classes)) classes = { [classes.join(' ')]: true }
  return classes
}
