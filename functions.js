//functions
const a = 10;
const b = 20;
console.log(a + b); //output: 30

//function declaration
//named function
function add(x,y){
    let result= x + y;
    console.log(result);
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