import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import {moveRight, moveLeft} from './boxSlice';

const Box = () => {
    const value = useSelector((state: any) => state.boxPosition.position)
    const dispatch = useDispatch();

    return (
        <div>
            <div className="box-element" style={{left: value}}/>
            <div>
                <button onClick={() => dispatch(moveLeft())}>Left</button>  
                <button onClick={() => dispatch(moveRight())}>Right</button>  
            </div>
        </div>
    );
}

export default Box;