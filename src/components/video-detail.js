import React from 'react'
import { graphql } from 'gatsby'

class VideoDetail extends React.Component {
  render() {
    const {
      id,
      title,
      youTubeId,
      description
    } = this.props.video

    return(
      <div>
        <p><b>id:&nbsp;</b>{id}</p>
        <p><b>title:&nbsp;</b>{title}</p>
        <p><b>youTubeId:&nbsp;</b>{youTubeId}</p>
        <p><b>description:&nbsp;</b>{description.description}</p>
      </div>
    )
  }
}

export default VideoDetail

export const videoDetailFragment = graphql`
  fragment VideoDetail_details on ContentfulVideo {
    #specify the fields we want to query
    id
    title
    youTubeId
    description {
      description
    }
  }
`
