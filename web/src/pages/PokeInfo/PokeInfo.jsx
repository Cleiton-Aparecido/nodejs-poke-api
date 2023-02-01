import { useState, useEffect } from "react"

export function PokeInfo( {pokeID } ) {

    const [pokeData, setPokeData] = useState([])
    const [pokeType, setPokeType] = useState("")

    async function getPokeInfo(id) {

        try {

            await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => (res.json()))
                .then((data) => {

                    console.log(data)

                    setPokeData(data)
                    setPokeType(data.types[0].type.name)
                })

        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {

        getPokeInfo(pokeID)
    }, [])

    return (

        <div>
            {pokeData.map((data) => {
                return (

                    <h1 key={data.id}>{data.name}</h1>
                )
            })}
        </div>
    )
}