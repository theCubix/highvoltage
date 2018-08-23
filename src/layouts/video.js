import * as PropTypes from 'prop-types'
import React from 'react'
import { PageRenderer} from 'gatsby'

//let modal?

class VideoLayout extends React.Component {
  static PropTypes = {
    isModal: PropTypes.bool,
  }

  render() {

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
            <div>
              <h1>Dies ist ein Modal</h1>
              {this.props.children}
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <div>
          <h1>Dies ist kein Modal</h1>
          {this.props.children}
        </div>
      )
    }
  }
}

export default VideoLayout
