import { IoIosLogOut } from "react-icons/io";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();
  

  return (
    <div className="mt-auto">
      {!loading ? (
        <IoIosLogOut className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
         
        />
      ) : (
        // Placeholder for loading indicator or alternative content
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;













// import { IoIosLogOut } from "react-icons/io";


// import useLogout from "../../hooks/useLogout";

// const LogoutButton = () => {
//   const { logout, loading } = useLogout();

//   return (
//     <div className="mt-auto">
//       {!loading ? (
//         <IoIosLogOut
//           className="w-6 h-6 text-black cursor-pointer"
//           onClick={logout}
//         />
//       ) : (
//         // Placeholder for loading indicator or alternative content
//         <span className="loading loading-spinner">Loading...</span>
//       )}
//     </div>
//   );
// };

// export default LogoutButton;