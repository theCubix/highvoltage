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
      ${SharedSectionHBold};
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
        <SectionH2>{children}</SectionH2><Letter>{children.charAt(0)}</Letter>
      </div>
    )
  }
}

//Everything regular text

const TextBase = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

const H = css`
  ${TextBase};
`

const HLargest = css`
  ${H};
  font-size: 3em;
`

const HExtraLarge = css`
  ${H};
  font-size: 2em;
`

const HLarger = css`
  ${H};
  font-size: 1.5em;
`

const HLarge = css`
  ${H};
  font-size: 1.2em;
`

const SharedSectionH = css`
  font-family: 'Oswald', sans-serif;
  position: relative;
  z-index: 1;
`

const SharedSectionHBold = css`
  ${SharedSectionH};
  font-weight: 700;
  text-transform: uppercase;
`

const SharedSectionHSemiBold = css`
  ${SharedSectionH};
  color: ${colours.text.body};
  font-weight: 600;
`

const SectionH1css = css`
  ${SharedSectionHBold};
  color: ${colours.text.primary};
  font-size: 2.25em;
  line-height: 1.1em;
  letter-spacing: 0.04em;
`

const SectionH1 = styled('h1')`
  ${SectionH1css};
`

const SectionH2css = css`
  ${SharedSectionHBold};
  color: ${colours.text.muted};
  font-size: 1.875em;
  line-height: 1.1em;
  letter-spacing: 0.05em;
`

const SectionH2 = styled('h2')`
  ${SectionH2css};
`

const SectionH3css = css`
  ${SharedSectionHSemiBold};
  font-size: 1.5em;
  line-height: 1.75em;
`

const SectionH3 = styled('h3')`
  ${SectionH3css};
`

const SectionH4css = css`
  ${SharedSectionHSemiBold};
  font-size: 1.25em;
  line-height: 1.875em;
`
const SectionH4 = styled('h4')`
  ${SectionH4css};
`

const SectionH5css = css`
  ${SharedSectionHSemiBold};
  font-size: 1em;
  line-height: 1.5em;
`

const SectionH5 = styled('h5')`
  ${SectionH5css};
`

export {
  TextBase,
  SectionTitle,
  Text,
  H,
  HLarger,
  HLarge,
  HExtraLarge,
  HLargest,
  SectionH1css,
  SectionH2css,
  SectionH3css,
  SectionH4css,
  SectionH5css,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionH4,
  SectionH5,
  // TextRegularLH,
  // TextUpper
}
