// import fs from "node:fs";
import fs from "node:fs/promises";


// const a = fs.readFileSync('./test.txt');
// const a = fs.readFile('./test.txt',(err,data)=>{
//     console.log(data);
    
// });

 const a =  await fs.readFile('./test.txt')

 console.log(a);
 

console.log("end");
