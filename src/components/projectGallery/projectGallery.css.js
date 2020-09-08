import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  grid-gap: 4rem;
  padding: 4rem 1rem;
  margin: 2rem 5rem;
  margin-left: 5rem;
  width: 85%;

  ${MEDIA.TABLET`
    display: block;
    width: 70%;
    margin-bottom: 0;
  `};
`;
