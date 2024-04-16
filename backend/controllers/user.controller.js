
import User from "../modeles/user.model.js"; // Corrected import statement

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // Access user ID from the request object

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
