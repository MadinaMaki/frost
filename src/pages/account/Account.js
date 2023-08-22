import CartHeader from "../../components/cart_header/CartHeader";

function Account() {
    return(
        <div className="container">
            <CartHeader titleText="Личный кабинет"/>
            <div className="personal-account">
                <div className="main">
                    <div className="title">История заказов</div>
                    <div className="table-head">
                        <div>Номер заказа</div>
                        <div>Наименование товара</div>
                        <div className="table-right">
                            <div>Дата заказа</div>
                            <div>Стоимость</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;