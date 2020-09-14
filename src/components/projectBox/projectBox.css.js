import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 50px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    margin: 2rem 8rem 2rem 8.2rem;

  ${MEDIA.TABLET`
    display: grid;
    grid-template-columns: 1fr;
    width: 75%;
  `};
`;


