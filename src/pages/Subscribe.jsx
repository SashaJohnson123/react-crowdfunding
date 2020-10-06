// import React, { useState } from "react";

// function Contact() {
//   const [contactInfo, setContactInfo] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false)

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setContactInfo((prevContactInfo) => ({
//       ...prevContactInfo,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(contactInfo);
//     if (contactInfo.name && contactInfo.email && contactInfo.message) {
//       // To DO: Connect to a mail sending package e.g. SendGrid
//       console.log("I have all the infomation I need to submit a contact form");
//       setContactInfo({
//         name: "",
//         email: "",
//         message: ""
//       })
//       setFormSubmitted(true);
//     }
//   };

//   function Subscribe() {
//     return (
//       <header>Subscribe here!</header>
//       <div>
//         <div>
//           <img src="linkedin.png" alt=LinkedIn.">
//         </div>
//         <div>
//             <h1>LinkedIn</h1>
//             <p>URL: linkedin.com/ecoocean</p>
//         </div>
//         <div>
//           <img src="instagram.png" alt=Instagram.">
//         </div>
//         <div>
//             <h2>Instagram</h2>
//             <p>IG handle: ecoocean</p>
//         </div>
//       </div>
//     );
//   }

//   export default Subscribe;
