function splice(str= '', start: number = 0, deleteCountopt = str.length - start, toAddopt = ""): string {
    let final: string = ""
    let adopted: boolean = false
    while (start < 0) {
        start += str.length
    }
    let end = deleteCountopt + start
    for (let i = 0; i < str.length; i++) {
        if (i == end) {
            final += toAddopt
            adopted = true
        }
        if (i < start || i >= end) {
            final += str[i]
        }
    }
    if (!adopted) {
        final += toAddopt
    }
    return final
}

console.log(splice("Tony Tony Ch0pper", 0, 10))

console.log(splice("Tony Ch0pper", 0, 4, "Tony Tony"))

console.log(splice("Tony Tony Usopp", -5, 5, "Ch0pper"))