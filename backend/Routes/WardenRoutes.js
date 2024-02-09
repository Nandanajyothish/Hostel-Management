

const express = require('express');
const router = express.Router();
const wardenController = require('../Controllers/WardenController');
const wardenAuthMiddleware = require('../Middleware/WardenAuth')


router.post('/wardenlogin', wardenController.wardenLogin);
router.post('/wardenmarkAttendance', wardenController.markAttendance);
router.get('/wardenGetFood', wardenController.getFoodMenu);
router.post('/wardenAddFood', wardenController.addFoodItem);
router.get('/wardenuserlist',wardenAuthMiddleware, wardenController.getWardenUserList);
router.put('/wardenblock/:userId', wardenController.blockUser);
router.put('/wardenunblock/:userId', wardenController.unblockUser);
router.put('/wardenUpdateFood/:id', wardenController.updateFoodItem);


router.delete('/wardenDeleteFood/:id', wardenController.deleteFoodItem);
router.post('/wardenNotifications', wardenController.createNotification);
router.get('/wardenGetnotifications', wardenController.getNotifications);

router.delete('/deleteNotifications/:id', wardenController.deleteNotification);
router.get('/wardenheader',wardenAuthMiddleware,wardenController.wardenHeader)


router.get('/paymentList',wardenController.getPaymentList)


module.exports = router;
