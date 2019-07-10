import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 200px;
  margin-top: 0.5rem;
  margin-bottom: -1rem;
`;
const LogoImage = styled.img`
  width: auto;
  height: 100%;
`;

const Logo = () => (
  <Wrapper data-testid="avatar">
    <LogoImage src={require('../../static/avatar.png')} />
  </Wrapper>
);

export default Logo;
