import * as PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

import Video from '../../components/video'

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

const Videos = ({ data }) => (
  <div className="container container--video">
  
    <Slider {...settings}>
      {data.allContentfulVideo.edges.map((node) => (
        <Video
          location={this.props.location}
          key={node.id}
          video={node}
        />
      ))}

    </Slider>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query Videos {
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
      }`
    }
    render={data => (<Videos data={data} {...props} />)}
  />
)

Videos.propTypes = {
  data: PropTypes.shape({
    allContentfulVideo: PropTypes.object
  })
}

//TODO: Fix this goddamn component
