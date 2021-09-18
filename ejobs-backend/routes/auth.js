  import jwt from 'jsonwebtoken';

const JWT_SECRET="secret";


const auth = (req, res, next) => {
 
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(401)
        .json({ msg: "No authentication token, authorization denied." });
    try {
        jwt.verify(token,JWT_SECRET, (error, decoded) => {
          if (error) {
            return res.status(401).json({ msg: 'Token is not valid' });
          } else {
            req.user = decoded.user;
            next();
          }
        });
      } catch (err) {
        console.error('Something wrong with auth middleware');
        res.status(500).json({ msg: 'Server Error' });
      }
}

export default  auth;
