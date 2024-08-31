
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || loading) return; // Prevent sending message while loading
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm rounded-lg block text-black p-2.5 input-bordered w-full"
        />
        {!loading && ( // Render send button only when not loading
          <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <IoMdSend />
          </button>
        )}
        {loading && <div className="loading loading-spinner"></div>}
      </div>
    </form>
  );
};

export default MessageInput;




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
