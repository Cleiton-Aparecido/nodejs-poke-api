const placeholder = "Search a Pokémon here..."

const handleChange = (event) => {
    setPokemon(event.target.value.toLowerCase())
}

const handleSubmit = (event) => {
    event.preventDefault()
    getPokemon()
}

export function SearchContainer () {
    return (
        <div className="search-container">
            <img src="../../public/hero.png" className="search-container__hero"/>
            
            <form className="search__form" onSubmit={handleSubmit}>

                <input className="search-container__input input" onChange={handleChange} type={"text"} placeholder={placeholder}></input>

                <button className="search-container__btn btn">Search</button>
            </form>

            {pokemonData.map((data) => {
                return (
                    <div className="pokecard__container">
                        <img src="" className="pokecard__img"/>

                        <div className="pokecard__detail-box">
                            <section className="pokecard__detail--left">
                                <p className="pokecard__detail--paragraph">
                                    Type
                                </p>
                                <p className="pokecard__detail--paragraph">
                                    Height
                                </p>
                                <p className="pokecard__detail--paragraph">

                                </p>
                                <p className="pokecard__detail--paragraph">

                                </p>
                            </section>

                            <section className="pokecard__detail--right">
                                <p className="pokecard__detail--paragraph">
                                    {pokemonType}
                                </p>
                                <p className="pokecard__detail--paragraph">
                                    {" "}{Math.round(data.height * 3.9)}
                                </p>
                                <p className="pokecard__detail--paragraph">

                                </p>
                                <p className="pokecard__detail--paragraph">

                                </p>
                            </section>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}