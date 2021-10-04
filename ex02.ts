function upperCase(str = ''): string {
    let final: string = ''
    for (let char = 0; char < str.length; char++) {
        if (str[char].match(/[a-z]/g)) {
            final += String.fromCharCode(str.charCodeAt(char) - 32)
        } else {
            final += str[char]
        }
    }
    return final
}

console.log(upperCase("Chopper"))

console.log(upperCase("tony tony"))