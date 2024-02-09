const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY
require('dotenv').config();

const parentSchema = new Schema({

    username: { type: String,
       required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String,required:true },
    selectedRollnos:{type:String,required:true},

    
    
  }, { timestamps: true });
  
  parentSchema.pre('save', async function (next) {
    const parent = this;
    if (parent.isModified('password')) {
      parent.password = await bcrypt.hash(parent.password, 10);
    }
    next();
  });
  
  
  // parentSchema.methods.generateAuthToken = function () {
  //   const parent = this;
  //   const token = jwt.sign({ _id: parent._id }, secretKey); 
  //   parent.tokens = parent.tokens.concat(token);
  //   parent.save();
  
  //   return token;
  // };
  
  
  const Parent = mongoose.model('Parent', parentSchema);
  module.exports = Parent;