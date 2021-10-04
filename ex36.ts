function chars(str= ''): string[] {
    let final: string[] = []
    for (let char of str) {
        final.push(char)
    }
    return final
}

console.log(chars("ch0pper"))