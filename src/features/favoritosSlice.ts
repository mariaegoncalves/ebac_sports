import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Favorito {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface FavoritosState {
  favoritos: Favorito[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Favorito>) {
      // Verifica se o produto já está nos favoritos antes de adicionar
      const produtoExistente = state.favoritos.find(
        (favorito) => favorito.id === action.payload.id
      )

      if (!produtoExistente) {
        state.favoritos.push(action.payload)
      }
    },
    removerFavorito(state, action: PayloadAction<number>) {
      state.favoritos = state.favoritos.filter(
        (favorito) => favorito.id !== action.payload
      )
    }
  }
})

// Exportando as ações e o reducer
export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
