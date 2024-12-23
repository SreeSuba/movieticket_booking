const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

module.exports = (db) => {
  router.get('/bookings/get', userController.getAllBookings(db));
  router.post('/bookings/add', userController.createBooking(db));
  router.put('/bookings/update/:id', userController.updateBooking(db));
  router.delete('/bookings/delete/:id', userController.deleteBooking(db));

  return router;
};

































// const express = require('express');
// const userController = require('../controllers/userController');

// const router = express.Router();

// // Routes
// router.post('/bookings', userController.addBooking); // Add booking
// router.get('/bookings', userController.getBookings); // Fetch all bookings
// router.put('/bookings/:email', userController.updateBooking); // Update booking by email
// router.delete('/bookings/:email', userController.deleteBooking); // Delete booking by email

// module.exports = router;

