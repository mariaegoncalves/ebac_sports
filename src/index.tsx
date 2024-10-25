import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // Importa o Provider do Redux
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store' // Ajuste o caminho conforme necessário

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    {' '}
    {/* Envolve o App com o Provider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
