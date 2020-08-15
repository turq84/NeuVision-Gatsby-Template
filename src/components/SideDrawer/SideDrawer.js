import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { useTransition } from "react-spring"
import { links } from "../links"
import { Icon } from "../Icons"
import {
  SideDrawerWrap,
  CloseIcon,
  ClickLink,
  Ul,
  Li,
  Logo,
} from "../StyledComponents/styledComponents"

const SideDrawer = props => {
  const handleClick = () => {
    props.toggleMenu()
  }

  const transitions = useTransition(props.showMenu, null, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  })

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <SideDrawerWrap key={key} style={props}>
            <CloseIcon onClick={handleClick}>
              <Icon
                name="close"
                height="40px"
                width="40px"
                stroke="var(--text)"
                fill="var(--text)"
                viewBox="0 0 100 125"
              />
            </CloseIcon>

            <Logo>
              <Link to="/" title={"NeuVision"}>
                <h3>NeuVision</h3>
              </Link>
            </Logo>
            <Ul>
              <Li>
                <ClickLink onClick={handleClick} to={`/`} title="Home">
                  Home
                </ClickLink>
              </Li>

              {links.map((link, index) => (
                <Li key={index}>
                  <ClickLink
                    onClick={handleClick}
                    to={`/${link.path}`}
                    title={link.title}
                  >
                    {link.title}
                  </ClickLink>
                </Li>
              ))}
            </Ul>
          </SideDrawerWrap>
        ) : null
      )}
    </>
  )
}

export default SideDrawer
