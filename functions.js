//functions
const a = 10;
const b = 20;
console.log(a + b); //output: 30

//function declaration
//named function
function add(x,y){
    console.log(x + y);
}
//function calling
add(50, 10); //output: 60


//without parameters
function greet(){
    console.log("Hello, welcome to JavaScript functions!");
}

greet();


function welcome(name){
    console.log("welcome my website",name);
}
welcome("Manoj");



//function expression or anonymous function
//function without name
//always declared first before calling like variable declaration

//function declaration
const addNumbers = function(x,y){
    let result= x + y;
    console.log(result);
}


//function calling
addNumbers(30, 30); //output: 50
console.log(addNumbers); //output: function definition
console.log(addNumbers(20,90)); //output: 110

//nested function
function addsquares(x,y){
    function squares(num){
        num*num;
        return num*num;
    }
}
addsquares(2);


//advanced functions

let greet1 = () =>{
    console.log("welcome to arrow function");
}
greet1();

//with parameters
let greet2 = (name) =>{
    console.log("welcome to arrow function",name);
}
greet2("Manoj");


//examples
const square=(num) => {
    return console.log(num*num);
}
square(9);

//simple way for simple function
const cube=(num)=>console.log(num*num*num);
cube(5);


//callback function
const calculate=(a,b,operation) =>{
    return operation(a,b);
}
calculate(5,90,function(x1,x2){
    return console.log(x1+x2);
})
calculate(5,90,function(x1,x2){
    return console.log(x1-x2);
})
calculate(5,90,function(x1,x2){
    return console.log(x1*x2);
})
calculate(5,90,function(x1,x2){
    return console.log(x1/x2);
})


//array callback function
const num=[1,2,3,4,-5,-7,-8,0];
const negativeNumbers=(num)=> (num<0);

//find method returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
const result=num.find(negativeNumbers);
console.log(result); //output: -5

//filter method creates a new array with all elements that pass the test implemented by the provided function.
const result1=num.filter(negativeNumbers);
console.log(result1); //output: [-5, -7, -8]

//findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
const result2=num.findIndex(negativeNumbers);
console.log(result2); //output: 4

//forEach method executes a provided function once for each array element.
num.forEach((num,index)=>{
    console.log("Element:",num,"Index:",index);
})


//tocheck characters in fucntion problem

function countvowels(str){
    let count=0;
    for( const char of str)
        if(char==="a" || char==="e"|| char==="i"|| char==="o"||char==="u")
            count++;         
console.log(count);
}

//in arrow funtion format
const countvow=(str)=>{
     let count=0;
    for( const char of str)
        if(char==="a" || char==="e"|| char==="i"|| char==="o"||char==="u")
            count++;         
console.log(count);
}

//for each method

let brr=[2,3,45,6,7,8]
brr.forEach((val)=>{
    console.log(val);
})

//for the array numbers print intd square
let arr=[2,3,4,5,6,7,8]
arr.forEach((val)=>{
    console.log(val*val);
})

console.log("this stops here")


//map method for array
let crr=[2,4,6]
 const map=crr.map((val)=>{
    return val
})
console.log(map)

//map method forms new array and allos to manipualt thriugh input array

let crr1=[2,4,6]
 const map1=crr1.map((val)=>{
    return val**2
})
console.log(map1)

//filtermethod

let crr2=[2,4,3,7,6,8]
 const filter1=crr2.filter((val)=>{
    return val%2==0
})
console.log(filter1)

//alert stops the exution
//alert("helllllllllllo");

//reduce method in array
const zrr=[1,2,3,4]
const reduceoutput=zrr.reduce((res,cur)=>{
    return res+cur;
})
console.log(reduceoutput) 

//return ,max element

const zrr2=[111,2,3,4]
const reduce=zrr2.reduce((res,cur)=>{
        //  if(res>cur)
        //     return res
        // else
        //     return cur  or
        return res>cur?res:cur;
})
console.log(reduce)


//filter out students whoscored 90+
const marks=[45,60,90,95,99]
const gradeA=marks.filter((val)=>{
    return val>90
})
console.log(gradeA)