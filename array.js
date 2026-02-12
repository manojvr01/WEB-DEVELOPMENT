//arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr[3]);   //accessing array element through index
arr[5] = 6;   //adding element to array
console.log(arr[5]);
console.log(arr);

// multiple datatypes in array
let arr2 = [1, "Manoj", true, null, undefined];
console.log(arr2);
//array length
console.log(arr.length);
console.log(arr2.length);
//array update
arr2[0] = 10;
console.log(arr2);

let arr3 = arr2;
console.log(arr3);
arr3[0] = 20;
//arr2 also gets updated because arr3 is referencing the same array in memory
console.log(arr2);
console.log(arr3);

//indexOf method
console.log(arr3.indexOf(null)); //returns index of element null in array

//includes method
console.log(arr3.includes("Manoj")); //returns true if element "Manoj" is present in array
console.log(arr3.includes("John")); //returns false if element "John" is not present in array

//push method
arr3.push("Laptop"); //adds element to end of array
console.log(arr3);

//unshift method
arr3.unshift("Phone"); //adds element to beginning of array
console.log(arr3);

//pop method
arr3.pop(); //removes last element from array
console.log(arr3);

//shift method
arr3.shift(); //removes first element from array
console.log(arr3);

//sort method
let arr4 = [5, 2, 8, 1, 4];
console.log(arr4);
arr4.sort(); //sorts array in ascending order
console.log(arr4);

//slice method
let arr5 = arr4.slice(1, 4); //returns a new array containing elements from index 1 to 3
console.log(arr5);

