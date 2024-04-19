import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.Error) {
                throw new Error(data.Error);
            }
            // localstorage
            localStorage.removeItem("chat-User");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading }; // Return as an object
};

export default useLogout;




// import { useState } from "react";

// const useLogout = () => {
//     const [loading, setLoading] = useState(false);

//     const logout = async () => { // Mark the function as async
//         setLoading(true);
//         try {
//             const res = await fetch("/api/auth/logout", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//             });
//             const data = await res.json();
//             if (data.Error) {
//                 throw new Error(data.Error);
//             }
//             // localstorage
//             localStorage.removeItem("chat-User");
//         } catch (error) {
//             console.log(error);
//         }
//         setLoading(false);
//     }
// }


// export default useLogout 




