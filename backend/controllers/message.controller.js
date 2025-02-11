

import Message from "../modeles/message.model.js";
import Conversation from "../modeles/conversation.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage =  new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await newMessage.save();
        // await conversation.save();
        // this will run in parallel

        await Promise.all([newMessage.save(), conversation.save()]);

        // socket to functionality will go here

        const receiverSocketId = getReceiverSocketId(receiverId); // Get the receiver's socketId
        if(receiverSocketId ){
            // Send the new message to the receiver specified in the client 
            io.to(receiverSocketId ).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        // Make sure the Message model is registered before using it
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);
        

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};



export default sendMessage;
