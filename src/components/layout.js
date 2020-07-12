import React from "react"
import "../../static/style.css"
import { Container } from "./Primitives"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built and designed by{" "}
          <a href="https://www.kayla-gordon.com" target="_blank">
            Kayla Gordon
          </a>{" "}
          using {` `}
          <a href="https://www.gatsbyjs.org">GatsbyJs</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
