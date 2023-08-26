import { useEffect, useState } from 'react'
import axios from 'axios'

interface CartItem {
  id: number
  nome: string
}

export function useAPI() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    axios
      .get<CartItem[]>('https://api-mercado.vercel.app/api/produtos')
      .then((response) => {
        setItems(response.data)
      })
      .catch((error) => {
        console.error('Erro ao obter os itens da API:', error)
      })
  }, [])

  return items
}
