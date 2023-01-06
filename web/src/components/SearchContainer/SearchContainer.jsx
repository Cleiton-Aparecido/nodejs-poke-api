const placeholder = "Search a Pokémon here..."

export function SearchContainer () {
    return (
        <div className="search-container">
            <img src="../../public/hero.png" className="search-container__hero"/>

            <input className="search-container__input input" type={"text"} placeholder={placeholder}></input>

            <button className="search-container__btn btn">Search</button>
        </div>
    )
}