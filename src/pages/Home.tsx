import React from "react";
import useImage from "../hooks/useImage";
import PokemonGrid from "../components/PokemonGrid";
import SearchForm from "../components/SearchForm";
import useSearch from "../hooks/useSearch";

interface HomePageProps {
  data: any;
  isLoading: boolean;
  error: any;
}

const Home: React.FC<HomePageProps> = ({ data, isLoading, error }) => {
  const { searchTerm, searchResults, handleChange } = useSearch(data?.results);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SearchForm searchTerm={searchTerm} handleChange={handleChange} />
      <PokemonGrid
        pokemons={
          searchResults.length > 0 && searchTerm.length > 1
            ? searchResults
            : data?.results
        }
      />
    </div>
  );
};

export default Home;
