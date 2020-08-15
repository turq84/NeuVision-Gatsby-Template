import React from "react"
import "../../static/style.css"
import { Container } from "./StyledComponents/styledComponents"
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
