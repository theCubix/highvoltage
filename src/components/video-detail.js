import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'react-emotion'

import MarkdownFormatter from './Markdownformatter'
import { RoundedCorners as rounded, MediaQueries as media } from '../style-variables'
import { SectionH3 } from './Typography'

import Container from './Container'

const Video = styled('div')`
  ${rounded};
  margin-top: 30px;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
  ${media.mobile} {
    border-radius: 0;
    margin-top: 0;
  }
`

const VideoContent = css`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

class VideoDetail extends React.Component {
  render() {
    const {
      title,
      youTubeId,
      description
    } = this.props.video

    const url = `https://www.youtube.com/embed/${youTubeId}?showinfo=0`

    return(
      <>
        <Container video>
          <Video>
            <iframe
              title={title}
              width="560"
              height="315"
              src={url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={VideoContent}></iframe>
          </Video>
        </Container>
        <Container>
          <SectionH3>{title}</SectionH3>
          <MarkdownFormatter body={description.childMarkdownRemark.html} />
        </Container>
      </>
    )
  }
}

export default VideoDetail

export const videoDetailFragment = graphql`
  fragment VideoDetail_details on ContentfulVideo {
    id
    title
    youTubeId
    slug
    createdAt
    description {
      childMarkdownRemark {
        html
        excerpt(pruneLength: 300)
      }
    }
    thumbnail {
      fixed(width: 400, quality: 80, toFormat: JPG) {
        src
      }
    }
  }
`
