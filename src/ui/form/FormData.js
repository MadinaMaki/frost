import './FormData.css';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function FormData(props) {
    console.log(props.children);

    return (
        <form className="form">
            <p {...props} className="form-name">
                {props.label}
            </p>
            <input type="text" value={props.children}/>
        </form>
    )
}

export default FormData;
