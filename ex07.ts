function snakeCase(str= ''): string {
    let final:string = ''
    for (let char of str) {
        if (char.match(/[A-Z]+/g)) {
            final += "_"
            final += char.toLowerCase()
        } else if (char == " ") {
            final += "_"
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

console.log(snakeCase("gold d roger"))

console.log(snakeCase("GoldDRoger"))

console.log(snakeCase("-Gold-D-Roger"))