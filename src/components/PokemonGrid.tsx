import { useAllPokemon } from "../hooks/usePokemon";
import Card from "./Card";

const PokemonGrid = (pokemons: any) => {
  return (
    <div className="grid">
      {pokemons &&
        pokemons.pokemons.map((pokemon: any) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
        ))}
    </div>
  );
};

export default PokemonGrid;
