import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import ProjectGallery from '../components/projectGallery/projectGallery';
import ProjectText from '../components/projectText/projectText';
import ProjectBox from '../components/projectBox/projectBox';

const Projects = ({ data }) => (
  <Layout>
    <Head pageTitle={data.projectsJson.title} />
    <ProjectBox>
      <ProjectGallery items={data.projectsJson.gallery} />
      <ProjectText
        story={
          data.projectsJson.story.childMarkdownRemark.rawMarkdownBody
        }
      />
    </ProjectBox>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    projectsJson {
      title
      story {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      answer {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      result {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      gallery {
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 300, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
