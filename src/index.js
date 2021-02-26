
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (arguments[0] === undefined) {
        return res;
    } else if (matrix.length == 0) { return res; } else {

        for (let j = 0; j < matrix.length; j++) {
            if (j % 2 == 0) {
                for (let n = 0; n < matrix[j].length; n++)
                    res.push(matrix[j][n]);
            } else {
                for (let n = matrix[j].length - 1; n >= 0; n--)
                    res.push(matrix[j][n]);
            }

        }
        return res;
    }
}
