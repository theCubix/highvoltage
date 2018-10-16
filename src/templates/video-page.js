import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import VideoDetail from '../components/video-detail'
import Layout from '../layouts/main'
import Helmet from 'react-helmet'

class VideoTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      contentfulVideo: PropTypes.object.isRequired,
    }),
  }
  render() {
    return(
      <Layout>
        <Helmet
          script={[{
            "type": "application/ld+json",
            "innerHTML": `{
              "@context": "http://schema.org",
              "@type": "VideoObject",
              "name": "${this.props.data.contentfulVideo.title}",
              "description": "${this.props.data.contentfulVideo.description.childMarkdownRemark.excerpt}",
              "thumbnailUrl": "https:${this.props.data.contentfulVideo.thumbnail.fixed.src}",
              "uploadDate": "${this.props.data.contentfulVideo.createdAt}",
              "publisher": {
                "@type": "Organization",
                "name": "Voltage Arc",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://images.ctfassets.net/7dnxtb8wlc24/1iD3jSdBiuaW6YGkAKksiW/c0222acd2f7f176ef6b2624e00f5e28c/shortcut-chrom-schwarz.jpeg?w=200&q=100&fm=jpg",
                  "width": 200,
                  "height": 200,
                },
              },
              "contentUrl": "https://www.youtube.com/embed/${this.props.data.contentfulVideo.youTubeId}"
            }`
          }]} />
        <VideoDetail video={this.props.data.contentfulVideo} />
      </Layout>
    )
  }
}

export default VideoTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulVideo(slug: { eq: $slug}) {
      ...VideoDetail_details
    }
  }
`