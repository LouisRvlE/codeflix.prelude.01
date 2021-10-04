function isAlpha(str= ''): boolean {
    for (let char of str) {
        if (!char.match(/[A-Z,a-z]+/g)) {
            return false
        }
    }
    return true
}

console.log(isAlpha("Chopper"))

console.log(isAlpha("Chopper!"))

console.log(isAlpha("Chopper and Usopp"))