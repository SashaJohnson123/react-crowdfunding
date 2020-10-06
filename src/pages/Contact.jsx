import React, { useState } from "react";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactInfo((prevContactInfo) => ({
      ...prevContactInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
    if (contactInfo.name && contactInfo.email && contactInfo.message) {
      // To DO: Connect to a mail sending package e.g. SendGrid
      console.log("I have all the infomation I need to submit a contact form");
      setContactInfo({
        name: "",
        email: "",
        message: "",
      });
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Contact us!</h1>
      <div>
        <div class="form-item">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div class="form-item">
          <label for="mail">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div class="form-item">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="form-item">
          <button type="Submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      {formSubmitted ? <p>Your message has been submitted</p> : <></>}
    </div>
  );
}
export default Contact;
