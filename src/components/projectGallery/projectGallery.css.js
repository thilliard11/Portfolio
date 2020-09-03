import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  // display: inline-grid;
  flex: 1;
  grid-gap: 4rem;
  padding: 4rem 1rem;
  margin: 2rem 5rem;
  margin-left: 10rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
