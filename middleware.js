const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){
    const token=req.headers.token;

    if(!token){
        res.status(403).send({
            message:"You are not logged in"
        });
        return;
    }

    const decoded=jwt.verify(token,"spidey-super-secret-key");
    const userId=decoded.userId;
    if(!userId){
        res.status(403).json({
            message:"malformed token"
        })
        return;
    }

    req.userId=userId;
    next();
}

module.exports={
    authMiddleware
}