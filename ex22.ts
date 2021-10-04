function trim(str= '', whitespaceopt = " "): string {
    let i_start: number = 0
    while (str[i_start] == whitespaceopt) {
        i_start++
    }
    let i_end: number = str.length-1
    while (str[i_end] == whitespaceopt) {
        i_end--
    }
    str = str.substr(i_start, i_end-i_start+1)
    return str
}

console.log(trim(" Tony Tony Ch0pper ", " "))

console.log(trim("--Tony Tony Ch0pper--", "-"))