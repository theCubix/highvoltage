// Dev Imports
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

// Variables for Styling
import { MediaQueries as media, Colours } from '../../style-variables'

// Components
import Img from 'gatsby-image'
import { Text } from '../Typography'

// Icon
import { ReactComponent as PlayOutline } from '../../icons/play-outline.svg'
import { ReactComponent as Share } from '../../icons/share.svg'

class Video extends React.Component {
  constructor() {
    super()
    this.state = { iframeActive: false }
  }

  handleClick = (title, pageUrl) => {
    if(navigator.share) {
      navigator.share({
        title: title,
        url: pageUrl
      }).then(() => console.log('successfull share')).catch((error) => console.log(error))
    }
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
    const pageUrl = `https:voltage-arc.netlify.com/video/${slug}/`

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

    const ShareIcon = styled(Share)`
      fill: #ffffff;
      margin: 13px 16px 9px 16px;
      opacity: 0.5;
      transition: opacity 300ms ease;
      :hover {
        opacity: 1;
      }
    `

    const InfoWrapper = styled('div')`
      background-color: ${Colours.bgLight};
      border-radius: 0 0 3px 3px;
      max-height: ${ this.state.iframeActive ? '50px' : '0' };
      overflow: hidden;
      transition: max-height 300ms ease;
    `

    const Info = styled(Link)`
      float: right;
      margin: 10px 16px;
      opacity: 0.8;
      transition: opacity 300ms ease;
      text-decoration: none;
      :hover {
        opacity: 1;
      }
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
        }
        <InfoWrapper>
          { navigator.share && <ShareIcon onClick={(e) => this.handleClick(title, pageUrl, e)} /> }
          <Info to={`/video/${slug}/`}><Text isSpan>Info</Text></Info>
        </InfoWrapper>
      </Root>
    )
  }
}

export default Video
