class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const q = new Queue();
        const visited = new Set();

        const ROW = grid.length, COL = grid[0].length;

        function addCell(r,c) {
            if(r < 0 || c < 0 || r >= ROW || c >= COL
            || visited.has(r + ',' + c) || grid[r][c] === -1
            ) {
                return;
            }

            q.push([r,c]);
            visited.add(r + ',' + c);
        }

        for(let i=0; i<ROW; i++){
            for(let j=0; j<COL; j++){
                if(grid[i][j] === 0){
                    q.push([i,j]);
                    visited.add(i + ','+ j);
                }
            }
        }
        let dis = 0;
        while(!q.isEmpty()){
            const len = q.size();
            for(let i = 0; i < len; i++){
                const [r,c] = q.pop();
                grid[r][c] = dis;

                addCell(r-1,c);
                addCell(r+1,c);
                addCell(r,c-1);
                addCell(r,c+1);
            }
            dis += 1;
        }

    }
}
