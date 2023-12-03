function randomNumber(min, max) {
    const n = Math.floor(Math.random() * (max - min) + min);
    console.log(n)
    return n;
}

module.exports = { 
    randomNumber
}