import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import {
  H1,
  BlogHero,
  BlogWrap,
  BlogPost,
} from "../components/StyledComponents/styledComponents"
import HeroImage from "../components/Blog/HeroImage"

const Blog2 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allPosts.edges
  const newestPost = data.newestPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="NeuVision Blog #2" pathName="/blog-2" />

      <HeroImage data={newestPost} />

      <BlogWrap>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogPost key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </BlogPost>
          )
        })}
      </BlogWrap>
    </Layout>
  )
}
export default Blog2

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
    newestPost: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            postDay: date(formatString: "DD")
            postMonthYear: date(formatString: " MMM YYYY", locale: "en")
            thumbnailBlog {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  src
                }
              }
            }
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
