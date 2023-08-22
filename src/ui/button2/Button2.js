import './Button2.css';

function Button2(props) {
    return(
        <div className="link-button" {...props}>
            {props.text}
        </div>
    )
}

export default Button2;