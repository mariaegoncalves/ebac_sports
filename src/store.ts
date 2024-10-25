import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './features/carrinhoSlice';
import favoritosReducer from './features/favoritosSlice'; 
import { api } from './services/api';

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer, 
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
