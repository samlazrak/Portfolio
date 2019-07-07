/* eslint react/display-name: 0 */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { animated, useSpring, config } from 'react-spring';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { SEO, Container, Layout, IndexHero, BGImageIndex } from '../components';

const MainText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Index = ({ data }) => {
  const trail = 1;

  return (
    <Layout pathname={location.pathname}>
      <IndexHero>
        <BGImageIndex>
          <Img fluid={data.wasp.childImageSharp.fluid} alt="" />
        </BGImageIndex>
        <BGImageIndex>
          <Img fluid={data.beetle.childImageSharp.fluid} alt="" />
        </BGImageIndex>
      </IndexHero>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    beetle: file(relativePath: { eq: "beetle.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
        resize(width: 800) {
          src
        }
      }
    }
    wasp: file(relativePath: { eq: "wasp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
        resize(width: 800) {
          src
        }
      }
    }
  }
`;
