import { createContext, useEffect, useState,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        // Clean up the previous socket connection when authUser changes
        if (socket) {
            socket.close();
            setSocket(null);
        }

        // Establish new socket connection if authUser exists
        if (authUser) {
            const socket = io("http://localhost:8000", {
                query: {
                    userId: authUser._id,
                },
            });

            // Set the new socket and attach event listener
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // Return cleanup function to close socket when component unmounts or authUser changes
            return () => {
                socket.close();
                setSocket(null); // Ensure socket state is set to null
            };
        }
    }, [authUser, socket]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};







// import { createContext, useEffect, useState } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// export const SocketContext = createContext();

// export const SocketContextProvider = ({ children }) => {

//     const [socket, setSocket] = useState(null);
//     const [onlineUsers, setOnlineUsers] = [[]];
//     const {authUser} = useAuthContext();

//     useEffect(() => {
//         if(authUser){
//             const socket = io ("http://localhost:8000");

//             setSocket(socket);

//             return () => socket.close();
//         } else {
//             if(socket){
//                 socket.close();
//                 setSocket(null);
//             }
//         }

        
//     },[]);

//     return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>

// }