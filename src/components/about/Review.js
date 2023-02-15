import React from "react"
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

const Review = () => {
    return (
        <section className="grid grid-rows-2 gap-8 justify-center items-center mx-auto md:px-32 px-5 pb-20">
            <h2 className="text-4xl text-center">
                Review Us On
            </h2>
            <ul className='grid grid-cols-6 gap-4 text-white text-lg'>
                <li><OutboundLink href='twitter.com' target="_blank" className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted bg-[#3b5998] hover:opacity-[.9]"><FontAwesomeIcon icon={faFacebookF} /></OutboundLink></li>
                <li><OutboundLink href='twitter.com' target="_blank" className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted bg-[#1da1f2] hover:opacity-[.9]"><FontAwesomeIcon icon={faTwitter} /></OutboundLink></li>
                <li><OutboundLink href='twitter.com' target="_blank" className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted bg-[#F56040] hover:opacity-[.9]"><FontAwesomeIcon icon={faInstagram} /></OutboundLink></li>
                <li><OutboundLink href='twitter.com' target="_blank" className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted bg-[#FF0000] hover:opacity-[.9]"><FontAwesomeIcon icon={faYoutube} /></OutboundLink></li>
                <li><OutboundLink href='twitter.com' target="_blank" className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted bg-[#0a66c2] hover:opacity-[.9]"><FontAwesomeIcon icon={faLinkedinIn} /></OutboundLink></li>
                <li><OutboundLink href='twitter.com' target="_blank" className="flex items-center justify-center p-4 w-12 h-12 rounded-full border-2 border-white border-dotted bg-[#E60023] hover:opacity-[.9]"><FontAwesomeIcon icon={faPinterestP} /></OutboundLink></li>
            </ul>
        </section>
    )
};

export default Review
