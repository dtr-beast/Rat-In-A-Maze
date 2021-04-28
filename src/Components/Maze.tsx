import React, {ReactComponentElement} from 'react'
import Cell from "./Cell";
import {Grid} from "@material-ui/core";
import {v1 as uuidv1} from 'uuid';
import maze from "../mazeCode";

function calculatePaths() {
}

function Maze() {
    console.log(maze)
    console.log(typeof Grid)
    console.log(typeof Cell)
    const colors = ['red', 'white']
    const mazeList = []
    for (let i = 0; i < 4; i++) {
        const cellList = []
        for (let j = 0; j < 4; j++) {
            const number = Math.floor(Math.random() * colors.length);
            cellList.push(<Cell key={uuidv1()} color={colors[number]}/>)
        }
        mazeList.push(<Grid key={uuidv1()} container item xs={12}>{cellList}</Grid>)
    }
    console.log(mazeList)
    // @ts-ignore
    // mazeList[0][0] = <Cell key={uuidv1()} img={'covid.jpg'}/>
    // @ts-ignore
    // mazeList[3][3] = <Cell key={uuidv1()} img={'human.png'}/>
    // mazeList[0][0] = <Cell key={uuidv1()} img={'covid.jpg'}/>
    return (
        <div>
            {mazeList}
        </div>
    )
}

export default Maze