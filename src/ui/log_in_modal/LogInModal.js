import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import axios from "axios";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";

function LogInModal({visible, close}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState('')

    const [user, login, logout] = useContext(AuthContext);

    // function logIn() {
    //     axios.post('https://frost.runtime.kz/api/auth/token', {
    //         username: email,
    //         password: password,
    //     })
    //         .then(() => {
    //             setErrors('');
    //         })
            // .catch(error => {
            //     let response = error.response;
            //     console.log(response.data)
            //     if (response.status === 400) {
            //         setErrors(response.data.message)
            //     }
            // })
    // }

    console.log('user:', user)

    return (
        <Modal visible={visible} close={close}>
            <h2>Вход в учетную запись</h2>
            <span className="error">{errors}</span>
            <input placeholder="Адрес электронной почты" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="Пароль" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <a href="#">Забыли пароль?</a>
            <div onClick={close}>
                <Button text={"Войти"} buttonStyle={buttonStyles.normal} onClick={() => login(email, password)}/>
            </div>
        </Modal>
    );
}

export default LogInModal;