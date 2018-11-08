import styled, { css } from 'styled-components';

const circleStyles = css`
  position: relative;
  background: transparent; 
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border: 3px solid #F97F51;
    transform: translate(-50%, -50%);
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
`;

const crossStyles = css`
  position: relative;
  background: transparent;
  
  &::after, &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 75px;
      background: #B33771;
  }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
`;

export default styled.div`
    width: 90px;
    height: 90px;
    margin: 5px;
    border-radius: 0.3em;
    background: #ce896c;
    
    &:hover {
      cursor: pointer;
    }
    
    ${props => props.cross && crossStyles }
    ${props => props.circle && circleStyles }
`