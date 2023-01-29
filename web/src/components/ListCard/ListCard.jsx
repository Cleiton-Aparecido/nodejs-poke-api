export function ListCard ({ imgURL, pokeName, pokeType, pokeID }) {
    return (
        <div className="list-card">
            <img className="list-card__img" src={imgURL} />

            <section className="list-card__details">
                <h2 className="list-card__details--name">
                    {pokeName}
                </h2>

                <h3 className="list-card__details--type">
                    {pokeType}
                </h3>

                <p className="list-card__details--id">
                    {pokeID}
                </p>
            </section>
        </div>
    )
}