import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CarrinhoState {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: [] // Inicializa como um array vazio
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      // Verifica se o produto já existe antes de adicionar
      if (!state.produtos.find((p) => p.id === produto.id)) {
        state.produtos.push(produto)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      // Remove o produto com base no ID
      state.produtos = state.produtos.filter((p) => p.id !== action.payload)
    }
  }
})

// Exporta as ações para serem usadas em outros arquivos
export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
