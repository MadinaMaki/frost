import './FormData.css';

function FormData(props) {
    return (
        <form className="form">
            <p {...props} className="form-name">
                {props.label}
            </p>
                <input type="text"/>
        </form>
    )
}

export default FormData;