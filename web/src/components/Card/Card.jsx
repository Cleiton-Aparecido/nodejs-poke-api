import { typeHandler } from "../../utils/typeHandler"

export function Card({id, sprite, name, type, height, weight, battles, order}) {
    return (
        <div
            key={id} 
            id={`pokecard${id}`}
            className={`pokecard ${typeHandler(type)}`}
            title={name}
        >
            <div className='pokecard__display'>
                <img src={sprite} className="pokecard__display--img"/>
            </div>

            <div className="pokecard__detail">

                <section className='pokecard__detail--top'>
                    <h3 className='pokemon__name'>
                        {name}
                    </h3>
                </section>

                <div className='pokecard__detail--center'>
                    <section className="pokecard__detail--left">
                        <p className="pokecard__detail--paragraph">
                            Type:
                        </p>
                        <p className="pokecard__detail--paragraph">
                            Height:
                        </p>
                        <p className="pokecard__detail--paragraph">
                            Weight:
                        </p>
                        <p className="pokecard__detail--paragraph">
                            Encounters:
                        </p>
                    </section>

                    <section className="pokecard__detail--right">
                        <p className="pokecard__detail--paragraph">
                            {type}
                        </p>
                        <p className="pokecard__detail--paragraph">
                            {" "}{Math.round(height * 10)}cm
                        </p>
                        <p className="pokecard__detail--paragraph">
                            {" "}{Math.round(weight / 10)} Kg
                        </p>
                        <p className="pokecard__detail--paragraph">
                        {battles}
                        </p>
                    </section>
                </div>

                <section className='pokecard__detail--bottom'>
                    <h4>N°{order}</h4>
                    <h4>#{id}</h4>
                </section>
            </div>
        </div>
    )
}
