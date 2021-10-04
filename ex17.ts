function indexOf(str= '', search: string, fromIndexopt = null): number {
    let index: number = -1
    for (let i = 0; i < str.length; i++) {
        if (str[i] == search) {
            index = i
            break
        }
    }
    return index
}

console.log(indexOf("ch0pper", "0"))

console.log(indexOf("ch0pper", "o"))