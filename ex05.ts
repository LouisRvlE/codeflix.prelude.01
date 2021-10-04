function decapitalize(str= ''): string {
    let words: string[] = str.split(" ")
    let final: string = ""
    for (let word of words) {
        final += word[0].toLowerCase() + word.substr(1) + " "
    }
    return final
}

console.log(decapitalize("Woonan"))

console.log(decapitalize("El Drago"))