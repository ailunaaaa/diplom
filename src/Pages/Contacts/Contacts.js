import React from 'react';
import './Contacts.css'; 
const ContactInfo = () => {
  return (
    <div className='contact'>
      <h2>Contact Information</h2>
      <p >
        Address: Country Kyrgyzstan,Issyk-Kul Region,City Karakol
        <br />
        Phone: +996 500 551 442
        <br />
        Email: naserdinovaaizhamal@gmail.com
        <br />
        Working Hours: Monday to Friday, 9:00 AM - 6:00 PM
      </p>
      <p>
"Let us be your guide in the world of evening fashion! We're just a call, an email, or a visit away.
Whether it's a question about sizes, a need for style advice, or simply a desire to share your fashion journey,
our friendly and experienced team is ready to help you accentuate your unique individuality.
      </p>
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const Contacts = () => {
  return (
    <div>
      <ContactInfo />
      <hr />
      <ContactForm />
    </div>
  );
};

export default Contacts;
