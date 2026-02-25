// console.log(document.body)
// const bgr=document.body;
// bgr.style.backgroundColor="black";
// const div=document.getElementById("box-4");
// div.style.backgroundColor="blue";

// const { Component } = require("react");

    

//modifying html elements
// const box3=document.getElementById("box-3");
// box3.innerHTML="<h1>3 rd box</h1>";
// const box1=document.getElementById("box-1");
// box1.innerHTML="<h1> 1 st  box</h1>";
// const box2=document.getElementById("box-2");
// box2.innerHTML="<h1>2 nd box</h1>";
// const box4=document.getElementById("box-4");
// box4.innerHTML="<h1>4 th box</h1>";


// const box1c=document.getElementById("box-1");
// box1c.style.backgroundColor="black";
// const box2c=document.getElementById("box-2");
// box2c.style.backgroundColor="orange";


// const para=document.getElementById("para");
// para.style.color="green";


// const box2c=document.getElementById("box-2");
// box2c.classList.add("circle");

// const box3=document.getElementById("box-3");
// box2c.classList.remove('circle')

// const box= document.getElementsByClassName('box');
// for(let i=0;i<box.length;i++){
//     box[i].classList.add('circle');
// }

//1st get acess
//2nd is the contents
//3rd where it has to be added


const newpara=document.createElement("p");
newpara.innerText="This is a new para";
const cont=document.getElementById('cont');
cont.appendChild(newpara);