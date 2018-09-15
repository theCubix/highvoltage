// Dev Imports
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

// Variables for Styling
import { RoundedCorners, MediaQueries } from '../../style-variables'

// Components
import Img from 'gatsby-image'

// Icon
import { ReactComponent as PlayOutline } from '../../icons/play-outline.svg'

class Video extends React.Component {
  render() {
    const { slug, title, thumbnail } = this.props.video
    const fontSize = this.props.fontSize
    const isLink = this.props.isLink
    const isSlider = this.props.isSlider
    const isSquare = this.props.isSquare
    const roundedMobile = this.props.roundedMobile

    const Wrapper = styled(Link)`
      display: block;
      margin-left: ${ isSlider ? '8px' : 0 };
      margin-right: ${ isSlider ? '8px' : 0 };
      position: relative;
      ${RoundedCorners}
      ${MediaQueries.mobile} {
        margin: 0px;
        border-radius: ${ roundedMobile ? '3px' : '0' };
      }
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
      ${MediaQueries.tablet} {
        font-size: ${
          fontSize === 'larger' ? '1.3em;' :
          fontSize === 'large' ? '1.2em;' :
          '1.1em;'
        }
      }
      ${MediaQueries.desktop} {
        font-size: ${
          fontSize === 'larger' ? '1.3em;' :
          fontSize === 'large' ? '1.2em;' :
          '1.1em;'
        }
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

    const Icon = styled(PlayOutline)`
      fill: #ffffff;  
      height: 56px;
      transition: transform 300ms ease;
      width: 56px;
      ${Wrapper}:hover>${IconWrapper} & {
        transform: scale(0.9);
      }
    `

    if(isLink) {
      return(
        <Wrapper to={`/video/${slug}/`}>
          
          <Title>{title}</Title>

          <IconWrapper>
            <Icon />
          </IconWrapper>

          <ImgWrapper>
            <StyledImg
              outerWrapperClassName={`${ImgOuterWrapper}`}
              fixed={thumbnail.fixed}
              fluid={thumbnail.fluid}
            />
          </ImgWrapper>

        </Wrapper>
      )
    }
  }
}

export default Video
