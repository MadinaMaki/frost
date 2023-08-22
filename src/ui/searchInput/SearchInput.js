import "./SearchInput.css";
import search from './assets/search-icon.png'

function SearchInput() {
    return (
        <div style={{display: "flex", margin: "0 30px"}}>
            <input type="text" className="search-input" placeholder="Поиск по каталогу..."/>
            <img className="search-btn" src={search} alt="search"/>
        </div>
    )
}

export default SearchInput;