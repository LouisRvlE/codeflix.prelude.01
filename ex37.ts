function split(str= '', separatoropt: string): string[] {
    let final: string[] = []
    let temp: string = ""
    for (let char of str) {
        if (char != separatoropt) {
            temp += char
            console.log(temp)
        } else {
            final.push(temp)
            temp = ""
        }
    }
    final.push(temp)
    return final
}

console.log(split("ch0pper", " "))