export function SearchContainer () {
    return (
        <div className="search-container">
            <img src="../../public/hero.png" className="search-container__hero"/>

            <input className="search-container__input input" type={"text"} placeholder="Search Here"></input>

            <button className="search-container__btn btn">Search</button>
        </div>
    )
}