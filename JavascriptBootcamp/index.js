// output to console
// console.log("hello world!")

// declear a variable
// var name = "Callum McFadgen"
// output the variable
// console.log(name)

// bad practice - complier does not know what bla is because the type is decleared after the data
// bla = 2
// var bla
// console.log(bla)

//good practice - complier knows what bla is because the type is decleared first then data added to variable
// var bla
// bla = 2
// console.log(bla)

//bad practice - variable name is used twice
// let name = "Nelson"
// let name = "NZ"
// console.log(name)

//"let" will allow the variable to be changed - let is flexibile
// let name = "Nelson"
// name = "NZ"
// console.log(name)

//"const" fixes the variable value - so it cant be changed
// const lastName = "McFadgen"
// lastName = "test"
// console.log(lastName)

//concatenated variables
// const lastName = "McFadgen"
// const firstName = "Callum"
// console.log(firstName, lastName)

//Number
// const num = 100.99
// console.log(num)

//basic maths with numbers, +-/*
const numOne = 12
const numTwo = 5

const result = numTwo % numOne
console.log(result)
