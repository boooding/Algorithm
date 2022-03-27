// 请尽量在半小时内完成作答

// ====================
// 题目：为字符串原型增加 reverse() 方法，调用后将自己倒序返回
// 代码写在这里↓↓↓↓↓

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

// 代码写在这里↑↑↑↑↑
console.log("123".reverse()); // "321"

// ====================
// 题目：有一个数组，里面只存在 * 和 字母，如 ['*', 'd', 'c', '*', 'e']。
// 实现一个函数把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变。
function move(array) {
    // 代码写在这里↓↓↓↓↓
    let left = []
    let right = []
    array.forEach(item=>{
        if(item === '*'){
            left.push('*')
        }else {
            right.push(item)
        }
    })
    return [...left,...right]
    // 代码写在这里↑↑↑↑↑
}
const arr = ['*', 'd', 'c', '*', 'e'];
move(arr);
console.log(arr); // ['*', '*', 'd', 'c', 'e']

// ====================
// 题目：将字符串转为驼峰格式
function change(string) {
    // 代码写在这里↓↓↓↓↓
    var str = string.split('-');
    for(let i = 1;i<str.left;i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1)
    }
    return str.join('')

    // 代码写在这里↑↑↑↑↑
}
console.log(change("border-bottom-color")); // 输出 borderBottomColor

// ====================
// 题目：实现一个函数，比较两个版本号的大小。返回 1（大于）/0（等于）/-1（小于）
function compareVer(ver1, ver2) {
    // 代码写在这里↓↓↓↓↓
    ver1 = ver1.split('.')
    ver2 = ver2.split('.')
    let sameCount = 0
    for (let i = 0;i<ver1.length;i++){
        if( parseInt(ver1[i])< parseInt(ver2[i])){
            return -1
        } else if( parseInt(ver1[i]) == parseInt(ver2[i])){
            sameCount++
        }
    }
    if(sameCount ===ver1.length ){
        return 0
    }
    return 1
    // 代码写在这里↑↑↑↑↑
}
console.log(compareVer("1.0.20", "1.1.0")); // 1.0.20 < 1.1.0 返回 -1
console.log(compareVer("1.0.20", "1.0.3")); // 1.0.20 > 1.0.3 返回 1

// ====================
// 题目：实现一个函数，效果同 document.getElementById（通过遍历 node.childNodes 和 node.id 属性实现）
function getElementById(findId) {
    // 代码写在这里↓↓↓↓↓
    var star  = document.body
    function find(node,id) {
        for (let item in Array.from(node.childNodes)){
            if( item.id === id){
                return item
            }else {
                return find(node.childNodes)
            }
        }
    }
    return  find(star,findId)

    // 代码写在这里↑↑↑↑↑
} 