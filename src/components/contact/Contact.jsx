import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap} from 'react-icons/fa'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u2v74z9', 'template_j9h45zp', form.current, 'eMYQP_Y7oMxKsRnrN')
        .then((result) => {
            form.current.reset()
            console.log(result.text)
          form.current.reset();
    }, (error) => {
            console.log(error.text)
            })
        }

    return (
    <section className="contact section" id='contact'>
        <h2 className="sectionTitle text-cs">Contact Me</h2>
      <p className="sectionSubtitle">
      Let's <span>Connect</span> 
      </p>

      <div className="contactContainer container grid">
        <div className="contactContent">
            <div className="contactCard">
                <span className="contactCardIcon">
                    <FaRegMap/>
                </span>
                <h3 className="contactCardTitle">Location</h3>
                <p className="contactCardData">Barranquilla, Colombia</p>
            </div>
            <div className="contactCard">
                <span className="contactCardIcon">
                    <FaRegUser/>
                </span>
                <h3 className="contactCardTitle">Freelance</h3>
                <p className="contactCardData">Available Right Now</p>
            </div>
            <div className="contactCard">
                <span className="contactCardIcon">
                    <FaRegEnvelope/>
                </span>
                <h3 className="contactCardTitle">Email</h3>
                <p className="contactCardData">admm1225@gmail.com</p>
            </div>
            <div className="contactCard">
                <span className="contactCardIcon">
                    <FaRegAddressBook/>
                </span>
                <h3 className="contactCardTitle">Phone</h3>
                <p className="contactCardData">(+57) 318-678-1095</p>
            </div>
        </div>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <div className="contactFormGroup grid">
                <div className="contactFormDiv">
                    <label className="contactFormTag text-cs">Your Name <b>*</b></label>
                    <input type="text" name="user_name" className="contactFormInput" />
                </div>
                <div className="contactFormDiv">
                    <label htmlFor="email" className="contactFormTag text-cs">Your Email <b>*</b></label>
                    <input type="email" name="user_email" id='email' className="contactFormInput" />
                </div>
            </div>
            <div className="contactFormDiv">
                    <label className="contactFormTag text-cs">Subject <b>*</b></label>
                    <input type="text" name='subject' className="contactFormInput" />
            </div>
            <div className="contactFormDiv contactFormArea">
                    <label className="contactFormTag text-cs">Message <b>*</b></label>
                    <textarea name='message' className="contactFormInput"></textarea>
            </div>
            <div className="contactSubmit">
                <button type="submit" value="Send" className='btn text-cs'>Send</button>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact