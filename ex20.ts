function repeat(str= '', timeopt: number = 1): string {
    let final = "" 
    for (let i = 0; i < timeopt; i++) {
        final += str
    }
    return final
}

console.log(repeat("w", 3))

console.log(repeat("gomu", 0))