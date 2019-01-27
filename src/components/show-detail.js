import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { SectionH1, Text } from './Typography'
import Markdownformatter from './Markdownformatter'
import Container from './Container'

class ShowDetail extends React.Component {
  render() {
    const {
      title,
      doors,
      startsAt,
      endsAt,
      venue,
      street,
      city,
      zipCode,
      locality,
      country,
      description,
      coverImage
    } = this.props.event

    return(
      <Container>
        <SectionH1>{title}</SectionH1>
        <Img fluid={coverImage.fluid} />
        <Markdownformatter body={description.childMarkdownRemark.html} />
        <Text>{doors}</Text>
        <Text>{startsAt}</Text>
        <Text>{endsAt}</Text>
        <Text>{venue}</Text>
        <Text>{street}</Text>
        <Text>{city}</Text>
        <Text>{zipCode}</Text>
        <Text>{locality}</Text>
        <Text>{country}</Text>
      </Container>
    )
  }
}

export default ShowDetail

export const showDetailFragment = graphql`
  fragment ShowDetail_details on ContentfulEvent {
    title
    doors
    startsAt
    endsAt
    venue
    street
    city
    zipCode
    locality
    country
    description {
      childMarkdownRemark {
        excerpt(pruneLength: 150)
        html
      }
    }
    coverImage {
      fluid {
        ...GatsbyContentfulFluid
      }
      oneByOne:  fixed(width: 400, height: 400) {
        src
      }
      fourByThree: fixed(width: 400, height: 300) {
        src
      }
      sixteenByNine: fixed(width: 1920, height: 1080) {
        src
      }
    }
  }
`
