import React from 'react'
import styled from 'react-emotion'

import { MediaQueries as media } from '../../style-variables'

const H = styled('h1')`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  letter-spacing: 0.15em;
`

const H1 = styled(H)`
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  ${media.mobile} {
    font-size: 1.5em;
    line-height: 1.25em;
    letter-spacing: 0.1em;
    margin-bottom: 30px;
  }
`

class SectionTitle extends React.Component {
  render() {
    const {
      children
    } = this.props

    const Wrapper = styled(H1)`
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

class MainTitle extends React.Component {
  render() {
    const {
      children
    } = this.props
    return(
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}

class SubTitle extends React.Component {
  render() {
    const {
      children
    } = this.props
    return(
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}

class Text extends React.Component {
  render() {
    const {
      children,
      isSpan
    } = this.props

    if(isSpan) {
      return(
        <Wrapper>
          {children}
        </Wrapper>
      )
    } else {
      return(
        <Wrapper>
          {children}
        </Wrapper>
      )
    }
  }
}

export {
  SectionTitle,
  MainTitle,
  SubTitle,
  Text
}
