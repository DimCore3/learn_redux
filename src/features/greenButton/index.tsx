import './index.scss';
import { useSelector, useDispatch } from "react-redux";
import { changeColorToRed } from "./greenButtonSlice";

const GreenButton = () => {
    const color = useSelector((state: any) => state.greenButton.color)
    const dispatch = useDispatch();

    return ( 
        <div>
            <div style={{backgroundColor: color}} className="green_box"></div>
            <button onClick={() => dispatch(changeColorToRed())}>Change color</button>
        </div>
     );
}
 
export default GreenButton;