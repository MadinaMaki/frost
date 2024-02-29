import axios from "axios";

export const getProducts = async (values) => {
    let response = await axios.get('https://frost.runtime.kz/api/products', {
        params: {
            page: 1,
            size: 6,
            brandId: values.brandId,
            modelsId: values.modelId,
            generationId: values.generationId,
            available: values.available
        }
    })
    return response.data;
};

export const getBrands = async () => {
    let response = await axios.get('/brands');
    return response.data;
}
