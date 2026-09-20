class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const directions = [
            [-1,0],
            [1,0],
            [0,-1],
            [0,1]
        ]

        const ROW = grid.length,
        COL = grid[0].length;
        let island = 0;

        const dfs = (r,c) => {
            if(r < 0 || c < 0 || r >= ROW || c >= COL || grid[r][c] == '0') 
                return;

            grid[r][c] = '0';
            for (const dr of directions){
                dfs(r + dr[0], c + dr[1]);
            }
        }

        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL; j++){
                if(grid[i][j] === '1') {
                    island ++
                    dfs(i,j);
                }
            }
        }

        return island;
    }
}
