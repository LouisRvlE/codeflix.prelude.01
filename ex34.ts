function isNumeric(str:any): boolean {
    return typeof str == "string"
}

console.log(isNumeric("chopper"))

console.log(isNumeric(1337))