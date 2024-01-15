import axios from "axios";

export const increase = async (productId) => {
    let response = await axios.get('/cart/cart/increase', {
        params: {
            productId: productId,
        }
    });
    return response.data;
}