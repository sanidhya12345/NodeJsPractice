var fs=require('fs');

//Write using file system module
var content="this is sanidhya varshney";
fs.writeFileSync('message.txt',content,(error)=>{
    if(error) throw error;
    console.log("file saved successfully");
})

fs.readFile('message.txt',(error,data)=>{
    if(error){
        throw error;
    }
    console.log("Data: "+data);
})