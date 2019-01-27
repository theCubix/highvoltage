import React from 'react'
import styled from 'react-emotion'
import Layout from '../layouts/main'
import { graphql, Link } from 'gatsby'

import Container from '../components/Container'
import { SectionH1, TextBase } from '../components/Typography'
import Video from '../components/Video'
import { Colours } from '../style-variables';

const Wrapper = styled('div')`
  margin-bottom: 30px;
`

const BlockLink = styled(Link)`
  ${TextBase};
  color: ${Colours.basePrimary};
  opacity: 0.5;
  display: block;
  text-decoration: none;
  padding: 20px 10px 10px 10px;
  text-align: right;
`

const VideosPage = ({ data }) => (
  <Layout>
    <Container>
      <SectionH1>Videos</SectionH1>
      {data.allContentfulVideo.edges.map(({ node }) => (
          <Wrapper key={node.slug}>
            <Video
                video={node}
              />
              <BlockLink to={`/videos/${node.slug}`}>mehr Infos zum Video</BlockLink>
          </Wrapper>
        ))}
    </Container>
  </Layout>
)

export default VideosPage

export const videoPageQuery = graphql`
  query {
    allContentfulVideo(sort: {fields: uploadedAt, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          youTubeId
          thumbnail {
            fixed(width: 426, height: 240) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
