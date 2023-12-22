import React from 'react'
import "./Footer.css"
import logoImg from "../../Img/logo.png";


function Footer() {
  return (
    <div className='App-footer'>
        <div>
                <img src={logoImg} alt="" />
        </div>
        <div className='footer-section'>
            <p>NAVIGATION LINKS:</p>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Explore</a></li>
                <li><a href="">Global chat</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">Friends</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </div>
        <div className='footer-section'>
            <p>ADDITIONL RESOURCES:</p>
            <ul>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Frquently Asked Questions(FAQ)</a></li>
                <li><a href="">Help center/Support</a></li>
            </ul>
        </div>
        <div className='footer-section'>
            <p>SOCIAL MEDIA:</p>
            <ul>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Reddit</a></li>
                <li><a href="">Community Forum</a></li>
            </ul>
        </div>
        <div className='footer-section'>
            <p>CONTACT INFORMATION:</p>
            <ul>
                <li><a href="">info@globalmsg.com</a></li>
                <li><a href="">+1 (555) 123-4567</a></li>
                <li><a href="">Contact Form</a></li>
            </ul>
        </div>
        <div className='footer-section'>
            <p>USAGE POLICIES:</p>
            <ul>
                <li><a href="">Cookies</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Cookie Policy</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer