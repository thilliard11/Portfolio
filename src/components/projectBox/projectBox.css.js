import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 50px;
    box-shadow: 20px 20px 60px #d3d3d9, -20px -20px 60px #ffffff;
    margin: 2rem 8rem 2rem 8rem;

  ${MEDIA.TABLET`
    display: grid;
    grid-template-columns: 1fr;
    width: 75%;
  `};
`;


