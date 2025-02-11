
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
      return () => setSelectedConversation(null)
    },[ setSelectedConversation ])

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* {Header} */}
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text text-white">To:</span>{" "}
                        <span className="text-gray-900 font-bold">{selectedConversation?.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;


const NoChatSelected = () => {
  const { authUser } = useAuthContext();

    return (
        <div className=" flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center px-4 text-center sm:text-lg md:text-xl text-gray-200
            gap-2 font-semibold">
                <p> {authUser?.fullName} </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl "/>

            </div>
          
        </div>
    )
}










// import Messages from "./Messages";
// import MessageInput from "./MessageInput";
// const messagecontainer = () => {
//     return (
//         <div className="md:min-w-[400px] flex flex-col">
//             <>
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text text-white">To:</span>
//                 <span className=" text-gray-900 font-bold">Username</span>

//             </div>
//             <Messages/>
//             <MessageInput/>
           
            
//             </>
            
//         </div>
//     );
// };

// export default messagecontainer;

// import Messages from "./Messages";
// import MessageInput from "./MessageInput";
// import { TiMessages } from "react-icons/ti";

// const MessageContainer = () => {
//     const noChatSelected = true; // This might be dynamic in a real application
//     return (
//         <div className="md:min-w-[450px] flex flex-col">
//             {noChatSelected ? (
//                 <NoChatSelected />
//             ) : (
//                 <>
//                     <div className="bg-slate-500 px-4 py-2 mb-2">
//                         <span className="label-text text-white">To:</span>
//                         <span className="text-gray-900 font-bold">Username</span>
//                     </div>
//                     <Messages />
//                     <MessageInput />
//                 </>
//             )}
//         </div>
//     );
// };

// const NoChatSelected = () => {
//     return (
//         <div className="flex items-center justify-center w-full h-full">
//             <div className="flex flex-col items-center px-4 text-center sm:text-lg md:text-xl text-gray-200 gap-2 font-semibold">
//                 <p>Welcome to the chat</p>
//                 <p>Select a user</p>
//                 <TiMessages className="text-3xl md:text-6xl" />
//             </div>
//         </div>
//     );
// };

// export default MessageContainer;
