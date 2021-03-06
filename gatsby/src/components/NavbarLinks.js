import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
  font-family: 'latobold';
  text-decoration: none;
  color: var(--blue-vogue);
  display: inline-block;
  white-space: nowrap;
  margin: 1vw 1vw;
  transition: all 200ms ease-in;
  position: relative;
  --scaleX: 1;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: var(--burnt-sienna);
    height: 2px;
    transition: all 0.4s ease-in;
    transform: skew(-20deg) rotate(1.64deg) scaleX(var(--scaleX));
  }

  :hover {
    color: var(--burnt-sienna);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1vw 0;
    z-index: 6;
  }
`;

export default function NavbarLinks({ onChange }) {
  function handleClick() {
    // Here, we invoke the callback with the new value
    onChange();
  }
  return (
    <>
      <NavItem to="/" onClick={handleClick} activeClassName="link-active">
        Inicio
      </NavItem>
      <NavItem
        to="/servicios/"
        onClick={handleClick}
        activeClassName="link-active"
      >
        Servicios
      </NavItem>
      <NavItem
        to="/acerca-de/"
        onClick={handleClick}
        activeClassName="link-active"
      >
        Acerca De
      </NavItem>
      <NavItem
        to="/contacto/"
        onClick={handleClick}
        activeClassName="link-active"
      >
        Contacto
      </NavItem>
    </>
  );
}
