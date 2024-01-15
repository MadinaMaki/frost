import Button, {buttonStyles} from "../../button/Button";
import Modal from "../modal/Modal";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../../features/auth/authSlice";
import './LogInModal.css';

function LogInModal({visible, close}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('')
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);

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

    useEffect(() => {
        if(authState.user)
        {return close}
    }, [authState.user]);

    return (
        <Modal visible={visible} close={close}>
            {authState.loading ?
                 <span className="loader"></span> :
                <>
                    <h2>Вход в учетную запись</h2>
                    <span className="error">{errors}</span>
                    <input placeholder="Адрес электронной почты" type="text" value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <input placeholder="Пароль" type="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <a href="#">Забыли пароль?</a>
                    <div onClick={close}>
                        <Button text={"Войти"} buttonStyle={buttonStyles.normal} onClick={() => {
                            dispatch(signIn(email, password))
                        }}/>
                    </div>
                </>
            }
        </Modal>
    );
}

export default LogInModal;