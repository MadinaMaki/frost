import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import {useState} from "react";
import axios from "axios";
import './Registration.css'

function Registration({visible, close}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
    })

    function userRegistration() {
        axios.post('https://frost.runtime.kz/api/registration', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
        }).then(() => {
            setErrors(function () {
                return {
                    emailError: ''
                }
            })
        }).catch(error => {
            let response = error.response;
            if (response.status === 400) {
                setErrors(function () {
                    return {
                        firstNameError: response.data.errors.first_name,
                        lastNameError: response.data.errors.last_name,
                        emailError: response.data.errors.email,
                        passwordError: response.data.errors.password,
                    }
                })
            }
        });
    }

    return(
        <Modal visible={visible} close={close}>
            <h2>Создание учетной записи</h2>
            <div className="errors">
                <span>{errors.firstNameError}</span>
                <span>{errors.lastNameError}</span>
            </div>
            <div className="user_name">
                <input placeholder="Имя" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                <input placeholder="Фамилия" value={lastName} onChange={(event) => setLastname(event.target.value)}/>
            </div>
            <div className="errors">
                <span>{errors.emailError}</span>
            </div>
            <input placeholder="Адрес электронной почты" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <div className="errors">
                <span>{errors.passwordError}</span>
            </div>
            <input placeholder="Пароль" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input placeholder="Повторите пароль" type="password"/>
            <Button text="Зарегистрироваться" buttonStyle={buttonStyles.normal} onClick={userRegistration}/>
            <a href="#" onClick={close}>Вход в существующую учётную запись</a>
        </Modal>
    )
}

export default Registration;