import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './projectText.css';

const ProjectText = ({ text }) => <Container>{text}</Container>;

ProjectText.propTypes = {
  text: PropTypes.string,
};

export default ProjectText;
