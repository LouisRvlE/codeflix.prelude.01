function substr(str= '', start:number, len=str.length-1): string {
    let final:string = ''
    for (let i = start; i < str.length && i < start+len; i++) {
        final += str[i]
    }
    return final
}

console.log(substr("tony tony chopper", 10))

console.log(substr("ch0pper", 2, 2))