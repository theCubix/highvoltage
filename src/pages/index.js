import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import HeroImage from '../components/home/hero-main'
import MusicIsOurLife from '../components/home/music-is-our-live'

import Video from '../components/video'
import Layout from '../layouts/main'

class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
      allContentfulVideo: PropTypes.object,
    }),
  }

  render() {
    let { allContentfulVideo } = this.props.data

    const videos = allContentfulVideo.edges.map(e => e.node)

    console.log(videos)
    
    return (
      <Layout location={this.props.location}>
        <HeroImage />
        <MusicIsOurLife />

        {videos.map((video) => (
          <Video
            location={this.props.location}
            key={video.slug}
            video={video}
            />
        ))}

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
          slug
          title
        }
      }
    }
  }
`
