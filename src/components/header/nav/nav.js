import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const activeStyles = {
  paddingBottom: '2px',
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
      <hr
        style={{
          width: '1px',
          height: '15px',
          background: 'black',
          border: 'none',
          margin: '0 15px 0 25px'
        }} />
      <li>
        <a
          href="https://github.com/thilliard11"
          target="_blank"
          rel="noreferrer noopener "
        >
          <img src={require('./GitHub-Mark-64px.png')} alt='' style={{ height: '18px', width: '18px', position: 'relative', top: '-3px' }} />
        </a>
      </li>
      <a
        href="https://www.linkedin.com/in/truett-hilliard/"
        target="_blank"
        rel="noreferrer noopener "
      >
        <img src={require('./LI-In-Bug.png')} alt='' style={{ height: '18px', width: '23px', position: 'relative', top: '-3px', paddingLeft: '15px', filter: 'brightness(0%)' }} />
      </a>
    </ul>
  </Container>
);

export default Nav;
