import React from 'react'
import styled, { css } from 'react-emotion'

import { MediaQueries as media } from '../../style-variables'


//Everything Heading

const TitleBase = css`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;
`

class SectionTitle extends React.Component {
  render() {
    const {
      children
    } = this.props

    const Wrapper = styled(MainTitle)`
      position: relative;
    `

    const Letter = styled('span')`
      color: rgba(213, 44, 44, 0.15);
      display: inline-block;
      font-size: 18.75rem;
      left: 0;
      line-height: 18.75rem;
      margin-top: -8.375rem;
      margin-left: -4.5rem;
      position: absolute;
      top: 0;
      user-select: none;
      z-index: 0;
      ${media.mobile} {
        display: none;
      }
    `

    const Z1 = styled('span')`
      position: relative;
      z-index: 1;
    `

    return(
      <Wrapper>
        <Z1>{children}</Z1><Letter>{children.charAt(0)}</Letter>
      </Wrapper>
    )
  }
}

const MainTitle = styled('h1')`
  ${TitleBase};
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  ${media.mobile} {
    font-size: 1.5em;
    line-height: 1.25em;
    margin-bottom: 30px;
  }
`

const SubTitle = styled('h2')`
  ${TitleBase};
  font-size: 1.5em;
  line-height: 1.35em;
  margin-bottom: 1.5em;
  text-transform: uppercase;
  ${media.mobile} {
    font-size: 1.2em;
    line-height: 1.25em;
    letter-spacing: 0;
    margin-bottom: 1.275em;
    text-transform: none;
  }
`

//Everything regular text

const TextBase = css`
  font-family: 'Source Sans Pro', sans-serif;
`

class Text extends React.Component {
  render() {
    const {
      children,
      isSpan,
      importance,
      lineHeight,
      noMarginBottom,
      justified,
      color
    } = this.props

    const P = styled('p')`
      ${TextBase};
      color: ${color};
      font-size: 1rem;
      font-weight: 400;
      line-height: ${
        lineHeight === 'narrow' ? '1.4em' :
        lineHeight === 'narrower' ? '1.2em' : 
        '1.618em'
      };
      ${ noMarginBottom && 
        `margin-bottom: 0px;`
      }
      opacity: ${
        importance === 'primary' ? '1' :
        importance === 'secondary' ? '0.4' :
        '0.6'
      };
      text-rendering: optimizeLegibility;
      ${ justified && 
        `
        @supports (hyphens: auto) {
          hyphens: auto;
          text-align: justify;
          ${media.mobile} {
            hyphens: none;
            text-align: left;
          }
        }
        `
      }
    `

    const Span = P.withComponent('span')

    if(isSpan) {
      return(
        <Span>
          {children}
        </Span>
      )
    } else {
      return(
        <P>
          {children}
        </P>
      )
    }
  }
}

export {
  TitleBase,
  TextBase,
  SectionTitle,
  MainTitle,
  SubTitle,
  Text
}
