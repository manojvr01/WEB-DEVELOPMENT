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
