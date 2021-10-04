function first(str= '', len=1): string {
    let final:string = ''
    for (let i = 0; i < len && i < str.length; i++) {
        final += str[i]
    }
    return final
}

console.log(first("chopper"))

console.log(first("chopper", 2))

console.log(first("tony", 5))
