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

function generateEmailTemplate() {
	// Use the data to generate the HTML content of the email template
	return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Email Template</title>
      <style>
          body {
              font-family:  Calibri, 'Trebuchet MS', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              /* text-align: center; */
          }
  
          .container {
              max-width: 640px;
              margin: 20px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
  
          .header {
              background-color: f;
              color: #000000;
              padding: 10px 0;
              border-radius: 8px 8px 0 0;
          }
  
          .content {
              padding: 20px 0;
          }
  
          .flight-card {
              background-color: #f8f9fa;
              border-radius: 8px;
  
              
             
              overflow: hidden;
              /* display: grid;
              grid-template-columns: auto auto auto auto auto auto; */
              padding: 10px;
              border-radius: 0 !important;
              
          }
  
          .footer {
              background-color: #000000;
              color: #495057;
              padding: 10px 0;
              border-radius: 0 0 8px 8px;
          }
  
          @media only screen and (max-width: 600px) {
              .container {
                  width: 90%;
              }
              .flight-card {
                  flex-direction: column;
              }
              p,span{
  
                  font-size: 12px !important;
              }
              .asf{
                  height: 7px !important;
                  width: 13px !important;
              }
              .logo{
                  display: none;
              }
              td{
                  padding: 0 !important;
              }
              .ref{
                  font-size: 10px !important;
              }
            
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header" >
              <h1 style="text-align: center; margin-bottom: 0 !important;"><img src="https://drive.google.com/thumbnail?id=1ZeJbs_qjuN8mcWxFPLrbSHeQu-Ih-HTq" alt=""></h1>
              <h1 style="text-align: center; margin: 0 !important; font-size: 14px;" ><span>Travel <span style="color: #0052cd">Technology</spanS></span></h1>
          </div>
          <div class="content">
              <p>Hello Shivam,</p>
              <p style="font-style: italic;  font-size: 14px;margin-bottom: 0;">Please find below flight details for your requested travel dates and sectors.</p>
              <p style="font-style: italic;  font-size: 14px;margin-top: 8px;">In case of any query do feel free to call.</p>
             
  
              <div class="flight-card" style="padding-bottom: 30px;">
                  <p style="font-weight: bold;">Query Detail : </p>
                  <p>Number of Travellers : <span style="font-weight: bold;">4</span></p>
                  <table style="width: 100%;">
                      <tbody>
                          <tr >
                              <td><p>From : <span style="font-weight: bold;">DEL</span></p></td>
                              <td style="text-align: center;"><p>To : <span style="font-weight: bold;">DEL</span></p></td>
                              <td style="text-align: center;"><p>Type : <span style="font-weight: bold;">One Way</span></p></td>
                             
                          </tr>
                      </tbody>
                  </table>
                  <p>Departure : <span style="font-weight: bold;">12/03/2024</span></p>
              </div>
  
              <p style="font-weight: bold; color: grey;">Onward (DEL-BOM)</p>
              
              <div class="flight-card" style=" border-top: 1px solid black; border-bottom: 1px solid black;">
              <table >
                  <tbody>
                      <tr class="flight-card">
                          <td ><div ><img class="logo" src="https://png.pngtree.com/template/20190214/ourmid/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="" style="    height: 64px;
                              width: 58px;"></div></td>
                          <td style="padding: 10px;"> <div style="text-align: center;"><p><strong>AIR FRANCE</strong> </p> <p style="font-size: 13px;">ECONOMY</p></div></td>
                          <td style="padding: 10px;"><div style="text-align: center; ">
                              <table style="height: 85px;">
                                  <tr>
                                      <td> <span style="font-size: 14px;">12:30</span></td>
                                     
                                      
                                  </tr>
                                  <tr>
                                      <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                  </tr>
                                  <tr>
                                      <td><span style="font-size: 14px;">Aug 9</span></td>
                                  </tr>
                              </table>
                             
                              
                              
                              </div></td>
                              <td style="padding: 10px;"><div style="text-align: center; ">
                                  <table style="height: 85px;">
                                      <tr>
                                          <td> <span style="font-size: 13px;">1h 30min</span></td>
                                         
                                          
                                      </tr>
                                      <tr>
                                          <td class="asf" style="width: 100px; height: 13px ;background-color: aqua;"> </td>
                                      </tr>
                                      <tr>
                                          <td><span style="font-size: 13px;">Non stop</span></td>
                                      </tr>
                                  </table>
                                 
                                  
                                  
                                  </div></td>
                          <!-- <td style="padding: 10px;"> <div style="text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
                              <span >1h 30min</span>
                              <span style="width: 100%; height: 13px;background-color: aqua; "></span>
                              <span >Non stop</span>
                              </div></td> -->
                              <td style="padding: 10px;"><div style="text-align: center; ">
                                  <table style="height: 85px;">
                                      <tr>
                                          <td> <span style="font-size: 14px;">12:30</span></td>
                                         
                                          
                                      </tr>
                                      <tr>
                                          <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                      </tr>
                                      <tr>
                                          <td><span style="font-size: 14px;">Aug 9</span></td>
                                      </tr>
                                  </table>
                                 
                                  
                                  
                                  </div></td>
                              <td style="padding: 10px;">
                                  <table style="height: 60px;">
                                      <tr style="margin-bottom: 20px;"><td><span style="color: rgb(93, 93, 93); font-weight: 600;">5027.00</span></td></tr>
                                      <tr><td><span class="ref" style="font-size: 13px;">Refundable</span></td></tr>
                                  </table>
                              </td>
                          <td style="padding: 10px;"s> <div style="text-align: center; display: flex; align-items: center; justify-content: center;"><button type="button" class="btn btn-danger" style="    background-color: red;
                              color: white;
                              border: 1px solid red;
                              padding: 6px;
                              font-weight: bold;
                              border-radius: 7px;" >BOOK</button></div></td>
                      </tr>
                  </tbody>
              </table>
          </div>
              
                  
                
          <div class="flight-card" style=" border-top: 1px solid black; border-bottom: 1px solid black;">
              <table >
                  <tbody>
                      <tr class="flight-card">
                          <td ><div ><img class="logo" src="https://png.pngtree.com/template/20190214/ourmid/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="" style="    height: 64px;
                              width: 58px;"></div></td>
                          <td style="padding: 10px;"> <div style="text-align: center;"><p><strong>AIR FRANCE</strong> </p> <p style="font-size: 13px;">ECONOMY</p></div></td>
                          <td style="padding: 10px;"><div style="text-align: center; ">
                              <table style="height: 85px;">
                                  <tr>
                                      <td> <span style="font-size: 14px;">12:30</span></td>
                                     
                                      
                                  </tr>
                                  <tr>
                                      <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                  </tr>
                                  <tr>
                                      <td><span style="font-size: 14px;">Aug 9</span></td>
                                  </tr>
                              </table>
                             
                              
                              
                              </div></td>
                              <td style="padding: 10px;"><div style="text-align: center; ">
                                  <table style="height: 85px;">
                                      <tr>
                                          <td> <span style="font-size: 13px;">1h 30min</span></td>
                                         
                                          
                                      </tr>
                                      <tr>
                                          <td class="asf" style="width: 100px; height: 13px ;background-color: aqua;"> </td>
                                      </tr>
                                      <tr>
                                          <td><span style="font-size: 13px;">Non stop</span></td>
                                      </tr>
                                  </table>
                                 
                                  
                                  
                                  </div></td>
                          <!-- <td style="padding: 10px;"> <div style="text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
                              <span >1h 30min</span>
                              <span style="width: 100%; height: 13px;background-color: aqua; "></span>
                              <span >Non stop</span>
                              </div></td> -->
                              <td style="padding: 10px;"><div style="text-align: center; ">
                                  <table style="height: 85px;">
                                      <tr>
                                          <td> <span style="font-size: 14px;">12:30</span></td>
                                         
                                          
                                      </tr>
                                      <tr>
                                          <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                      </tr>
                                      <tr>
                                          <td><span style="font-size: 14px;">Aug 9</span></td>
                                      </tr>
                                  </table>
                                 
                                  
                                  
                                  </div></td>
                              <td style="padding: 10px;">
                                  <table style="height: 60px;">
                                      <tr style="margin-bottom: 20px;"><td><span style="color: rgb(93, 93, 93); font-weight: 600;">5027.00</span></td></tr>
                                      <tr><td><span class="ref" style="font-size: 13px;">Refundable</span></td></tr>
                                  </table>
                              </td>
                          <td style="padding: 10px;"s> <div style="text-align: center; display: flex; align-items: center; justify-content: center;"><button type="button" class="btn btn-danger" style="    background-color: red;
                              color: white;
                              border: 1px solid red;
                              padding: 6px;
                              font-weight: bold;
                              border-radius: 7px;" >BOOK</button></div></td>
                      </tr>
                  </tbody>
              </table>
          </div>
  
              
              
          </div>
          <div class="header" >
              <h1 style="text-align: center;"><img src="https://drive.google.com/thumbnail?id=1ZeJbs_qjuN8mcWxFPLrbSHeQu-Ih-HTq" alt=""></h1>
          </div>
          <div class="footer " style="text-align: center;">
              <p style="font-weight: bold;color: white ">Contact Us</p>
              <p style="color: white;"> Phone (India):  +91 - 9356385744</p>
              <p style="color: white;"> Phone (Australia):  +61 - 412566906</p>
              <p style="color: white;">Email:
  
                  support@ascentialabs.com</p>
          </div>
      </div>
  </body>
  </html>
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Email Template</title>
      <style>
          body {
              font-family:  Calibri, 'Trebuchet MS', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              /* text-align: center; */
          }
  
          .container {
              max-width: 640px;
              margin: 20px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
  
          .header {
              background-color: f;
              color: #000000;
              padding: 10px 0;
              border-radius: 8px 8px 0 0;
          }
  
          .content {
              padding: 20px 0;
          }
  
          .flight-card {
              background-color: #f8f9fa;
              border-radius: 8px;
  
              
             
              overflow: hidden;
              /* display: grid;
              grid-template-columns: auto auto auto auto auto auto; */
              padding: 10px;
              border-radius: 0 !important;
              
          }
  
          .footer {
              background-color: #000000;
              color: #495057;
              padding: 10px 0;
              border-radius: 0 0 8px 8px;
          }
  
          @media only screen and (max-width: 600px) {
              .container {
                  width: 90%;
              }
              .flight-card {
                  flex-direction: column;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header" >
              <h1 style="text-align: center; margin-bottom: 0 !important;"><img src="https://drive.google.com/thumbnail?id=1ZeJbs_qjuN8mcWxFPLrbSHeQu-Ih-HTq" alt=""></h1>
              <h1 style="text-align: center; margin: 0 !important; font-size: 14px;" ><span>Travel <span style="color: #0052cd">Technology</spanS></span></h1>
          </div>
          <div class="content">
              <p>Hello Shivam,</p>
              <p style="font-style: italic;  font-size: 14px;margin-bottom: 0;">Please find below flight details for your requested travel dates and sectors.</p>
              <p style="font-style: italic;  font-size: 14px;margin-top: 8px;">In case of any query do feel free to call.</p>
             
  
              <div class="flight-card" style="padding-bottom: 30px;">
                  <p style="font-weight: bold;">Query Detail : </p>
                  <p>Number of Travellers : <span style="font-weight: bold;">4</span></p>
                  <table style="width: 100%;">
                      <tbody>
                          <tr >
                              <td><p>From : <span style="font-weight: bold;">DEL</span></p></td>
                              <td style="text-align: center;"><p>To : <span style="font-weight: bold;">DEL</span></p></td>
                              <td style="text-align: center;"><p>Type : <span style="font-weight: bold;">One Way</span></p></td>
                             
                          </tr>
                      </tbody>
                  </table>
                  <p>Departure : <span style="font-weight: bold;">12/03/2024</span></p>
              </div>
  
              <p style="font-weight: bold; color: grey;">Onward (DEL-BOM)</p>
              
              <div class="flight-card" style=" border-top: 1px solid black; border-bottom: 1px solid black;">
              <table >
                  <tbody>
                      <tr class="flight-card">
                          <td ><div style=""><img src="https://png.pngtree.com/template/20190214/ourmid/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="" style="    height: 64px;
                              width: 58px;"></div></td>
                          <td style="padding: 10px;"> <div style="text-align: center;"><p><strong>AIR FRANCE</strong> </p> <p style="font-size: 13px;">ECONOMY</p></div></td>
                          <td style="padding: 10px;"><div style="text-align: center; ">
                              <table style="height: 85px;">
                                  <tr>
                                      <td> <span style="font-size: 14px;">12:30</span></td>
                                     
                                      
                                  </tr>
                                  <tr>
                                      <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                  </tr>
                                  <tr>
                                      <td><span style="font-size: 14px;">Aug 9</span></td>
                                  </tr>
                              </table>
                             
                              
                              
                              </div></td>
                              <td style="padding: 10px;"><div style="text-align: center; ">
                                  <table style="height: 85px;">
                                      <tr>
                                          <td> <span style="font-size: 13px;">1h 30min</span></td>
                                         
                                          
                                      </tr>
                                      <tr>
                                          <td style="width: 100px; height: 13px ;background-color: aqua;"> </td>
                                      </tr>
                                      <tr>
                                          <td><span style="font-size: 13px;">Non stop</span></td>
                                      </tr>
                                  </table>
                                 
                                  
                                  
                                  </div></td>
                          <!-- <td style="padding: 10px;"> <div style="text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
                              <span >1h 30min</span>
                              <span style="width: 100%; height: 13px;background-color: aqua; "></span>
                              <span >Non stop</span>
                              </div></td> -->
                              <td style="padding: 10px;"><div style="text-align: center; ">
                                  <table style="height: 85px;">
                                      <tr>
                                          <td> <span style="font-size: 14px;">12:30</span></td>
                                         
                                          
                                      </tr>
                                      <tr>
                                          <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                      </tr>
                                      <tr>
                                          <td><span style="font-size: 14px;">Aug 9</span></td>
                                      </tr>
                                  </table>
                                 
                                  
                                  
                                  </div></td>
                              <td style="padding: 10px;">
                                  <table style="height: 60px;">
                                      <tr style="margin-bottom: 20px;"><td><span style="color: rgb(93, 93, 93); font-weight: 600;">5027.00</span></td></tr>
                                      <tr><td><span style="font-size: 13px;">Refundable</span></td></tr>
                                  </table>
                              </td>
                          <td style="padding: 10px;"s> <div style="text-align: center; display: flex; align-items: center; justify-content: center;"><button type="button" class="btn btn-danger" style="    background-color: red;
                              color: white;
                              border: 1px solid red;
                              padding: 6px;
                              font-weight: bold;
                              border-radius: 7px;" >BOOK</button></div></td>
                      </tr>
                  </tbody>
              </table>
          </div>
              
                  
                 
                 
                 
                  
                 
                  <!-- <div>
                      <h2>Flight Details</h2>
                      
                      <p><strong>Departure:</strong> New York (JFK)</p>
                      <p><strong>Arrival:</strong> London (LHR)</p>
                      <p><strong>Date:</strong> 2024-05-15</p>
                  </div> -->
                
                  <div class="flight-card" style="border-top:1px solid black; border-bottom: 1px solid black;">
                      <table >
                          <tbody>
                              <tr class="flight-card">
                                  <td ><div style=""><img src="https://png.pngtree.com/template/20190214/ourmid/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="" style="    height: 64px;
                                      width: 58px;"></div></td>
                                  <td style="padding: 10px;"> <div style="text-align: center;"><p><strong>AIR FRANCE</strong> </p> <p style="font-size: 13px;">ECONOMY</p></div></td>
                                  <td style="padding: 10px;"><div style="text-align: center; ">
                                      <table style="height: 85px;">
                                          <tr>
                                              <td> <span style="font-size: 14px;">12:30</span></td>
                                             
                                              
                                          </tr>
                                          <tr>
                                              <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                          </tr>
                                          <tr>
                                              <td><span style="font-size: 14px;">Aug 9</span></td>
                                          </tr>
                                      </table>
                                     
                                      
                                      
                                      </div></td>
                                      <td style="padding: 10px;"><div style="text-align: center; ">
                                          <table style="height: 85px;">
                                              <tr>
                                                  <td> <span style="font-size: 13px;">1h 30min</span></td>
                                                 
                                                  
                                              </tr>
                                              <tr>
                                                  <td style="width: 100px; height: 13px ;background-color: aqua;"> </td>
                                              </tr>
                                              <tr>
                                                  <td><span style="font-size: 13px;">Non stop</span></td>
                                              </tr>
                                          </table>
                                         
                                          
                                          
                                          </div></td>
                                 
                                      <td style="padding: 10px;"><div style="text-align: center; ">
                                          <table style="height: 85px;">
                                              <tr>
                                                  <td> <span style="font-size: 14px;">12:30</span></td>
                                                 
                                                  
                                              </tr>
                                              <tr>
                                                  <td><span style="font-weight: bold; text-decoration: underline; font-size: 17px;">Paris</span></td>
                                              </tr>
                                              <tr>
                                                  <td><span style="font-size: 14px;">Aug 9</span></td>
                                              </tr>
                                          </table>
                                         
                                          
                                          
                                          </div></td>
                                      <td style="padding: 10px;">
                                          <table style="height: 60px;">
                                              <tr style="margin-bottom: 20px;"><td><span style="color: rgb(93, 93, 93); font-weight: 600;">5027.00</span></td></tr>
                                              <tr><td><span style="font-size: 13px;">Refundable</span></td></tr>
                                          </table>
                                      </td>
                                  <td style="padding: 10px;"s> <div style="text-align: center; display: flex; align-items: center; justify-content: center;"><button type="button" class="btn btn-danger" style="    background-color: red;
                                      color: white;
                                      border: 1px solid red;
                                      padding: 6px;
                                      font-weight: bold;
                                      border-radius: 7px;">BOOK</button></div></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
  
              
              
          </div>
          <div class="header" >
              <h1 style="text-align: center;"><img src="https://drive.google.com/thumbnail?id=1ZeJbs_qjuN8mcWxFPLrbSHeQu-Ih-HTq" alt=""></h1>
          </div>
          <div class="footer " style="text-align: center;">
              <p style="font-weight: bold;color: white ">Contact Us</p>
              <p style="color: white;"> Phone (India):  +91 - 9356385744</p>
              <p style="color: white;"> Phone (Australia):  +61 - 412566906</p>
              <p style="color: white;">Email:
  
                  support@ascentialabs.com</p>
          </div>
      </div>
  </body>
  </html>
  
  

  


	`;
  }

app.get("/",(req,res)=>{
    res.end("hiiii")
    console.log("bye");
})
{/* <form action="http://localhost:3000/gotResponseFromEmail" method="post">
        <input type="checkbox" id="checkbox1" name="checkbox1" value="value1">
        <label for="checkbox1">Option 1</label><br>
        <input type="checkbox" id="checkbox2" name="checkbox2" value="value2">
        <label for="checkbox2">Option 2</label><br>
        <input type="checkbox" id="checkbox3" name="checkbox3" value="value3">
        <label for="checkbox3">Option 3</label><br>
        <input type="submit" value="Submit">
    </form>

app.post("/gotResponseFromEmail",(req,res)=>{
  console.log(req.body);
  
}) */}
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
    to: 'shivam.development123@gmail.com', //anmolairnetdev@gmail.com  //development.pumpkins@gmail.com
    subject: `Lead From The Bharat Transport Website ${name}`,
  
    html: generateEmailTemplate(), 
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