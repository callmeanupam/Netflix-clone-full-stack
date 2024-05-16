import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Investor Relations</li>
        <li>Careers</li>
        <li>Terms Of Use</li>
        <li>Privacy Policy</li>
        <li>Legal Notices</li>
        <li>Cookies</li>
        <li>Contact Us</li>
        <li>Corporate Information</li>
        <li>Media</li>
      </ul>
      <p className='copyright-text'>&copy; 1983 - 2024 | Netflix | Built By Anupam Shakya</p>
    </div>
  )
}

export default Footer
