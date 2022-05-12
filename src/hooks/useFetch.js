import { useEffect, useState } from 'react';


//Monto el componente
const UsefetchHook = (urlApiPokemon) => {
    const [state, setState] = useState({
        loadingSpinner: true, //Seteo el spinner para que se muestre hasta que cargue la data
        pokemonList: null // todavia no hay pokemons
    })
    useEffect(() => {
        setState({
            loadingSpinner: true,

        })

        fetch(urlApiPokemon)
            .then(response => response.json())
            .then(pokemonList => {
                setState({
                    loadingSpinner: false,
                    pokemonList: pokemonList.results //cuando cargala data, no se muestra el spinner
                })
            })

    }, [urlApiPokemon])


    return state
}

export default UsefetchHook