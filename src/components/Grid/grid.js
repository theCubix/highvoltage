import React from 'react'
import styled from 'react-emotion'

import { MediaQueries } from '../../style-variables'

class Grid extends React.Component {
  render() {
    const {
      children,
      columns
    } = this.props

    const Wrapper = styled('div')`
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(${columns}, 1fr);
      ${MediaQueries.mobile} {
        grid-template-columns: ${ columns === '4' ? 'repeat(2, 1fr)' : '1fr' };
      }
    `

    return(
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}

export default Grid