const Rental = require('../models/rental');


module.exports.view = async (req, res) => {
  const pageOptions = {
      _page: parseInt((req.query._page - 1)   , 10) || 0,
      _limit: parseInt(req.query._limit, 10) || 1,
  }
  
  const totals = await Rental.countDocuments();
  
  Rental.find()
      .skip((pageOptions._page) * pageOptions._limit)
      .limit(pageOptions._limit)
      .exec(function (err, rentals) {
          if(err) { res.status(500).json(err); return; };
          res.status(200).json({
          "data": rentals,
          "pagination": {
              _page: pageOptions._page + 1 ,
              _limit: pageOptions._limit,
              _totalRows: totals,
          }
          })
      });
}