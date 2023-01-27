import React, { useEffect, useState } from "react";

import { Nav } from './';
import { StyledHeader } from './styles';

export default function Header(props) {
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        if (typeof window == undefined) {
            return;
        }
        window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 250) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
  return (
    <StyledHeader className="scrolled">
      <Nav values={props.values} />
    </StyledHeader>
  );
}
