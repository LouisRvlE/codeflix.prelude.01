function isBlank(str= ''): boolean {
    str = str.trim()
    return str == ""
}

console.log(isBlank(""))

console.log(isBlank(" "))

console.log(isBlank("Ch0pper!"))