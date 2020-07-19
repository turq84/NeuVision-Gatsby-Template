import React from "react"
import "../../static/style.css"
import { Container } from "./Primitives"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
