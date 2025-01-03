import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Crud MERN STACK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Inicio <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">
                  Agregar Usuario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />} exact></Route>
          <Route
            path="/agregarusuario"
            element={<AgregarUsuario />}
            exact
          ></Route>
          <Route
            path="/editarusuario/:idusuario"
            element={<EditarUsuario />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
