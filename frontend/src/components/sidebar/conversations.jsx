
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utilis/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={index === conversations.length - 1} // Corrected index usage
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};

export default Conversations;


// import useGetConversations from "../../hooks/useGetConversations"
// import Conversation from "./Conversation"


// const Conversations = () => {
//  const {conversations,loading}= useGetConversations();
//  console.log("CONVERSATIONS:",conversations)



//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
      
//     </div>
//   )
// }

// export default Conversations;







