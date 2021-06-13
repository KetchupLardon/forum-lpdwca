import React, { createContext } from "react";

export const ForumContext = createContext();

export const ForumContextProvider = ({children}) => {
    return (
        <ForumContext.Provider>     
            <h1>Salsifi Forum</h1>
            {children}
        </ForumContext.Provider>
    )
}