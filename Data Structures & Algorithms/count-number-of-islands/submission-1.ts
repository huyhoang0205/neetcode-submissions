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

        // const dfs = (r,c) => {
        //     if(r < 0 || c < 0 || r >= ROW || c >= COL || grid[r][c] == '0') 
        //         return;

        //     grid[r][c] = '0';
        //     for (const dr of directions){
        //         dfs(r + dr[0], c + dr[1]);
        //     }
        // }

        const bfs = (r,c) => {
            let q = new Queue();
            q.push([r,c]);
            grid[r][c] = '0';
            while(!q.isEmpty()){
                const [row,col] = q.pop();
                for(const dr of directions) {
                    const nr= row + dr[0] , nc = col + dr[1];

                    if(0 <= nr && 0 <= nc
                    && nr < ROW && nc <= COL
                    && grid[nr][nc] === '1'    
                    ) {
                        q.push([nr,nc]);
                        grid[nr][nc] = '0'
                    }
                }
            }
        }

        for(let i=0; i< ROW; i++){
            for(let j=0; j< COL; j++){
                if(grid[i][j] === '1') {
                    bfs(i,j)
                    // dfs(i,j);
                    island ++
                    
                }
            }
        }

        return island;
    }
}
