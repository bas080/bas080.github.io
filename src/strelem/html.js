const tag = require('./tag')
const component = require('./component')
const castStream = require('./stream-cast')

module.exports = component({
  style: tag('style'),
  doctype: () => castStream('<!DOCTYPE html>'),
  section: tag('section'),
  main: tag('main'),
  header: tag('header'),
  footer: tag('footer'),
  dl: tag('dl'),
  dd: tag('dd'),
  dt: tag('dt'),
  ul: tag('ul'),
  li: tag('li'),
  span: tag('span'),
  div: tag('div'),
  link: tag('link', ''),
  html: tag('html'),
  body: tag('body'),
  head: tag('head'),
  title: tag('title'),
  h1: tag('h1'),
  a: tag('a'),
  h2: tag('h2'),
  h3: tag('h3'),
  p: tag('p'),
  article: tag('article')
})
