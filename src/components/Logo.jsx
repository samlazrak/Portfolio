import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 200px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
const LogoImage = styled.img`
  width: auto;
  height: 100%;
`;

const Logo = () => (
  <Wrapper data-testid="logo">
    <LogoImage src={require('../../static/logo.png')} />
  </Wrapper>
);

export default Logo;
