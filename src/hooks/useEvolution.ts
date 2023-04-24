import ky from 'ky'
import React, { useState } from 'react'

const useEvolution = ({ url }: { url: string }) => {
      const [evolution, setEvolution] = useState<any>(null)
      const [loading, setLoading] = useState<boolean>(false)
      const [error, setError] = useState<any>(null)

      const fetchEvolution = async (url: string) => {
            setLoading(true)
            try {
                  let response: any = await ky.get(url)
                  response = await response.json()
                  setEvolution(response)
            } catch (error) {
                  setError(error)
            } finally {
                  setLoading(false)
            }
      }

      return { evolution, loading, error, fetchEvolution }

}

export default useEvolution
