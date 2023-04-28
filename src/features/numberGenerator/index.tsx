import { useSelector, useDispatch } from "react-redux";
import { generate } from "./numberGeneratorSlice";


const NumberGenerator = () => {
    const value = useSelector((state: any) => state.numberGenerator.value);
    const dispatch = useDispatch();

    return ( 
        <>
            <h3>{value}</h3>
            <button onClick={() => dispatch(generate())}>generate</button>
        </>
     );
}
 
export default NumberGenerator;