function count(str= ''): number {
    let count: number = 0
    for (let i of str) {
        count += 1
    }
    return count
}

console.log(count("Chopper"))