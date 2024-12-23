import React, { useState } from "react";
import "./Login.css"; 
import axios from "axios"; 

const Login = () => {
  const [formData, setFormData] = useState({
    movieName: "",
    time: "",
    seats: "",
    namess: "",
    ph: "",
    email: "",
    payment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Make POST request to your backend
      const response = await axios.post("http://localhost:5000/api/bookings/add", formData);
     

      // Handle success response
      alert("Booking Successful!");
      console.log("Response from server:", response.data);

      // Reset form
      setFormData({
        movieName: "",
        time: "",
        seats: "",
        namess: "",
        ph: "",
        email: "",
        payment: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error); 
     

      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1 className="header">HELLO EVERYONE! WELCOME TO MY TICKET BOOKING WEBSITE</h1>
      <div className="form-container">
        <h2 className="form-title"><i>TICKET BOOKING FORM</i></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Movie Interested:</label>
            <input
              type="text"
              name="movieName"
              placeholder="Enter Interested Movie"
              value={formData.movieName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Timings:</label>
            <input
              type="text"
              name="time"
              placeholder="Enter Your Timing"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Seat Required:</label>
            <input
              type="text"
              name="seats"
              placeholder="Enter Your Preferred Seating"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Your Name:</label>
            <input
              type="text"
              name="namess"
              placeholder="Enter Your Name"
              value={formData.namess}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Phone Number:</label>
            <input
              type="text"
              name="ph"
              placeholder="Enter Your Phone Number"
              value={formData.ph}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Mail ID:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Mail ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Payment:</label>
            <input
              type="number"
              name="payment"
              placeholder="Enter Payment Amount"
              value={formData.payment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="thank-you">THANKS FOR BOOKING US!</p>
      </div>
    </div>
  );
};

export default Login;



























// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';  // Import the CSS file

// const Login = () => {
//   const [movieName, setMovieName] = useState('');
//   const [time, setTime] = useState('');
//   const [seats, setSeats] = useState('');
//   const [namess, setNamess] = useState('');
//   const [ph, setPh] = useState('');
//   const [email, setEmail] = useState('');
//   const [payment, setPayment] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const ticketData = { movieName, time, seats, namess, ph, email, payment };

//     try {
//       await axios.post('http://localhost:3000/api/bookings/add', ticketData);
//       alert('Ticket booked successfully');
//     } catch (error) {
//       console.error('Error booking ticket:', error);
//       alert('Error booking ticket');
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Movie Ticket Booking</h2>
//       <input
//         type="text"
//         placeholder="Movie Name"
//         value={movieName}
//         onChange={(e) => setMovieName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Seat"
//         value={seats}
//         onChange={(e) => setSeats(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Name"
//         value={namess}
//         onChange={(e) => setNamess(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Phone"
//         value={ph}
//         onChange={(e) => setPh(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//         <input
//         type="payment"
//         placeholder="Payment"
//         value={payment}
//         onChange={(e) => setPayment(e.target.value)}
//       />
      
//       <button type="submit">Book Ticket</button>
//     </form>
//   );
// };

// export default Login;






















// import React, { useState, useEffect } from 'react';

// const Login = () => {
//     const [movieName, setMovieName] = useState('');
//     const [time, setTime] = useState('');
//     const [seats, setSeats] = useState('');
//     const [namess, setNamess] = useState('');
//     const [ph, setPh] = useState('');
//     const [email, setEmail] = useState('');
//     const [payment, setPayment] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false); // Track if submission is in progress
//     const [successMessage, setSuccessMessage] = useState('');

//     // useEffect to handle any side effects (like logging or initializing data)
//     useEffect(() => {
//         console.log("MovieBookingForm component is mounted");
//         return () => {
//             console.log("MovieBookingForm component is unmounted");
//         };
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Set submitting state to true
//         setIsSubmitting(true);

//         const formData = {
//             movieName,
//             time,
//             seats,
//             namess,
//             ph,
//             email,
//             payment,
//         };

//         // Make API request to submit the form data
//         fetch('http://localhost:3000/api/bookings', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.message === 'Booking created successfully') {
//                 setSuccessMessage('Your booking has been successfully placed!');
//                 setTimeout(() => {
//                     setSuccessMessage('');
//                 }, 5000); // Hide success message after 5 seconds
//             }
//             console.log(data);
//             setIsSubmitting(false);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             setIsSubmitting(false);
//         });
//     };

//     return (
//         <div>
//             <h2>Movie Booking Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="movieName">Movie Name:</label>
//                 <input
//                     type="text"
//                     id="movieName"
//                     name="movieName"
//                     value={movieName}
//                     onChange={(e) => setMovieName(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <label htmlFor="time">Show Time:</label>
//                 <input
//                     type="text"
//                     id="time"
//                     name="time"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <label htmlFor="seats">Number of Seats:</label>
//                 <input
//                     type="number"
//                     id="seats"
//                     name="seats"
//                     value={seats}
//                     onChange={(e) => setSeats(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <label htmlFor="namess">Your Name:</label>
//                 <input
//                     type="text"
//                     id="namess"
//                     name="namess"
//                     value={namess}
//                     onChange={(e) => setNamess(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <label htmlFor="ph">Phone Number:</label>
//                 <input
//                     type="text"
//                     id="ph"
//                     name="ph"
//                     value={ph}
//                     onChange={(e) => setPh(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <label htmlFor="email">Email Address:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <label htmlFor="payment">Payment:</label>
//                 <input
//                     type="number"
//                     id="payment"
//                     name="payment"
//                     value={payment}
//                     onChange={(e) => setPayment(e.target.value)}
//                     required
//                 />
//                 <br /><br />

//                 <button type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? 'Submitting...' : 'Book Now'}
//                 </button>
//             </form>

//             {successMessage && <div style={{ marginTop: '20px', color: 'green' }}>{successMessage}</div>}
//         </div>
//     );
// };

// export default Login;




















// // import React, { useState, useEffect } from 'react';
// // import axios from "axios";
// // import './Login.css';

// // const Login = () => {
// //     // Declare state variables
// //     const [movieName, setMovieName] = useState('');
// //     const [time, setTime] = useState('');
// //     const [seats, setSeats] = useState('');
// //     const [namess, setNamess] = useState('');
// //     const [ph, setPh] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [payment, setPayment] = useState('');
// //     const [isSubmitting, setIsSubmitting] = useState(false); // Track if submission is in progress

// //     // useEffect to handle any side effects (like logging or initializing data)
// //     useEffect(() => {
// //         console.log("MovieBookingForm component is mounted");
// //         // You could use this for data fetching if necessary
// //         // Example: fetch previous booking data, or initialize the form with default values.
        
// //         return () => {
// //             console.log("MovieBookingForm component is unmounted");
// //         };
// //     }, []); // Empty dependency array means it runs only once, when the component mounts

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         // Set submitting state to true
// //         setIsSubmitting(true);

// //         const formData = {
// //             movieName,
// //             time,
// //             seats,
// //             namess,
// //             ph,
// //             email,
// //             payment,
// //         };

// //         // Make API request to submit the form data
// //         fetch('http://localhost:3000/api/bookings/add', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(formData),
// //         })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             alert('Booking successful');
// //             console.log(data);
// //             // Set submitting state to false after response
// //             setIsSubmitting(false);
// //         })
// //         .catch((error) => {
// //             console.error('Error:', error);
// //             setIsSubmitting(false); // Set submitting state to false if there is an error
// //         });
// //     };

// //     return (
// //         <div>
// //             <h2>Movie Booking Form</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <label htmlFor="movieName">Movie Name:</label>
// //                 <input
// //                     type="text"
// //                     id="movieName"
// //                     name="movieName"
// //                     value={movieName}
// //                     onChange={(e) => setMovieName(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <label htmlFor="time">Show Time:</label>
// //                 <input
// //                     type="text"
// //                     id="time"
// //                     name="time"
// //                     value={time}
// //                     onChange={(e) => setTime(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <label htmlFor="seats">Number of Seats:</label>
// //                 <input
// //                     type="number"
// //                     id="seats"
// //                     name="seats"
// //                     value={seats}
// //                     onChange={(e) => setSeats(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <label htmlFor="namess">Your Name:</label>
// //                 <input
// //                     type="text"
// //                     id="namess"
// //                     name="namess"
// //                     value={namess}
// //                     onChange={(e) => setNamess(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <label htmlFor="ph">Phone Number:</label>
// //                 <input
// //                     type="text"
// //                     id="ph"
// //                     name="ph"
// //                     value={ph}
// //                     onChange={(e) => setPh(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <label htmlFor="email">Email Address:</label>
// //                 <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <label htmlFor="payment">Payment:</label>
// //                 <input
// //                     type="number"
// //                     id="payment"
// //                     name="payment"
// //                     value={payment}
// //                     onChange={(e) => setPayment(e.target.value)}
// //                     required
// //                 />
// //                 <br /><br />

// //                 <button type="submit" disabled={isSubmitting}>Book Now</button>
// //             </form>
// //         </div>
// //     );
// // };



// // export default Login;














// import React from 'react';
// import React, { useState, useEffect } from 'react';
// import "./Login.css"

// const Login() {
//   const [movieName, setMovieName] = useState('');
//     const [time, setTime] = useState('');
//     const [seats, setSeats] = useState('');
//     const [namess, setNamess] = useState('');
//     const [ph, setPh] = useState('');
//     const [email, setEmail] = useState('');
//     const [payment, setPayment] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false); // Track if submission is in progress

//     // useEffect to handle any side effects (like logging or initializing data)
//     useEffect(() => {
//         console.log("MovieBookingForm component is mounted");
//         // You could use this for data fetching if necessary
//         // Example: fetch previous booking data, or initialize the form with default values.
        
//         return () => {
//             console.log("MovieBookingForm component is unmounted");
//         };
//     }, []); // Empty dependency array means it runs only once, when the component mounts

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Set submitting state to true
//         setIsSubmitting(true);

//         const formData = {
//             movieName,
//             time,
//             seats,
//             namess,
//             ph,
//             email,
//             payment,
//         };

//         // Make API request to submit the form data
//         fetch('http://localhost:3000/api/bookings/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             alert('Booking successful');
//             console.log(data);
//             // Set submitting state to false after response
//             setIsSubmitting(false);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             setIsSubmitting(false); // Set submitting state to false if there is an error
//         });
//     };
//   return (
 
//     <div className="container">
//       <h1 className="header">HELLO EVERYONE! WELCOME TO MY TICKET BOOKING WEBSITE</h1>
//       <div className="form-container">
//         <h2 className="form-title"><i>TICKET BOOKING FORM</i></h2>
//         <form  onSubmit={handleSubmit} >
//           <div className="form-field">
//             <label>Movie Interested :</label>
//             <input type="text" name='movieName' placeholder="Enter Interested Movie"  value={movieName}
//                    onChange={(e) => setMovieName(e.target.value)}
//                    required/>
//           </div>
//           <div className="form-field">
//             <label>Timings :</label>
//             <input type="text" name='time' placeholder="Enter Your Timing" value={time}
//                      onChange={(e) => setTime(e.target.value)}
//                     required />
//           </div>
//           <div className="form-field">
//             <label>Seat Required :</label>
//             <input type="text"  name='seats'placeholder="Enter Your Preferred Seating"  value={seats}
//                      onChange={(e) => setSeats(e.target.value)}
//                     required/>
//           </div>
//           <div className="form-field">
//             <label>Your Name :</label>
//             <input type="text" name='namess' placeholder="Enter Your Name" />
//           </div>
//           <div className="form-field">
//             <label>Phone Number :</label>
//             <input type="text" name='ph' placeholder="Enter Your Phone-no" />
//           </div>
//           <div className="form-field">
//             <label>Mail ID :</label>
//             <input type="email"  name='email' placeholder="Enter Your Mail-id" />
//           </div>
//           <div className="form-field">
//             <label>Payment :</label>
//             <input type="number"  name='payment' placeholder="Enter Payment Amount" />
//           </div>
//           <button type="submit" className="submit-btn">SUBMIT</button>
//         </form>
//         <p className="thank-you">THANKS FOR BOOKING US!</p>
        
//       </div>
      
//     </div>
    
//    )
// }

// export default Login



    
//     // <center>
    
//     // <form style={{background:"black",width:"450px",height:"550px",border:"grey 2px solid",flexDirection:"column",alignItems:"center",display:'flex',color:"white"}}>
//     //   <div>
//     //   <center>
//     //     <p style={{color:"white"}}><i><h4>TICKET BOOKING FORM</h4></i></p>
        
//     //     <br></br>
//     //     <br></br>
//     //   <div>
//     //   <label>MOVIE INTERESTED :</label>
//     //   <input type="text" name="name"placeholder=' Enter The Moviename'></input>
      
//     //   <br></br>
//     //   </div>
//     //   <br></br>
//     //   <div>
//     //   <label>TIMINGS :</label>
//     //   <input type="text" name="name"placeholder='Enter Your Timing:'></input>
      
//     //   <br></br>
//     //   </div>
  
//     //   <br></br>
//     //   <div>
//     //   <label>SEAT REQUIRED :</label>
//     //   <input type="text" name="name" placeholder='Enter your prefered Seating:'></input>
      
//     //   <br></br>
//     //   </div> 
//     //   <br></br>
//     //   <div>
//     //   <label>YOUR NAME :</label>
//     //   <input type="text" name="name"placeholder='Enter Your Name'></input>
      
//     //   <br></br>
//     //   </div>
//     //   <br></br>
//     //   <div>
//     //     <label>PHONE NUMBER :</label><span></span>
//     //     <input type="number" name="phone number" placeholder='Enter Your Phone-no:'></input>
//     //   </div>
  
//     //   <br></br>
//     //   <div>
//     //     <label>MAIL ID:</label>
//     //     <input type="email" name="email"  placeholder='Enter Your Mail-id:'></input>
//     //   </div>
  
//     //   <br></br>
//     //   <div>
//     //     <label>PAYMENT :</label>
//     //     <input type="number" name=" payment " placeholder='Enter payment amount'></input>
//     //   </div>
//     //   <br></br>
//     //   <div>
//     //     <button>SUBMIT</button>
//     //   </div>
  
//     //   <br></br>
//     //     </center>
//     //       </div>
//     //       <footer>
//     //         <p style={{color:"burlywood",background:"brown"}}><em>
//     //           <h3>THANKS FOR CHOOSING US!</h3></em>
//     //         </p>
//     //        </footer>

//     //        </form>
//     //        </center>
           
  
  
 