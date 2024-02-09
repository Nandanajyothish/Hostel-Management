// WrdenAuthMiddleware.js
const jwt = require('jsonwebtoken');
const Warden = require('../Model/Warden')
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
    const decoded = jwt.verify(authToken, process.env.WARDEN_SECRET_KEY);
    console.log("Decoded", decoded);

    const warden = await Warden.findOne({ _id: decoded.id });
    console.log('Warden:', warden);

    if (!warden) {
      return res.status(401).json({
        message: 'Unauthorized token',
      });
    }

    req.warden = warden;
    next();

  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized access',
    });
  }
};
