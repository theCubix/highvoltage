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
        <div className="container container--video margin-bottom--narrow">
          <div className="embedded-video rounded-corners">
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
        <h2 className="heading heading--level-2">{title}</h2>
        <div
          className="text text--justified"
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html
          }}
        />
          
        </div>
      </div>
    )
  }
}

export default VideoDetail

export const videoDetailFragment = graphql`
  fragment VideoDetail_details on ContentfulVideo {
    id
    title
    youTubeId
    description {
      childMarkdownRemark {
        html
      }
    }
  }
`
