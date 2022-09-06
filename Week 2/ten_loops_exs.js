const prompt = require('prompt-sync')();

const sum2arr = (arr1, arr2) => {
    let arr1count = 0 
    let arr2count = 0
    arr1.forEach(val => arr1count+=val)
    arr2.forEach(val => arr2count+=val)
    return `${arr1count} + ${arr2count} = ${arr1count+arr2count}`

}

// console.log(sum2arr([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2],[9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]))


const printEven = (n) => {
    for(let i = 1; i <= n; i++){
        if(i%2==0){
            process.stdout.write(`${i} `)
        }
    }
}

// printEven(22)

const printReverse = (arr) => {
    arrReversed = arr.reverse()
    for (let val of arrReversed){
        process.stdout.write(`${val} `)
    }
}

// printReverse([43, "what", 9, true, "cannot", false, "be", 3, true])

const addArrPairs = (arr1, arr2) => {
    let sumArr = []
    arr1.forEach((val,index) => {sumArr[index] = val+arr2[index]})
    return sumArr
}

// console.log(addArrPairs([4, 6, 7],[8, 1, 9]))

const evenLetterToCap = (str) => {
    let newStr = "" ;
    for(let i = 0; i < str.length; i++){
        i%2 !== 0 ? newStr += "Z" : newStr += str[i]        
    }
    return newStr
}

// console.log(evenLetterToCap("javascript"))

const containsY = (str) => {
    return str.includes('y') ? 'yes' : 'no'
}

//console.log(containsY("don’t know why"))

const factorial = (n) => {
    let result = 1;
    for(let i = n; i > 0; i--){
        result *= i
    }
    return result
}

// console.log(factorial(4))

const pinGuess = () => {
    let pin = 1234
    for(let i = 0; i < 4; i++){ 
        let guess = prompt("Plesae make your guess: ")
        if (guess == 1234){
            console.log("That was correct!")
            break
        } else {
            console.log("Sorry that was wrong")
        }
    }
}

// pinGuess()

const checkPalindrome = (str) => {
    let isPalindrome = false
    for(let i = 0; i < str.length/2; i++){
        if(str.charAt(i) == str.charAt(str.length-i-1)){
            isPalindrome = true
        } else {
            isPalindrome = false
        }
    }
    return isPalindrome ? `Yes (${str})` : 'No (${str})'
}

// console.log(checkPalindrome("madam"))

const summation = (num) =>{
    let count = 0;
    for(let i = 1; i <= num; i++){
        count += i
    }
    return count
}

console.log(summation(8))
