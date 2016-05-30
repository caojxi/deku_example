function camelCaseToDash (myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function css (styles) {
  let result = ''

  for (const style in styles) {
    result += `${camelCaseToDash(style)}:${styles[style]};`
  }

  return result
}
