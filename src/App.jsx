import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { Main } from './components/styled'

function App() {

  return (
    <>
      <Main>
        <Nav/>
        {/* Chamando todos os componentes filhos */}
        <Outlet/>
        <Footer/>
      </Main>
    </>
  )
}

export default App
