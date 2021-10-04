function lowerCase(str = ''): string {
    let final: string = ''
    for (let char = 0; char < str.length; char++) {
        if (str[char].match(/[A-Z]/g)) {
            final += String.fromCharCode(str.charCodeAt(char) + 32)
        } else {
            final += str[char]
        }
    }
    return final

}

console.log(lowerCase("Chopper"))

console.log(lowerCase("TONY TONY"))