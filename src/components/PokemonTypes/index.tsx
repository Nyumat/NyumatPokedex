import { SyntheticEvent } from "react";
import { pokemonTypes } from "../../types/Pokemon";
import * as C from "./styles";
import { Pokemon } from "../../types/Pokemon";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
  console.log("props", props)
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return name && color ? (
    <C.Type
      color={color}
      value={name}
      onClick={props.handleClick}
      tabIndex={props.tabIndex ? 0 : -1}
    >
      <img src={imgUrl} width={16} height={16} alt={name} />
      {name}
    </C.Type>
  ) : (
    <C.ErrorMessage>
      Error, type not found. Please, check the type name.
    </C.ErrorMessage>
  );
};
