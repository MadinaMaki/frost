import './ProductList.css';
import ProductItem from '../product_item/ProductItem';
import Switch from "../../ui/switch/Switch";
import axios from "axios";
import {useEffect, useState} from "react";
import Categories from "../categories/Categories";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        currentPage: undefined,
        totalPages: undefined,
    });

    const [values, setValues] = useState({});

    useEffect(() => {
        axios
            .get('http://frost.runtime.kz/products', {
                params: {
                    page: 1,
                    size: 6,
                    brandId: values.brandId,
                    modelId: values.modelId,
                    generationId: values.generationId,
                    available: values.available
                }
            })
            .then((response) => {
                let data = response.data;
                setProducts(data.items);
                setPageInfo({
                    currentPage: data.currentPage,
                    totalPages: data.totalPages,
                });
            })
    }, [values]);

    return (
        <div>
            <Categories onFilterChange={filterParams => {
                setValues(filterParams);
            }}/>
            <div className="ProductList container">
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <ProductItem key={index} data={product} product_id={product.id}/>
                        );
                    })}
                </div>
                <Switch
                    onPageChange={(page) => {
                        axios.get('http://frost.runtime.kz/products', {
                            params: {
                                page: page,
                                size: 6,
                                brandId: values.brandId,
                                modelId: values.modelId,
                                generationId: values.generationId,
                                available: values.available
                            }
                        })
                            .then((response) => {
                                let data = response.data;
                                setProducts(data.items);
                                setPageInfo({
                                    currentPage: data.currentPage,
                                    totalPages: data.totalPages
                                })
                            })
                    }}
                    currentPage={pageInfo.currentPage}
                    totalPages={pageInfo.totalPages}
                />
            </div>
        </div>
    );
}

export default ProductList;
