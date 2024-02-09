// userAuthMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../Model/User');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log('Received auth token:', authHeader);

    const authToken = authHeader.replace(/^Bearer\s+/i, '');
    console.log('Received auth token:', authToken);


    if (!authToken) {
      return res.status(401).json({
        message: 'No auth token',
      });
    }

    const decoded = jwt.verify(authToken, process.env.SECRET_KEY);
    console.log(decoded ,'aaaa')
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized token',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized access',
    });
  }
};
