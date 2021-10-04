function insert(str= '', toInsertopt: string, positionopt = 0): string {
    let final: string = ""
    let happen = false
    for (let i = 0; i < str.length; i++) {
        if (i == positionopt) {
            final += toInsertopt
            happen = true
        }
        final += str[i]
    }
    if (!happen) {
        final += toInsertopt
    }
    return final
}

console.log(insert("chpper", "0", 2))

console.log(insert("Tony", " Tony Ch0pper", 4))