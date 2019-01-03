import * as PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import BlogEntryDetail from '../components/blog-entry-detail'
import Layout from '../layouts/main'

class BlogEntryTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      contentfulBlogEntry: PropTypes.object.isRequired,
    })
  }
  render() {
    return(
      <Layout>
        <BlogEntryDetail blogEntry={this.props.data.contentfulBlogEntry} />
      </Layout>
    )
  }
}

export default BlogEntryTemplate

export const blogPageQuery = graphql`
  query($slug: String!) {
    contentfulBlogEntry(slug: { eq: $slug}) {
      ...BlogEntry_details
    }
  }
`