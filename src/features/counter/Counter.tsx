import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './counterSlice';
import {moveRight, moveLeft} from '../box/boxSlice';

const Counter = () => {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

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
                <button onClick={() => {
                    dispatch(decrement());
                    dispatch(moveLeft());
                }}>-</button>
            </div>
        </section>
    );
}

export default Counter;