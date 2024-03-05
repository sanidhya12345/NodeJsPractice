var fs=require('fs');

fs.rename('message.txt','new_message.txt',(error)=>{
    if(error) throw error;
    console.log("file name changed successfully");
})