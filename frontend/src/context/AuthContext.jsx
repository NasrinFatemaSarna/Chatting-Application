import { createContext, useState,useContext } from "react";

export const AuthContext = createContext();


export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    // Retrieve the stored user from localStorage or set it to null if not found
   
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-User")) || null);

    return  <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
    
};