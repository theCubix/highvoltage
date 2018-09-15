import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import Container from '../Container'
import Grid from '../Grid'
import Video from '../Video'
import Avatar from '../avatar'
import { SectionTitle as Title } from '../Typography'

import { MediaQueries as media } from '../../style-variables'

const TextWrapper = styled('div')`
  ${media.mobile} {
      margin-right: 16px;
      margin-left: 16px;
  }
`

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
                  ...GatsbyContentfulFluid_tracedSVG
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
        MusicIsOurLifeVideo: contentfulVideo(contentful_id: {eq: "6FYy7ejCPmKWMAmks6OCSG"}) {
          id
          title
          slug
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => 
      <>
        <Container>
          <Title>Hey</Title>
        </Container>

        <Container video marginBottom="narrower">

          <Grid columns="2">

            <Video
              video={data.MusicIsOurLifeLiveVideo}
              fontSize="large"
              isLink />

            <TextWrapper>
              <div>
                <h2 className="text text--justified text--primary">Musik ist für uns mehr als nur ein Zeitvertreib</h2>
                <p className="text text--justified">Wir setzen uns intensiv mit Musik auseinander und kreieren unsere ganz eigenen Songs. Von härtestem Metal bis zu allgemeintauglichem Rock – für jeden ist etwas dabei.</p>
              </div>
            </TextWrapper>
          </Grid>
        </Container>
        
        <Container marginBottom="narrower">

          <Grid columns="4">

            {data.people.edges.map((node) => (
              <Avatar
                key={node.node.id}
                name={node.node.firstName}
                duty={node.node.function}
                img={node.node.profilePicture.fluid}
              />
            ))}
          
          </Grid>
          
        </Container>

        <Container marginBottom="default">
          <Video
            roundedMobile
            video={data.MusicIsOurLifeVideo}
            fontSize="larger"
            isLink
          />
        </Container>
      </>
    }
  />
)

export default MusicIsOurLife
