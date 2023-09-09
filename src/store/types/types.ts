export type Product = {
  id: number
  nome: string
  foto: string
  preco: number
  unidade: number
}

export type Historic = {
  id: number
  date: Date
  products: Product[]
  totalAmount: number
}
