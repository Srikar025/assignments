const fs = require('fs').promises;

async function run() {
    const content = await fs.readFile('example.txt', 'utf-8');
    console.log(content);    // use the variable
    let n=content.length
    let sp=0
    let str="new "

    for(let i=0;i<n;i++){
        if(content[i]==" "){
            sp++;
            if(sp>=2){
                sp--;
                continue;
                
            }
        }
        if(content[i]!=" "){
            sp=0
        }
        str=str+content[i]



    }
    console.log(str)

    async function writefile(filename,content){

        try{
            await fs.writeFile(filename,content,'utf-8')
            console.log("file is cleaned")

        }
        catch(error){
            console.error("file is failed to clean")
        }
    }
    writefile('example.txt',str)    



    


}



run();


// const fs = require('fs');

// // Read file synchronously
// let data = fs.readFileSync('example.txt', 'utf8');

// console.log("File contents:", data);
// let n=data.length
// for(let i=0;i<n;i++){
//     if(data[i]==" "){
//         console.log("X")
//     }
// }