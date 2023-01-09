export function Card({id, sprite, name, type, height, weight, battles, order}) {
    return (

        <div className="pokecard" key={id}>
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
                            Number of Battles:
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
                    <h4>#{order}</h4>
                </section>
            </div>
        </div>
    )
}
