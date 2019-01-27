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
    const event = this.props.data.contentfulEvent
    const {
      title,
      startsAt,
      venue,
      street,
      city,
      zipCode,
      locality,
      country,
      coverImage,
      description,
      endsAt
    } = event
    return(
      <Layout>
        <Helmet
        script={[{
          "type": "application/ld+json",
          "innerHTML": `{
            "@context": "http://schema.org",
            "@type": "Event",
            "name": "${title}",
            "startDate": "${startsAt}",
            "location": {
              "@type": "Place",
              "name": "${venue}",
              "address": {
                "@type": "postalAddress",
                "streetAddress": "${street}",
                "addressLocality": "${city}",
                "postalCode": "${zipCode}",
                "addressRegion": "${locality}",
                "addressCountry": "${country}"
              }
            },
            "image": [
              "https:${coverImage.oneByOne.src}",
              "https:${coverImage.fourByThree.src}",
              "https:${coverImage.sixteenByNine.src}"
            ],
            "description": "${description}",
            "endDate": "${endsAt}",
            "performer": {
              "@type": "performingGroup",
              "name": "Voltage Arc"
            }
          }`
        }]} />
        <ShowDetail event={event} />
      </Layout>
    )
  }
}

export default ShowPage

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug}) {
      ...ShowDetail_details
    }
  }
`
