
import SearchInput from "./searchinput"
import Conversations from "./conversations"
import LogoutButton from "./LogoutButton"

const sidebar = () => {
  return (
    <div className="border-r border-gray-200 p-2 flex flex-col">
      <SearchInput />

      <div className="divider px-2"></div>
      <Conversations/>
      <LogoutButton/>
     
    </div>
  )
}

export default sidebar

// import SearchInput from "./searchinput"
// import Conversations from "./conversations"
// import LogoutButton from "./LogoutButton"

// const sidebar = () => {
//   return (
//     <div className="border-r border-gray-200 p-4 flex flex-col">
//       <SearchInput />

//       <div className="divider px-3"></div>
//       <Conversations/>
//       <LogoutButton/>
     
//     </div>
//   )
// }

// export default sidebar
