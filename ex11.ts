function last(str= '', len=1): string {
    let final:string = ''
    for (let i = str.length-len; i < str.length; i++) {
        if (i < 0) {i=0}
        final += str[i]
    }
    return final
}

console.log(last("chopper"))

console.log(last("chopper", 2))

console.log(last("tony", 5))
