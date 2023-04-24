import React from "react";
import { Waves } from "../Waves";
import * as Hero from "./styles";
import Charzard from "../../assets/charzard.png";
import { PokemonType } from "../PokemonTypes/index";
import { Content } from "./styles";

const CharzardImage = <Hero.Image src={Charzard} alt="Charzard" />;

const HeroMain = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Hero.Container>
        <Hero.Title>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
        </Hero.Title>
        <Hero.SubTitle>Find your favorite pokemon.</Hero.SubTitle>
        <Hero.TwoColumns>
          <Hero.SubSplit>{CharzardImage}</Hero.SubSplit>
          <Hero.Line />
          <Hero.SubSplit>
            <Hero.PokemonName>Charizard</Hero.PokemonName>
            <Hero.TypeContainer>
              <PokemonType type="fire" tabIndex={false} />
              <PokemonType type="flying" tabIndex={false} />
            </Hero.TypeContainer>
            <Hero.Content>
              Charizard flies around the sky in search of powerful opponents. It
              breathes fire of such great heat that it melts anything. However,
              it never turns its fiery breath on any opponent weaker than
              itself.
            </Hero.Content>
          </Hero.SubSplit>
        </Hero.TwoColumns>
        <Waves />
      </Hero.Container>
    </div>
  );
};

export default HeroMain;
