import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import { Colours as colours, RoundedCorners as rounded, MediaQueries as media } from '../../style-variables'
import { ReactComponent as ArrowIcon } from '../../icons/arrow-long-thin-right.svg'

class ButtonLink extends React.Component {
  render() {
    const {
      dest,
      simple,
      outbound,
      children,
      right,
      inline
    } = this.props

    const Wrapper = styled('div')`
      height: 42px;
      ${ inline && `display: inline-block` };
    `

    const SimpleLink = styled(Link)`
      ${rounded};
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: #ffffff;
      font-family: 'Source Sans Pro', sans-serif;
      ${ right && `float: right` };
      transition-duration: 300ms;
      transition-property: background-color, color, transform;
      transition-timing-function: ease;
      text-decoration: none;
      ${simple &&
      `
      display: inline-block;
      padding: 7px 35px;
      ${media.mobile} {
        display: block;
        text-align: center;
        margin-bottom: 15px;
      }
      ${media.tablet} {
        margin-right: 20px;
      }
      ${media.desktop} {
        margin-right: 20px;
      }
      :hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: ${colours.bgPrimary};
        transform: translateY(-1px);
      }
      `}
    `

    const SimpleAnchor = styled(SimpleLink.withComponent('a'))``

    const FancyLink = styled(SimpleLink)`
      align-items: center;
      display: inline-flex;
      padding: 10px 26px 10px 36px;
      position: relative;
      :hover {
        transform: translateX(3px);
      }
    `

    const FancyAnchor = styled(FancyLink.withComponent('a'))``

    const Text = styled('span')`
      margin-right: 1.5em;
      transition: color 300ms ease;
      z-index: 1;
      ${FancyAnchor}:hover &,
      ${FancyLink}:hover & {
        color: ${colours.bgPrimary};
      }
    `

    const StyledArrowIcon = styled(ArrowIcon)`
      fill: #ffffff;  
      opacity: 0.5;
      transition: all 300ms ease;
      transition-property: transform, opacity;
      width: 30px;
      z-index: 1;
      ${FancyAnchor}:hover &,
      ${FancyLink}:hover & {
        transform: translateX(15px);
        opacity: 1;
        > path {
          fill: ${colours.bgPrimary};
        }
      }
    `

    const Backdrop = styled('div')`
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.9);
      height: 100%;
      position: absolute;
      transition: width 300ms ease;
      width: 0;
      z-index: 0;
      ${FancyAnchor}:hover &,
      ${FancyLink}:hover & {
        width: 100%;
      }
    `

    if(!outbound && !simple) {
      return(
        <Wrapper>
          <FancyLink to={dest}>
            <Text>{children}</Text><StyledArrowIcon />
            <Backdrop />
          </FancyLink>
        </Wrapper>
      )
    }

    if(outbound && !simple) {
      return(
        <Wrapper>
          <FancyAnchor href={dest}>
            <Text>{children}</Text><StyledArrowIcon />
            <Backdrop />
          </FancyAnchor>
        </Wrapper>
      )
    }

    if(!outbound && simple) {
      return(
        <Wrapper>
          <SimpleLink to={dest}>
            {children}
          </SimpleLink>
        </Wrapper>
      )
    }

    else {
      return(
        <Wrapper>
          <SimpleAnchor href={dest}>
            {children}
          </SimpleAnchor>
        </Wrapper>
      )
    }
  }
}

export default ButtonLink
