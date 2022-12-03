import React, { useState } from "react";

const Context = React.createContext({})

export function RolContextProvider ({children}) {
    const [rol, rolUsers] = useState(
        ()=> window.sessionStorage.getItem('rol')
        )

    return <Context.Provider value={{rol, rolUsers}}>
        {children}
    </Context.Provider>
}

export default Context