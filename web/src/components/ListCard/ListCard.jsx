import { Link } from "react-router-dom"

export function ListCard ({ id, name}) {

    return (

        <article className="pokelist__card" key={id}>
            <div className="pokelist__card__content">

                <img className="pokelist__card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

                <h2 className="pokelist__card__title">
                    <Link className="pokelist__card__link" to={`/pokemon/${id}`}>
                        {name}
                    </Link>
                </h2>
            </div>
        </article>

    )
}