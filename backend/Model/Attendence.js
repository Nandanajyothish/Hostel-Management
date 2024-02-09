const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  isPresent: {
    type: Boolean,
    default: false,
  },
  RollNumber:{
    type:Number,
    required:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;