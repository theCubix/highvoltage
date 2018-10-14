import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Helmet from 'react-helmet'

import HeroImage from '../components/home/hero-main'
import MusicIsOurLife from '../components/home/music-is-our-live'
import BreakFree from '../components/home/break-free'
import Videos from '../components/home/videos'
import Events from '../components/home/events'

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

    let { allContentfulEvent } = this.props.data
    const shows = allContentfulEvent.edges.map(e => e.node)
    const upcoming = shows.filter(show => parseInt(show.daysPast) <= 0)

    return (
      <Layout location={this.props.location}>
        <Helmet
          script={[{
            "type": "application/ld+json",
            "innerHTML": `{
              "@context": "http://schema.org",
              "@type": "organization",
              "name": "Voltage Arc",
              "url": "https://www.voltagearc.com",
              "sameAs": [
                "https://facebook.com/VoltageArc",
                "https://www.instagram.com/voltage_arc/",
                "https://www.youtube.com/channel/UCdARchfQvlOBcMNZynTPRCg",
                "https://www.gigmit.com/voltage-arc"
              ]
            }`
          }]} />
        <HeroImage />
        <MusicIsOurLife />
        <BreakFree />
        <Videos videos={videos} />
        <Events shows={upcoming} />
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
          youTubeId
          thumbnail {
            fixed(width: 426, height: 240) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    allContentfulEvent(sort: { fields: doors }) {
      edges {
        node {
          title
          slug
          daysPast: doors(difference: "days")
          date: doors(formatString: "D. MMMM YYYY", locale:"de")
          doors(formatString: "H:mm")
          startsAt(formatString: "H:mm")
          price
          venue
          zipCode
          city
          canton
        }
      }
    }
  }
`
