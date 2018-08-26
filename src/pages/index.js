import * as PropTypes from 'prop-types'
import React from 'react'
//import { graphql } from 'gatsby'

import HeroImage from '../components/home/hero-main'
import MusicIsOurLife from '../components/home/music-is-our-live'
import Videos from '../components/home/videos'

import Layout from '../layouts/main'

class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
      allContentfulVideo: PropTypes.object,
    }),
  }

  render() {

    return (
      <Layout location={this.props.location}>
        <HeroImage />
        <MusicIsOurLife />

        

        <Videos />

      </Layout>
    )
  }
}

export default Index
