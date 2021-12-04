let compareVersion = (version1, version2) => {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; i ++) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }
        if (i < v2.length) {
            y = parseInt(v2[i])
        }
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        }
    }
    return 0;
}

let compareVersionTwoPointer = (version1, version2) => {
    const v1Length = version1.length;
    const v2Length = version2.length;
    let p1 = 0, p2 = 0;
    while (p1 < v1Length || p2 < v2Length) {
        let x = 0;
        for (; p1 < v1Length && version1[p1] !== '.'; p1++) {
            x = x * 10 + version1[p1].charCodeAt() - '0'.charCodeAt();
        }
        p1++;
        let y = 0;
        for (; p2 < v2Length && version2[p2] !== '.'; p2++) {
            y = y * 10 + version2[p2].charCodeAt() - '0'.charCodeAt();
        }
        p2++;
        if (x !== y) {
            return x > y ? 1 : -1;
        }
    }
    return 0;
}