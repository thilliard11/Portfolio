import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './projectBox.css'

// const boxStyles = {
//   display: 'grid',
//   gridTemplateColumns: '1fr 1fr',
//   borderRadius: '50px',
//   boxShadow: '20px 20px 60px #d3d3d9, -20px -20px 60px #ffffff',
//   margin: '2rem 8rem 2rem 8rem',
// }

const ProjectBox = ({ children }) => (
  <Container>
    {children}
  </Container>
);

ProjectBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectBox;
