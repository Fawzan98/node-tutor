const {readFileSync, writeFileSync, write} = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second)


// write new file, klau xde file dia auto buat, klau ya x buat pape
// flag a = append
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}

)
console.log('done with this task');
console.log('starting with the next one');

