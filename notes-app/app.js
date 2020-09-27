const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')

const log = console.log

log(chalk.bold.green('Success!'))
const sum = getNotes()

console.log(validator.isURL('https://www.google.com'))
