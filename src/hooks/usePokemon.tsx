import { useQuery } from "react-query";
import { allPokemon, pokemonFetcher } from "../utils/fetchers";

interface usePokemonProps {
  id?: number;
}

interface usePokemonOutput {
  isLoading: boolean;
  error: any;
  data: any;
}

export const useSpecificPokemon = ({
  id,
}: usePokemonProps): usePokemonOutput => {
  if (!id) {
    throw new Error("You must provide an id");
  }
  const { isLoading, error, data } = useQuery(["pokemon", id], () =>
    pokemonFetcher(id)
  );
  return { isLoading, error, data };
};

export const useAllPokemon = (): usePokemonOutput => {
  const { isLoading, error, data } = useQuery("all-pokemon", allPokemon);
  return { isLoading, error, data };
};
