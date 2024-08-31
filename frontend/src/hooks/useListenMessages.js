
import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification-9-158194.mp3";


const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages} =useConversation();


  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true
      const sounds = new Audio(notificationSound);
      sounds.play();
      setMessages([...messages, newMessage]);
    })
    return () => socket?.off("newMessage")
    

  },[ socket, messages, setMessages])

}

export default useListenMessages

