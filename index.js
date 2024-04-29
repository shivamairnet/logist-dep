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
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'shivam.development123@gmail.com', 
      pass: 'gzxy dfnd ebtn oheg' 
    }
  });

  // Email message options
  const mailOptions = {
    from: 'shivam.development123@gmail.com',
    to: 'development.pumpkins@gmail.com', //anmolairnetdev@gmail.com
    subject: `Lead From The Bharat Transport Website ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// Mr. Sandeep Klar