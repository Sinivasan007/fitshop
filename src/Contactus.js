import React from 'react';
import './Contactus.css';
function handleContact(event) {
  event.preventDefault();
  alert('Thank you for contacting us. We will get back to you shortly.');
}
export default function Contactus() {
  return (
    <div class="container">
        <form>
          <br></br>
            <h1>Contact Us</h1>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required></input>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
            <label for="message">Comments</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <input type="submit" onClick={handleContact} value="Submit"></input>
        </form>
    </div>
  
  );
}