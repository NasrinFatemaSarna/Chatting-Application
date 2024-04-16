

import jwt  from "jsonwebtoken";


const generateTokenAndSetCookie = (userId,res) => {
const token = jwt.sign({ userId }, process.env.JWT_SECRET, { 
    expiresIn: "15d" 
});

res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // set to true to prevent XSS attacks
    sameSite: "strict", // set to 'strict' to prevent CSRF attacks
    secure: process.env.NODE_ENV === "development",  // set to true if using HTTPS
})
}

export default generateTokenAndSetCookie