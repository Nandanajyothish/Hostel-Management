// parentAuthMiddleware.js
const jwt = require('jsonwebtoken');
const Parent = require('../Model/Parent');
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

    const decoded = jwt.verify(authToken, process.env.PARENT_SECRET_KEY);
    console.log(decoded ,'aaaa')
    const parent = await Parent.findOne({ _id: decoded.id });

    if (!parent) {
      return res.status(401).json({
        message: 'Unauthorized token',
      });
    }

    req.parent = parent;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized access',
    });
  }
};
