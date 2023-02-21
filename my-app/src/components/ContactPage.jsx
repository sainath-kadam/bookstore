// import React from 'react'
// const ContactPage = () => {
//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }
//   return (
//     <div className="container mt-5 bg-black">
//       <h2 className="mb-3">React Contact Form Component Example</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="form-control" type="text" id="name" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="email">
//             Email
//           </label>
//           <input className="form-control" type="email" id="email" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="form-control" id="message" required />
//         </div>
//         <button className="btn btn-danger" type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   )
// }
// export default ContactPage

// import React, { useState } from "react";

// const ContactPage = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <div className="container mt-5 bg-black">
//        <h2 className="mb-3">React Contact Form Component Example</h2>
//     <form onSubmit={handleSubmit}>
//     <div className="mb-3">
//         <label htmlFor="name">Name:</label>
//         <input className="form-control" type="name" id="name" required />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email">Email:</label>
//         <input className="form-control" type="email" id="email" required />
//       </div>
     
//       <div className="mb-3">
//         <label htmlFor="message">Message:</label>
//         <input className="form-control" type="message" id="message" required />
//       </div>
//       <button className=" btn btn-danger" type="submit">{status}</button>
//     </form>
//     </div>
//   );
// };

// export default ContactPage;



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if1i5xw",
        "template_nket8n8",
        form.current,
        "335ejCTAEklXOQOUw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email"required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 80%;

  form {
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    font-size: 16px;

    input {
      margin-left: 4rem;
      align:center;
      width: 100%;
      height: 35px;
      padding: 0.5rem;
      outline: none;
      border-radius: 0.3rem;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      margin-left: 4rem;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      margin-left: 8rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      margin-left: 4rem;

      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
