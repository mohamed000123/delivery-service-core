import jwt from "jsonwebtoken";

const authCheck = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.json("authorization error please try to log in again");
      } else {
        const userId = decodedToken.id;
        req.userId=userId
        next();
      }
    });
  } else {
    res.json("authorization error please try to log in again");
  }
};

export default authCheck;
