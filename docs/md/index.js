const fs = require('fs')
const mdFiles = fs.readdirSync('./md')
  .filter(file => file.match(/\.md$/))
  .map(file => ({name: file.replace(/\.md$/, ''), markdown: fs.readFileSync(`./md/${file}`, 'utf8')}))

module.exports = mdFiles
