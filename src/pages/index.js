import React from 'react'
//import { graphql } from 'gatsby'

import HeroImage from '../components/hero-main'

import Layout from '../components/layout'

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <HeroImage />
    </Layout>
  )
}
