import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { moveRight, moveLeft } from '../box/boxSlice';
import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setincrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    
    function resetAll() {
        setincrementAmount(0);
        dispatch(reset());
    };

    return (
        <section>
            <p>
                {count}
            </p>
            <div>
                <button onClick={() => {
                    dispatch(increment());
                    dispatch(moveRight());
                }}>+</button>
                <button onClick={() => dispatch(reset())}>RESET</button>
                <button onClick={() => {
                    dispatch(decrement());
                    dispatch(moveLeft());
                }}>-</button>
                <input 
                    type="string"
                    value={incrementAmount}
                    onChange={(e) => setincrementAmount(Number(e.target.value))}
                />
                <div>
                    <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
                    <button onClick={resetAll}>Reset all</button>
                </div>
            </div>
        </section>
    );
}

export default Counter;