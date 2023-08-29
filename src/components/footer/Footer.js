import "./Footer.css";
import insta from './assets/Insta.png'
import mail from './assets/Mail.png'
import phone from './assets/Phone.png'

function Footer() {
    return(
        <div className="footer">
            <div className="footer-inner container">
                <div className="info">
                    <img src={insta} alt=""/>
                    <div>frostauto</div>
                </div>
                <div className="info">
                    <img src={mail} alt=""/>
                    <div>frostauto@gmail.com</div>
                </div>
                <div className="info">
                    <img className="phone" src={phone} alt=""/>
                    <p>
                        <span>г. Астана</span>
                        <span>+7 777 777 77 77</span>
                    </p>
                    <img className="phone" src={phone} alt=""/>
                    <p>
                        <span>г. Алмата</span>
                        <span>+7 777 777 77 77</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;