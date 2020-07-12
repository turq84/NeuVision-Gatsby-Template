import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"

const MobileHeader = props => {
  const toggleMenu = () => {
    props.toggleMenu()
  }

  return (
    <HeaderWrap>
      <TopMenu>
        <DrawerToggleButton toggleMenu={toggleMenu} />
      </TopMenu>
    </HeaderWrap>
  )
}

export default MobileHeader

const HeaderWrap = styled.header`
  width: 100%;
  display: block;
`

const TopMenu = styled.div`
  width: 100%;
`
