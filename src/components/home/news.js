import React from 'react'

import ButtonLink from '../ButtonLink'
import Container from '../Container'
import { NewsHeroPreview, NewsPreview } from '../NewsPreview'
import { SectionTitle as Title } from '../Typography'

class News extends React.Component {
  render() {
    const entries = this.props.entries
    const heroEntry = entries[0]

    return(
      <>
        <Container>
          <Title>News</Title>
        </Container>

        <Container video marginBottom="narrower">
          <NewsHeroPreview
            slug={heroEntry.slug}
            cover={heroEntry.cover}
            createdAt={heroEntry.createdAt}
            title={heroEntry.title}
            excerpt={heroEntry.body} />
        </Container>

        <Container>
          {entries.slice(1).map(entry => (
            <NewsPreview
              key={entry.slug}
              slug={entry.slug}
              cover={entry.cover}
              createdAt={entry.createdAt}
              title={entry.title}
              excerpt={entry.body} />
          ))}
        </Container>
        <Container marginBottom="default">
          <ButtonLink dest="/news/" right>Alle News anzeigen</ButtonLink>
        </Container>
      </>
    )
  }
}

export default News
