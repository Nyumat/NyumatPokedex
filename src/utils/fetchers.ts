import ky from "ky"
import { json } from "react-router-dom"

const BASE_URL = 'https://pokeapi.co/api/v2'

export const pokemonFetcher = (id: string | number) =>
      ky.get(`${BASE_URL}/pokemon/${id}`)
            .then(res => res.json())

export const allPokemon = () =>
      ky.get(`${BASE_URL}/pokemon?limit=40`)
            .then(res => res.json())

export const singleFetcher = async (url: string) => {
      let response: any = await ky.get(url)
      response = await response.json()
      return response;
}

