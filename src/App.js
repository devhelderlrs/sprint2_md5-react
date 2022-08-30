import MenuLateral from "./components/menus/MenuLateral.jsx";
import FormContainer from "./components/forms/FormContainer.jsx";
import { UsuarioProvider } from "./context/usuarioContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaUsuarios } from "./components/pages/ListaUsuarios.jsx";

import "./App.css";

function App() {
  return (
    
    <UsuarioProvider>
      <BrowserRouter>
      <div className="App">
      <MenuLateral/>
    <Routes>
      <Route path='/' element={<FormContainer/>}></Route>
      <Route path='/usuarios' element={<ListaUsuarios/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
