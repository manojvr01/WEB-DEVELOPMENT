let a=999;
// a="manoj";
a=true;
let d=99;
console.log("d is ",typeof(d));
let c=null;
console.log("c is ",typeof(c));
 console.log("a is ",a );
 console.log("type of a is ",typeof(a));

 let v1=15;
 console.log(v1 +23); 

 let v2="15";
console.log(v2 +23);  // here 23 is converted to string and concatenated with "15" and result is "1523"

//let result=null;
let z=1234;
//result=String(z);
z=String(z);
console.log("z is ",z);
console.log("type of z is ",typeof(z));


//let  m="1234";
let m="afgbh";  //naN represents not a number
m=Number(m);
console.log("m is ",m);
console.log("type of m is ",typeof(m));

//let p=1234;
let p=0;   //only 0 is converted to false and all other numbers are converted to true
p=Boolean(p);
console.log("p is ",p);
console.log("type of p is ",typeof(p));