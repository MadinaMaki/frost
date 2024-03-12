import './Categories.css';
import DropDown from "../../ui/drop_down/DropDown";
import {useEffect, useState} from "react";
import axios from "axios";
import Availability from "../availability/Availability";
import {useDispatch} from "react-redux";

function Categories(props) {
    const [filterParams, setFilterParams] = useState({
        brandId: undefined, modelId: undefined, generationId: undefined, available: 0
    });

    const [availability, setAvailability] = useState(0);

    const [categories, setCategories] = useState([{
        text: "Все категории", value: 0
    }]);
    const [brands, setBrands] = useState([{
        text: "Все марки", value: 0
    }]);
    const [models, setModels] = useState([{
        text: "Все модели", value: 0
    }]);
    const [generations, setGenerations] = useState([{
        text: "Все поколения", value: 0
    }]);

    let categoryURL = 'https://frost.runtime.kz/api/categories';
    let brandsURL = 'https://frost.runtime.kz/api/brands';
    let modelsURL = 'https://frost.runtime.kz/api/models';
    let generationsURL = 'https://frost.runtime.kz/api/generations';

    useEffect(() => {
        props.onFilterChange(filterParams);
    }, [filterParams]);

    useEffect(() => {
        axios
            .get(categoryURL)
            .then((response) => {
                let data = response.data.map(i => ({text: i.name, value: i.id}));
                setCategories([...categories, ...data])
            })
        axios
            .get(brandsURL)
            .then((response) => {
                let data = response.data.map(i => ({text: i.name, value: i.id}))
                setBrands([...brands, ...data])
            })
    }, []);

    return (
        <div className="container">
            <div className="categories">
                <div className="category-item">
                    <p>Категории</p>
                    <DropDown data={categories}/>
                </div>
                <div className="category-item">
                    <p>Марка</p>
                    <DropDown data={brands}
                              filter={(value) => {
                                  if (value !== 0) {
                                      axios
                                          .get(modelsURL, {
                                              params: {
                                                  brandId: value
                                              }
                                          })
                                          .then((response) => {
                                              let data = response.data.map(item =>
                                                  ({text: item.name, value: item.id}));
                                              setModels([
                                                  {text: 'Все модели', value: 0}, ...data]);
                                              setFilterParams({
                                                  brandId: value,
                                                  modelId: undefined,
                                                  generationId: undefined,
                                                  available: availability
                                              })
                                          })
                                  } else {
                                      setFilterParams({
                                          brandId: undefined,
                                          modelId: undefined,
                                          generationId: undefined,
                                          available: availability
                                      })
                                      setModels([
                                          {text: 'Все модели', value: 0}])
                                      setGenerations([
                                          {text: 'Все поколения', value: 0}])
                                  }
                              }}
                    />
                </div>
                <Availability data={availability}
                              filter={(value) => {
                                  setAvailability(value);
                                  setFilterParams({
                                      brandId: filterParams.brandId,
                                      modelId: filterParams.modelId,
                                      generationId: filterParams.generationId,
                                      available: value
                                  })
                              }}
                />
                <div className="category-item">
                    <p>Модель</p>
                    <DropDown data={models}
                              filter={(value) => {
                                  if (value !== 0) {
                                      axios
                                          .get(generationsURL, {
                                              params: {
                                                  modelId: value
                                              }
                                          })
                                          .then((response) => {
                                              let data = response.data.map(item =>
                                                  ({text: item.name, value: item.id}));
                                              setGenerations([
                                                  {text: 'Все поколения', value: 0}, ...data]);
                                              setFilterParams({
                                                  brandId: filterParams.brandId,
                                                  modelId: value,
                                                  generationId: undefined,
                                                  available: availability
                                              })
                                          })
                                  } else {
                                      setFilterParams({
                                          brandId: filterParams.brandId,
                                          modelId: undefined,
                                          generationId: undefined,
                                          available: availability
                                      })
                                      setGenerations([
                                          {text: 'Все поколения', value: 0}]);
                                  }
                              }}
                    />
                </div>
                <div className="category-item">
                    <p>Поколения</p>
                    <DropDown data={generations}
                              filter={(value) => {
                                  if (value !== 0) {
                                      setFilterParams({
                                          brandId: filterParams.brandId,
                                          modelId: filterParams.modelId,
                                          generationId: value,
                                          available: availability
                                      })
                                  } else {
                                      setFilterParams({
                                          brandId: filterParams.brandId,
                                          modelId: filterParams.modelId,
                                          generationId: undefined,
                                          available: availability
                                      })
                                  }
                              }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Categories;