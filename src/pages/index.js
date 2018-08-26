import * as PropTypes from 'prop-types'
import React from 'react'
//import { graphql } from 'gatsby'

import HeroImage from '../components/home/hero-main'
import MusicIsOurLife from '../components/home/music-is-our-live'
import Videos from '../components/home/videos'

import Layout from '../layouts/main'

class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
      allContentfulVideo: PropTypes.object,
    }),
  }

  render() {
    //Prepare allContentfulVideo for usage in component
    let { allContentfulVideo } = this.props.data
    const videos = allContentfulVideo.edges.map(e => e.node)

    return (
      <Layout location={this.props.location}>
        <HeroImage />
        <MusicIsOurLife />
        <Videos videos={videos} />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allContentfulVideo {
      edges {
        node {
          id
          title
          slug
          thumbnail {
            fixed(width: 426, height: 240) {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`
