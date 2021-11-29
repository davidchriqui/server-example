const http = require('http')
const pjson = require('./package.json')

const app = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/json'
  })

  const res = {
    version: pjson.version,
    ...Object.keys(process.env).reduce((obj, key) => {
      obj[key] = process.env[key]
      
      return obj
    },{})
  }

  response.write(Buffer.from(JSON.stringify(res), 'utf8'))
  response.end()
})

app.listen(3000)
