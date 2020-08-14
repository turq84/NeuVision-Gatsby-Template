import React from "react"
import {
  NewsLetterWrap,
  NewsLetterInput,
  NewsLetterButton,
} from "../Primitives"

const Newsletter = () => {
  return (
    <NewsLetterWrap>
      <h4>NeuVision Newsletter</h4>
      <p>Keep up with the lastest NueVision news!</p>
      <NewsLetterInput placeholder="Email" />
      <NewsLetterButton type="submit">Subscribe</NewsLetterButton>
    </NewsLetterWrap>
  )
}

export default Newsletter
