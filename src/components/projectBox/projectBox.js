import React from 'react';
import PropTypes from 'prop-types';

const ProjectBox = ({ children }) => (
  <div
    style={{
      display: 'grid',
      float: 'left',
      gridTemplateColumns: '1fr 1fr',
      borderRadius: '50px',
      boxShadow: '20px 20px 60px #d3d3d9, -20px -20px 60px #ffffff',
      margin: '2rem 8rem 2rem 8rem',
    }}
  >
    {children}
  </div>
);

ProjectBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectBox;
