import React from 'react'
import styled from 'react-emotion'

class Container extends React.Component {
  render() {
    const children = this.props.children
    const video = this.props.video
    const marginBottom = this.props.marginBottom

    const breakpoints = {
      phone: '320px',
      tablet: '480px'
    }

    const Wrapper = styled('div')`
      margin: 0 auto;
      max-width: 780px;
      position: relative;
      @media screen and (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.tablet}) {
        padding-left: ${ video ? '0' : '16px' };
        padding-right: ${ video ? '0' : '16px' };
        margin-bottom: ${
          marginBottom === 'default' ? '50px' :
          marginBottom === 'narrow' ? '40px' :
          marginBottom === 'narrower' ? '30px' :
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