import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { MediaQueries as media, RoundedCorners as rounded } from '../../style-variables'
import Img from 'gatsby-image'
import ButtonLink from '../ButtonLink'
import Container from '../Container'
import { SectionTitle as Heading, SectionH3 } from '../Typography'

const links = [
    { id: 1, title: 'Apple Music', url: 'https://itunes.apple.com/ch/album/break-free-ep/1372030544?app=music' },
    { id: 2, title: 'Spotify', url: 'https://open.spotify.com/album/3hUXI0KHw81n4YD91P6Agv' },
    { id: 3, title: 'Google Music', url: 'https://play.google.com/music/m/Bxsjbp5xywdgjbjtz6qnixvcixu?t=Break_Free_-_Voltage_Arc' },
    { id: 4, title: 'YouTube', url: 'https://www.youtube.com/playlist?list=PLM1AaulkmqOJJ9Csx5OSrjq3sQ2GVBJub' }
]

const Grid = styled('div')`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: 300px;
  ${media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

const Cover = styled(Img)`
  ${rounded};
  ${media.mobile} {
    display: none;
  }
`

const Playlist = styled('iframe')`
  background: transparent;
  overflow: hidden;
  width: 100%;
  ${media.mobile} {
    height: 480px;
  }
`

const MusicIsOurLife = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query BreakFree {
        cover: file(relativePath: {eq: "images/break-free-cover-final.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => 
      <>
        <Container>
          <Heading>Break Free &ndash; unsere erste EP</Heading>
        </Container>

        <Container video marginBottom="narrow">

          <Grid>

            <Cover fluid={data.cover.childImageSharp.fluid} />

            <Playlist
              title="Break Free EP"
              allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="300"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://tools.applemusic.com/embed/v1/album/1372030544?country=ch"></Playlist>

          </Grid>

       </Container>

       <Container marginBottom="default" zIndex="2">

          <SectionH3>Erhältlich bei</SectionH3>

          {links.map(link => (
            <ButtonLink
              key={link.id}
              dest={link.url}
              simple
              outbound
              inline>
              {link.title}
            </ButtonLink>
          ))}

        </Container>
      </>
    }
  />
)

export default MusicIsOurLife
