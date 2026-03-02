//taking input from user
let n=prompt("Enter a number")
let arr=[]
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr)
const sum= arr.reduce((pre,cur)=>{
    return  pre+cur
})
console.log("Sum = ",sum)
const product=arr.reduce((pre,cur)=>{
    return pre*cur
})
console.log("factorial = ",product)
