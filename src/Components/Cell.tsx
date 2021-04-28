import React from 'react'
import {Box} from "@material-ui/core";

function Cell(props: {color?: string, img?: string}) {
    return (
        <Box bgcolor={props.color} border={"solid 1px black"} height={60} width={60}>
            <img src={props.img} width={60} height={60}/>
        </Box>
    )
}

export default Cell