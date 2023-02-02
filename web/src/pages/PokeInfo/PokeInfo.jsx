import { useState, useEffect } from "react"

export function PokeInfo( {pokeID } ) {

    const [pokeData, setPokeData] = useState([])
    const [pokeType, setPokeType] = useState("")

    async function getPokeInfo() {

        try {

            await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
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

        getPokeInfo()
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