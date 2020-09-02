import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  //   display: inline-grid;
  flex: 1;
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  width: 350px;
  line-height: 1.8rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
