import { user } from '../models/user.model.js'
import bcryptjs from "bcryptjs";

export async function signup(req, res) {
   try {
    const {email,password,username} = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({ success:false,message:" All filde are required" })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ success:false,message:" Invalid Email" })
    }
    if (password.length < 6 ) {
        return res.status(400).json({ success:false,message:" password must be 6 characters" })
    }

    const existingUserByEmail = await user.findOne({email:email})

    if (existingUserByEmail) {
        return res.status(400).json({success:false,message:" Email alrady exist"})
    }

    const existingUserByUsername = await User.findOne({ username: username });

		if (existingUserByUsername) {
			return res.status(400).json({ success: false, message: "Username already exists" });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

		const newUser = new User({
			email,
			password,
			username,
			image,
		});

        generateTokenAndSetCookie(newUser._id, res);
		await newUser.save();
        res.status(201).json({
			success: true,
			user: {
				...newUser._doc,
				password: "",
			},
		});

   } catch (error) {
    
   }
}

export async function login(req, res) {
    res.send("login route")
}

export async function logout(req, res) {
    res.send("logout route")
}