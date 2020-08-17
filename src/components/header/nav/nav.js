import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const activeStyles = {
  paddingBottom: '3px',
  borderBottom: '1px solid #757575',
  fontWeight: '700',
};

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about" activeStyle={activeStyles}>
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" activeStyle={activeStyles}>
          Projects
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/thilliard11"
          target="_blank"
          rel="noreferrer noopener "
          activeStyle={activeStyles}
        >
          GitHub
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
