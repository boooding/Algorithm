let findRepeatNumber = (numberArray) => {
    let set = new Set();
    let answer = [];
    for (let i of numberArray) {
        if (set.has(i)) {
            answer.push(i)
        } else {
            set.add(i)
        }
    }
    answer = Array.from(new Set(answer));
    return answer.join(" ")
}

console.log(findRepeatNumber(
    [2, 3, 1, 0, 2, 5, 3]));