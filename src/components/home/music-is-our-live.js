import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Heading from '../heading'
import Video from '../video'
import Avatar from '../avatar'

const MusicIsOurLife = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query MusicIsOurLife {
        people: allContentfulPeople(filter: {affiliation: {eq: "Band"}}, sort: {fields: createdAt}) {
          edges {
            node {
              id
              firstName
              function
              profilePicture {
                fluid(maxWidth: 300) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
        MusicIsOurLifeLiveVideo: contentfulVideo(contentful_id: {eq: "4wOH8fS2JO2ockYys6wYAA"}) {
          id
          title
          slug
          thumbnail {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
        MusicIsOurLifeVideo: contentfulVideo(contentful_id: {eq: "6FYy7ejCPmKWMAmks6OCSG"}) {
          id
          title
          slug
          thumbnail {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `}
    render={data => 
      <>
        <Heading className="container" title="Music Is Our Life" letter="M" />

        <div className="z-1">

          <div className="container container--video grid grid--two-columns margin-bottom--default">

            <Video
              video={data.MusicIsOurLifeLiveVideo}
              paddingTop={100}
              fontSize={1.2}
            />
            
            <div className="margin-sides--mobile vertically-centered">
              <div>
                <h2 className="text text--justified text--primary">Musik ist für uns mehr als nur ein Zeitvertreib</h2>
                <p className="text text--justified">Wir setzen uns intensiv mit Musik auseinander und kreieren unsere ganz eigenen Songs. Von härtestem Metal bis zu allgemeintauglichem Rock – für jeden ist etwas dabei.</p>
              </div>
            </div>

          </div>

          <div className="container grid grid--four-columns margin-bottom--default">

            {data.people.edges.map((node) => (
              <Avatar
                key={node.node.id}
                name={node.node.firstName}
                duty={node.node.function}
                img={node.node.profilePicture.fluid}
              />
            ))}

          </div>

          <div className="container container--video">
            <Video
              video={data.MusicIsOurLifeVideo}
              paddingTop={56.25}
              fontSize={1.3}
            />
          </div>
        </div>
      </>
    }
  />
)

export default MusicIsOurLife
