import React from 'react'
import r from '../assets/r.jpeg';
import '../styles/About.css';

export default function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${r})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>At our Company, we pride ourselves on delivering exceptional products and services to our
             valued customers. With years of industry experience, our dedicated team of professionals
              is committed to providing innovative solutions that meet the unique needs of our clients.
               We believe in building long-term relationships based on trust and mutual success. 
               Our customer-centric approach ensures that we listen to our clients, understand their
                goals, and deliver tailored solutions that exceed expectations. From project
                 management to cutting-edge technology, we strive for excellence in every 
                 aspect of our business. At our Company, we are driven by our passion for
                  success and our commitment to delivering unparalleled results.
        </p>
      </div>
    </div>
  )
}
