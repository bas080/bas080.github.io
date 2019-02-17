const component = require('./strelem/svg.js')
const { times } = require('ramda')

module.exports = component(({ svg, text, g, clipPath, circle, rect, defs }) =>
  svg([
    defs(
      clipPath(
        // TODO: support <tag/> elements
        times(index => {
          const cx = index % 100
          const cy = 20 + (1 + Math.sin(cx * 0.2)) * 30
          const r = Math.abs(Math.sin((cy + cx) * 0.05)) * 0.04

          return circle('', { cx: `${cx}%`, cy: `${cy}%`, r: `${r}em` })
        }, 1000), {
          id: 'dots-clip-path'
        }
      )
    ),
    g([
      text('bas080.github.io', {
        x: 0,
        y: '2em',
        fill: 'blueviolet'
      }),
      g([
        rect('', {
          x: 0,
          y: 0,
          width: '100%',
          height: '4em',
          fill: 'blueviolet'
        }),

        text('bas080.github.io', {
          x: 0,
          y: '2em',
          fill: '#131313',
          stroke: '#131313',
          'stroke-width': '0.1em'
        })
      ], {
        'clip-path': 'url(#dots-clip-path)'
      })
    ], {
      style: 'font-size: 5vw;'
    })
  ])
)
