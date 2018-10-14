import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'

import Container from '../Container'
import { SectionTitle as Title, TextBase, Text } from '../Typography'
import { RoundedCorners as rounded, Colours as colours, MediaQueries as media } from '../../style-variables'


class News extends React.Component {
  render() {
    const entries = this.props.entries
    const heroEntry = entries[0]

    const HeroImage = styled(Img)`
      ${media.tablet} {
        ${rounded};
      }
      ${media.desktop} {
        ${rounded};
      }
      & > div {
        padding-bottom: 56.25%!important;
      }
    `

    const HeroWrapper = styled(Link)`
      ${TextBase};
      color: ${colours.basePrimary};
      display: block;
      margin: 40px;
      text-decoration: none;
      ${media.mobile} {
        margin: 30px 16px 80px 16px;
      }
    `
    const HeroDate = styled('p')`
      font-size: 1.25em;
      margin: 0;
      opacity: 0.6;
      ${media.mobile} {
        font-size: 1.1em;
        margin-bottom: 10px;
      }
    `

    const HeroTitle = styled('h2')`
      line-height: 2em;
      font-size: 2.125em;
      font-weight: 400;
      margin: 0;
      ${HeroWrapper}:hover & {
        text-decoration: underline;
      }
      ${media.mobile} {
        font-size: 1.6em;
        line-height: 1.4em;
      }
    `

    const EntryWrapper = styled('div')`
      display: flex;
      margin-bottom: 40px;
      ${media.mobile} {
        display: block;
      }
    `

    const EntryImage = styled(Img)`
      ${rounded};
      height: 200px;
      width: 200px;
      ${media.mobile} {
        height: 160px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        width: 100%;
      }
    `

    const EntryDate = styled('p')`
      font-size: 1.1em;
      margin: 0;
      opacity: 0.6;
      ${media.mobile} {
        margin-bottom: 10px;
      }
    `

    const EntryContent = styled(Link)`
      ${TextBase};
      color: ${colours.basePrimary};
      display: block;
      padding: 0 30px;
      text-decoration: none;
      ${media.mobile} {
        padding: 30px 15px;
      }
    `

    const EntryTitle = styled('h2')`
      font-size: 1.5em;
      font-weight: 400;
      margin: 5px 0 10px 0;
      ${EntryContent}:hover & {
        text-decoration: underline;
      }
    `

    return(
      <>
        <Container>
          <Title>News</Title>
        </Container>

        <Container video marginBottom="narrower">
          <Link to={heroEntry.slug}><HeroImage fluid={heroEntry.cover.fluid} /></Link>
          <HeroWrapper to={heroEntry.slug}>
            <HeroDate>Veröffentlicht am {heroEntry.createdAt}</HeroDate>
            <HeroTitle>{heroEntry.title}</HeroTitle>
            <Text>
              {heroEntry.body.childMarkdownRemark.excerpt}
            </Text>
          </HeroWrapper>
        </Container>

        <Container>
          {entries.slice(1).map((entry, index) => (
            <EntryWrapper>
              <Link to={entry.slug}><EntryImage fluid={entry.cover.fluid} /></Link>
              <EntryContent to={entry.slug}>
                <EntryDate>{entry.createdAt}</EntryDate>
                <EntryTitle>{entry.title}</EntryTitle>
                <Text>
                  {entry.body.childMarkdownRemark.excerpt}
                </Text>
              </EntryContent>
            </EntryWrapper>
          ))}
        </Container>
      </>
    )
  }
}

export default News
