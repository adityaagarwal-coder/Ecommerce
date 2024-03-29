import jwt from 'jsonwebtoken';

const generateToken = (res,userId) =>{
    const token = jwt.sign({ userId }, "secret", {
      expiresIn: "30d",
    });

    //Set JWT as HTTP-only cookie
    try{
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
    }
    catch(e){
      console.log(e);
    }
}

export default generateToken;