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
    paddingTop: PropTypes.number,
    fontSize: PropTypes.number
  }
  render() {
    const { slug, thumbnail, title } = this.props.video
    const paddingTop = this.props.paddingTop
    const fontSize = this.props.fontSize
    
    return(
      
      <Link className="video-thumbnail" to={`/video/${slug}/`}>

        <div className="video-thumbnail__title-wrapper">
          <p
          style={{
            fontSize: `${fontSize}em`
          }} 
          className="video-thumbnail__title"
          >
            {title}
          </p>
        </div>

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
            fluid={thumbnail.fluid}
            outerWrapperClassName="video-thumbnail__image-wrapper"
            className="video-thumbnail__image"
            />
        
        </div>

      </Link>
    )
  }
}

export default Video
