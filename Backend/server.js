const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;  // Change port to 7001 or any other unused port

// MongoDB connection string
const MONGO_URL = 'mongodb+srv://subasree:Subasree24@mydatabase.mz8ix.mongodb.net/?retryWrites=true&w=majority&appName=mydatabase';

// Middleware
app.use(bodyParser.json());
app.use(cors()); // This will allow all origins, you can configure it more specifically if needed


mongoose.connect(MONGO_URL)
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

// Set up routes
app.use('/api', userRoutes());  // Fixed this line

// Start the server
app.listen(() => {
  console.log('Server running on port ${port}');
});















// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.json());

// const cors = require('cors');
// app.use(cors()); // This will allow all origins, you can configure it more specifically if needed


// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'Subasree24',
//   database: 'movie_booking',
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database');
// });

// const bookings = [];

// // Set up routes
// app.use('/api', userRoutes(db));








// app.post("/api/bookings/add", (req, res) => {
//   const { movieName, time, seats, namess, ph, email, payment } = req.body;

//   // Perform server-side validation if necessary
//   if (!movieName || !time || !seats || !namess || !ph || !email || !payment) {
//     return res.status(400).json({ error: "All fields are required!" });
//   }

//   // Save booking data (for example, to a database)
//   const booking = { movieName, time, seats, namess, ph, email, payment };
//   bookings.push(booking);

//   res.status(201).json({ message: "Booking successful!", booking });
// });
 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const userRoutes = require('./routes/userRoutes');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', userRoutes);

// // MySQL Connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // Replace with your MySQL username
//     password: 'Subasree24', // Replace with your MySQL password
//     database: 'ticketbooking' // Replace with your database name
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL!');
// });

// // Server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });














// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const mysql = require('mysql2')
// // const userRoutes = require('./routes/userRoutes'); 
// // const path=require('path')

// // const app = express();
// // const PORT = 5000;


// // app.use(cors());
// // app.use(bodyParser.json());

// // const pool = mysql.createPool({
// //     host: 'localhost',
// //     user: 'root',
// //     password: 'Subasree24',
// //     database: 'ticketbooking',
// //     waitForConnections: true,
// //     connectionLimit: 10,
// //     queueLimit: 0,
// //   });

  
// // pool.getConnection((err, connection) => {
// //     if (err) {
// //       console.error('Error connecting to MySQL:', err.message);
// //     } else {
// //       console.log('Connected to MySQL!');
// //       connection.release(); 
// //     }
// //   });

// // app.use(express.json()); 
// // app.use('/api/users', userRoutes); 



// // app.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });

