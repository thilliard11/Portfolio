import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './projectText.css';
import ProjectTitle from 'components/projectTitle';
import Title from 'components/title';

const ProjectText = ({ question, solution, result }) => (
  <Container>
    <Title as="h1" size="large">
      Texas Parks
    </Title>
    <br />
    <ProjectTitle as="h3" size="large">
      My Problem
    </ProjectTitle>
    {question}
    <br />
    <br />
    <ProjectTitle as="h3" size="large">
      My Solution
    </ProjectTitle>
    {solution}
    <br />
    <br />
    <ProjectTitle as="h3" size="large">
      My Result
    </ProjectTitle>
    {result}
    <br />
    <br />
  </Container>
);

ProjectText.propTypes = {
  question: PropTypes.string,
  solution: PropTypes.string,
  result: PropTypes.string,
};

export default ProjectText;
