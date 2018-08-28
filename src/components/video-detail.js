import React from 'react'
import { graphql } from 'gatsby'

class VideoDetail extends React.Component {
  render() {
    const {
      title,
      youTubeId,
      description
    } = this.props.video

    const url = `https://www.youtube.com/embed/${youTubeId}?showinfo=0`

    return(
      <div>
        <h2 className="heading heading--level-2 container">{title}</h2>
        <div className="container container--video margin-bottom--narrow">
          <div className="embedded-video">
            <iframe
              title={title}
              width="560"
              height="315"
              src={url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="embedded-video__content"></iframe>
          </div>
        </div>
        <div className="container">
          <p className="text text--secondary text--justified margin-bottom--default">
            {description.description}
          </p>
        </div>
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
