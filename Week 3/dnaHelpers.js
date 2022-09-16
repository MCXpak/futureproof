const dna = (str) => {
    str = str.toLowerCase();
    let result = ""
    for(let letter of str){
        switch(letter){
            case "t":
                result += "a"
                break
            case "a":
                result += "t"
                break
            case "c":
                result += "g"
                break
            case "g":
                result += "c"
                break
        }
    }
    return result.toUpperCase()

}

module.exports = {dna}
