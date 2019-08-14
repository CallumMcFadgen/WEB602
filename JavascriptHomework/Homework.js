// 1 - Return the sum of two numbers
// Create a function that takes two numbers as arguments and returns their sum.
console.log('Addition Function');

function BasicAdditionV2( paramOne, paramTwo)
{
  let result = (paramOne + paramTwo);
  return console.log(result);
};

BasicAdditionV2(3, 2);
BasicAdditionV2(-3, -6);
BasicAdditionV2(7, 3);
console.log('\n');


// // 2 - Return the Remainder from Two Numbers
// // There is a single operator in JavaScript capable of providing the remainder of a division operation. 
// // Two numbers are passed as parameters. 
// // The first provider divided by the second parameter will have a remainder, possibly zero. Return that value.
console.log('Remainder Function');

function FindRemainderV2(paramOne, paramTwo)
{
  let remainder = (paramOne % paramTwo);
  return console.log(remainder);
};

FindRemainderV2(1, 3);
FindRemainderV2(-9, 45);
FindRemainderV2(5, 5);
console.log('\n');


// 3. Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.
console.log('Area of a Triangle Function');

function TriangleArea(baseParam, heightParm)
{
 let area = (baseParam * heightParm) / 2;
 return console.log(area);
};

TriangleArea(3, 2);
TriangleArea(7, 4);
TriangleArea(10, 10);