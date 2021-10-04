function startWith(str= '', start: string, positionopt = 0): boolean {
    return str.substr(positionopt, start.length) == start
}

console.log(startWith("I gotta give my all for everyone in my crew!", "I gotta"))

console.log(startWith("Tony Tony Ch0pper", "on", 1))

console.log(startWith("Tony Tony Ch0pper", "Ch0pper"))