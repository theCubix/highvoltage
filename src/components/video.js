import * as PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'

class Video extends React.Component {
  static propTypes = {
    video: PropTypes.shape ({
      slug: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  }
  render() {
    return(
      <Link to={`/video/${slug}/`}>{title}</Link>
    )
  }
}

export default Video
