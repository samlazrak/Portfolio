/* eslint react/display-name: 0 */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useTrail } from 'react-spring';
import styled from 'styled-components';
import { Layout, ProjectItem } from '../components';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
`;

const Index = () => {
  const trail = 1;

  return (
    <Layout pathname={location.pathname}>
      <div>Hi</div>
    </Layout>
  );
};

export default Index;
