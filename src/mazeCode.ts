const maze: number[][] = []

for (let i = 0; i < 4; i++) {
    const tempMaze: number[] = []
    for (let j = 0; j < 4; j++) {
        tempMaze.push(Math.floor(Math.random() * 2))
    }
    maze.push(tempMaze)
}
maze[0][0] = 0
maze[maze.length - 1][maze[0].length - 1] = 0

export default maze