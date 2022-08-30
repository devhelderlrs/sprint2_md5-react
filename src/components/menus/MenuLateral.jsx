import React from "react";
import "./MenuLateral.css";
import { Link } from "react-router-dom";

const MenuLateral = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li className="ativo" data-menu>
            Cadastre-se
          </li>
        </Link>

        <Link to="/usuarios">
          <li data-menu>Usuários</li>
        </Link>
      </ul>
    </nav>
  );
};

const seletor = document.querySelectorAll("[data-menu]");
const chave = "ativo";

seletor.forEach((e) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < seletor.length; i++) {
      seletor[i].classList.remove(chave);
    }
    e.classList.add(chave);
  });
});

export default MenuLateral;
