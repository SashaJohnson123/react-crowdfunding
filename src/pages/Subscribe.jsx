import React, { useState } from "react";

function Subscribe() {
  const [subscribeInfo, setSubscribeInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSubscribeInfo((prevSubscribeInfo) => ({
      ...prevSubscribeInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subscribeInfo);
    if (subscribeInfo.name && subscribeInfo.email) {
      // To DO: Connect to a mail sending package e.g. SendGrid
      console.log(
        "I have all the infomation I need to submit a subscribe form"
      );
      setSubscribeInfo({
        name: "",
        email: "",
        message: "",
      });
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Subscribe here:</h1>
      <div>
        <div class="form-item">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
            value={subscribeInfo.name}
          />
        </div>
        <div class="form-item">
          <label for="mail">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={subscribeInfo.email}
          />
        </div>
        <div class="form-item">
          <button type="Submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      {formSubmitted ? (
        <p>You have successfully subscribed to EcoOcean</p>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Subscribe;
