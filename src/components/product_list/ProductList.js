import './ProductList.css';
import ProductItem from '../product_item/ProductItem';
import Switch from "../../ui/switch/Switch";
import axios from "axios";
import {useEffect, useState} from "react";
import Categories from "../categories/Categories";
import {useDispatch, useSelector} from "react-redux";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        currentPage: undefined,
        totalPages: undefined,
    });

    const productPage = useSelector(state => state.filter.productPage);
    console.log('----',productPage);


    const [values, setValues] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('https://frost.runtime.kz/api/products', {
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
                            <ProductItem key={index} product_name={product.name} product_id={product.id} product_price={product.price}/>
                        );
                    })}
                </div>
                <Switch
                    onPageChange={(page) => {
                        axios.get('https://frost.runtime.kz/api/products', {
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
