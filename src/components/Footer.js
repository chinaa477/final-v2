import React from "react"
import tw, { styled } from 'twin.macro';
import Navigation from "./navigation";
const StyledFooter = styled.section`
    ${tw`py-12 bg-primary`};
    .main-container {
      ${tw`flex flex-col items-center justify-center container mx-auto md:px-8 px-5`};
      .main {
        ${tw`flex flex-row justify-between w-full text-white`}
        .footer-nav {
          ${tw`md:flex hidden`}
        }
      }
    }
`;
const today = new Date();
const year = today.getFullYear();
const Footer = () => (
  <StyledFooter>
    <div className="main-container">
      <div className="main">
        <div className="copyright">
          © {year} The Simple Learn. All Right Reserved.
        </div>
        <div className="footer-nav">
          <Navigation />
        </div>
      </div>
    </div>
  </StyledFooter>
)

export default Footer
