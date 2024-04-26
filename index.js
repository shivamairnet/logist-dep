const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.end("hiiii")
    console.log("bye");
})
// POST route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  console.log("hi");
  console.log(name);

  // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'shivam.development1@gmail.com', // Your Gmail email address
//       pass: 'your-gmail-password' // Your Gmail password
//     }
//   });

//   // Email message options
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient@example.com', // Recipient email address
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully');
//     }
//   });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});