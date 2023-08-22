import './DropDown.css';
import icon from './dropIcon.png';
import {useEffect, useRef, useState} from "react";
import './DropDown.css';
import data from "bootstrap/js/src/dom/data";

function DropDown(props) {
    const [expanded, setExpanded] = useState(false);
    const [item, setItem] = useState(props.data[0].text); // стейт для вывода выбранной категории

    const dropdownRef = useRef();

    useEffect(() => {
        setItem(props.data[0].text)
    }, [props.data]);

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if(dropdownRef.current !== event.target) {
                setExpanded(false)
            }
        })
    }, []);

    return (
        <div className="menu">
            <div className="button" onClick={() => setExpanded(!expanded)}>
                <p className="label" ref={dropdownRef}>{item}</p>
                <img src={icon} alt="#"/>
            </div>
            <div className="drop_menu" style={{display: expanded === false ? "none" : "flex"}}>
                {props.data.map(function (item, index) {
                    return (
                        <div key={index} className="drop_menu_item"
                             onClick={() => {
                                 if (props.filter !== undefined) {
                                     props.filter(item.value);
                                 }
                                 setItem(item.text);
                             }}>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DropDown;