interface CarrinhoState {
  produtos: Produto[]
  favoritos: Produto[] // Adiciona a propriedade favoritos
}

const initialState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.produtos.find((p) => p.id === produto.id)) {
        state.produtos.push(produto)
      }
    },
    adicionarAFavoritos(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.favoritos.find((f) => f.id === produto.id)) {
        state.favoritos.push(produto) // Lógica para adicionar aos favoritos
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.produtos = state.produtos.filter((p) => p.id !== action.payload)
    },
    removerDosFavoritos(state, action: PayloadAction<number>) {
      state.favoritos = state.favoritos.filter((f) => f.id !== action.payload) // Lógica para remover dos favoritos
    }
  }
})

// Exporta as ações
export const {
  adicionarAoCarrinho,
  adicionarAFavoritos,
  removerDoCarrinho,
  removerDosFavoritos
} = carrinhoSlice.actions
export default carrinhoSlice.reducer
