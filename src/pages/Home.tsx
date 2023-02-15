import React from "react";
import { useAllPokemon, useSpecificPokemon } from "../hooks/usePokemon";
import useImage from "../hooks/useImage";
import PokemonGrid from "../components/PokemonGrid";

const Home = () => {
  const { data, isLoading, error } = useAllPokemon();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <PokemonGrid pokemons={data?.results} />
    </div>
  );
};

export default Home;
