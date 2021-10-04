function isUpperCase(str= ''): boolean {
    for (let char of str) {
        if (!char.match(/[A-Z]+/g)) {
            return false
        }
    }
    return true
}

console.log(isUpperCase("CHOPPER"))


console.log(isUpperCase("Chopper"))