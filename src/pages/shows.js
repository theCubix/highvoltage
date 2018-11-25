import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/main'

import Container from '../components/Container'
import { H3 } from '../components/Typography'

import Show from '../components/Show'
import Grid from '../components/Grid'

class ShowPage extends React.Component {
  render() {
    let { allContentfulEvent } = this.props.data
    const shows = allContentfulEvent.edges.map(e => e.node)

    const upcoming = shows.filter(show => parseInt(show.daysPast) <= 0)
    const past = shows.filter(show => parseInt(show.daysPast) > 0)

console.log(upcoming)

    return (
      <Layout>

        <Container marginBottom="narrower">
          <H3>Bevorstehende Shows</H3>
          { past ? typeof past !== 'undefined' && past.length > 0 && <span>keine bevorstehenden shows</span>
          :
            <Grid columns={2}>
              {upcoming.map((show) => (
                <Show
                  key={show.id}
                  show={show}
                  upcoming={true}
                />
              ))}
            </Grid>
          }
        </Container>

        <Container>
          <H3>Vergangene Shows</H3>
          <Grid columns={2}>
            {past.map((show) => (
              <Show
                key={show.id}
                show={show}
                upcoming={false}
              />
            ))}
          </Grid>
        </Container>

      </Layout>
    )
  }
}

export default ShowPage

export const ShowQuery = graphql`
  query {
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
  }`
