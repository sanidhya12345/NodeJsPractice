//create a new console.

var fs=require('fs');
const {Console}=require('console');
const output=fs.createWriteStream('./stdout.log');
const error=fs.createWriteStream('./stderr.log');

const print =new Console(output,error);
const name='sanidhya';
print.log('name : '+name);
print.log("this is saved into the file");