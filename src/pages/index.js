import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import { JSONLD, Generic } from 'react-structured-data'

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
    //Prepare allContentfulVideo for usage in component
    let { allContentfulVideo } = this.props.data
    const videos = allContentfulVideo.edges.map(e => e.node)

    return (
      <Layout location={this.props.location}>
        <HeroImage />
        <MusicIsOurLife />
        <Videos videos={videos} />

        <JSONLD>
          <Generic type="organization" jsonldtype="Organization" schema={{
            name: "Voltage Arc",
            url: "http://www.voltagearc.com",
            sameAs: [
              "https://facebook.com/VoltageArc",
              "https://www.instagram.com/voltage_arc/",
              "https://www.youtube.com/channel/UCdARchfQvlOBcMNZynTPRCg",
              "https://www.gigmit.com/voltage-arc"
            ]
          }}></Generic>
        </JSONLD>

      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allContentfulVideo(sort: {fields: createdAt}) {
      edges {
        node {
          id
          title
          slug
          thumbnail {
            fixed(width: 426, height: 240) {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`
