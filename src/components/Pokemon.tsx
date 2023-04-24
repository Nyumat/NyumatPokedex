// @ts-nocheck

import React, { useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { allPokemon, evolutionChainFetcher, singleFetcher } from '../utils/fetchers'
import ky from 'ky'
import useEvolution from '../hooks/useEvolution'
import EvolutionsDeck from './Evolution/EvolutionsDeck'
import { PokemonType } from './PokemonTypes'


interface EvolutionChainLink {
      species: {
            name: string;
            url: string;
      }
      evolves_to: EvolutionChainLink[];
}

interface EvolutionChain {
      id: number;
      chain: EvolutionChainLink;
}

interface Pokemon {
      name: string;
      url: string;
}

interface PokemonByEvolution {
      [evolutionChainId: string]: Pokemon[];
}

const fetchEvolutionChain = async (speciesUrl: string): Promise<EvolutionChain> => {
      const response = await fetch(speciesUrl);
      const speciesData = await response.json();
      const evolutionChainUrl = speciesData.evolution_chain.url;
      const evolutionChainResponse = await fetch(evolutionChainUrl);
      const evolutionChainData = await evolutionChainResponse.json();
      return {
            id: evolutionChainData.id,
            chain: evolutionChainData.chain
      };
};

const groupPokemonByEvolution = async (pokemonList: Pokemon[]): Promise<PokemonByEvolution> => {
      const pokemonBySpecies = pokemonList.reduce((acc, pokemon) => {
            const species = pokemon.url.split('/')[6];
            if (!acc[species]) {
                  acc[species] = [];
            }
            acc[species].push(pokemon);
            return acc;
      }, {} as Record<string, Pokemon[]>);

      const pokemonByEvolution: PokemonByEvolution = {};

      for (const speciesUrl of Object.keys(pokemonBySpecies)) {
            const evolutionChain = await fetchEvolutionChain(`https://pokeapi.co/api/v2/pokemon-species/${speciesUrl}`);
            const evolutionChainId = evolutionChain.id.toString();
            if (!pokemonByEvolution[evolutionChainId]) {
                  pokemonByEvolution[evolutionChainId] = [];
            }
            const species = evolutionChain.chain.species;
            if (pokemonBySpecies[species.name]) {
                  pokemonByEvolution[evolutionChainId].push(...pokemonBySpecies[species.name]);
            }
            let currentLink = evolutionChain.chain;
            while (currentLink.evolves_to.length > 0) {
                  currentLink = currentLink.evolves_to[0];
                  const species = currentLink.species;
                  if (pokemonBySpecies[species.name]) {
                        pokemonByEvolution[evolutionChainId].push(...pokemonBySpecies[species.name]);
                  }
            }
      }

      return pokemonByEvolution;
};


interface Pokemon {
      name: string;
      url: string;
}

interface PokemonResponse {
      count: number;
      next: string | null;
      previous: string | null;
      results: Pokemon[];
}

const PAGE_LIMIT = 20;


export const PokemonList = () => {
      const [page, setPage] = useState(0);




      const {
            data,
            fetchNextPage,
            hasNextPage,
            isFetchingNextPage,
      } = useInfiniteQuery<PokemonResponse>(
            'pokemon',
            allPokemon,
            {
                  getNextPageParam: (lastPage) => {
                        if (lastPage.next) {
                              const urlParams = new URLSearchParams(lastPage.next.split('?')[1]);
                              const offset = Number(urlParams.get('offset'));
                              return offset;
                        }
                        return undefined;
                  },
            }
      );

      const pokemonList = data?.pages.flatMap((page) => page.results) || [];



      const handleLoadMore = () => {
            if (!isFetchingNextPage) {
                  fetchNextPage();
                  setPage((prevPage) => prevPage + PAGE_LIMIT);
            }
      };

      return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5em', padding: '1em', textAlign: 'center', width: '100%' }}>
                  {pokemonList.map((pokemon) => (
                        <Pokemon key={pokemon.name} url={pokemon.url} />
                  ))}

                  {/* {Object.entries(pokemonBySpecies).map(([species, pokemon]) => (
                        <div key={species} style={{ width: '100%' }}>
                              <h1 style={{ color: 'white', fontSize: '2em' }}>{species}</h1>
                              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5em', padding: '1em', textAlign: 'center', width: '100%' }}>
                                    {pokemon.map((pokemon) => (
                                          <Pokemon key={pokemon.name} url={pokemon.url} />
                                    ))}
                              </div>
                        </div>
                  ))} */}

                  <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                        {hasNextPage && (
                              <button onClick={handleLoadMore}>
                                    <p style={{ color: 'white', fontSize: '1.5em' }}>
                                          {isFetchingNextPage ? 'Loading more...' : 'Load more'}
                                    </p>
                              </button>
                        )}
                        {page > 0 && (
                              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <p style={{ color: 'white', fontSize: '1.5em' }}>Back to top</p>
                              </button>
                        )}
                  </div>
            </div>
      );
};


export const Pokemon = ({ url }: any) => {
      const [pokemon, setPokemon] = useState<any>(null)

      const fetchPokemon = async () => {
            const response = await ky.get(url).json()
            if (response) {
                  setPokemon(response)
            }
      }

      if (!pokemon) {
            fetchPokemon()
      }

      return (
            <>
                  {pokemon && (
                        // <PokemonCard pokemon={pokemon} fetchEvolution={fetchEvolution} evolution={evolution} />
                        <CardToggler pokemon={pokemon} />
                  )}
            </>

      )

}

export const PokemonCard = ({ pokemon, showEvolution, setShowEvolution }: any) => {

      return (
            <div
                  onClick={() => {
                        setShowEvolution(!showEvolution)
                        console.log(showEvolution)
                  }}
                  style={{
                        backgroundColor: '#000',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        maxWidth: '300px',
                  }}
            >
                  <img
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                        style={{ width: '100%', height: 'auto' }}
                  />
                  <div style={{ padding: '8px' }}>
                        <h2>{pokemon.name}</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                              {pokemon.types.map((type: any) => (
                                    <PokemonType key={type.type.name} type={type.type.name} />
                              ))}
                        </div>
                        <div style={{ marginTop: '16px' }}>
                              <p>
                                    <strong>Height: </strong>
                                    {pokemon.height} cm
                              </p>
                              <p>
                                    <strong>Weight: </strong>
                                    {pokemon.weight} kg
                              </p>
                        </div>
                  </div>
            </div >
      );

}

export const CardToggler = ({ pokemon }: any) => {

      const [showEvolution, setShowEvolution] = useState(false)


      if (!showEvolution) {
            return (
                  <PokemonCard pokemon={pokemon} setShowEvolution={setShowEvolution} showEvolution={showEvolution} />
            )
      } else {
            return (
                  <EvolutionsDeck url={pokemon.species.url} setShowEvolution={setShowEvolution} showEvolution={showEvolution} />
            )
      }
}



