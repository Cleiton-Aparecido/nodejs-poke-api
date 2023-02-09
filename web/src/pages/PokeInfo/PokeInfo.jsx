import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Card } from "../../components/Card/Card"

export function PokeInfo() {

    const params = useParams()

    console.log(params.id)

    const [pokeData, setPokeData] = useState([])
    const [pokeType, setPokeType] = useState("")
    const [pokeImgs, setPokeImgs] = useState([])
    const [pokeID,  setPokeID] = useState("")

    async function getPokeInfo() {

        try {

            await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
                .then(res => (res.json()))
                .then((data) => {

                    console.log(data)

                    setPokeData(data)
                    setPokeType(data.types[0].type.name)
                    setPokeImgs(data.sprites)
                })

        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {

        getPokeInfo()

    }, [])

    return (

        <main className="pokeinfo">
            <section className="pokeinfo__container-left">
                <figure className="pokeinfo__img-wrapper">
                    <img className="pokeinfo__img-wrapper__img" src={`${pokeImgs["front_default"]}`} alt={`${pokeData.name} image`} />
                </figure>

                
                <h2 className="pokeinfo__name">
                    {pokeData.name}
                </h2>
                <span className="pokeinfo__id">#{pokeData.id}</span>
            
            </section>

            <section className="pokeinfo__container-right">
                {pokeType}
                <p>{pokeData.name}</p>
            </section>

            <section className="pokeinfo__container-bottom">
                <div className="pokeinfo__container-bottom__left">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="pokeinfo__container-bottom__right">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, fuga.</p>
                </div>
            </section>
        </main>
    )
}