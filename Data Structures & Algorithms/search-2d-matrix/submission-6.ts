class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        if(matrix.length === 0) return false;
        const ROW = matrix.length, COL = matrix[0].length;
        let row = 0, flag = false;
        for(let i = 0; i < ROW ; i++) {
            if(matrix[i][COL-1] === target) return true;
            if(matrix[i][COL - 1] > target ) {
                row = i;
                flag = true;
                break;
            }
        }
        if(row === 0 && !flag) return false;

        for(let i = 0; i < COL ; i++) {
            if(matrix[row][i] === target) return true;
        }

        return false;
    }
}
