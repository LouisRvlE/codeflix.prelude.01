function isAlphaDigit(str= ''): boolean {
    for (let char of str) {
        if (!char.match(/[A-Z,a-z,0-9]+/g)) {
            return false
        }
    }
    return true
}

console.log(isAlphaDigit("ch0pper"))

console.log(isAlphaDigit("1986"))

console.log(isAlphaDigit("1337-42"))