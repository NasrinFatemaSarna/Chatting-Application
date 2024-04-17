import Gender from "./Gender";

const signup = () => {
    return (
        <div className="flex items-center flex-col min-w-96 mx-auto justify-center">
           <div className="w-full p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-01">
           <h1 className="text-3xl font-semibold text-center text-gray-800  mb-4">SignUp
           <span className=" text-blue-600">ChatApp</span>
           </h1>

           <form >
            <div>
                <label className="label p-2">
                    <span className="text-semibold  label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter your name" className="input  text-black input-bordered h-10 w-full max-w-xs" />
            </div>
            <div>
                <label className="label p-2" >
                    <span className="text-semibold  label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter your username" className="input  text-black input-bordered h-10 w-full max-w-xs" />
            </div>

            <div>
                <label className="label p-2">
                    <span>Password</span>
                </label>
                <input type="password" placeholder="Enter your password" className="input  text-black input-bordered h-10 w-full max-w-xs" />
            </div>
            <div>
                <label className="label p-2">
                    <span className="text-semibold  label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm your password" className="input  text-black input-bordered h-10 w-full max-w-xs" />
            </div>

            <Gender/>
            <a href="#" className="text-black text-sm hover:text-red-600 mt-2 inline-block hover:underline">
               All ready have an account ?
            </a>
            <div>
                <button className="btn  mt-2 btn-sm btn-block">SignUp</button>
            </div>
           </form>



           </div>
        </div>
    );
};

export default signup;


// import Gender from "./Gender";
// const signup = () => {
//     return (
//         <div className="flex items-center flex-col min-w-96 mx-auto justify-center">
//            <div className="w-full p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-01">
//            <h1 className="text-3xl font-semibold text-center text-gray-800  mb-4">SignUp
//            <span className=" text-blue-600">ChatApp</span>
//            </h1>

//            <form >
//             <div>
//                 <label className="label p-2">
//                     <span className="text-semibold  label-text">Full Name</span>
//                 </label>
//                 <input type="text" placeholder="Enter your name" className="input  text-black input-bordered h-10 w-full max-w-xs" />
//             </div>
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
//             <div>
//                 <label className="label p-2">
//                     <span className="text-semibold  label-text">Confirm Password</span>
//                 </label>
//                 <input type="password" placeholder="Confirm your password" className="input  text-black input-bordered h-10 w-full max-w-xs" />
//             </div>

//             <Gender/>
//             <a href="#" className="text-black text-sm hover:text-red-600 mt-2 inline-block hover:underline">
//                All ready have an account ?
//             </a>
//             <div>
//                 <button className="btn  mt-2 btn-sm btn-block">SignUp</button>
//             </div>
//            </form>



//            </div>
//         </div>
//     );
// };

// export default signup;
