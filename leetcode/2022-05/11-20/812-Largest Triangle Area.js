const triangleArea = (x1, y1, x2, y2, x3, y3) => {
    return 0.5 * Math.abs(
        x1 * y2 + x2 * y3 + x3 * y1 - 
        x1 * y3 - x2 * y1 - x3 * y2
    );
}

const largestArea = function(points) {
    const n = points.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                result = Math.max(result, triangleArea(
                    points[i][0], points[i][1], 
                    points[j][0], points[j][1], 
                    points[k][0], points[k][1]));
            }
        }
    }
    return result;
}