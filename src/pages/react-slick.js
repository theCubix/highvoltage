import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Slider from 'react-slick'

import Layout from '../layouts/main'

import Video from '../components/video'

class VideoSlider extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allContentfulVideo: PropTypes.object
    })
  }
  render() {
    let { allContentfulVideo } = this.props.data

    const videos = allContentfulVideo.edges.map(e => e.node)

    let settings = {
      dots: true,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
    return(
      <Layout>
        <div className="container container--video">
          <Slider {...settings}>
            
            {videos.map((video) => (
              <Video
                location={this.props.location}
                key={video.id}
                video={video}
              />
            ))}

          </Slider>
        </div>

      </Layout>
    )
  }
}

export default VideoSlider

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
