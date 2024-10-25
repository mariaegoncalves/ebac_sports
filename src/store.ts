import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './features/carrinhoSlice' // Ajuste o caminho conforme necessário
import favoritosReducer from './features/favoritosSlice' // Supondo que você tenha um slice para favoritos
import { api } from './services/api'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
