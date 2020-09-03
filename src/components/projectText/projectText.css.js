import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  //   display: inline-grid;
  flex: 1;
  grid-gap: 4rem;
  padding: 4rem 4rem;
  margin: 2rem 2rem;
  width: 445px;
  line-height: 1.8rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
