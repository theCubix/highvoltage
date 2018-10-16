import React from 'react'
import styled from 'react-emotion'
import Layout from '../layouts/main'
import { graphql } from 'gatsby'

import Container from '../components/Container'
import { SubTitle as Title } from '../components/Typography'
import ButtonLink from '../components/ButtonLink'

const Wrapper = styled('div')``

const VideosPage = ({ data }) => (
  <Layout>
    <Container>
      
      <Title>Videos</Title>
      
      {data.allContentfulVideo.edges.map(({ node }, index) => (
        <Wrapper key={index}>
          <ButtonLink dest={`/videos/${node.slug}`} simple>{node.title}</ButtonLink>
        </Wrapper>
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
