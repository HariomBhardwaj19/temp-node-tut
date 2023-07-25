//this is a synchronous way of writing FS
//this runs linearly in an ordered way from top to bottom.
const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result.txt', "this is th file created", {flag: 'a'})
//due to the flag: 'a' the result are appended and sort of concatenated with the last result.