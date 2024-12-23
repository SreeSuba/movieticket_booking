module.exports =


{
    getAllBookings: (db) => (_req, res) => {
      const query = 'SELECT * FROM bookings';
      db.query(query, (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Error retrieving bookings' });
        }
        res.json(results);
      });
    },
    
    createBooking: (db) => (req, res) => {
      // Extract values from request body
      const { movieName, time, seats, namess, ph, email, payment } = req.body;
    
      // Validate required fields
      if (!movieName || !time || !seats || !namess || !ph || !email || !payment) {
        return res.status(400).json({ message: 'All fields are required' });
      }
    
      const query = 'INSERT INTO bookings (movieName, time, seats, namess, ph, email, payment) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(query, [movieName, time, seats, namess, ph, email, payment], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating booking' });
        }
    
        // Return success response with inserted booking ID
        res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
        console.log('Received data:', req.body); 
      });
    },
    
    updateBooking: (db) => (req, res) => {
        // Extract the booking ID from URL parameters
        const { id } = req.params;
        
        // Extract other values from the request body
        const { movieName, time, seats, namess, ph, email, payment } = req.body;
      
        // Validate required fields
        if (!movieName || !time || !seats || !namess || !ph || !email || !payment) {
          return res.status(400).json({ message: 'All fields are required' });
        }
      
        // SQL query to update the booking in the database
        const query = 'UPDATE bookings SET movieName = ?, time = ?, seats = ?, namess = ?, ph = ?, email = ?, payment = ? WHERE id = ?';
        
        // Execute the query to update the booking in the database
        db.query(query, [movieName, time, seats, namess, ph, email, payment, id], (err, result) => {
          if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Error updating booking' });
          }
      
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Booking not found' });
          }
      
          
          res.json({ message: 'Booking updated successfully' });
        });
      },
      
    deleteBooking: (db) => (req, res) => {
      const { id } = req.params;
      const query = 'DELETE FROM bookings WHERE id = ?';
      db.query(query, [id], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error deleting booking' });
        }
        res.json({ message: 'Booking deleted successfully' });
      });
    },
  };
  












    // createBooking: (db) => (req, res) => {
        
    //   const query = 'INSERT INTO bookings (movieName, time, seats, namess, ph, email, payment) VALUES (?, ?, ?, ?, ?, ?, ?)';
    //   db.query(query, [movieName, time, seats, namess, ph, email, payment], (err, result) => {
    //     if (err) {
    //       return res.status(500).json({ message: 'Error creating booking' });
    //     }
    //     res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
    //   });
    // },



// createBooking: (db) => (req, res) => {
        
    //   const query = 'INSERT INTO bookings (movieName, time, seats, namess, ph, email, payment) VALUES (?, ?, ?, ?, ?, ?, ?)';
    //   db.query(query, [movieName, time, seats, namess, ph, email, payment], (err, result) => {
    //     if (err) {
    //       return res.status(500).json({ message: 'Error creating booking' });
    //     }
    //     res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
    //   });
    // },



 // updateBooking: (db) => (req, res) => {
    //   const { id } = req.params;
    //   const { movieName, time, seats, namess, ph, email, payment } = req.body;
    //   const query = 'UPDATE bookings SET movieName = ?, time = ?, seats = ?, namess = ?, ph = ?, email = ?, payment = ? WHERE id = ?';
    //   db.query(query, [movieName, time, seats, namess, ph, email, payment, id], (err, _result) => {
    //     if (err) {
    //       return res.status(500).json({ message: 'Error updating booking' });
    //     }
    //     res.json({ message: 'Booking updated successfully' });
    //   });
    // },

// const User = require('../models/User');

// // Create a booking
// exports.addBooking = (req, res) => {
//     const { movie, timing, seat, name, phone, email, payment } = req.body;

//     if (!movie || !timing || !seat || !name || !phone || !email || !payment) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     const newUser = { movie, timing, seat, name, phone, email, payment };
//     User.createBooking(newUser, (err, results) => {
//         if (err) return res.status(500).json(err);
//         res.status(201).json({ message: 'Booking added successfully', data: results });
//     });
// };

// // Get all bookings
// exports.getBookings = (_req, res) => {
//     User.getBookings((err, results) => {
//         if (err) return res.status(500).json(err);
//         res.json(results);
//     });
// };

// // Update booking by email
// exports.updateBooking = (req, res) => {
//     const { email } = req.params;
//     const updatedData = req.body;

//     User.updateBookingByEmail(email, updatedData, (err, results) => {
//         if (err) return res.status(500).json(err);
//         res.json({ message: 'Booking updated successfully', data: results });
//     });
// };

// // Delete booking by email
// exports.deleteBooking = (req, res) => {
//     const { email } = req.params;

//     User.deleteBookingByEmail(email, (err, _results) => {
//         if (err) return res.status(500).json(err);
//         res.json({ message: 'Booking deleted successfully' });
//     });
// };
























// // const db = require('../models/User');



// // exports.addBooking = (req, res) => {
// //     const { id,movie,timing, seat , name,phone,email,payment } = req.body;
// //     const query = 'INSERT INTO userss (id,movie,timing,seat,name,phone,email,payment) VALUES (?, ?, ?, ?,?,?,?,?)';
// //     db.query(query, [id, movie, timing,seat, name,phone,email,payment], (err, result) => {
// //         if (err) {
// //             return res.status(500).send(err);
// //         }
// //         res.status(201).json({ message: 'Booking added!', bookingId: result.insertId });
// //     });
// // };

// // // Fetch booking by email
// // exports.getBookingByEmail = (req, res) => {
// //     const { email } = req.params;
// //     const query = 'SELECT * FROM userss WHERE email = ?';
// //     db.query(query, [email], (err, results) => {
// //         if (err) {
// //             return res.status(500).send(err);
// //         }
// //         if (results.length === 0) {
// //             return res.status(404).json({ message: 'No bookings found for this email.' });
// //         }
// //         res.status(200).json(results);
// //     });
// // };

// // // Update booking by email
// // exports.updateBookingByEmail = (req, res) => {
// //     const { email } = req.params;
// //     const { id,movie,timing, seat , name,phone,payment} = req.body;
// //     const query = 'UPDATE userss SET id = ?,movie = ?, timing = ?,seat = ?,name = ?,phone = ?,payment= ?  WHERE email = ?';
// //     db.query(query, [id, movie, timing,seat, name,phone,email,payment], (err, result) => {
// //         if (err) {
// //             return res.status(500).send(err);
// //         }
// //         if (result.affectedRows === 0) {
// //             return res.status(404).json({ message: 'No booking found for this email.' });
// //         }
// //         res.status(200).json({ message: 'Booking updated successfully!' });
// //     });
// // };

// // // Delete booking by email
// // exports.deleteBookingByEmail = (req, res) => {
// //     const { email } = req.params;
// //     const query = 'DELETE FROM userss WHERE email = ?';
// //     db.query(query, [email], (err, result) => {
// //         if (err) {
// //             return res.status(500).send(err);
// //         }
// //         if (result.affectedRows === 0) {
// //             return res.status(404).json({ message: 'No booking found for this email.' });
// //         }
// //         res.status(200).json({ message: 'Booking deleted successfully!' });
// //     });
// // };






















// // const User = require('../models/User'); 


// // const addUser = async (req, res) => {
// //   try {
// //     const { movie, timing, seat, name, phone, email, payment } = req.body;

    
// //     if (!name || !email) {
// //       return res.status(400).json({ message: 'Name and Email are required' });
// //     }

    
// //     await User.addUser({ movie, timing, seat, name, phone, email, payment });

// //     return res.status(200).json({
// //       message: 'User added successfully!',
// //       data: { movie, timing, seat, name, phone, email, payment },
// //     });
// //   } catch (error) {
// //     console.error('Error adding user:', error);
// //     res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // };

// // module.exports = { addUser };
