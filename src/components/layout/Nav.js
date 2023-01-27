import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import {
  StyledNav,
  StyledHamburger,
  StyledToggle,
  StyledNavbox,
} from "./styles"
import headerLogo from "../../images/erudex-logo.png"
import { Link } from "react-scroll"

const NavbarLinks = props => {
  const { setNavbarOpen, values } = props
  const isMobile = typeof window !== `undefined` && window.innerWidth < 768
  return (
    <ul>
      {values && values.map((value, index) => (
        <li key={index}>
          <Link
            activeClass="active"
            to={value.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => {
              isMobile && setNavbarOpen(false)
            }}
          >
            {value.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Nav(props) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [path, setPath] = useState("")
  const [privacyPath, setPrivacyPath] = useState(false)

  useEffect(() => {
    if (typeof window == undefined) {
      return
    }
    if (window.location.href) {
      setPath(window.location.href)
    }
    if (path.includes("privacy") || path.includes("terms")) {
      setPrivacyPath(true)
    }
  }, [path])
  return (
    <StyledNav aria-label="Main Navigation" role="nav" tabIndex={0}>
      <div
        onClick={() => navigate("/")}
        onKeyDown={() => navigate("/")}
        role="button"
        tabIndex={0}
        className="logo"
      >
        <img alt="Logo" src={headerLogo} />
      </div>
      {!privacyPath && (
        <>
          <StyledToggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <StyledHamburger open /> : <StyledHamburger />}
          </StyledToggle>
          {navbarOpen ? (
            <StyledNavbox>
              <NavbarLinks
                setNavbarOpen={setNavbarOpen}
                show={navbarOpen}
                values={props.values}
              />
            </StyledNavbox>
          ) : (
            <StyledNavbox open>
              <NavbarLinks values={props.values} />
            </StyledNavbox>
          )}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={2000}
            className="download hidden md:block"
          >
            Get Started
          </Link>
        </>
      )}
    </StyledNav>
  )
}
