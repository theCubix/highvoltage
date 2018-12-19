import React from 'react'

import Container from '../Container'
import { SectionTitle as Heading } from '../Typography'
import Grid from '../Grid'

import Show from '../Show'

class Event extends React.Component {
  render() {
    const upcoming = this.props.shows

    return (
      <>
        { upcoming.length !== 0 ?
        <>
          <Container>
            <Heading>Bevorstehende Shows</Heading>
          </Container>

          <Container marginBottom="narrow">
            <Grid columns={2}>
              {upcoming.map((show, index) => (
                <Show
                  key={index}
                  show={show}
                  upcoming={true}
                />
              ))}
            </Grid>
          </Container>
        </>
        :
        null
        }
      </>
    )
  }
}

export default Event