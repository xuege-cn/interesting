const yaml = require('js-yaml')
const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, 'app.yaml')
const file = fs.readFileSync(filePath)
const config = yaml.safeLoad(file)

let str = yaml.safeDump(config)
fs.writeFileSync('app-copy.yaml', str)

console.log(config)
console.log(str)