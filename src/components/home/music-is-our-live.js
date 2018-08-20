import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import Heading from '../heading'

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

          <div className="grid grid--two-columns">
            
            <div className="dummy-video"></div>
            
            <div className="vertically-centered">
              <div>
                <h2 className="text text--justified text--primary">Musik ist für uns mehr als nur ein Zeitvertreib</h2>
                <p className="text text--justified">Wir setzen uns intensiv mit Musik auseinander und kreieren unsere ganz eigenen Songs. Von härtestem Metal bis zu allgemeintauglichem Rock – für jeden ist etwas dabei.</p>
              </div>
            </div>

          </div>

          <div className="grid grid--four-columns">

            <div className="avatar">
              <Img fluid={data.julian.childImageSharp.fluid} />
            </div>

            <div className="avatar">
              <Img fluid={data.toni.childImageSharp.fluid} />
            </div>

            <div className="avatar">
              <Img fluid={data.merlin.childImageSharp.fluid} />
            </div>

            <div className="avatar">
              <Img fluid={data.timon.childImageSharp.fluid} />
            </div>

          </div>
        </div>
    </div>
    }
  />
)

export default MusicIsOurLife
