const showdown  = require('showdown')
const converter = new showdown.Converter()
const mdDocs = require('./md')
const htmlDocs = mdDocs.map(mdDoc => Object.assign({}, mdDoc, {html: converter.makeHtml(mdDoc.markdown)}))

const addHtml= innerHtml =>  `
<!DOCTYPE html>
<html>
  <meta charset="UTF-8">
  <head></head>
  <body>
    ${innerHtml}
  </body>
</html>
`

const fs = require('fs')
htmlDocs.forEach(htmlDoc => 
  fs.writeFileSync('dist/' + htmlDoc.name + '.html', addHtml(htmlDoc.html))
)
