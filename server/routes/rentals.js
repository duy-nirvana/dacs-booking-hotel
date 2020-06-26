const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');
const UserCtrl = require('../controllers/userRouteFunction');
const { normalizeErrors } = require('../helper/errorParser');
const User = require('../models/user');
const multer = require("multer");
const pathNode = require("path");
const controller = require('../controllers/rentals.controller');

const upload = multer({
    dest: pathNode.join(__dirname, "../uploads"),
});

router.get('/',(req,res) => {
    const city = req.query.city;
    const query = city ? { city: city.toLowerCase() } : {}

    Rental.find(query)
        .select('-bookings') // this means we dont want bookings array here
        .exec(function(error, filterRentals){
            if(error)
                return res.status(422).send({errors:normalizeErrors(error.errors)});

            // if lenght of foundRental is 0 thats means we dont got any rental by search query
            if(filterRentals.length == 0)
                return res.status(422).send(createErrorObject('No Rental Found!',`Chưa có phòng nào ở ${city}`));

            // if we got this line that means we found that renatal and we we'll send that response
            return res.json(filterRentals);
        })
});

router.get('/view', controller.view);

router.get('/manage', UserCtrl.authMiddleware, (req, res) => {
    const user = res.locals.user;
    Rental.where({user})
        .populate('bookings')
        .exec((err, foundRentals) => {
            if(err){
                return res.status(422).send({errors: normalizeErrors(error.errors)})
            }
            return res.json(foundRentals);
        });
})

router.get('/:id', (req,res) => {
    const rentalId = req.params.id;

    Rental.findById( rentalId )
        .populate('user', 'username -_id')
        .populate('bookings', 'startAt endAt -_id')
            .exec(function(err,foundRental){
                if(err){
                    return res.status(422).send({errors:[{title:'Rental Error!', detail: 'Could not find Rental!'}]});
                }
        return res.json(foundRental);
    });
});

router.get('/:id/verify-user', UserCtrl.authMiddleware, (req,res) => {
    const user = res.locals.user;

    Rental
        .findById(req.params.id)
        .populate('user')
        .exec((error, foundRental) => {
            if(error)
                return res.status(422).send({errors: normalizeErrors(error.errors)});

            if(foundRental.user.id !== user.id)
                return res.status(422).send(createErrorObject('Invalid User!','You are not rental Owner'));

            return res.json({status:'verified'});
        });

});

router.post('/', upload.single("image"), UserCtrl.authMiddleware, async (req, res, next) => {
    const image = req.file.path;
    const { title, street, city, category, bedrooms, shared, description, dailyRate } = req.body;
        const newRental = new Rental({ title, street, city, category, image, bedrooms, shared, description, dailyRate });
        const user = res.locals.user;
        newRental.user = user;
        await Rental.create(newRental, async (error, rental) => {
            if(error) {
                console.log("error: ", error);
                return res.status(422).send({errors: normalizeErrors(error.errors)});
            }
    
            await User.updateOne({_id: user.id},{$push: {rentals: rental}},(error, data) => {});
            return res.json(rental);
        })
   
});

router.patch('/:id', UserCtrl.authMiddleware, (req, res) => {
    const rentalData = req.body;
    const user = res.locals.user;

    Rental
        .findById(req.params.id)
        .populate('user')
        .exec((error, foundRental) => {
        
            if(error)
                return res.status(422).send({errors: normalizeErrors(error.errors)});

            if(user.id !== foundRental.user.id)
                return res.status(422).send(createErrorObject('Invalid User!','Bạn không phải là chủ phòng này!'));

            foundRental.set(rentalData);
            foundRental.save((err) => {
                if(error)
                    return res.status(422).send({errors: normalizeErrors(error.errors)});

                return res.status(200).send(foundRental);
        });
    });
});

router.delete('/:id', UserCtrl.authMiddleware, (req, res) => {
    const user = res.locals.user;

    Rental.findById(req.params.id) // this is params => /:id
    .populate('user','_id')
    .populate({
        path: 'bookings',
        select: 'startAt',
        match: {startAt: {$gt : new Date()}}
    })
    .exec((error, foundRental) => {

        if(error)
            return res.status(422).send({errors: normalizeErrors(error.errors)});

        if(user.id !== foundRental.user.id)
            return res.status(422).send(createErrorObject('Invalid User!', 'Bạn không phải là chủ sở hữu phòng này'));

        if(foundRental.bookings.length > 0)
            return res.status(422).send(createErrorObject('Active Bookings!','Không thể xóa phòng'));
        
        foundRental.remove((error) => {
            if(error)
                return res.status(422).send({errors: normalizeErrors(error.errors)});

            return res.json({
                status: 'deleted'
            });
        });
    });
});

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