import * as PropTypes from 'prop-types'
import React from 'react'
import { PageRenderer } from 'gatsby'

class VideoLayout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    isModal: PropTypes.bool,
  }

  render() {

    const { location } = this.props

    const modal = {
      position: 'fixed',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    let isModal = false
    if (this.props.isModal) {
      isModal = true
    }

    if (isModal) {
      return (
        <React.Fragment>
          <PageRenderer location={{ pathname: `/` }} />
          <div style={modal}>

            {this.props.children}

          </div>
        
        </React.Fragment>
      )
    }
    return (
      <div>
        <h1>That's not a modal</h1>
        {this.props.children}
      </div>
    )
  }
}

export default VideoLayout
