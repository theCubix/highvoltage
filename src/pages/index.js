import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  console.log(data)
  return (
  <Layout>
    <h1>Videos</h1>
    {data.allContentfulVideo.edges.map(({ node }, index) => (
      <div key="index">
        <p><b>Title:</b> {node.title}</p>
        <p><b>Contentful ID:</b> {node.contentfulid}</p>
        <p><b>Slug:</b> {node.slug}</p>
        <p><b>Description:</b><br /> {node.description.description}</p>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${node.contentfulid}?rel=0&amp;showinfo=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={index}></iframe>
      </div>
    ))}
  </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulVideo {
      edges {
        node {
          contentfulid
          title
          slug
          description {
            description
          }
        }
      }
    }
  }
  `

