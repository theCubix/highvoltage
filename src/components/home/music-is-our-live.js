import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Heading from '../heading'
import Avatar from '../avatar'

const MusicIsOurLife = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query People {
        julian: file(relativePath: {eq: "images/people/julian-stein.jpg"}) {
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
        toni: file(relativePath: {eq: "images/people/toni-hoerner.jpg"}) {
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
        merlin: file(relativePath: {eq: "images/people/merlin-eichenberger.jpg"}) {
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
        timon: file(relativePath: {eq: "images/people/timon-forrer.jpg"}) {
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
        <Heading className="container" title="Voltage Arc – Music Is Our Life" letter="V" />
        <div className="z-1">

          <div className="container container--video grid grid--two-columns margin-bottom--default">
            
            <div
              style={{ backgroundImage: 'url(https://source.unsplash.com/random/500x500)' }}
              className="dummy-video dummy-video--1x1"
            ></div>
            
            <div className="margin-sides--mobile vertically-centered">
              <div>
                <h2 className="text text--justified text--primary">Musik ist für uns mehr als nur ein Zeitvertreib</h2>
                <p className="text text--justified">Wir setzen uns intensiv mit Musik auseinander und kreieren unsere ganz eigenen Songs. Von härtestem Metal bis zu allgemeintauglichem Rock – für jeden ist etwas dabei.</p>
              </div>
            </div>

          </div>

          <div className="container grid grid--four-columns margin-bottom--default">

            <Avatar img={data.julian.childImageSharp.fluid} name="Julian" duty="Bass" />
            <Avatar img={data.merlin.childImageSharp.fluid} name="Merlin" duty="Gitarre" />
            <Avatar img={data.toni.childImageSharp.fluid} name="Toni" duty="Gesang" />
            <Avatar img={data.timon.childImageSharp.fluid} name="Timon" duty="Schlagzeug" />

          </div>

          <div className="container container--video">
            <div
              style={{ backgroundImage: 'url(https://source.unsplash.com/random/640x360)' }}
              className="dummy-video dummy-video--16x9 margin-bottom--default"
            ></div>
          </div>
        </div>
      </>
    }
  />
)

export default MusicIsOurLife
