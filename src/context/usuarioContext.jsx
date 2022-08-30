import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({children}) {
    const [UsuarioGlobal, setUsuarioGlobal] = useState([]);

    return(
        <UsuarioContext.Provider value={{UsuarioGlobal, setUsuarioGlobal}}>
            {children}
        </UsuarioContext.Provider>
    )
}

