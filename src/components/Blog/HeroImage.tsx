import React from "react"
import styled from "styled-components"
import {
  BlogHero,
  BlogWrap,
  BlogPost,
  ReadMoreButton,
} from "../StyledComponents/styledComponents"

const BlogHeroImage = props => {
  const { data } = props

  return data.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    const image = node.frontmatter?.thumbnailBlog?.childImageSharp?.fluid.src

    const MainHeroContainer = styled.div`
      position: relative;
      margin-bottom: 0px;
      overflow-x: hidden;
      background: url(${image}) 100% 0%;
      background-repeat: no-repeat;
      padding: 0px;
    `
    return (
      <MainHeroContainer key={node.fields.slug}>
        <HeroContainer>
          <ContentContainer>
            <Date>
              <Day>{node.frontmatter.postDay}</Day>
              <MonthYear>{node.frontmatter.postMonthYear}</MonthYear>
            </Date>
            <H1>{title}</H1>

            <Section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Section>
            <ReadMoreButton to={node.fields.slug}>
              Read Latest Post
            </ReadMoreButton>
          </ContentContainer>
        </HeroContainer>
      </MainHeroContainer>
    )
  })
}

export default BlogHeroImage

const HeroContainer = styled.div`
  display: flex;
  align-items: start;
  max-width: 1240px;
  position: relative;
  z-index: 1;
  margin: 0px auto;
  height: 80vh;
`
const ContentContainer = styled.div`
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-basis: 550px;
`
const H1 = styled.h1`
  margin-top: 50px;
`
const Date = styled.div`
  width: 100px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 5px 5px 15px #d5d2d0, -5px -5px 15px #ffffff;
`
const Day = styled.h3`
  margin-bottom: 0px;
`

const MonthYear = styled.p`
  margin-bottom: 0px;
`
const Section = styled.section`
  margin-bottom: 40px;
`
