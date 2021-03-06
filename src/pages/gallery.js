import React from 'react'

import Layout from '../layouts/main'
import Container from '../components/Container'
import { SectionH1 } from '../components/Typography'

export default ({ data }) => (
  <Layout>
    <Container marginBottom="narrow">
      <SectionH1>Gallery</SectionH1>
    </Container>
  </Layout>
)
