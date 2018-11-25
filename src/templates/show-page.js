import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import ShowDetail from '../components/show-detail'
import Layout from '../layouts/main'
import Helmet from 'react-helmet'

class ShowPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      contentfulEvent: PropTypes.object.isRequired
    })
  }
  render() {
    return(
      <Layout>
        <Helmet
        script={[{
          "type": "application/ld+json",
          "innerHTML": `{
            "@context": "http://schema.org",
            "@type": "Event",
            "name": "${this.props.data.contentfulEvent.title}",
            "location": "${this.props.data.contentfulEvent.venue}",
            "adress": {
              "@type": "PostalAdress",
              "streetAddress": "${this.props.data.contentfulEvent.streetNumber}",
              "addressLocality": "${this.props.data.contentfulEvent.city}"
            },
            "contentUrl": "https://www.youtube.com/embed/${this.props.data.contentfulVideo.youTubeId}"
          }`
        }]} />
      </Layout>
    )
  }
}
