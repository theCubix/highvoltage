import React from 'react'
import styled from 'react-emotion'

import { RoundedCorners as rounded, Colours } from '../../style-variables'
import { Text } from '../Typography'
import Img from 'gatsby-image'

class Avatar extends React.Component {
  render() {
    const {
      img,
      name,
      duty
    } = this.props

    const StyledImg = styled(Img)`${rounded}`

    const Description = styled('div')`
      margin-top: -0.75em;
      position: relative;
      z-index: 1;
    `

    const Title = styled('h3')`
      font-family: 'Open Sans', sans-serif;
      font-size: 1.5em;
      font-weight: 700;
      line-height: 1.618rem;
      margin: 0 0 12px -8px;
    `

    const Seperator = styled('hr')`
      background-color: ${Colours.accentPrimary};
      border: none;
      height: 5px;
      margin: 0 0 8px 0;
      width: 50px;
    `
    
  return (
    <div>
      
      <StyledImg fluid={img} />

      <Description>
        <Title>{name}</Title>
        <Seperator />
        <Text>{duty}</Text>
      </Description>
    </div>
    )
  }
}


export default Avatar
