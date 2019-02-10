const component = require('../component')

module.exports = component(({ section }, contents) => section(
  contents,
  { class: 'invert footer' }
))
