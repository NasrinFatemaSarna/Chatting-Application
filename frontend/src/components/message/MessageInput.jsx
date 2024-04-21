
import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
  return (
   <form className="px-5 my-3">
    <div className="w-full relative">

    <input 
    type="text" placeholder="Send a message"
     className=" border text-sm rounded-lg block  text-black p-2.5 input-bordered w-full "/>
    <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
    <IoMdSend className="w-6 h-6 text-black cursor-pointer" />
      </button>

    </div>


   </form>
  )
}

export default MessageInput



// import { IoMdSend } from "react-icons/io";
// const MessageInput = () => {
//   return (
//    <form className="px-4 my-3">
//     <div className="w-full">

//     <input type="text" placeholder="Send a message" className="input  text-black p-2.5 input-bordered w-full max-w-xs"/>
//     <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//     <IoMdSend />
//       </button>

//     </div>


//    </form>
//   )
// }

// export default MessageInput
