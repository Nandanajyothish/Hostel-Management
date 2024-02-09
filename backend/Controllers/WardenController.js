
const Attendance =require('../Model/Attendence')
const Warden = require('../Model/Warden');
const Menu =require('../Model/Menu')
const User =require('../Model/User')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const Notification= require('../Model/Notification')
const Payment=require('../Model/Payment')
const maxAge = 3*24*60*60;
require('dotenv').config();


// jwt
const createWardenToken = (id) => {
  return jwt.sign({ id }, process.env.WARDEN_SECRET_KEY, {
    expiresIn: maxAge,
  });
};

const markAttendance = async (req, res) => {
    try {
            const newAttendance = new Attendance({
              studentName: req.body.studentName,
              isPresent: req.body.isPresent,
              RollNumber:req.body.rollno,
            });
        
            await newAttendance.save();
        
            // Check if isPresent is false and send a message accordingly
            const message = req.body.isPresent ? 'Student Present' : 'Student Absent';
        
            res.status(201).json({ message });
          } catch (error) {
            console.error('Error marking attendance:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
          }
        }
        

const wardenLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body, '|||||');
        
        const warden = await Warden.findOne({ email:email });
        console.log(warden,'####');
  
        if (warden) {
          const auth =await bcrypt.compare(password, warden.password)
          console.log(auth);

          
        if(auth){
          const token = createWardenToken(warden._id)
          res.json({message: 'Login successfull', status:true ,token , warden});
          return
        }else{
          res.json({message: 'password incorrect', status:false});
          return;
        }
      }else{
        res.json({message:'Warden not found', status:false});
      }
      } catch (error) {
        console.error('Error logging in:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    };

    const wardenHeader=async(req,res)=>{
      try {
        const warden=req.warden;
        res.json({warden:warden,status:true})
      } catch (error) {
        res.json({message:'internal server error',status:false}) 
      }
    }


    const getFoodMenu = async (req, res) => {
      try {
        const menu = await Menu.find();
        res.json(menu);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    const addFoodItem = async (req, res) => {
      try {
        const { category, foodname, time } = req.body;
        const newMenu= new Menu({ category, foodname ,time});
        await newMenu.save();
        res.json(newMenu);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

    
    
    const updateFoodItem = async (req, res) => {
      try {
        const { category, foodname ,time } = req.body;
        const updatedMenu = await Menu.findByIdAndUpdate(
          req.params.id,
          { category, foodname ,time },
          { new: true }
        );
        res.json(updatedMenu);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

  const deleteFoodItem = async (req, res) => {
  try {
    const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
    res.json(deletedMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getWardenUserList = async (req, res) => {
  try {
      const users = await User.find();
      res.status(200).json({ users });
  } catch (error) {
      console.error('Error fetching user list:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

const blockUser = async (req, res) => {
  try {
      const { userId } = req.params;
      const user = await User.findByIdAndUpdate(userId, { isBlocked: true }, { new: true });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User blocked successfully', user });
  } catch (error) {
      console.error('Error blocking user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

const unblockUser = async (req, res) => {
  try {
      const { userId } = req.params;
      const user = await User.findByIdAndUpdate(userId, { isBlocked: false }, { new: true });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User unblocked successfully', user });
  } catch (error) {
      console.error('Error unblocking user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

 const createNotification= async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNotification = new Notification({ title, content });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getNotifications= async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const deleteNotification = async (req, res) => {
  try {
    
    const deletedNotification = await Notification.findByIdAndDelete(req.params.id);
    res.json(deletedNotification)
    

  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPaymentList = async (req,res)=>{
  try {
    const fees = await Payment.find();
    res.status(200).json({ fees });
} catch (error) {
    console.error('Error fetching user list:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
}
}


module.exports = { markAttendance, wardenLogin,  getFoodMenu, addFoodItem, 
                  updateFoodItem, deleteFoodItem , getWardenUserList ,
                  blockUser ,  unblockUser , createNotification,getNotifications
                   ,deleteNotification,wardenHeader,getPaymentList
                  };
