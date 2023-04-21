import './index.scss';
import { useSelector, useDispatch } from "react-redux";
import { actionMirror } from './mirrorSlice';

const Mirror = () => {
    const value = useSelector((state: any) => state.mirror.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div onClick={() => dispatch(actionMirror())} className={"mirror " + (value && 'mirror-opened')} />
        </div>
    );
}

export default Mirror;