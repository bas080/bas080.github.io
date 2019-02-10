const component = require('../component')

component(({ p }) => p('generate rss xml'))().pipe(process.stdout)
