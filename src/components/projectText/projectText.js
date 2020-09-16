import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './projectText.css';
import ProjectTitle from 'components/projectTitle';
import Title from 'components/title';

const ProjectText = ({ story }) => (
  <Container>
    <Title as="h1" size="large">
      Texas Parks
    </Title>
    <br />
    <ProjectTitle as="h3" size="large">
      Another Getting Started guide
    </ProjectTitle>
    {story}
  </Container>
);

ProjectText.propTypes = {
  story: PropTypes.string,
};

export default ProjectText;
