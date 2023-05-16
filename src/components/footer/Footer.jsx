import React from 'react'
import './footer.css'
import {FaLinkedin, FaGithub, FaCodepen} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footerContainer container grid">
        <p className="footerCopy text-cs">
                Get this <span> <a href="">Source Code</a></span>
            </p>

            <p className="footerCopy text-cs">
                &copy; 2023 <span> All Rights Reserved</span>
            </p>
            <p className="footerCopy text-cs">
                Developed by <span>Anthony Molina</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer