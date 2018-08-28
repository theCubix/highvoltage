import * as PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import Img from 'gatsby-image'
import { ReactComponent as PlayOutline } from '../icons/play-outline.svg'

class Video extends React.Component {

  static propTypes = {
    video: PropTypes.shape ({
      slug: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.object
    }).isRequired,
    paddingTop: PropTypes.number
  }
  render() {
    const { slug, thumbnail } = this.props.video
    const paddingTop = this.props.paddingTop
    return(
      <Link className="video-thumbnail" to={`/video/${slug}/`}>
        <div className="video-thumbnail__icon-wrapper">
          <PlayOutline
            fill="#ffffff"
            className="video-thumbnail__icon"/>
        </div>
        <div
          className="video-thumbnail__wrapper"
          style={{
            paddingTop: paddingTop + '%'
          }}>
          <Img
            fixed={thumbnail.fixed}
            outerWrapperClassName="video-thumbnail__image-wrapper"
            className="video-thumbnail__image"
            />
        </div>
      </Link>
    )
  }
}

export default Video
