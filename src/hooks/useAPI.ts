import axios from 'axios'
import { useEffect, useState } from 'react'

export function useAPI<Product>(url: string) {
  const [data, setData] = useState<Product>()

  useEffect(() => {
    axios
      .get(url)
      .then((market) => {
        setData(market.data)
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error)
      })
  }, [url])

  return { data }
}
