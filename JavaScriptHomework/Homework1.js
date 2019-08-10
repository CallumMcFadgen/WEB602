// 1 - Return the sum of two number
// Create a function that takes two numbers as arguments and returns their sum.


let paramOne = null;
let paramTwo = null;

function AddNumbers(paramOne, paramTwo)
{
  const result = (paramOne + paramTwo);
  return console.log(result);
};

AddNumbers(4, 5);


// 2 - Return the Remainder from Two Numbers
// There is a single operator in JavaScript capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first provider divided by the second parameter will have a remainder, possibly zero. Return that value.


let startingParam = null;
let divisonParam = null;

function FindRemainder(startingParam, divisonParam)
{
  const remainder = (startingParam % divisonParam);
  return console.log(remainder);
};

FindRemainder(5,2)

