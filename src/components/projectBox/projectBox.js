import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './projectBox.css'

const ProjectBox = ({ children }) => (
  <Container>
    {children}
  </Container>
);

ProjectBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectBox;
