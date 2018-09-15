import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { MediaQueries as media } from '../../style-variables'
import Img from 'gatsby-image'

const Wrapper = styled(Img)`
  margin-bottom: 7.5em;
  ${media.mobile} {
    margin-bottom: 2em;
  }
`

const HeroImage = ({data}) => (
  <StaticQuery
    query={graphql`
      query Image {
        MainImage: file(relativePath: {eq: "images/voltage-arc-live-rockarena.jpg" }) {
          childImageSharp {
            resolutions(
              width: 1200,
              traceSVG: {
                color: "#c31818",
                background: "#a31414"
              }) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
            }
          }
        }
      }`
    }
    render={data => (
      <Wrapper
        style={{
          width: "100%",
          height: 0,
          paddingTop: "41.125%"
        }}
        resolutions={data.MainImage.childImageSharp.resolutions}
        alt="Voltage Arc live auf der Bühne der Rockarena in Schaffhausen"
      />
    )}
    />
)

export default HeroImage
