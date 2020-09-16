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
            Scope of the project
    </ProjectTitle>
        {question}
        <br />
        <br />
        <br />
        <ProjectTitle as="h3" size="large">
            Implementation of technologies
    </ProjectTitle>
        {solution}
        <br />
        <br />
        <br />
        <ProjectTitle as="h3" size="large">
            Major takeaways
    </ProjectTitle>
        {result}
        <br />
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
