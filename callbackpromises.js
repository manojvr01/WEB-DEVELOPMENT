setTimeout(function(){
    console.log("this code will run in 10 seconds late in time")
}, 10000);
function getcandies(){
    setTimeout(()=>{
        const candies="🍬";
        console.log(candies);
    },5000)
}
getcandies(()=>{
    console.log("here id my candy",candies);
    
});
const ticketbooking=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error=false;
        if(!error){
            resolve("ticket booked successfully");
        }
        else{
            reject("ticket booking failed");
        }
    },3000)
});
ticketbooking.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("ticket booking process completed");
});

function getcandies(){
    return new Promise((resolve,reject)=>{
        // resolve("successfully got candies");
        reject("Denied");
    //     setTimeout(()=>{
    //         const candies="🍬";
    //         resolve(candies);
    //     },5000)
    });

}
console.log(getcandies());