import * as PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import Img from 'gatsby-image'

class Video extends React.Component {

  static propTypes = {
    video: PropTypes.shape ({
      slug: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.object
    }).isRequired
  }
  render() {
    const { slug, thumbnail } = this.props.video
    return(
      <Link className="video-thumb" to={`/video/${slug}/`}>
        <div className="video-thumb__wrapper" >
          <Img
            fixed={thumbnail.fixed}
            outerWrapperClassName="video-thumb__image-wrapper"
            className="video-thumb__image"
            />
        </div>
      </Link>
    )
  }
}

export default Video
