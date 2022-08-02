const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Dia kluar ni ha : ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("done with this task");
        })
    })
})
console.log('starting next task');


//disadvantages- messy code
//alternative- use promises or async await