import './DropMenu.css';
import {useState} from "react";

function DropMenu() {
    const [brands, setBrands] = useState([
        {
            name: 'Kia',
            models: [
                {
                    name: 'Sportage 2004-2019',
                    generations: [
                        { name: 'привод на все колеса' }
                    ]
                },
                {
                    name: 'Sportage 2005-2020',
                    generations: [
                        { name: 'привод' }
                    ]
                },
            ]
        },
        {
            name: 'Hyundai',
            models: [
                {
                    name: ['Tucson 2004-2010', 'Tucson 2004-2010'],
                    generations: [
                        { name: '2CDRI' }
                    ]
                }
            ]
        }
    ]);

    return(
        <div className="settings">
            <div className="category">
                {brands.map(function (brand, index) {
                    return (
                        <div key={index}>
                            <div>
                                <span>-</span>
                                {brand.name}
                            </div>
                            {brand.models.map(function (model, index){
                                return (
                                    <div className="drop-menu" key={index}>
                                        {model.name}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DropMenu;



// brands: [
//   {
//     name: 'Kia',
//     models: [
//       {
//         name: 'Model A',
//         generations: [
//           {
//             name: '2004-2019'
//           }
//         ]
//       }
//     ]
//   }
// ]