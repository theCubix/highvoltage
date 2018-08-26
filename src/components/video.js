import * as PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

class Video extends React.Component {
  static propTypes = {
    video: PropTypes.shape ({
      slug: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  }
  render() {
    const { slug, title } = this.props.video
    return(
      <Link to={`/video/${slug}/`}>{title}</Link>
    )
  }
}

export default Video
