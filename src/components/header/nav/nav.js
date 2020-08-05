import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <a
          href="https://github.com/thilliard11"
          target="_blank"
          rel="noreferrer noopener "
        >
          GitHub
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
