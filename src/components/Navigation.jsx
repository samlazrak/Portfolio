import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaReddit,
  FaTwitter,
} from 'react-icons/fa';
import styled from 'styled-components';
import config from '../../config/website';

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 1rem 0 1rem 0;
  position: relative;
  z-index: 1000;
  a {
    color: ${(props) => props.theme.brand.black};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    &:hover {
      color: ${(props) => props.theme.brand.combinations.complementary.primary};
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 1rem 0 1rem 0;
    flex-wrap: wrap;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0 ${(props) => props.theme.spacer.horizontal};
  a {
    &:hover,
    &:focus {
      color: ${(props) => props.theme.link_color_hover_lighter};
      text-decoration: none;
    }
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    order: 2;
  }
`;

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    font-size: 1.125rem;
    font-family: 'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      sans-serif;
    font-weight: 400;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.link_color_hover_lighter};
      text-decoration: none;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`;

const SubName = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${(props) => props.theme.spacer.horizontal};
  a {
    font-size: 1.5rem;
    line-height: 20px;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.link_color_hover_lighter};
      text-decoration: none;
    }
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    order: 3;
  }
`;

// Grabs all MDX files from src/pages and puts them into the navigation

const Navigation = () => {
  const data = useStaticQuery(query);

  return (
    <Wrapper data-testid="navigation">
      <Nav>
        {data.nav.nodes.map((n, index) => (
          <Link
            key={n.fields.slug}
            to={n.fields.slug}
            data-testid={`navItem-${index}`}
            activeClassName="nav-active"
          >
            {n.frontmatter.title}
          </Link>
        ))}
      </Nav>
      <Name>
        <SubName>
          {/* {config.siteTitle} */}
          <Link to="/" data-testid="Home">
            {config.siteTitle}
          </Link>
        </SubName>
        {/* <SubName>
          <Link to="/portfolio" data-testid="Portfolio">
            Portfolio
          </Link>
        </SubName> */}
      </Name>
      <SocialMedia>
        <a
          href="https://reddit.com/user/samlazrak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reddit"
        >
          <FaReddit />
        </a>
        <a
          href="https://twitter.com/SamLazrak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/samlazrak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </SocialMedia>
    </Wrapper>
  );
};

export default Navigation;

const query = graphql`
  query NavLinks {
    nav: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
