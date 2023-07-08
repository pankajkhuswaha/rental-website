import { Route,Routes } from "react-router-dom";
import { Home , Cart} from "./pages/index.js";
import { Login } from "./utility";
import Header from "./layout/Header.jsx";
function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App
