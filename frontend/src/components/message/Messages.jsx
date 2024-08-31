import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
 

  useEffect (() => {
   setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth"})
   },100);
    
  },[messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((message) => (
      <div key={message._id}
      ref={lastMessageRef}
      
      >
        <Message message={message} />
      </div>
      
      ))}


      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-300">Send a message to get started</p>
      )}

    </div>
  );
};

export default Messages;



// import Message from "./Message";

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//          <Message/>
//     </div>
//   )
// }

// export default Messages
