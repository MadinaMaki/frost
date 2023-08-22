import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";

function LogInModal({visible, close}) {

    return (
        <Modal visible={visible} close={close}>
            <h2>Вход в учетную запись</h2>
            <input placeholder="Адрес электронной почты" type="text"/>
            <input placeholder="Пароль" type="password"/>
            <a href="#">Забыли пароль?</a>
            <Button text={"Войти"} buttonStyle={buttonStyles.normal}/>
        </Modal>
    );
}

export default LogInModal;