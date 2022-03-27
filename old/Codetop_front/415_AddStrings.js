
// wrong
var addStrings0 = function(num1, num2) {
    return parseInt(num1) + parseInt(num2) + ""
};

let addStrings = (n1, n2) => {
    let p1 = n1.length - 1;
    let p2 = n2.length - 1;
    let add = 0;
    let answerList = [];
    while (p1 >= 0 || p2 >= 0 || add != 0) {
        const x = p1 >= 0 ? n1.charAt(p1) - '0' : 0;
        const y = p2 >= 0 ? n2.charAt(p2) - '0' : 0;
        answerList.push((x + y + add) % 10);
        add = Math.floor((x + y + add) / 10)
        p1--;
        p2--;
    }
    return answerList.reverse().join('');
}
