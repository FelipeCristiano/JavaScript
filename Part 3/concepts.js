function sum (x, y) {
    const result = x + y
    return result
}
function root (n) {
    return n ** 0.5
}
console.log(sum(2, 7))
console.log(root(9))


const personOne = {
    name: 'Felipe',
    surname: 'Cristiano',
    age: 25
}
console.log(personOne.name)
console.log(personOne.surname)
console.log(personOne.age)
console.log(personOne)


function personCreator (name, surname, age) {
    return{
        name: name,
        surname: surname,
        age: age
    }
}
const personTwo = personCreator('Lia', 'Eduarda', 27)
const personThree = personCreator('Tiago', 'Linhares', 27)
console.log(personTwo)
console.log(personThree)
