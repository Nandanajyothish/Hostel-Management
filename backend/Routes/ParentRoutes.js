const express = require('express');
const router = express.Router();
const parentController = require('../Controllers/ParentController');
const parentAuthMiddleware = require('../Middleware/ParentAuth');

router.post('/parentsignup', parentController.parentsignUp);
router.post('/login', parentController.parentLogin);
router.get('/parentGetNotifications', parentController.getNotifications);
router.get('/parentheader', parentAuthMiddleware, parentController.parentHeader);

router.post('/payment', parentAuthMiddleware, parentController.createPayment);
router.get('/attendancelist', parentController.getAttendanceList);
router.get('/searchattendance/:rollNumber',parentController. getAttendanceByRollNumber);
router.get('/paymentList',parentController.getPaymentList)
module.exports = router;
