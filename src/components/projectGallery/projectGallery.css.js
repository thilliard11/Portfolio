import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  // display: inline-grid;
  grid-template-columns: 40%;
  flex: 1;
  grid-gap: 4rem;
  padding: 0 1rem;
  margin: 8rem 25rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
