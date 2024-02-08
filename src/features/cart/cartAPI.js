import axios from "axios";

export const getCartItems = async () => {
    let response = await axios.get('https://frost.runtime.kz/api/cart');
    return response.data;
}

export const getIncrease = async (productId) => {
    let response = await axios.get('https://frost.runtime.kz/api/cart/increase', {
        params: {
            productId: productId,
        }
    });
    return response.data;
}