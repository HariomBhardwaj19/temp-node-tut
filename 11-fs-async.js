//this is an asynchronous way of writing FS
//this is faster than synchronous because it doesnt works in top to bottom way
const {readFile, writeFile} = require("fs")
readFile('./content/first.txt', 'utf8', (err,result)=>{
if(err){
    console.log(err)
}
const first= result;
readFile('./content/second.txt', 'utf8', (err,result)=>{
if(err){
    console.log(err)
}
 const second = result;
 writeFile('./content/async.txt', `here is the async file ${first} ${second}`,(err,result)=>
 {
     if(err){
         console.log("error")
         
        }
        console.log(result)
    })
})
})
// writeFile("./content/f")