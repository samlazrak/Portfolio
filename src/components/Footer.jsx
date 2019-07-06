import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin: 6rem 0 1rem 0;
  padding: 1rem ${(props) => props.theme.spacer.horizontal};
  text-align: center;
  color: ${(props) => props.theme.colors.grey};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.brand.primary};
  }
`;

const Footer = () => (
  <Wrapper data-testid="footer">
    Copyright &copy; 2019. All right reserved. Pictures by Sam Lazrak.{' '}
    <a href="https://github.com/samlazrak/portfolio">Portfolio</a> {' by '}{' '}
    <a href="https://www.github.com/samlazrak/">Sam Lazrak</a>.
  </Wrapper>
);

export default Footer;
