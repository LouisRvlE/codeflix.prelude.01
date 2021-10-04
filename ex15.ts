function countSubstrings(str= '', substr: string): number {
    let count: number = 0
    let sublen = substr.length
    for (let i = 0; i < str.length; i++) {
        let actual_str = str.slice(i, i+sublen)
        if (substr == actual_str) {
            count += 1
        }
    }
    return count
}

console.log(countSubstrings("Tony Tony Chopper!", "Tony"))

console.log(countSubstrings("gomu gomu no bazooka", "gatling"))