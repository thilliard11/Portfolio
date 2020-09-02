import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import ProjectGallery from '../components/projectGallery/projectGallery';
import ProjectText from '../components/projectText/projectText';

const Projects = ({ data }) => (
  <Layout>
    <Head pageTitle={data.projectsJson.title} />
    <div
      style={{
        display: 'flex',
      }}
    >
      <ProjectGallery items={data.projectsJson.gallery} />
      <ProjectText
        question={data.projectsJson.content.childMarkdownRemark.rawMarkdownBody}
        solution={'Hello'}
        result={'World'}
      />
    </div>
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
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      gallery {
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
