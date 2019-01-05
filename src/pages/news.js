import React from 'react'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/main'
import Container from '../components/Container'
import { SectionH1, TextBase } from '../components/Typography'
import { Colours, Sizes } from '../style-variables'

const TitleLink = styled(Link)`
  ${TextBase};
  color: ${Colours.basePrimary};
  font-size: ${Sizes.fsLarger};
  margin: 1em 0;
  text-decoration: none;
  display: block;
`

class News extends React.Component{
  render() {
    
    let { allContentfulBlogEntry } = this.props.data

    const news = allContentfulBlogEntry.edges.map((e) => e.node)


    return (
      <Layout>
        <Container marginBottom="narrow">
          <SectionH1>News</SectionH1>
          {news.map((article) => (
            <div>
              <Img fluid={article.cover.fluid} />
              <TitleLink to={`/news/${article.slug}`}>{article.title}</TitleLink>
            </div>
          ))}
        </Container>
      </Layout>
    )
  }
}


export const query = graphql`
query {
  allContentfulBlogEntry {
    edges {
      node {
        title
        slug
        cover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

export default News
