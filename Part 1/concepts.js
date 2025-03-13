let firstName = 'Felipe' 
console.log(firstName)

const numOne = 10
const numTwo = 86
let result = numOne * numTwo //Arithmetic operations: + - * / ** %
const numThree = '5' // parseInt, Number
let stringOperation = numOne * numThree
console.log('The operation result is ' + result)
console.log(`The operation result is ${result}`)
console.log(stringOperation)
console.log(typeof numThree)

let oneString = "This is a String."
console.log(oneString.charAt(7))
console.log(oneString.charCodeAt(4))
console.log(oneString.indexOf('S', 4))
console.log(oneString.lastIndexOf('a', oneString.length))
console.log(oneString.match(/[A-Za-z]+/g))
console.log(oneString.search(/[a-z]+/g))
console.log(oneString.replace(/i/g, "1"))
console.log(oneString.slice(2, 7))
console.log(oneString.slice(-3, -1))
console.log(oneString.split(' ', 5))
console.log(oneString.toUpperCase())
console.log(oneString.toLowerCase())
