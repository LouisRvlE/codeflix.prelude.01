function length(str= ''): number {
    let count: number = 0
    for (let i of str) {
        count += 1
    }
    return count
}

console.log(length("Chopper"))