import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importando o App
import App from './App.jsx'

// Importando o Erro
import Error from './routes/Error.jsx'

// Importando o Home
import Home from './routes/Home.jsx'

// Importando o Aluno
import Aluno from './routes/Aluno.jsx'

// Impotando dependencias
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './components/styled.jsx'

// Criando a função createBrowserRouter
const router = createBrowserRouter([
  {
    // Chamando os elementos Pai
    path: '/', 
    element: <App/>,
    errorElement: <Error />,

    // Chamando os elementos Filhos
    children:[
      // Criando a rota Home
      {path: '/', element:<Home/>},
      // Criando a rota Aluno
      {path: '/aluno', element:<Aluno/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando o props que será redenrizado */}
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)
