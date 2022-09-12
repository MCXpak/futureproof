function order(words){
    if(words == ""){return ""}
    let arr = words.split(" ")
    let newArr = []
    let a = 1;
    let arrLen = arr.length;
    while(a<=arrLen){
        for(let i = 0; i<arr.length; i++){
            if(arr[i].includes(`${a}`)){
                newArr.push(arr[i])
                console.log(newArr)
                arr.splice(i,1)
                console.log(arr)
                a++
            }
        }
    }
    return newArr.join(" ")
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

//arr[i].includes(`${a}`)
