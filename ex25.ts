function includes(str= '', substr: string, positionopt = 0): boolean {
    let sublen = substr.length
    for (let i = positionopt; i < str.length; i++) {
        let actual_str = str.slice(i, i+sublen)
        if (substr == actual_str) {
            return true
        }
    }
    return false
}

console.log(includes("Ch0pper", "pper"))

console.log(includes("Ch0pper", "0", 3))