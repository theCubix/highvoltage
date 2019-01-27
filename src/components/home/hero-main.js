import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'react-emotion'

import Container from '../Container'
import { SectionH1, Text } from '../Typography'
import { MediaQueries as media } from '../../style-variables'
import Img from 'gatsby-image'

const Blur = css`
  filter: blur(10px);
`

const HeroWrapper = styled('div')`
  position: relative;
  margin-bottom: 8em;
  ${media.mobile} {
    margin-bottom: 2em;
  }
`

const Centered = styled('div')`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  ${media.mobile} {
    position: relative;
  }
  h1 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0.5em;
  }
  div {
    width: 100%;
  }
`


const HeroImage = ({data}) => (
  <StaticQuery
    query={graphql`
      query Image {
        MainImage: file(relativePath: {eq: "images/voltage-arc-live-rockarena.jpg" }) {
          childImageSharp {
            #resolutions(
            #  width: 1500,
            #  traceSVG: {
            #    color: "#c31818",
            #    background: "#a31414"
            #  }) {
            #    ...GatsbyImageSharpResolutions_withWebp_tracedSVG
            #}
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`
    }
    render={data => (
      <HeroWrapper>
        <Img
          placeholderClassName={Blur}
          fluid={data.MainImage.childImageSharp.fluid}
          // resolutions={data.MainImage.childImageSharp.resolutions}
          alt="Voltage Arc live auf der Bühne der Rockarena in Schaffhausen" />
        <Centered>
          <Container>
            <SectionH1>Wir sind Voltagearc.</SectionH1>
            <Text importance="primary">Eine junge newcomer Rockband.</Text>
          </Container>
        </Centered>
      </HeroWrapper>
    )}
    />
)

export default HeroImage
