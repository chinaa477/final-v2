import React from 'react'
import CTA from "./common/CTA"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faFacebookF,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="grid items-center mx-auto md:px-32 px-5 md:pb-24 pb-10 md:pt-32 pt-8 bg-dark/75 contact-wrapper">
      <div className="grid grid-cols gap-4 items-center">
        <div className="flex flex-col gap-y-10 items-center">
          <h2 className="text-6xl text-white text-center font-light">Let's Connect.</h2>
          <img src="https://housefullevents.in/img/divider-free-img-1.png" alt="" />
          <CTA name="BOOK US NOW"
            border="border-primary"
            color="text-primary"
            textHover="hover:text-white"
            bgHover="hover:bg-primary"
          />
          <h4 className="text-2xl font-medium text-white">
            Or Call Us: <a href="tel:9488448575">9488448575</a>,
            <a className="pl-2" href="tel:9003016500">9003016500</a>
          </h4>
          <ul className='grid grid-cols-6 gap-4 text-white text-lg'>
            <li className='flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted hover:bg-white hover:text-black'><OutboundLink href='twitter.com' target="_blank"><FontAwesomeIcon icon={faFacebookF} /></OutboundLink></li>
            <li className='flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted hover:bg-white hover:text-black'><OutboundLink href='twitter.com' target="_blank"><FontAwesomeIcon icon={faTwitter} /></OutboundLink></li>
            <li className='flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted hover:bg-white hover:text-black'><OutboundLink href='twitter.com' target="_blank"><FontAwesomeIcon icon={faInstagram} /></OutboundLink></li>
            <li className='flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted hover:bg-white hover:text-black'><OutboundLink href='twitter.com' target="_blank"><FontAwesomeIcon icon={faYoutube} /></OutboundLink></li>
            <li className='flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted hover:bg-white hover:text-black'><OutboundLink href='twitter.com' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></OutboundLink></li>
            <li className='flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted hover:bg-white hover:text-black'><OutboundLink href='twitter.com' target="_blank"><FontAwesomeIcon icon={faPinterestP} /></OutboundLink></li>
          </ul>
          <small className='text-white'>COPYRIGHT © {year} HOUSEFULLEVENTS</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
