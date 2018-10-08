import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/main'

import Container from '../components/Container'
import { SubTitle as Title } from '../components/Typography'

import Show from '../components/Show'

class ShowPage extends React.Component {
  render() {
    let { allContentfulEvent } = this.props.data
    const shows = allContentfulEvent.edges.map(e => e.node)

    return (
      <Layout>
        <Container>
      
        <Title>Shows</Title>

        {shows.map((show) => (
          <Show
            key={show.id}
            show={show}
          />
        ))}

        </Container>
      </Layout>
    )
  }
}

export default ShowPage

export const ShowQuery = graphql`
  query {
    allContentfulEvent {
      edges {
        node {
          title,
          slug,
          daysPast: doors(difference: "days"),
          doors(formatString: "H:mm"),
          startsAt(formatString: "H:mm"),
          price,
          venue
        }
      }
    }
  }`
