import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './projectTitle.css';

const ProjectTitle = ({ children, as = 'span', size }) => {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  );
};

ProjectTitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default ProjectTitle;
