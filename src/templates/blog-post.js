import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  H1,
  Date,
  Content,
  OtherPost,
} from "../components/StyledComponents/styledComponents"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const frontmatter = data.markdownRemark.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathName={post.frontmatter.slug}
      />

      <article>
        <header>
          <H1>{post.frontmatter.title}</H1>
          <Date>{post.frontmatter.date}</Date>
        </header>

        {frontmatter?.thumbnailBlog && (
          <Image
            alt="Cover Image"
            fluid={frontmatter?.thumbnailBlog?.childImageSharp?.fluid}
          />
        )}

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <OtherPost to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </OtherPost>
            )}
          </li>
          <li>
            {next && (
              <OtherPost to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </OtherPost>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnailBlog {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Image = styled(Img)`
  box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff;
`
