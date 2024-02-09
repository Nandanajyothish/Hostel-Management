

const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const userAuthMidlleware = require('../Middleware/UserAuth')


router.post('/signup', userController.signUp);
router.post('/login', userController.userLogin);
router.get('/userGetFood',userAuthMidlleware, userController.getFoodMenu);
router.get('/userGetNotifications', userController.getNotifications);
router.get('/userheader',userAuthMidlleware,userController.userHeader)
router.get('/attendanceList',userController.getAttendanceList)

router.get('/feelist',userController.getPaymentList)

module.exports = router;
