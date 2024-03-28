import { decrease, increase } from "@/lib/features/counter/counterReducer"
import { Button } from "@mui/material"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const CounterContainer = () => {
    const count = useSelector((state: any) => (state.counterReducer.count))
    const dispatch = useDispatch()
    const plusButtonHandler = useCallback(() => dispatch(increase()), [dispatch])
    const minusButtonHandler = useCallback(() => dispatch(decrease()), [dispatch])

    return <div>
        <h1>Counter : {count}</h1>
        <Button onClick={plusButtonHandler}>+</Button>
        <Button onClick={minusButtonHandler}>-</Button>
    </div>
}
export default CounterContainer