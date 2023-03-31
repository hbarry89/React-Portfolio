import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value="" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="text" id="email" name="email" value="" /><br />
        <label htmlFor="message">Message:</label><br />
        <input type="text" id="message" name="message" value="" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
