
const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/AdminController');
const adminAuthMiddleware= require('../Middleware/AdminAuth')


router.post('/login', adminController.adminLogin);
router.post('/register', adminController.registerWarden);

router.get('/userlist',adminAuthMiddleware,adminController.getAdminUserList);
router.get('/adminheader',adminAuthMiddleware,adminController.adminHeader)
// router.get('/adminheader',adminAuthMiddleware,adminController.adminHeader);
module.exports = router;
