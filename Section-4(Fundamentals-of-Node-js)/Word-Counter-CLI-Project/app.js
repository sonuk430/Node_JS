import {readFile} from 'node:fs/promises';

const content = await readFile('./file-1.txt','utf-8')


const wordaArr = content.split(/[\W]/).filter((w)=>w);

const wordaArrCount = {};

console.log(process.argv);


wordaArr.forEach(word => {
    if(word in wordaArrCount){
        wordaArrCount[word] +=1;
    }
    else{
        wordaArrCount[word] = 1;
    }
});

// console.log(wordaArrCount);
