function isString(str= ''): boolean {
    return !isNaN(Number(str))
}

console.log(isString("1986"))

console.log(isString("-7.5"))

console.log(isString("1.9E+2"))

console.log(isString("five"))