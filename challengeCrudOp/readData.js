var fs=require('fs');
fs.readFile('bio.txt','utf-8',(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data);
})