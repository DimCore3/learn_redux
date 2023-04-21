import { useSelector, useDispatch } from "react-redux";
import { flip } from './spinnerSlice';
import './index.scss';

const Spinner = () => {
    const value = useSelector((state:any) => state.spinner.value)
    const dispatch = useDispatch();

    return ( 
        <div className="spinner">
            <div onClick={() => dispatch(flip())} className={"flipper " + (value ? 'flipping' : '')} />
        </div>
     );
}
 
export default Spinner;