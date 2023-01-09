export function SearchContainer ({placeholder, formOnsubmit, inputOnChange}) {
    return (
        <div className="search-container">
            <img src="../../public/hero.png" className="search-container__hero"/>
            
            <form className="search-container__form" onSubmit={formOnsubmit}>

                <input className="search-container__input input" onChange={inputOnChange} type={"text"} placeholder={placeholder}></input>

                <button className="search-container__btn btn">Search</button>
            </form>
        </div>
    )
}