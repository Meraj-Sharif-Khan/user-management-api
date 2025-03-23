import User from "../models/user.model.js";

export const getUsers = async (req, res) =>{
    try {
        const loggedInUserId = req.user._id ;
        const allUsers = await User.find().select("-password");
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in user controller: " ,error.message);
        res.status(500).json({error: "Internal server error"})
        
    }
}

export const deleteUsers = async(req, res) =>{
    try {

        const {usersId} = req.body;
        
        // Validate if usersId is provided and is an array
        if (!usersId || !Array.isArray(usersId)) {
            return res.status(400).json({ message: 'Invalid user IDs provided' });
        }

        // Delete users with the provided IDs
        const deleteResult = await User.deleteMany({ _id: { $in: usersId } });

        // Check if any users were deleted
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ message: 'No users found to delete' });
        }

        // Return success response
        res.status(200).json({ message: 'Users deleted successfully', deletedCount: deleteResult.deletedCount });
        
    } catch (error) {
        
        console.log("Error in user controller: " ,error.message);
        res.status(500).json({error: "Internal server error"})
    }
}


export const blockUsers = async (req, res)=>{
    try {

        const {usersId} = req.body;

        // Validate if usersId is provided and is an array
        if (!usersId || !Array.isArray(usersId)) {
            return res.status(400).json({ message: 'Invalid user IDs provided' });
        }

        // Update users with the provided IDs to set blocked: true
        const updateResult = await User.updateMany(
            { _id: { $in: usersId } }, // Filter: Find users with these IDs
            { $set: { blocked: true } } // Update: Set blocked to true
        );

         // Check if any users were updated
         if (updateResult.matchedCount === 0) {
            return res.status(404).json({ message: 'No users found to block' });
        }

       // Return success response
       res.status(200).json({ message: 'Users blocked successfully', updatedCount: updateResult.modifiedCount });
        
    } catch (error) {
        
        console.log("Error in user controller: " ,error.message);
        res.status(500).json({error: "Internal server error"})
    }
}

export const unblockUsers = async (req, res)=>{
    try {

        const {usersId} = req.body;

        // Validate if usersId is provided and is an array
        if (!usersId || !Array.isArray(usersId)) {
            return res.status(400).json({ message: 'Invalid user IDs provided' });
        }

        // Update users with the provided IDs to set blocked: true
        const updateResult = await User.updateMany(
            { _id: { $in: usersId } }, // Filter: Find users with these IDs
            { $set: { blocked: false } } // Update: Set blocked to true
        );

         // Check if any users were updated
         if (updateResult.matchedCount === 0) {
            return res.status(404).json({ message: 'No users found to Unblock' });
        }

       // Return success response
       res.status(200).json({ message: 'Users unblocked successfully', updatedCount: updateResult.modifiedCount });
        
    } catch (error) {
        
        console.log("Error in user controller: " ,error.message);
        res.status(500).json({error: "Internal server error"})
    }
}