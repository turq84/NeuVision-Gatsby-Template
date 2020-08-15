import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/Newsletter/newsletter"
import {
  LoginWrap,
  H2,
  Contents,
  Input,
  Button,
  LeftWrap,
  RightWrap,
  HeroWrap,
  MainWrap,
  HeaderText,
  Row,
  Feature,
  FeatureHeader,
  FeatureIcon,
  FeatureText,
} from "../components/StyledComponents/styledComponents"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Neu Vision" pathName="" />
      <HeroWrap>
        <LeftWrap>
          <h1>NeuVision</h1>
          <h4>Your Neumorphic Gatsby Template</h4>
        </LeftWrap>
        <RightWrap>
          <LoginWrap>
            <Contents>
              <H2>Sign In</H2>
              <p>Welcome back!</p>
              <Input placeholder="Email" />
              <Input placeholder="Password" type="password" />
              <Button type="submit">Sign In</Button>
              <Link to="/">FORGOT PASSWORD</Link>
            </Contents>
          </LoginWrap>
        </RightWrap>
      </HeroWrap>

      <MainWrap>
        <HeaderText>NeuVision Services</HeaderText>

        <Row>
          <Feature>
            <FeatureHeader>
              <FeatureIcon>
                <img
                  src={data.lightbulb.childImageSharp.fluid.src}
                  alt="Feature Icon"
                />
              </FeatureIcon>
              <h4>Feature One</h4>
            </FeatureHeader>
            <FeatureText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureHeader>
              <FeatureIcon>
                <img
                  src={data.lightbulb.childImageSharp.fluid.src}
                  alt="Feature Icon"
                />
              </FeatureIcon>
              <h4>Feature Two</h4>
            </FeatureHeader>
            <FeatureText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureHeader>
              <FeatureIcon>
                <img
                  src={data.lightbulb.childImageSharp.fluid.src}
                  alt="Feature Icon"
                />
              </FeatureIcon>
              <h4>Feature Three</h4>
            </FeatureHeader>
            <FeatureText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </FeatureText>
          </Feature>
        </Row>

        <Newsletter />
      </MainWrap>
    </Layout>
  )
}

export default Index

export const IndexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    lightbulb: file(relativePath: { eq: "lightbulb.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
