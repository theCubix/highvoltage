import React from 'react'
import styled, { css } from 'react-emotion'

import { MediaQueries as media, refacturedColours as colours } from '../../style-variables'


//Everything Heading

class SectionTitle extends React.Component {
  render() {
    const {
      children
    } = this.props

    const Letter = styled('span')`
      ${SharedHeadingBold};
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

    return(
      <div>
        <H2>{children}</H2><Letter>{children.charAt(0)}</Letter>
      </div>
    )
  }
}

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

const SharedHeading = css`
  font-family: 'Oswald', sans-serif;
  position: relative;
  z-index: 1;
`

const SharedHeadingBold = css`
  ${SharedHeading};
  font-weight: 700;
  text-transform: uppercase;
`

const SharedHeadingSemiBold = css`
  ${SharedHeading};
  color: ${colours.text.body};
  font-weight: 600;
`

const H1 = styled('h1')`
  ${SharedHeadingBold};
  color: ${colours.text.primary};
  font-size: 2.25em;
  line-height: 2.375em;
  letter-spacing: 0.1em;
`

const H2 = styled('h2')`
  ${SharedHeadingBold};
  color: ${colours.text.muted};
  font-size: 1.875em;
  line-height: 2.25em;
  letter-spacing: 0.1em;
`

const H3 = styled('h3')`
  ${SharedHeadingSemiBold};
  font-size: 1.5em;
  line-height: 1.75em;
`

const H4 = styled('h4')`
  ${SharedHeadingSemiBold};
  font-size: 1.25em;
  line-height: 1.875em;
`

const H5 = styled('h5')`
  ${SharedHeadingSemiBold};
  font-size: 1em;
  line-height: 1.5em;
`

export {
  TextBase,
  SectionTitle,
  Text,
  H1,
  H2,
  H3,
  H4,
  H5,
  // TextRegularLH,
  // TextUpper
}
