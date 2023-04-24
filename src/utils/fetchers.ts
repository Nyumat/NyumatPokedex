import ky from "ky"
import { json } from "react-router-dom"
import { PAGE_LIMIT, PokemonResponse } from '../types/Pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2'

export const pokemonFetcher = (id: string | number) =>
      ky.get(`${BASE_URL}/pokemon/${id}`)
            .then(res => res.json())

export const allPokemon = async ({ pageParam = 0 }): Promise<PokemonResponse> => {
      const response: PokemonResponse = await ky
            .get(`https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${pageParam}`)
            .json();
      return response;
};

export const evolutionChainFetcher = async (url: string) => {
      let response: any = await ky.get(url)
      response = await response.json()
}

export const singleFetcher = async (url: string) => {
      let response: any = await ky.get(url)
      response = await response.json()
      return response;
}

export const searchFetcher = async (search: string) => {
      let response: any = await ky.get(`${BASE_URL}/pokemon/${search}`)
      response = await response.json()
      console.log(response)
      return response;
}