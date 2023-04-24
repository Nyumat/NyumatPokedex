import React from "react";
import { useQuery } from "react-query";
import { allPokemon } from "../../utils/fetchers";
import { PokemonList } from "../Pokemon";

const Body = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100vw",
        background: "#060B28",
        color: "white",
        transform: "translateY(-50px)",
      }}
    >
      <PokemonList />
    </div>
  );
};

export default Body;
