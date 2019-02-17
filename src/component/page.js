const component = require('../component')
const path = require('path')
const fs = require('fs')
// const svg = require('../title')

const inlineStyle = component(({ style }, filePath) => style(
  fs.createReadStream(filePath)))


module.exports = component(({ meta, header, doctype, html, head, body, title, h1, section, a }, contents, footer) => {
  return [
    doctype(),
    html([
      head([
        inlineStyle(path.join(__dirname, '../styles/main.css')),
        meta('', {name: 'theme-color', content: '#cc0051'}),
        title('bas080.github.io')
      ]),
      body([
        // svg(),
        header(
          h1(a('bas080.github.io', {
            href: '/index.html'
          })),
          { class: 'invert' }
        ),
        section(contents, { class: 'content' }),
        footer
      ])
    ], {
      lang: 'en'
    })
  ]
})
