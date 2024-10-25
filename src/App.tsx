import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './services/api' // Importa o hook da API
import { adicionarAoCarrinho } from './features/carrinhoSlice'
// import { adicionarFavorito, removerFavorito } from './features/favoritosSlice' // Importando as ações de favoritos

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [], isLoading } = useGetProdutosQuery() // Usando o hook da API
  const carrinho = useSelector((state: RootState) => state.carrinho.produtos)
  const favoritos = useSelector((state: RootState) => state.favoritos || [])

  useEffect(() => {
    if (isLoading) {
      console.log('Carregando produtos...')
    }
  }, [isLoading])

  function handleAdicionarAoCarrinho(produto: Produto) {
    const itemExistente = carrinho.find((p: Produto) => p.id === produto.id)
    if (itemExistente) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto)) // Dispara a ação do Redux para adicionar ao carrinho
    }
  }

  function handleFavoritar(produto: Produto) {
    const produtoFavorito = favoritos.find((p: Produto) => p.id === produto.id)
    if (produtoFavorito) {
      dispatch(removerFavorito(produto.id)) // Remove o favorito
    } else {
      dispatch(adicionarFavorito(produto)) // Adiciona o favorito
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos || []} itensNoCarrinho={carrinho || []} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar} // Passa a função de favoritar
          adicionarAoCarrinho={handleAdicionarAoCarrinho} // Passa a função de adicionar ao carrinho
        />
      </div>
    </>
  )
}

export default App
