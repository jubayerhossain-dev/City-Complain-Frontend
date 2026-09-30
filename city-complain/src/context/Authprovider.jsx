import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const Authprovider = ({children}) => {

    const[authuser, setauthuser] = useState(null)

    return (
        <div>
            <AuthContext.Provider value={{authuser, setauthuser}} >{children}</AuthContext.Provider>
        </div>
    );
};

export default Authprovider;