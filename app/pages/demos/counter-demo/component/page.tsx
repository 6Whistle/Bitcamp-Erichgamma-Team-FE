import { Button } from "@mui/material"
import React from "react"

interface Props{
    count : number,
    plusButtonHandler : () => 0,
    minusButtonHandler : () => 0
}

const CounterComponent = React.memo(({count, plusButtonHandler , minusButtonHandler}: Props) => {
    return <div>
    <h1>Counter : {count}</h1>
    <Button onClick={plusButtonHandler}>+</Button>
    <Button onClick={minusButtonHandler}>-</Button>
    </div>
})

export default CounterComponent