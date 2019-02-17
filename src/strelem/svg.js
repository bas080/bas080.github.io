const tag = require('./tag')
const component = require('./component')

module.exports = component({
  svg: tag('svg'),
  line: tag('line'),
  circle: tag('circle'),
  clipPath: tag('clipPath'),
  text: tag('text'),
  g: tag('g'),
  rect: tag('rect'),
  defs: tag('defs')
})
