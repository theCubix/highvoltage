import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Heading from '../heading'
import ButtonLink from '../button-link-simple'

const links = [
    { id: 1, title: 'Apple Music', url: 'https://itunes.apple.com/ch/album/break-free-ep/1372030544?app=music' },
    { id: 2, title: 'Spotify', url: 'https://open.spotify.com/album/3hUXI0KHw81n4YD91P6Agv' },
    { id: 3, title: 'Google Music', url: 'https://play.google.com/music/m/Bxsjbp5xywdgjbjtz6qnixvcixu?t=Break_Free_-_Voltage_Arc' },
    { id: 4, title: 'YouTube', url: 'https://www.youtube.com/playlist?list=PLM1AaulkmqOJJ9Csx5OSrjq3sQ2GVBJub' }
]

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

        <div className="container margin-bottom--default">
          
          <div className="grid break-free-grid margin-bottom--narrower">

            <Img className="break-free-cover rounded-corners" fluid={data.cover.childImageSharp.fluid} />

            <iframe
              className="break-free-embed"
              title="Break Free EP"
              allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="300"
              style={{
                width: '100%',
                overflow: 'hidden',
                background: 'transparent'
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://tools.applemusic.com/embed/v1/album/1372030544?country=ch"
            ></iframe>

          </div>

          <div className="break-free-links">

            <h2 className="heading heading--level-2 heading--nomargin-top">Erhältlich bei</h2>

            {links.map(link => (
              <ButtonLink
                key={link.id}
                dest={link.url}>
                {link.title}
              </ButtonLink>
            ))}
          </div>
       
        </div>
      </>
    }
  />
)

export default MusicIsOurLife
