function capitalize(str= '', restToLowerCase= false): string {
    let first = str[0]
    let rest = str.substr(1)
    if (restToLowerCase) {
        rest = rest.toLowerCase()
    }
    return first.toUpperCase() + rest
}

console.log(capitalize("one Code"))

console.log(capitalize("One CODE", true))