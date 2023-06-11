import React from 'react'
import left from '../assets/left.jpeg'
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${left})`, width: "300px"}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
            <label htmlFor="name">Full Name</label>
            <input name='name' placeholder='Enter full name' type="text"></input>
            <label htmlFor="email">Email</label>
            <input name='email' placeholder='Enter your email' type="email"></input>
            <label htmlFor="message">Message</label>
            <textarea rows="6" placeholder='Enter message' name='message' required></textarea>
            <button type='submit'>
                Send Message
            </button>
        </form>
      </div>
    </div>
  )
}
