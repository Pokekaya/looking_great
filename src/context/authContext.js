import React, { createContext, useState } from 'react';

export const authContext = createContext();

export const AuthProvider = ({children}) =>{
    const [authToken, setAuthToken] = useState(null);
    return(
        <authContext.Provider value ={{authToken, setAuthToken}}>
            {children}
        </authContext.Provider>
    );
};
