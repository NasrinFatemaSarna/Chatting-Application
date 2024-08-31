import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({ username, password });
        // console.log(username, password);
    }
   
    return (
        <div className="flex items-center flex-col min-w-96 mx-auto justify-center">
           <div className="w-full p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-01">
           <h1 className="text-3xl font-semibold text-center text-gray-800  mb-4">Login
           <span className=" text-blue-600">ChatApp</span>
           </h1>

           <form onSubmit={handleSubmit} >
            <div>
                <label className="label p-2" >
                    <span className="text-semibold  label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter your username" className="input  text-black input-bordered h-10 w-full max-w-xs"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
            </div>

            <div>
                <label className="label p-2">
                    <span>Password</span>
                </label>
                <input type="password" placeholder="Enter your password" className="input  text-black input-bordered h-10 w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Link to="/signup" className="text-black text-sm hover:text-red-600 mt-2 inline-block hover:underline">
               {"Don't"} have an account ?
            </Link>
            <div>
                <button className="btn  mt-2 btn-sm btn-block"
                disabled={loading}
                >
            {loading ? <span className="loading loading-spinner"></span> : "Login"} 
                    
            </button>
            </div>
           </form>



           </div>
        </div>
    );
};

export default Login;




// const Login = () => {
//     return (
//         <div className="flex items-center flex-col min-w-96 mx-auto justify-center">
//            <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-01">
//            <h1 className="text-3xl font-semibold text-center text-gray-800  mb-4">Login
//            <span className=" text-blue-600">ChatApp</span>
//            </h1>

//            <form >
//             <div>
//                 <label className="label p-2" >
//                     <span className="text-semibold  label-text">Username</span>
//                 </label>
//                 <input type="text" placeholder="Enter your username" className="input  text-black input-bordered h-10 w-full max-w-xs" />
//             </div>

//             <div>
//                 <label className="label p-2">
//                     <span>Password</span>
//                 </label>
//                 <input type="password" placeholder="Enter your password" className="input  text-black input-bordered h-10 w-full max-w-xs" />
//             </div>
//             <a href="#" className="text-black text-sm hover:text-red-600 mt-2 inline-block hover:underline">
//                {"Don't"} have an account ?
//             </a>
//             <div>
//                 <button className="btn  mt-2 btn-sm btn-block">Login</button>
//             </div>
//            </form>



//            </div>
//         </div>
//     );
// };

// export default Login;