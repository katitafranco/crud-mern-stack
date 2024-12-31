import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Crud MERN STACK</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />} exact></Route>
          <Route
            path="/agregarusuario"
            element={<AgregarUsuario />}
            exact
          ></Route>
          <Route
            path="/editarusuario"
            element={<EditarUsuario />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
