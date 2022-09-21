const doubleArr = (arr) => {
    let newArr = arr.map(x => x * 2)

    return newArr
}

// describe(){
//     test(){
//         exists
//         returns an arr
//         test case 1 
//     }
// }

const maskify = (str) => {
    if (str.length < 4){
        return str
    }
    let newStr = ""
    for (let i = 0; i < str.length-4; i++){
        newStr += '#'
    }
    newStr += str.substring(str.length-4,str.length)

    return newStr
}

// describe(){
//     test(){
//         exists
//         returns a str
//         test case 1
//     }
// }


// console.log(maskify("0121384376574654"))

const lowestSum = (numArray) => {
    numArray = numArray.sort((a, b) => {  return a - b;  });
    return numArray[0] + numArray[1]
}

// describe(){
//     test(){
//         exists
//         returns a number
//         test case 1 
//     }
// }

// console.log(lowestSum([19, 5, 42, 2, 77]))

const sumBetween2Num = (a,b) => {
    if(a > b){
        let temp = a
        a = b
        b = temp
    }
    let counter = a;
    let sum = 0;
    while (counter <= b){
        sum += counter
        counter++
    }
    return sum 
}

// describe(){
//     test(){
//         exists
//         returns an arr
//         test case 1 
//     }
// }

console.log(sumBetween2Num(2,0))


const longestString = (str1, str2) => {
    let newStr = ""

    for(const val of str1){
        if(!newStr.includes(val)){
            newStr += val
        }
    }

    for(const val of str2){
        if(!newStr.includes(val)){
            newStr += val
        }
    }

    return newStr.split('').sort().join('');

}

// describe(){
//     test(){
//         exists
//         returns an str
//         test case 1 
//     }
// }

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// console.log(longestString(a, b))

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const membership = (arr) => {
    let seniorOrOpenArr = []

    for (let i=0; i<arr.length; i++){
        if (arr[i][0] >= 55 && arr[0][1] > 7) {
            seniorOrOpenArr.push('Senior');
        } else { 
            seniorOrOpenArr.push('Open');
        }
    }
    
    return seniorOrOpenArr
}


// describe(){
//     test(){
//         exists
//         returns an arr
//         test case 1 
//     }
// }
// console.log(membership(input))
