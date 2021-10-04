function isLowerCase(str= ''): boolean {
    for (let char of str) {
        if (!char.match(/[a-z]+/g)) {
            return false
        }
    }
    return true
}

console.log(isLowerCase("chopper"))

console.log(isLowerCase("Chopper"))

console.log(isLowerCase("ch0pper"))