import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useLogin = () => {

   const { setAuthUser } = useAuthContext();
   const [loading,setLoading] = useState(false);


    const login = async ({ username, password }) => {
      const success =  handleInputErrors({ username, password});
      if(!success) return;
          setLoading(true);
   try{
     const res = await fetch("/api/auth/login", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ username, password }),
     })
     const data = await res.json();
     if(data.Error) {
       throw new Error(data.Error);
     }
     localStorage.setItem("chat-User", JSON.stringify(data));
     setAuthUser(data);
   } catch(error) {
      toast.error(error.message);

   } finally {
      setLoading(false);
   }
}
   return { login, loading };
};

export default useLogin;



function handleInputErrors({ username, password}) {
   if( !username || !password ){
   toast.error("All fields are required");
   return false;
 }
   return true;
 }