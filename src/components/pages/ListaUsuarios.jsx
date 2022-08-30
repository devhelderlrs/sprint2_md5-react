import { useContext } from "react";
import { UsuarioContext } from "../../context/usuarioContext";

export const ListaUsuarios = () => {
  const { UsuarioGlobal } = useContext(UsuarioContext);
  
  return (
    <div className="lista-usuarios-container">
      {UsuarioGlobal.map((e) => {
        return (
          <div className="lista-usuarios">
            <p>{`${e.nome} ${e.sobrenome}`}</p>
            
            <p>{e.email}</p>
            <p>{e.telefone}</p>
            <p>{e.nascimento}</p>
            <p>{e.cpf}</p>
            <p>{e.renda}</p>
            <p>{e.cep}</p>
            <p>{e.endereco1}</p>
            <p>{e.endereco2}</p>
          </div>
        );
      })}
    </div>
  );
};
