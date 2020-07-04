const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/user.controller');
const { normalizeErrors } = require('../helper/errorParser');
const multer = require("multer");
const pathNode = require("path");
const controller = require('../controllers/rentals.controller');

const upload = multer({
    dest: pathNode.join(__dirname, "../uploads"),
});

router.get('/', controller.index);

router.get('/view', controller.view);

router.get('/manage', UserCtrl.authMiddleware, controller.manage)

router.get('/:id', controller.findId);

router.get('/:id/verify-user', UserCtrl.authMiddleware, controller.verify);

router.post('/', upload.single("image"), UserCtrl.authMiddleware, controller.postRental);

router.patch('/:id', UserCtrl.authMiddleware, controller.editRental);

router.delete('/:id', UserCtrl.authMiddleware, controller.deleteRental);

// create error message object as a helper method
const createErrorObject = (title,detail) => {
    return {
        errors: [
            {
                title,detail
            }
        ]
    }
}

module.exports = router; 