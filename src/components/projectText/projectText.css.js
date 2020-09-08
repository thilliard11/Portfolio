import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  //   display: inline-grid;
  flex: 1;
  width 50%
  grid-gap: 4rem;
  padding: 4rem 4rem;
  margin: 2rem 2rem;
  line-height: 1.8rem;
  text-align: justify;

  ${MEDIA.TABLET`
    display: grid;
    width: 70%;
    margin-top: 0;
  `};
`;
