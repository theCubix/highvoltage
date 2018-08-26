import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import VideoDetail from '../components/video-detail'
import Layout from '../layouts/video'

class VideoTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      contentfulVideo: PropTypes.object.isRequired,
    }),
  }
  render() {
    let isModal = false
    
    if (
      window.___HIGHVOLTAGE_INITIAL_RENDER_COMPLETE
    ) {
      isModal = true
    }

    return(
      <Layout isModal={isModal} location={this.props.location}>
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