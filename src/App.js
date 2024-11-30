import React, { useState } from "react";
import "./style.css"; 
import Termo from "./components/Termo";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";

function App() {
  const [telaAtual, setTelaAtual] = useState("termo");

  const mostrarTela = (tela) => setTelaAtual(tela);

  return (
    <div id="app">
      {telaAtual === "termo" && <Termo mostrarTela={mostrarTela} />}
      {telaAtual === "login" && <Login mostrarTela={mostrarTela} />}
      {telaAtual === "menu" && <Menu mostrarTela={mostrarTela} />}
      {telaAtual === "quiz" && <Quiz mostrarTela={mostrarTela} />}
    </div>
  );
}

export default App;

