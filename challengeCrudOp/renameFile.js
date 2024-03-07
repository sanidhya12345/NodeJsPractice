var fs=require('fs');

fs.rename('bio.txt','mybio.txt',(error)=>{
    if(error){
        throw error;
    }
    console.log('rename success');
})