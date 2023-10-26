import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import {useState} from "react";
import axios from "axios";

function Registration({visible, close}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function userRegistration() {
        alert('abc');
        axios.post('https://frost.runtime.kz/api/registration', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
        }).then(() => {
            //
        }).catch(error => {
            let response = error.response;
            if (response.status === 400) {
                console.log(response.data);
            }
        });
    }

    return(
        <Modal visible={visible} close={close}>
            <h2>Создание учетной записи</h2>
            <div className="user_name">
                <input placeholder="Имя" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                <input placeholder="Фамилия" value={lastName} onChange={(event) => setLastname(event.target.value)}/>
            </div>
            <input placeholder="Адрес электронной почты" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input placeholder="Пароль" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input placeholder="Повторите пароль" type="password"/>
            <Button text={"Зарегистрироваться"} buttonStyle={buttonStyles.normal} onClick={userRegistration}/>
            <p>Вход в существующую учётную запись</p>
        </Modal>
    )
}

export default Registration;