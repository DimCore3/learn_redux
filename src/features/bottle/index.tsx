import './index.scss';
import { jumping } from './bottleSlice';
import { useSelector, useDispatch } from 'react-redux';

const Bottle = () => {
    const value = useSelector((state: any) => state.bottle.jumping)
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(jumping())} className="bottle" >
            <div className="bottle-top" />
            {
                value && <h1>залупа</h1>
            }
            <div className="bottle-bottom" />
        </div>
    );
}

export default Bottle;