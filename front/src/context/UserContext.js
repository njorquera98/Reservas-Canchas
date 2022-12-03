import React, { useState } from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [users, setUsers] = useState(
        ()=> window.sessionStorage.getItem('users')
        )
    const [id_usuariologeado] = useState(
            ()=> window.sessionStorage.getItem('id_usuariologeado')
        )

    return <Context.Provider value={{users,setUsers,id_usuariologeado}}>
        {children}
    </Context.Provider>
}

export default Context