function kebabCase(str= ''): string {
    let final:string = ''
    for (let char of str) {
        if (char.match(/[A-Z]+/g)) {
            final += "-"
            final += char.toLowerCase()
        } else if (char == " ") {
            final += "-"
        } else if (!char.match(/[A-Z,a-z]+/g)) {
            continue
        } else {
            final += char
        }
    }
    if (!final[0].match(/[A-Z,a-z]+/g)) {
        final = final.substr(1)
    }
    if (!final[final.length-1].match(/[A-Z,a-z]+/g)) {
        final = final.slice(0, -1)
    }
    return final
}

console.log(kebabCase("love one code"))

console.log(kebabCase("LoveOneCode"))

console.log(kebabCase("-Love-One-Code-"))