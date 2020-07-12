import React from "react"
import styled from "styled-components"

const DrawerToggleButton = props => {
  const handleClick = () => {
    props.toggleMenu()
  }

  return (
    <ToggleButton onClick={handleClick}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  )
}

export default DrawerToggleButton

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 34px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  margin: 2rem;
`

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 5px;
  border-radius: 24px;
  background-color: transparent;
  border-color: transparent;
  box-shadow: inset -2px 2px 5px #d5d2d0, inset 2px -2px 5px #ffffff;
`
