import Message from "../model/message.mode.js";
import User from "../model/user.model.js";
import cloudinary from "../utils/cloudinary.js";


export const getuserdetails = async(req, res) => {
    
    try {
        const loggedUserId = req.user._id;
        const users = await User.find({ _id: { $ne: loggedUserId } }).select("-password");

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}

export const getMessages = async(req, res) => {
    try {
        const{id:userChatId} = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                { sender: senderId, receiver: userChatId },
                { sender: userChatId, receiver: senderId },
            ],
        }).sort({ createdAt: 1 });

        res.status(200).json(messages);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
        
    }
}

export const sendMessage = async(req, res) => {
    try {
        const {text,image} = req.body;
        const senderId = req.user._id;
        const receiverId = req.params.id;

        let imageurl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(imageurl);
            imageurl = uploadResponse.secure_url
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageurl,
        });

        await newMessage.save();

        res.status(201).json(newMessage);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}