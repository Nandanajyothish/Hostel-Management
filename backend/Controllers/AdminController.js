const mongoose = require('mongoose');
const adminModel = require('../Model/Admin')
const User = require('../Model/User');
const Warden = require('../Model/Warden');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcrypt');


const maxAge=3*24*60*60;
require('dotenv').config();



const createAdminToken = (id) => {
    return jwt.sign({ id }, process.env.ADMIN_SECRET_KEY, {
      expiresIn: maxAge,
    });
  };




const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body, '44444');
        const admin = await adminModel.findOne({ email: email });
        console.log(admin, "@@@@");
        
        if (admin) {
            const auth = await bcrypt.compare(password, admin.password);
            console.log(auth);

            if (auth) {
                const token = createAdminToken(admin._id);
                res.json({ message: 'Login successful', status: true, token, admin });
                return;  
            } else {
                res.json({ message: 'Password incorrect', status: false });
                return;  
            }
        } else {
            res.json({ message: 'Admin not found', status: false });
            return;  
        }
        
    } catch (error) {
        console.error('Error logging in:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const adminHeader=async(req,res)=>{
    try{
        const admin=req.admin;
        res.json({admin:admin,status:true})
    }catch(error){
        res.json({message:'internal server error',status:false})
    }
}



const registerWarden = async (req, res) => {
    try {
        const newWarden = new Warden({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phone,
        });
        await newWarden.save();
        res.status(201).json({ message: 'warden registered successfully' });
    } catch (error) {
        console.error('Error registering warden:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAdminUserList = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        console.error('Error fetching user list:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};





module.exports={
    adminLogin,
    registerWarden,getAdminUserList,adminHeader
}