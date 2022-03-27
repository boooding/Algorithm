
let merge1 = (number1, m, number2, n) => {
    number2.splice(n, number2.length - n);
    number1.splice(m, number1.length - m, ...number2)
    number1.sort((a, b) => a - b)
}