var fs=require('fs');

var content='\nMy age is 21.';
fs.appendFile('bio.txt',content,(error)=>{
    if(error){
        throw error;
    }
    console.log("data appended successfully");
})
