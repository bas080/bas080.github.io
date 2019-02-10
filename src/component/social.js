const component = require('../component')

module.exports = component(({ h2, dl, dt, dd, a }) => [
  h2('Social'),
  dl([
    dt('Mastodon'),
    dd(a('@bas080@quey.org', { href: 'https://quey.org' })),
    dt('GitHub'),
    dd(a('https://github.com/bas080', {
      href: 'https://github.com/bas080'
    })),
    dt('SoundCloud'),
    dd(a('https://soundcloud.com/dj-bass', {
      href: 'https://soundcloud.com/dj-bass'
    })),
    dt('RSS'),
    dd(a('https://github.com/bas080.github.io/commits/master.atom', {
      href: 'https://github.com/bas080/bas080.github.io/commits/master.atom'
    }))
  ])
])
