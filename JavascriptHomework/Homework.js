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
console.log('\n');


//4. Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangles third edge.
console.log('Max Edge of a Triangle Function');

function MaxTriangleEdge(sideOne, sideTwo)
{
  let maxEdge = (sideOne + sideTwo) -1;
  return console.log(maxEdge);
};

MaxTriangleEdge(8, 10);
MaxTriangleEdge(5, 7);
MaxTriangleEdge(9, 2);
console.log('\n');


//5. Return the Next Number from the Integer Passed
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
console.log('Plus One Function');

function PlusOne(paramOne)
{
  let Result = (paramOne + 1);
  return console.log(Result);
}

PlusOne(0);
PlusOne(9);
PlusOne(-3);
console.log('\n');


//6. Multiple of 200
//Create a function that takes an integer and returns true if it's divisible by 200, otherwise return false.
console.log('Divide by 200 Function');

function DivideBy200(paramOne)
{
  if (paramOne % 200 ===0)
  {
    let result = true;
    return console.log(result);
  }
  else
  {
    let result = false;
    return console.log(result);
  }
};

DivideBy200(1);
DivideBy200(2000);
DivideBy200(200);
console.log('\n');


//7. Is the String Empty?
//Create a function that returns true if a string is empty and false otherwise.
console.log('Check Empty String function');

function EmptyStringCheck(paramOne)
{
  if (paramOne == null || paramOne == undefined || paramOne.length == 0)
  {
    let result = true;
    return console.log(result);
  }
  else
  {
    let result = false;
    return console.log(result);
  }
};

EmptyStringCheck("");
EmptyStringCheck(" ");
EmptyStringCheck("a");
console.log('\n');


//8. Compare Strings by Count of Characters
//Create a function that takes two strings as arguments and return either true or falsedepending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
console.log('Compare string length Function');

function StringCompare(paramOne, paramTwo)
{
  if(paramOne.length == paramTwo.length)
  {
    let result = true;
    console.log(result);
  }
  else
  {
    let result = false;
    console.log(result);
  }
};

StringCompare("AB", "CD");
StringCompare("ABC", "DE");
StringCompare("hello", "edabit");


