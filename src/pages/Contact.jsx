import React from "react";

function Contact() {
  return (
    <h1>Contact us!</h1>
    <div>
      <div class="form-item">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-item">
        <label for="mail">Email</label>
        <input type="email" id="mail" name="email">
      </div>
      <div class="form-item">
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div class="form-item">
        <button type="submit">Hit me</button>
      </div>
    </div>

export default Contact;
