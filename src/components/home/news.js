import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'

import Container from '../Container'
import { SectionTitle as Title, TextBase, Text } from '../Typography'
import { RoundedCorners as rounded, Colours as colours } from '../../style-variables'


class News extends React.Component {
  render() {
    const entries = this.props.entries
    const heroEntry = entries[0]

    const HeroImage = styled(Img)`
      ${rounded};
      & > div {
        padding-bottom: 56.25%!important;
      }
    `

    const HeroWrapper = styled(Link)`
      ${TextBase};
      display: block;
      margin: 40px;
      text-decoration: none;
      color: ${colours.basePrimary};
    `
    const HeroDate = styled('p')`
      font-size: 1.25em;
      margin: 0;
      opacity: 0.6;
    `

    const HeroTitle = styled('h2')`
      line-height: 2em;
      font-size: 2.125em;
      font-weight: 400;
      margin: 0;
      ${HeroWrapper}:hover & {
        text-decoration: underline;
      }
    `

    const EntryWrapper = styled('div')`
      display: flex;
      margin-bottom: 40px;
    `

    const EntryImage = styled(Img)`
      ${rounded};
      height: 200px;
      width: 200px;
    `

    const EntryDate = styled('p')`
      font-size: 1.1em;
      margin: 0;
      opacity: 0.6;
    `

    const EntryContent = styled(Link)`
      ${TextBase};
      color: ${colours.basePrimary};
      display: block;
      padding: 0 30px;
      text-decoration: none;
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
