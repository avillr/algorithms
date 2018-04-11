function matchingBrackets(string) {
    let matchingSet = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    let openingBrackets = "({["
    let closingBrackets = "]})"
    let openStack = []
    for (let char of string){
        if (openingBrackets.includes(char)) {
            openStack.push(char)
        } else if (closingBrackets.includes(char)) {
            if (openStack.length === 0) {
                return false
            } else if (matchingSet[char] !== openStack.pop()){
                return false
            }
        }
    }
    return openStack.length === 0
 }

console.log(matchingBrackets("([])(){}((()))()()"))
