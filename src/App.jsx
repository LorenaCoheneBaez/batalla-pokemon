import UsefetchHook from "./hooks/useFetch";
import Layout from "./components/Layout";
import { useState } from "react";
import Battle from "./views/Battle";
import Selection from "./views/Selection";

function App() {
  const [ready, setReady] = useState(false);

  const readyToBattle = () => {
    setReady(true);
  };

  let urlApiPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100000";

  const { pokemonList, loadingSpinner } = UsefetchHook(urlApiPokemon);

  return (
    <>
      <Layout>
        {ready ? <Battle /> : <Selection onReady={readyToBattle} />}
      </Layout>
      <p>
        {loadingSpinner
          ? "CARGANDO ..."
          : pokemonList.map((item, index) => <p key={index}>{item.name}</p>)}
      </p>
    </>
  );
}

export default App;
