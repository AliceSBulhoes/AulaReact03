import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <Nav/>
      {/* Chamando todos os componentes filhos */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
