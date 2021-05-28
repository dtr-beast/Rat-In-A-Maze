import React from 'react'
import Cell from "./Cell";
import {Grid} from "@material-ui/core";
import {v1 as uuidv1} from 'uuid';
import maze from "../mazeCode";

// function calculatePaths() {
// }

function Maze() {
    const colors = ['white', 'red']
    const mazeList = []

    for (let i = 0; i < maze.length; i++) {
        const cellList1 = []
        for (let j = 0; j < maze[i].length; j++) {
            if (i === 0 && j === 0) {
                cellList1.push(<Cell key={uuidv1()} img={'covid.jpg'}/>)
            } else if (i === 3 && j === 3) {
                cellList1.push(<Cell key={uuidv1()} img={'human.png'}/>)
            } else {
                cellList1.push(<Cell key={uuidv1()} color={colors[maze[i][j]]}/>)
            }
        }
        mazeList.push(<Grid key={uuidv1()} container item xs={12}>{cellList1}</Grid>)
    }

    return (
        <div>
            {mazeList}
        </div>
    )
}

export default Maze