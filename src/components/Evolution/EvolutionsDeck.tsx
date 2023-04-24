import React from 'react'
import useEvolution from '../../hooks/useEvolution'
import { PokemonCard } from '../Pokemon';

const EvolutionsDeck = ({ url }: { url: string }) => {
      const { evolution, loading, error, fetchEvolution } = useEvolution({ url });

      const fetchEvolutions = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
      }

      return (
            <div>
                  {url}
            </div>
      )
}

export default EvolutionsDeck
