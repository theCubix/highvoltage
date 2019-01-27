import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from 'react-emotion'

import MarkdownFormatter from '../components/Markdownformatter'
import Container from '../components/Container'
import { SectionH1, Text } from '../components/Typography'
import { MediaQueries } from '../style-variables'

const image = css`
  height: 60vh;
  ${MediaQueries.mobile} {
    height: initial;
  }
`

class BlogEntry extends React.Component {
  render() {
    const {
      title,
      createdAt,
      cover,
      body
    } = this.props.blogEntry

    return(
      <div>
        <Container fullwidth video marginBottom="narrower">
          <Img fluid={cover.fluid} className={image} />
        </Container>
        <Container>
          <SectionH1>{title}</SectionH1>
          <Text>{createdAt}</Text>
          <MarkdownFormatter body={body.childMarkdownRemark.html} />
        </Container>
      </div>
    )
  }
}

export default BlogEntry

export const blogEntryDetailFragment = graphql`
  fragment BlogEntry_details on ContentfulBlogEntry {
    title
    createdAt(formatString: "DD. MMMM YYYY", locale: "de")
    cover {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
  }
`
