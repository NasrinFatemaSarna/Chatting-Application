import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utilis/extractTime";
import useConversation from "../../zustand/useConversation";


const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedConversation} =useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  
  const shakeClass = message.shouldShake ? "shake" : "";


    return (
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
             alt="Tailwind CSS chat bubble Component"
              src={profilePic}
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className="chat-footer text-white flex gap-1 items-center opacity-50">{ formattedTime}</div>
      </div>
    );
  };
  
  export default Message;











// import { useAuthContext } from "../../context/AuthContext";

// import useConversation from "../../zustand/useConversation";


// const Message = ({message}) => {

//   const {authUser} = useAuthContext();
//   const {selectedConversation} =useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const chatClassName = fromMe ? " chat-end" : " chat-start";
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "";


//     return (
//       <div className={`chat ${chatClassName}`}>
//         <div className="chat-image avatar">
//           <div className="w-12 rounded-full">
//             <img
//              alt="Tailwind CSS Component"
//               src={profilePic}
//             />
//           </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
//         <div className="chat-footer text-xs flex gap-1 items-center opacity-50">10:05</div>
//       </div>
//     );
//   };
  
//   export default Message;
  
