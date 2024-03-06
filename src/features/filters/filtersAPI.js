import axios from "axios";

export const getProducts = async (page, values) => {
    let response = await axios.get('/products', {
        params: {
            page: page,
            size: 6,
            brandId: values.brandId,
            modelsId: values.modelId,
            generationId: values.generationId,
            available: values.available,
        }
    })
    return response.data;
};

export const getBrands = async () => {
    let response = await axios.get('/brands');
    return response.data;
}

export const getModels = async (brand) => {
    let response = await axios.get('/models', {
        params: {
            brandId: brand,
        }
    });
    return response.data;
}

export const getGenerations = async (model) => {
    let response = await axios.get('/generations', {
        params: {
            modelId: model
        }
    });
    return response.data;
}
