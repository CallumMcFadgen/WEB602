// 1 - Return the sum of two numbers
// Create a function that takes two numbers as arguments and returns their sum.

// 1st option
console.log(1 + 2);

//2nd option
let paramOne = null;
let paramTwo = null;

function BasicAdditionV1(paramOne, paramTwo)
{
  let result = (paramOne + paramTwo);
  return console.log(result);
};

BasicAdditionV1(1, 2);

//3rd option (removed variable decleration as not needed)
function BasicAdditionV2( paramOne, paramTwo)
{
  let result = (paramOne + paramTwo);
  return console.log(result);
};

BasicAdditionV2(1, 2);


// // 2 - Return the Remainder from Two Numbers
// // There is a single operator in JavaScript capable of providing the remainder of a division operation. 
// // Two numbers are passed as parameters. 
// // The first provider divided by the second parameter will have a remainder, possibly zero. Return that value.

// 1st option
console.log(5 % 2);

// 2nd option
let startingParam = null;
let divisonParam = null;

function FindRemainderV1(startingParam, divisonParam)
{
  let remainder = (startingParam % divisonParam);
  return console.log(remainder);
};

FindRemainderV1(5, 2);


// 3rd option
function FindRemainderV2(paramOne, paramTwo)
{
  let remainder = (paramOne % paramTwo);
  return console.log(remainder);
};

FindRemainderV2(5, 2);
