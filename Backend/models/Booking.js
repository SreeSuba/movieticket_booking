const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  time: { type: String, required: true },
  seats: { type: Number, required: true },
  namess: { type: String, required: true },
  ph: { type: String, required: true },
  email: { type: String, required: true },
  payment: { type: String, required: true },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;




// In this case, user.js is more of a structure for bookings.
//  Since the database queries are handled directly in the controller, 
// you can skip writing the model class.



// const db = require('../server');


// exports.createBooking = (user, callback) => {
//     const query = 'INSERT INTO userss SET ?';
//     db.query(query, user, callback);
// };

// // Get all bookings
// exports.getBookings = (callback) => {
//     const query = 'SELECT * FROM userss';
//     db.query(query, callback);
// };

// // Update a booking by email
// exports.updateBookingByEmail = (email, updatedData, callback) => {
//     const query = 'UPDATE userss SET ? WHERE email = ?';
//     db.query(query, [updatedData, email], callback);
// };

// // Delete a booking by email
// exports.deleteBookingByEmail = (email, callback) => {
//     const query = 'DELETE FROM userss WHERE email = ?';
//     db.query(query, email, callback);
// };
















// // const mysql=require('mysql2')

// // const addUser = (userData) => {
// //   return new Promise((resolve, reject) => {
// //     const { movie, timing, seat, name, phone, email, payment } = userData;

// //     const query = `
// //       INSERT INTO userss (movie, timing, seat, name, phone, email, payment)
// //       VALUES (?, ?, ?, ?, ?, ?, ?)
// //     `;

// //     db.query(
// //       query,
// //       [movie, timing, seat, name, phone, email, payment],
// //       (err, result) => {
// //         if (err) {
// //           console.error('Error inserting user:', err);
// //           return reject(err);
// //         }
// //         resolve(result);
// //       }
// //     );
// //   });
// // };

// // module.exports = { addUser };
