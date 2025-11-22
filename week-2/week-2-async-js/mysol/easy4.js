const fs=require('fs');

async function writeToFile(filename, Content){
    try{

        await fs.promises.writeFile(filename,Content,'utf8');
        console.log("File has been written successfully");
    }
    catch(error){
        console.error("error writing file:",error);
    }

}
writeToFile('example.txt','task incomplete')