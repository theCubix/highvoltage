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
    <div className="container">
        <Heading title="Voltage Arc – Music Is Our Life" letter="V" />
        <div className="z-1">

          <div className="grid grid--two-columns margin-bottom--default">
            
            <div className="dummy-video"></div>
            
            <div className="vertically-centered">
              <div>
                <h2 className="text text--justified text--primary">Musik ist für uns mehr als nur ein Zeitvertreib</h2>
                <p className="text text--justified">Wir setzen uns intensiv mit Musik auseinander und kreieren unsere ganz eigenen Songs. Von härtestem Metal bis zu allgemeintauglichem Rock – für jeden ist etwas dabei.</p>
              </div>
            </div>

          </div>

          <div className="grid grid--four-columns margin-bottom--default">

            <Avatar img={data.julian.childImageSharp.fluid} name="Julian" duty="Bass" />
            <Avatar img={data.merlin.childImageSharp.fluid} name="Merlin" duty="Gitarre" />
            <Avatar img={data.toni.childImageSharp.fluid} name="Toni" duty="Gesang" />
            <Avatar img={data.timon.childImageSharp.fluid} name="Timon" duty="Schlagzeug" />

          </div>

          <div className="another-dummy-video margin-bottom--default">

          </div>
        </div>
    </div>
    }
  />
)

export default MusicIsOurLife
