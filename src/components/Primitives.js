import styled from "styled-components"
import { Link } from "gatsby"
import { animated } from "react-spring"

// Styling Contents:
// 1. General Stylings
// 2. Index page
// 3. Blog Page
// 4. Blog Template
// 5. Side Menu

// 1. General
export const Container = styled.div`
  max-width: 1100px;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`

// 2. Index page
export const LoginWrap = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 50px;
  box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`
export const H2 = styled.h2`
  padding-top: 150px;
`
export const Contents = styled.div`
  padding: 15px;
`

export const Input = styled.input`
  width: 100%;
  margin: 10px 20px 10px 0px;
  border-radius: 24px;
  background-color: transparent;
  border-color: transparent;
  box-shadow: inset -5px 5px 20px #d5d2d0, inset 5px -5px 20px #ffffff;
  padding: 10px 15px;
`

export const Button = styled.button`
  background-color: var(--header);
  width: 100%;
  padding: 10px;
  color: #fff;
  border-radius: 24px;
  border: transparent;
  box-shadow: -28px 28px 57px #d5d2d0, 28px -28px 57px #ffffff;
  margin-bottom: 30px;
  cursor: pointer;
`
export const LeftWrap = styled.div`
  width: 45%;
  display: inline-block;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px auto 50px;
    display: block;
    text-align: center;
  }
`

export const RightWrap = styled.div`
  width: 45%;
  display: inline-block;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    margin: 0 auto;
    width: 90%;
  }
`
export const HeroWrap = styled.div`
  display: flex;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0px;
  }
`
export const MainWrap = styled.div`
  margin-top: 20vh;
`

export const HeaderText = styled.h2`
  text-align: center;
  margin-bottom: 100px;
  color: var(--header);
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Feature = styled.div`
  width: 30%;
  height: 400px;
  margin: 0px 20px;
  border-radius: 50px;
  box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 15px auto;
  }
`

export const FeatureHeader = styled.div`
  width: max-content;
  margin: 30px auto;
`
export const FeatureText = styled.p`
  text-align: center;
  padding: 0px 30px;
`
export const FeatureIcon = styled.div`
  width: max-content;
  display: block;
  margin: auto;

  img {
    height: 60px;
    border-radius: 50%;
    padding: 10px;
    /* box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff; */ /* raised */
    box-shadow: inset -5px 5px 20px #d5d2d0, inset 5px -5px 20px #ffffff; /* pressed */
  }
`
export const NewsLetterWrap = styled.div`
  margin: 100px auto;
  width: 550px;
  padding: 30px;
  border-radius: 24px;
  box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff;

  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 15px auto;
    text-align: center;
  }
`
export const NewsLetterInput = styled.input`
  width: 70%;
  margin: 10px 20px 10px 0px;
  border-radius: 24px;
  background-color: transparent;
  border-color: transparent;
  box-shadow: inset -5px 5px 20px #d5d2d0, inset 5px -5px 20px #ffffff;
  padding: 10px 15px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 15px auto;
  }
`

export const NewsLetterButton = styled.button`
  background-color: var(--header);
  width: max-content;
  padding: 10px 20px;
  color: #fff;
  border-radius: 24px;
  border: transparent;
  box-shadow: -28px 28px 57px #d5d2d0, 28px -28px 57px #ffffff;
  margin-bottom: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 15px auto;
  }
`
export const H1 = styled.h1`
  text-align: center;
`

// 3. Blog Page
export const BlogHero = styled.div`
  margin: auto;
  width: max-content;
  padding: 20px;
  background: #fbf7f5;
  box-shadow: inset -20px 20px 60px #d5d2d0, inset 20px -20px 60px #ffffff;
  border-radius: 24px;

  h1 {
    margin-bottom: 0;
  }
`
export const BlogWrap = styled.div`
  margin: 100px 0px;
`
export const BlogPost = styled.article`
  padding: 50px;
  border-radius: 50px;
  background: transparent;
  transition: 0.6s;

  &:hover {
    box-shadow: inset -10px 10px 40px #d5d2d0, inset 10px -10px 40px #ffffff;
    transition: 0.6s;
  }
`

// 4. Blog Post Template
export const OtherPost = styled(Link)`
  box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff;
  padding: 10px 15px;
  border-radius: 50px;
  transition: 0.6s;

  &:hover {
    box-shadow: inset -10px 10px 20px #d5d2d0, inset 10px -10px 20px #ffffff;
    transition: 0.6s;
  }
`

// 5. Side Menu
export const SideDrawerWrap = styled(animated.nav)`
  background-color: #fbf7f5;
  height: 100%;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
  z-index: 30;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ClickLink = styled(Link)`
  color: var(--text);
  text-decoration: none;

  &.active {
    border-left: 4px solid #4a5aef;
    color: #4a5aef;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 50px;
`

export const Li = styled.li`
  margin-top: 1.3rem;
  border-radius: 50px;
  box-shadow: -20px 20px 40px #d5d2d0, 20px -20px 40px #ffffff;
  width: max-content;
  padding: 10px 15px;
  transition: 2s;

  &:hover {
    box-shadow: inset -5px 5px 20px #d5d2d0, inset 5px -5px 20px #ffffff;
    transition: 2s;
  }
`
export const Logo = styled.div`
  width: max-content;
  margin: 50px auto 0px;
`
export const CloseIcon = styled.div`
  float: right;
  margin-top: 15px;
`
export const Date = styled.p`
  text-align: center;
`
export const Content = styled.section`
  margin-top: 50px;
`
