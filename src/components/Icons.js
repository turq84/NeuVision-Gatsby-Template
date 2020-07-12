import React from "react"
import styled from "styled-components"

const Icons = {
  close: (
    <g>
      <path d=" M 82.1 22.1 Q 83.0017578125 21.24453125 83 20 83.0017578125 18.75546875 82.1 17.85 81.24453125 16.9982421875 80 17 78.7552734375 16.998046875 77.85 17.85 L 50 45.75 22.1 17.85 Q 21.24453125 16.998046875 20 17 18.75546875 16.9982421875 17.85 17.85 16.9982421875 18.75546875 17 20 16.998046875 21.24453125 17.85 22.1 L 45.75 50 17.85 77.85 Q 16.998046875 78.7552734375 17 80 16.9982421875 81.24453125 17.85 82.1 18.75546875 83.0017578125 20 83 21.24453125 83.0017578125 22.1 82.1 L 50 54.25 77.85 82.1 Q 78.7552734375 83.0017578125 80 83 81.24453125 83.0017578125 82.1 82.1 83.0017578125 81.24453125 83 80 83.0017578125 78.7552734375 82.1 77.85 L 54.25 50 82.1 22.1 Z" />
    </g>
  ),
}

export const Icon = ({
  name = "close",
  height = "50px",
  width = "50px",
  fill = "none",
  stroke = "#333",
  strokeWidth = "1.5",
  viewBox = `0 0 ${30} ${30}`,
}) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name]}
    </SVG>
  )
}

const SVG = styled.svg`
  vertical-align: middle;
  margin-right: 5px;
`
