function isDigit(str= ''): boolean {
    for (let char of str) {
        if (!char.match(/[0-9]+/g)) {
            return false
        }
    }
    return true
}

console.log(isDigit("42"))

console.log(isDigit("9.4"))

console.log(isDigit("ch0pper"))