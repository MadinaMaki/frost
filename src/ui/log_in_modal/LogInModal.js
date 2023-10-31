import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import axios from "axios";
import {useState} from "react";

function LogInModal({visible, close}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState('')

    function logIn() {
        axios.post('https://frost.runtime.kz/api/auth/token', {
            username: email,
            password: password,
        })
            .then(() => {
                setErrors('');
            })
            .catch(error => {
                let response = error.response;
                console.log(response.data)
                if (response.status === 400) {
                    setErrors(response.data.message)
                }
            })
    }

    return (
        <Modal visible={visible} close={close}>
            <h2>Вход в учетную запись</h2>
            <span className="error">{errors}</span>
            <input placeholder="Адрес электронной почты" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="Пароль" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <a href="#">Забыли пароль?</a>
            <Button text={"Войти"} buttonStyle={buttonStyles.normal} onClick={logIn}/>
        </Modal>
    );
}

export default LogInModal;