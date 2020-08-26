import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery/gallery.css';

const ProjectGallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

ProjectGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectGallery;
