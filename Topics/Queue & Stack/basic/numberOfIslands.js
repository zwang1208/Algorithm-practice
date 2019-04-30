/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {           //DFS
    let count = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
    
    function dfs(row, col) {
        if(row < 0 || row === grid.length || col < 0 || col === grid[0].length) return;

        if(grid[row][col]==='0') return;

        grid[row][col] = '0';
        
        dfs(row+1, col);
        dfs(row-1, col);
        dfs(row, col+1);
        dfs(row, col-1);
    }
};
