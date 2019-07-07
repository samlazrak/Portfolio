import styled from 'styled-components';

const IndexHero = styled.section`
  display: flex;
  position: relative;
  height: ${(props) => (props.single ? '100vw' : '100vw')};
  overflow: hidden;
  margin-bottom: ${(props) => (props.single ? '4rem' : '6rem')};
  @media (max-width: ${(props) => props.theme.breakpoints.m}),
    (max-device-width: ${(props) => props.theme.breakpoints.m}) {
    height: ${(props) => (props.single ? '40vw' : '60vw')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}),
    (max-device-width: ${(props) => props.theme.breakpoints.s}) {
    height: ${(props) => (props.single ? '300px' : '400px')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}),
    (max-device-width: ${(props) => props.theme.breakpoints.xs}) {
    height: 400px;
    margin-top: -7rem;
  }
`;

export default IndexHero;
