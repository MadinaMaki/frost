import {useEffect, useState} from "react";
import axios from "axios";

function Availability(props) {

    const[value, setValue] = useState(props.data);

    useEffect(() => {
        props.filter(value)
    }, [value])

    return(
        <div className="category-item checkbox-type">
            <input type="checkbox" onClick={() => {
                setValue(1);
            }}/>
            <p>в наличии</p>
        </div>
    )
}

export default Availability;
