
var oneEditAway = function(first, second) {
    let ans = false;
    if (first.length === second.length) {
        let count = 0;
        for (let i in first) {
            if (first[i] !== second[i]) count++
        }
        ans = count === 1
    } else if (first.length + 1 === second.length) {
        for (let i = 0, j = 0; j < second.length; i++,j++) {
            if (first[i] !== second[j]) {
                second = String.concat(second.slice(0,j), second.slice(j+1, second.length - 1) )
                ans = first === second;
            }
        }
    } else if (first.length - 1 === second.length) {
        for (let i = 0, j = 0; j < first.length; i++,j++) {
            if (second[i] !== first[j]) {
                first = String.concat(first.slice(0,j), first.slice(j+1, first.length - 1) )
                ans = first === second;
            }
        }
    }
    return ans;
}

console.log(oneEditAway("","a"))