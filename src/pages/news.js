import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/main'
import Container from '../components/Container'
import { NewsHeroPreview, NewsPreview } from '../components/NewsPreview'
import { SectionH1, TextBase } from '../components/Typography'


class News extends React.Component{
  render() {
    
    let { allContentfulBlogEntry } = this.props.data

    const news = allContentfulBlogEntry.edges.map((e) => e.node)

    const heroEntry = news[0]
    const remainingEntries = news.slice(1)


    return (
      <Layout>
        <Container video marginBottom="narrower">
          <SectionH1>News</SectionH1>
          <NewsHeroPreview
            slug={heroEntry.slug}
            cover={heroEntry.cover}
            createdAt={heroEntry.createdAt}
            title={heroEntry.title}
            excerpt={heroEntry.body} />
        </Container>
        <Container>
          {remainingEntries.map(entry => (
            <NewsPreview
              key={entry.slug}
              slug={entry.slug}
              cover={entry.cover}
              createdAt={entry.createdAt}
              title={entry.title}
              excerpt={entry.body} />
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
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 250)
          }
        }
        createdAt(formatString: "D. MMMM YYYY", locale: "DE")
      }
    }
  }
}
`

export default News
