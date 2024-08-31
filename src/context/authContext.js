import React, { createContext, useState } from 'react';

export const authContext = createContext();

export const AuthProvider = ({children}) =>{
    const [authToken, setAuthToken] = useState(null);
    const [authData, setAuthData] = useState(null);
    return(
        <authContext.Provider value ={{authToken, setAuthToken, authData, setAuthData}}>
            {children}
        </authContext.Provider>
    );
};
