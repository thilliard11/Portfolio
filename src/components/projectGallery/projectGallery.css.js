import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  // display: inline-grid;
  flex: 1;
  grid-gap: 4rem;
  padding: 0 1rem;
  margin: 2rem 15rem;
  margin-left: 20rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
