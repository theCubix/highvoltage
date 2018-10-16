import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'react-emotion'

import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

import { Colours as colours } from '../style-variables'

import '../layout.scss'

injectGlobal`
  body {
    background-color: ${colours.bgPrimary};
    box-sizing: border-box;
    color: #ffffff;
    font-size: 16px;
    margin: 0;
  }
`

const Wrapper = styled('main')`
  padding-bottom: 100px;
  padding-top: 49px;
  overflow: auto;
`

const Main = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="de" />
          <link href="https://fonts.googleapis.com/css?family=Oswald:700|Source+Sans+Pro:400,700" rel="stylesheet" async/>
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />

        <Wrapper>
          {children}
        </Wrapper>

        <BottomNav />

      </>
    )}
  />
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
