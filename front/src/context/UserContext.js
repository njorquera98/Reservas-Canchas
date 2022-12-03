import React, { useState } from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [users, setUsers] = useState(
        ()=> window.sessionStorage.getItem('users')
        )

    return <Context.Provider value={{users,setUsers}}>
        {children}
    </Context.Provider>
}

export default Context