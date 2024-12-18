import jwt from "jsonwebtoken"
export const generateJWT = (user_id , res) => {

   const token = jwt.sign({user_id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"});

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.development !== "development", // Ensure secure cookies in production
  });

  return token;

}