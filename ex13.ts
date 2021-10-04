function slice(str= '', start:number, endopt=str.length): string {
    let final:string = ''
    while (start < 0) {
        start += str.length
    }
    for (let i = start; i <= str.length && i < endopt; i++) {
        final += str[i]
    }
    return final
}

console.log(slice("ch0pper", 1))

console.log(slice("ch0pper", -4))

console.log(slice("ch0pper", 1, 4))