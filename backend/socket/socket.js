import { Server } from "socket.io"; 
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};
// {userId:socketId}

io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));


    // Example: Storing userSocketMap
    // userSocketMap[userId] = socket.id;

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        // Example: Remove user from userSocketMap on disconnect
        // delete userSocketMap[userId];
    });
});

export { app, server, io };


// import { Server } from "socket.io"; 
// import http from "http";
// import express from "express";


// const app = express();

// const server = http.createServer(app);
// const io = new Server(server,{
//     cors:{
//         origin:["http://localhost:3000"],
//         methods:["GET","POST"]
//     }
// });
// const userSocketMap = {};
// // {userId:socketId}

// io.on("connection", (socket) => {
//     console.log("user connected",socket.id)


// // socket.on() is used listen to event can be used to send event to client and server side
//     socket.on("disconnect", () => {
//         console.log("user disconnected", socket.id)
//     })
// })


// export { app, server, io } 