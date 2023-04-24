export type Pokemon = {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  stats: [{ base_stat: number; stat: { name: string } }];
};

export interface Pokemon {
      name: string;
      url: string;
}

export interface PokemonResponse {
      count: number;
      next: string | null;
      previous: string | null;
      results: Pokemon[];
}

export const PAGE_LIMIT = 20;


export const pokemonTypes = [
  { name: "bug", color: "#7bcf00" },
  { name: "dark", color: "#5a566a" },
  { name: "dragon", color: "#0076ff" },
  { name: "electric", color: "#ffde00" },
  { name: "fairy", color: "#ff76ff" },
  { name: "fighting", color: "#ff215b" },
  { name: "fire", color: "#ff9900" },
  { name: "flying", color: "#89bdff" },
  { name: "ghost", color: "#4e6aff" },
  { name: "grass", color: "#1cd80e" },
  { name: "ground", color: "#ff6b0d" },
  { name: "ice", color: "#2ee4c6" },
  { name: "normal", color: "#9fa39d" },
  { name: "poison", color: "#f149ff" },
  { name: "psychic", color: "#ff6c64" },
  { name: "rock", color: "#d8bc5a" },
  { name: "steel", color: "#23a1bd" },
  { name: "water", color: "#14a8ff" },
];
