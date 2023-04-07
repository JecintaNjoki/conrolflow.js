// //Arrays3
// //Write a function that accepts an array of strings and console
// //.logs each element using a for loop.
myelectronics(arr);
function myelectronics(arr){
for(let i=0;i<electronics.length;i++){
    console.log(electronics[i]);
}
}
let electronics=["cable","laptop","tablet","speaker","phone"];


// //Write a function that accepts an array of numbers and uses the
// // forEach() method to console.log each number multiplied by 2.
let a=[5,7,15,56,9,6];
num=0;
forEach (num in a);{
    console.log(num);
    
}

//Write a function that takes in an array of numbers and consoles the 
//first four items multiplied by 8 and the last two added by 5.
// Console the array with the new values
let num=[12,24,50,78,14,8];
let multiply=1
function numbers(arr){
while(i<num.length){
        console.log(num[i]);
        multiply*=8
        sum+=num[i]
}
console.log({multiply})
console.log()
}


//Write a function that takes in the following array and use a 
//while loop to iterate and break when the item is equal 
//to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<arrNum.length;i++){
    if(i===3){
        break;
   }
    console.log("array",arrNum[i]);

}
//Write a function that takes in a an array of strings
// and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
for(let i=0;i<fruits.length;i++){
    console.log("continue",fruits[i]);
    if(i===1){
        continue;
    }
    console.log("continue",fruits[i]);
}