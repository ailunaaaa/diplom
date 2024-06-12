import React from 'react';
import './Contacts.css';
const ContactInfo = () => {
  return (
    <div className='contact'>
      <h2>Contact Information</h2>
      <p >
        Address: Country Kyrgyzstan,Issyk-Kul Region,City Karakol
        <br />
        <br />
        Phone: +996 500 551 442
        <br />
        <br />
        Email: naserdinovaaizhamal@gmail.com
        <br />
        <br />
        Working Hours: Monday to Friday, 9:00 AM - 6:00 PM
      </p>
      <p>
      <br />
        "Let us be your guide in the world of evening fashion! We're just a call, an email, or a visit away.<br />
        Whether it's a question about sizes, a need for style advice, or simply a desire to share your fashion journey,<br />
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
      <div className="Contacts_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1237.1140111826066!2d78.38016285414824!3d42.483695159143494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1717009497176!5m2!1sru!2skg" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contacts;
