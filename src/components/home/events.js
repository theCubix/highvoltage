import React from 'react'

import Container from '../Container'
import { SectionTitle as Heading } from '../Typography'
import Grid from '../Grid'

import Show from '../Show'

class Event extends React.Component {
  render() {
    const upcoming = this.props.shows
    console.log(upcoming)

    return (
      <>
        <Container>
          <Heading>Break Free &ndash; unsere erste EP</Heading>
        </Container>

        <Container marginBottom="narrow">
          <Grid columns={2}>
            {upcoming.map((show) => (
              <Show
                key={show.id}
                show={show}
                upcoming={true}
              />
            ))}
          </Grid>
        </Container>
      </>
    )
  }
}

export default Event