const countTarget = (arr, target) => {
    let success = false;
    let count = 0
    if(arr.includes(target)){
        arr.forEach(el => {
            if(el === target){
                count++;
            }
        })
        success = true;
        console.log("made true")
    }
    return {success: success, count: count}

}

console.log(countTarget([1,1,1,2,1,1,1,1], 5))
