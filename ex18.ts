function lastIndexOf(str= '', search: string, fromIndexopt = str.length - 1): number {
    let index: number = -1
    for (let i = fromIndexopt; i > 0; i--) {
        if (str[i] == search) {
            index = i
            break
        }
    }
    return index
}

console.log(lastIndexOf("ch0pper", "p"))

console.log(lastIndexOf("ch0pper", "o"))