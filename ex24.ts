function endWith(str= '', end: string, position = str.length): boolean {
    return str.substr(position - end.length, end.length) == end
}

console.log(endWith("Tony Tony Ch0pper", "Ch0pper"))

console.log(endWith("Tony Tony Ch0pper", "Tony"))

console.log(endWith("Ch0pper", 'h0', 3))