import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Heading from '../heading'

const MusicIsOurLife = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query BreakFree {
        cover: file(relativePath: {eq: "images/break-free-cover-final.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    `}
    render={data => 
      <>
        <Heading className="container" title="Break Free – unsere erste EP" letter="B" />

        <div className="grid break-free-grid container">
          
          <Img className="break-free-cover rounded-corners" fluid={data.cover.childImageSharp.fluid} />

          <iframe
            title="Break Free EP"
            allow="autoplay *; encrypted-media *;"
            frameBorder="0"
            height="300"
            style={{
              width: '660px',
              maxWidth: '100%',
              overflow: 'hidden',
              background: 'transparent'
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src="https://tools.applemusic.com/embed/v1/album/1372030544?country=ch"
          ></iframe>
       
        </div>
      </>
    }
  />
)

export default MusicIsOurLife
