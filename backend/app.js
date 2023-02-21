// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const router = express.Router();
const nodemailer = require("nodemailer");


// routes
const books = require('./routes/api/books');
 
const app = express();

// Connect Database
connectDB();
 
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "**************@gmail.com",
//     pass: "**",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message; 
//   const mail = {
//     from: name,
//     to: "reactwebdeveloper74@gmail.com",
//     subject: "Contact Form Message",
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });