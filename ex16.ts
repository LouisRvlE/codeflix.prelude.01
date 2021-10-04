function countWord(str= '', patternopt = null): number {
    let count: number = 0
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char.match(/[A-Z]+/g) && str[i-1] != " ") {
            count += 1
        } else if (char == " " && str[i-1].match(/[A-Z,a-z]+/g)) {
            count += 1
        } else if (!char.match(/[A-Z,a-z]+/g)) {
            continue
        }
    }
    return count
}

console.log(countWord("Tony Tony Ch0pper"))
console.log(countWord("TonyTonyCh0pper"))
console.log(countWord("Tony Tony - Ch0pper"))