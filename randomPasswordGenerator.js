var digits='01234567890';
var lower='abcdefghijklmnopqrstuvwxyz';
var upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols='!@#$%^&';

function randomTwodigits(){
    var digPass="";
    for(let i=0;i<2;i++){
        let index=parseInt(Math.random()*(digits.length-1));
        digPass+=digits.charAt(index);
    }
    return digPass;
}

function randomCharacters(){
    let charPass="";
    for(let i=0;i<=2;i++){
        let index1=parseInt(Math.random()*(lower.length-1));
        let index2=parseInt(Math.random()*(upper.length-1));
        charPass+=lower.charAt(index1);
        charPass+=upper.charAt(index2);
    }
    return charPass;    
}

function randomSymbols(){
    let symPass="";
    for(let i=0;i<=2;i++){
        let index=parseInt(Math.random()*(symbols.length)-1);
        symPass+=symbols.charAt(index);
    }
    return symPass;
}

var password=randomCharacters()+randomSymbols()+randomTwodigits();
var fs=require('fs');

fs.writeFile('password.txt',password,(error)=>{
    if(error){
        throw error;
    }
    console.log("password written successfully");
})