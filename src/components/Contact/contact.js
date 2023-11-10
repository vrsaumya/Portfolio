import React, {useRef} from 'react';
import './contact.css';
import c1 from '../../assets/contact1.png';
import c2 from '../../assets/contact2.png';
import c3 from '../../assets/contact3.png';
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cardy4d', 'template_j532jte', form.current, 'zMSC9x7rdaDKeXdOGoigU').then(
      (result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below or email me at saumyapver@gmail.com for any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder="Your Name" name="from_name"/>
              <input type="email" className="email" placeholder="Your Email" name="from_email"/>
              <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
              <button type='submit' value='Send' className='submitBtn'>Submit</button>
              <div className='links'>
                <img src={c1} alt="" className="link" />
                <img src={c2} alt="" className="link" />
                <img src={c3} alt="" className="link" />
              </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;