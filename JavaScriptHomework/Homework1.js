// 1 - Return the sum of two number
// Create a function that takes two numbers as arguments and returns their sum.


const paramOne = 5;
const paramTwo = 4;

function AddNumbers(paramOne, paramTwo){
  let result = (paramOne + paramTwo);
  return console.log(result);
};

AddNumbers();


// 2 - Return the Remainder from Two Numbers
// There is a single operator in JavaScript capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first provider divided by the second parameter will have a remainder, possibly zero. Return that value.


const startingParam = 5;
const divisonParam = 2;

function FindRemainder(startingParam, divisonParam){
  let remainder = (startingParam % divisonParam);
  return console.log(remainder);
};

FindRemainder()

