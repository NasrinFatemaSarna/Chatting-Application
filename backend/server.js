
import express from 'express';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import connectToMongoDB from '../db/conectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'





const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get('/', (req, res) => {
//     //root route for http://localhost:8000/
//     res.send('Hello World!ppp')
// })



app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server started on port ${PORT}`);
});
