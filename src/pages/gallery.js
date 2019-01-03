import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../layouts/main'
import Container from '../components/Container'
import { H1 } from '../components/Typography'

export default ({ data }) => (
  <Layout>
    <Container marginBottom="narrow">
      <H1>Gallery</H1>
    </Container>
  </Layout>
)

// export const query = graphql`
// query {}
// `
