function swapCase(str= ''): string {
    let final:string = ''
    for (let char of str) {
        if (char.match(/[A-Z]+/g)) {
            final += char.toLowerCase()
        } else if (char.match(/[a-z]+/g)) {
            final += char.toUpperCase()
        } else {
            final += char
        }
    }
    return final
}

console.log(swapCase("One Code"))

console.log(swapCase("1337 Fruits"))