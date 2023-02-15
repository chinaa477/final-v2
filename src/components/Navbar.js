import React from 'react'
import { Link } from 'gatsby'

import useSiteMetadata from '../queries/site-metadata'

import Logo from './Logo'

export default function Navbar() {
  const { title } = useSiteMetadata()

  return (
    <header className="grid grid-template-columns[1fr minmax(min-content, max-content)] w-full py-5 z-20 fixed bg-white">
      <div className='md:(grid grid-cols-2) flex flex-row gap-x-3 text-center place-items-center container mx-auto md:px-12 px-5 justify-between'>
        <ul className="hidden lg:inline-flex items-center">
          <li className="px-2 lg:px-4">
            <Link
              to={`/`}
              className="text-gray-500 font-semibold hover:text-gray-700"
            >
              Home
            </Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link
              to={`/about-us`}
              className="text-gray-500 font-semibold hover:text-gray-700"
            >
              About Us
            </Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link
              to={`/blog`}
              className="text-gray-500 font-semibold hover:text-gray-700"
            >
              Services
            </Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link
              to={`/blog`}
              className="text-gray-500 font-semibold hover:text-gray-700"
            >
              Our Process
            </Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link
              to={`/blog`}
              className="text-gray-500 font-semibold hover:text-gray-700"
            >
              Gallery
            </Link>
          </li>
          <li className="px-2 lg:px-4">
            <Link
              to={`/blog`}
              className="text-gray-500 font-semibold hover:text-gray-700"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to={`/`} className="px-2 lg:px-0">
          <Logo title={title} />
        </Link>
      </div>
    </header>
  )
}
