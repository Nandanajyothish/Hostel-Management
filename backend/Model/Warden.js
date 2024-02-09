const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY
require('dotenv').config();

const wardenSchema = new Schema({

    username: { type: String,
       required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String,required:true },
    

  }, { timestamps: true });
  
  wardenSchema.pre('save', async function (next) {
    const warden = this;
    if (warden.isModified('password')) {
      warden.password = await bcrypt.hash(warden.password, 10);
    }
    next();
  });
  
  
  wardenSchema.methods.generateAuthToken = function () {
    const warden = this;
    const token = jwt.sign({ _id: warden._id }, secretKey); 
    warden.tokens = warden.tokens.concat(token);
    warden.save();
  
    return token;
  };
  
  
  const Warden = mongoose.model('Warden', wardenSchema);
  module.exports = Warden;