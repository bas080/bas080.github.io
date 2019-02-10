const fs = require('fs')
const { spawnSync } = require('child_process')
const { isEmpty, complement, prop, min, max } = require('ramda')
const path = require('path')
const articles = require('./page/articles')
const article = require('./page/article')
const home = require('./page/home')
const json = require('../articles.json')

const buildDir = path.join(__dirname, '../articles/')
const articlesDir = path.join(__dirname, '../articles')
const data = json.articles.map(({ id: name }) => {
  const file = `${name}.md`
  const filePath = path.join(articlesDir, file)
  const hashes = spawnSync('git', ['log', '--format=format:%H\t%ai\t%an', filePath])
    .stdout
    .toString()
    .split('\n')
    .filter(complement(isEmpty))
    .map(line => {
      const [hash, date, author] = line.split('\t')

      return {
        hash,
        date: new Date(date),
        author
      }
    })

  return {
    name,
    title: name.replace(new RegExp('-', 'g'), ' '),
    filePath,
    file,
    hashes,
    stats: {
      mtime: hashes.map(prop('date')).reduce(max),
      ctime: hashes.map(prop('date')).reduce(min)
    }
  }
})

home(data)
  .pipe(fs.createWriteStream(path.join(__dirname, '../index.html')))

articles(data)
  .pipe(fs.createWriteStream(
    path.join(buildDir, './index.html')))

data.forEach(datum => {
  const writePath = path.join(buildDir, `${datum.name}.html`)

  article({ article: datum, articles: data })
    .pipe(fs.createWriteStream(writePath))
})
