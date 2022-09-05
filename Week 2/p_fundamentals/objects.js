const person = {
    name: 'Mourad',
    age: 21,
    gender: 'Male'
}

let {name, age, gender='Unknown'} = person;

console.log(name)
console.log(gender)

const printDetails = ({name, age}) => {
    console.log(`The person's name is ${name} and they are ${age} years old`)
}

printDetails(person)
