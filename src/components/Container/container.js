import React from 'react'
import styled from 'react-emotion'

import { MediaQueries as media } from '../../style-variables'

class Container extends React.Component {
  render() {
    const children = this.props.children
    const video = this.props.video
    const marginBottom = this.props.marginBottom

    const Wrapper = styled('div')`
      margin: 0 auto;
      max-width: 780px;
      position: relative;
      ${media.mobile} {
        padding-left: ${ video ? '0' : '16px' };
        padding-right: ${ video ? '0' : '16px' };
        margin-bottom: ${
          marginBottom === 'default' ? '100px' :
          marginBottom === 'narrow' ? '80px' :
          marginBottom === 'narrower' ? '50px' :
          '0'
        };
      }
      margin-bottom: ${
        marginBottom === 'default' ? '160px' :
        marginBottom === 'narrow' ? '120px' :
        marginBottom === 'narrower' ? '80px' :
        '0'
      };
    `

    return(
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}

export default Container
