
function luckyNumberN(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    result.push(randomNumber);
    }
    return result;
}

console.log(luckyNumberN(5));
