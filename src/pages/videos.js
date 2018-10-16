import React from 'react'
import styled from 'react-emotion'
import Layout from '../layouts/main'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { MediaQueries as media, Colours as colours, RoundedCorners as rounded } from '../style-variables'

import Container from '../components/Container'
import { SubTitle as Title, TextBase } from '../components/Typography'

const VideoItem = styled('div')``

const ThumbnailWrapper = styled(Link)`
  display: block;
  padding-top: 60px;
  width: 100%;
  ${media.mobile} {
    padding-top: 40px;
  }
`

const Thumbnail = styled(Img)`
  ${rounded};
  /* width: 100%; */
  transition: opacity 300ms ease;
  ${VideoItem}:hover & {
    opacity: 0.8;
  }
`

const ContentWrapper = styled(Link)`
  ${TextBase};
  color: ${colours.basePrimary};
  display: block;
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
`

const VideoTitle = styled('h2')`
  line-height: 1.8em;
  font-size: 1.8em;
  font-weight: 400;
  margin: 0;
  ${VideoItem}:hover & {
    text-decoration: underline;
  }
  ${media.mobile} {
    font-size: 1.1em;
    line-height: 1.3em;
}
`

const VideosPage = ({ data }) => (
  <Layout>
    <Container>
      
      <Title>Videos</Title>
      
      {data.allContentfulVideo.edges.map(({ node }, index) => (
        <VideoItem id={node.slug}>
          <ThumbnailWrapper key={index} to={`/videos/${node.slug}`}>
            <Thumbnail fluid={node.thumbnail.fluid} />
          </ThumbnailWrapper>

          <ContentWrapper>
            <VideoTitle>{node.title}</VideoTitle>
          </ContentWrapper>
        </VideoItem>
      ))}

    </Container>
  </Layout>
)

export default VideosPage

export const videoPageQuery = graphql`
  query {
    allContentfulVideo {
      edges {
        node {
          slug
          title
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
    }
  }
`
