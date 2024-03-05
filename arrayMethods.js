//create an Array
//There are two ways of creating array in js
//1.array constructor
//2.square brackets

var arr=Array(2,4,6);
console.log(arr);

const names=['sanidhya','mayank','ashish','ashutosh']
console.log(names);

//push(): add elements to the array

const array=[2,4,5,6,3];
array.push(1);
console.log(array);

//pop(): remove the last element of the array

array.pop();
console.log(array);

//unshift(): insert element in the beginning

array.unshift(1);
console.log(array);

//shift(): remove the element from the beginning

array.shift();
console.log(array);

//reverse(): reverse the elements of the array
array.reverse();
console.log(array);

//sort(): sort the elements of the array

array.sort();
console.log(array)

//splice method used in two ways:-

//1.adding elements

array.splice(2,2,78,89);
console.log(array);

//removing elements

array.splice(2,2);
console.log(array);

//concat: combine the elements of two arrays

const array1=[4,5,6,7];
const newarr=array.concat(array1);
console.log(newarr);

//indexOf:- find the first index of the element of the array

console.log(array.indexOf(2));

var string=array.join(';');
console.log(string);


const nums=[2,4,6,8];
const even=(num)=>{
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
var out=nums.every(even);
console.log(out);

//reduce: it reduce the array into single array
var value=1;
function mul(num){
    value*=num;
    return value;
}
var output=nums.reduce(mul);
console.log(output);