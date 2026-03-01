function redfunc(){
    const box1=document.getElementById('box-1')
    box1.style.backgroundColor="red"
    box1.style.color="white"
    
}
function bluefunc(){
    const box2=document.getElementById('box-2')
    box2.style.backgroundColor="blue"
    box2.style.color="white"
    
}
function greenfunc(){
    const box3=document.getElementById('box-3')
    box3.style.backgroundColor="green"
    box3.style.color="white"
}
function yellowfunc(){
    const box4=document.getElementById('box-4')
    box4.style.backgroundColor="yellow"
    box4.style.color="white"
}
 function greetUser(){
            const name = document.getElementById("nameInput").value;
            const header = document.getElementById("greeting");

            if(name.trim() !== ""){
                header.textContent = "Hello, " + name;
            }
        }