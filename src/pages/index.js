import React from 'react'
//import { graphql } from 'gatsby'

import HeroImage from '../components/home/hero-main'
import MusicIsOurLife from '../components/home/music-is-our-live'

import Layout from '../components/layout'

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <HeroImage />
      <MusicIsOurLife />
    </Layout>
  )
}
