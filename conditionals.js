const age=21;
//if statement
if(age>=18){
    console.log("You are eligible to vote");
    //nested if statement
    if(age>=21){
        console.log("You are also eligible to drink alcohol");
    }
    else{
        console.log("You are not eligible to drink alcohol");
    }
}
else{
    console.log("You are not eligible to vote");
}


//else if statement
let grade=85;
if(grade>=90 && grade<=100){
    console.log("You got an A");
}
else if(grade>=80 && grade<90){
    console.log("You got a B");
}
else if(grade>=70 && grade<80){
    console.log("You got a C");
}
else{
    console.log("You got an F");
}

//ternary operator
let height=180;
height>=170 ? console.log("You are tall") : console.log("You are short");



//switch statement
let day=5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}