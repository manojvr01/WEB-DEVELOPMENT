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
