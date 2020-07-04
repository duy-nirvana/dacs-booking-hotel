const express = require('express');
const router = express.Router();

// this import with give access to authentication 'Api'
const UserRouteFunc = require('../controllers/user.controller');
const controller = require('../controllers/booking.controller');

router.post('', UserRouteFunc.authMiddleware, controller.createBooking);
router.get('/manage', UserRouteFunc.authMiddleware, controller.getUserBookings);

module.exports = router;
