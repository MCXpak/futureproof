const countDown = (start, stop, final) => {
    if(start > stop){
        for(let i = start; i > stop-1; i--){
            console.log(i)
        }
        
    } else {
        for(let i = start; i < stop; i++){
            console.log(i)
        }
    }
    console.log(final)
}

countDown(1,10,"Boom!")
