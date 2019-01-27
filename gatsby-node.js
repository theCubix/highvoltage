const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulVideo {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }
        const postTemplate = path.resolve(`src/templates/video-page.js`)
        _.each(result.data.allContentfulVideo.edges, edge => {
          createPage({
            path: `/videos/${slug(edge.node.slug)}/`,
            component: slash(postTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        return
      })
    )

    resolve(
      graphql(
        `
          {
            allContentfulBlogEntry {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }
        const postTemplate = path.resolve(`src/templates/blog-entry-page.js`)
        _.each(result.data.allContentfulBlogEntry.edges, edge => {
          createPage({
            path: `/news/${slug(edge.node.slug)}/`,
            component: slash(postTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        return
      })
    )

    resolve(
      graphql(
        `
          {
            allContentfulEvent {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }
        const eventTemplate = path.resolve(`src/templates/show-page.js`)
        _.each(result.data.allContentfulEvent.edges, edge => {
          createPage({
            path: `/shows/${slug(edge.node.slug)}/`,
            component: slash(eventTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })

        return
      })
    )
  })
}
