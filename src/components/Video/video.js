// Dev Imports
import React from 'react'
import styled, { css } from 'react-emotion'

// Variables for Styling
import { MediaQueries as media } from '../../style-variables'

// Components
import Img from 'gatsby-image'
import ButtonLink from '../button-link'

// Icon
import { ReactComponent as PlayOutline } from '../../icons/play-outline.svg'

class Video extends React.Component {
  constructor() {
    super()
    this.state = { iframeActive: false }
  }

  render() {
    const {
      video,
      fontSize,
      isSquare,
      isSlider,
      roundedMobile
    } = this.props

    const {
      slug,
      title,
      youTubeId,
      thumbnail
    } = video

    const url = `https://www.youtube.com/embed/${youTubeId}?showinfo=0&autoplay=1`

    const Root = styled('div')`
      margin-left: ${ isSlider ? '8px' : '0' };
      margin-right: ${ isSlider ? '8px' : '0' };
    `

    const Wrapper = styled('div')`
      display: block;
      overflow: hidden;
      position: relative;
      border-radius: ${ this.state.iframeActive ? '3px 3px 0 0' : '3px' };
      ${media.mobile} {
        margin: 0px;
        border-radius: ${ roundedMobile ? '3px' : '0' };
      }
      ${ this.state.iframeActive && `
        padding-top: ${ isSquare ? '100%' : '56.25%' };
      `}
    `

    const Title = styled('p')`
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
      box-sizing: border-box;
      color: #ffffff;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 1.1em;
      padding: 10px 16px;
      position: absolute;
      margin: 0;
      z-index: 1;
      ${media.tablet} {
        font-size: ${
          fontSize === 'larger' ? '1.3em' :
          fontSize === 'large' ? '1.2em' :
          '1.1em'
        };
      }
      ${media.desktop} {
        font-size: ${
          fontSize === 'larger' ? '1.3em' :
          fontSize === 'large' ? '1.2em' :
          '1.1em'
        };
      }
    `

    const ImgOuterWrapper = css`
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute!important;
      transition: transform 300ms ease;
      ${Wrapper}:hover & {
        transform: scale(1.05);
      }
    `

    const ImgWrapper = styled('div')`
      cursor: pointer;
      overflow: hidden;
      padding-top: ${ isSquare ? '100%' : '56.25%' };
      position: relative;
    `

    const StyledImg = styled(Img)`
      width: 100%!important;
      height: 100%!important;
    `

    const IconWrapper = styled('div')`
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      align-items: center;
      display: flex;
      justify-content: center;
      position: absolute;
      z-index: 1;
    `

    const PlayIcon = styled(PlayOutline)`
      fill: #ffffff;  
      height: 56px;
      transition: transform 300ms ease;
      width: 56px;
      ${Wrapper}:hover>${IconWrapper} & {
        transform: scale(0.9);
      }
    `

    const Iframe = styled('iframe')`
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    `

    const Link = styled(ButtonLink)`
      margin-top: 20px;
      float: right;
    `

    return(
      <Root>
        { this.state.iframeActive === false ?
          <Wrapper
            onClick={() => this.setState({
              iframeActive: true
            })}
          >
            <Title>{title}</Title>
    
            <IconWrapper>
              <PlayIcon />
            </IconWrapper>
    
            <ImgWrapper>
              <StyledImg
                outerWrapperClassName={`${ImgOuterWrapper}`}
                fixed={thumbnail.fixed}
                fluid={thumbnail.fluid}
              />
            </ImgWrapper>
    
          </Wrapper>
          :
          <>
            <Wrapper>
              <Iframe
                  title={title}
                  width="560"
                  height="315"
                  src={url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  autoPlay
                  allowFullScreen></Iframe>
            </Wrapper>
            <Link dest={`/video/${slug}/`}>Mehr Infos zum Video</Link>
          </>
        }
      </Root>
    )
  }
}

export default Video
