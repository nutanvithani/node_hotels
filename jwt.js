const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {

    //first check req headers has authriziton or not
    const authHeader = req.headers.authorization;
    if (!authHeader)  {
        return res.status(401).send({ message: "TOKEN ARE NOT FOUND" });
    }

  const token = req.header.authorization.split("")(1);
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(err);
    res.status(400).send("Invalid token.");
  }
};

//function to genrate token

const generateToken = (userData) =>{
    return jwt.sign(userData,process.env.JWT_SECRATE,{expiresIn:30000});
}
module.exports = {jwtAuthMiddleware,generateToken};
