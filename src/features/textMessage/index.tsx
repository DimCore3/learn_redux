import { useSelector, useDispatch } from "react-redux";
import { changeText } from "./textMessageSlice";

const TextMessage = () => {
    const value = useSelector((state: any) => state.textMessage.text)
    const dispatch = useDispatch();

    return ( 
        <div>
            <h2>{value}</h2>
            <button onClick={() => dispatch(changeText())}>Change value</button>
        </div>
     );
}
 
export default TextMessage;