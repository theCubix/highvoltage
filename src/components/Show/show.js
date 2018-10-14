import React from 'react'
import styled, { css } from 'react-emotion'

import { RoundedCorners as rounded, Colours as colours, MediaQueries as media } from '../../style-variables'

import { TextBase } from '../Typography'

import { ReactComponent as LocationIcon } from '../../icons/location.svg'
import { ReactComponent as DollarIcon } from '../../icons/currency-dollar.svg'

class Show extends React.Component {
  render() {
    const {
      title,
      slug,
      date,
      doors,
      daysPast,
      startsAt,
      price,
      venue,
      zipCode,
      city,
      canton
    } = this.props.show

    const upcoming = this.props.upcoming

    const Card = styled('div')`
      ${rounded};
      height: fit-content;
    `

    const Body = styled('div')`
      padding: 40px 40px 30px 40px;
      background-color: ${ upcoming ? colours.accentDark : colours.bgLighter };
      ${media.mobile} {
        padding: 30px 30px 25px 30px;
      }
    `

    const Date = styled('p')`
      ${TextBase};
      font-size: 1.5em;
      font-weight: 700;
      margin: 0 0 12px 0;
      opacity: 0.7;
      ${media.mobile} {
        font-size: 0.9em;
        margin-bottom: 8px;
      }
    `

    const Title = styled('h2')`
      ${TextBase};
      font-size: 2.125em;
      font-weight: 400;
      margin: 0 0 8px 0;
      ${media.mobile} {
        font-size: 1.8em;
        line-height: 1.2em;
        margin-bottom: 4px;
      }
    `

    const Hours = styled('p')`
      ${TextBase};
      font-size: 1.2em;
      font-weight: 400;
      margin: 0 0 32px 0;
      opacity: 0.5;
      ${media.mobile} {
        font-size: 0.9em;
      }
    `

    const IconBase = css`
      fill: #ffffff;
      float: left;
      margin-top: 5px;
    `

    const StyledLocationIcon = styled(LocationIcon)`${IconBase};`

    const StyledDollarIcon = styled(DollarIcon)`${IconBase}`

    const Details = styled(Hours)`
      opacity: 0.7;
      padding-left: 30px;
      margin: 0;
    `

    const Bold = styled('span')`
      font-weight: 700;
    `

    const Footer = styled('div')`
      background-color: ${ upcoming ? colours.accentDarker : colours.bgLightest };
      display: flex;
      padding: ${ price === 0 ? '20px 40px' : '13px 20px' };
      ${media.mobile} {
        padding: ${ price === 0 ? '15px 30px' : '8px 10px' };
      }
    `

    const Price = styled('p')`
      ${TextBase};
      margin: 0;
    `

    const PriceLink = styled(Price.withComponent('a'))`
      ${rounded};
      background-color: transparent;
      color: ${colours.basePrimary};
      display: inline-block;
      padding: 7px 21px;
      transition: background-color 300ms ease;
      text-decoration: none;
      :hover {
        background-color: ${ upcoming ? colours.accentDark : colours.bgLighter };
      }
    `

    return (
      <Card>
        <Body>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Hours>{startsAt} Uhr &bull; Türöffnung um {doors} Uhr</Hours>

          <div className={css`margin-bottom: 18px;`}>
            <StyledLocationIcon />
            <Details>
              <Bold>{venue}</Bold><br />
              {zipCode}, {city}, {canton}
            </Details>
          </div>

          <div>
            <StyledDollarIcon />
            <Details>
              <Bold>{ price === '0' ? 'Gratis' : `${price} CHF` }</Bold>
            </Details>
          </div>
        </Body>
        <Footer>
          { price === 0 ?
            <Price>Eintritt frei</Price>
            :
            <PriceLink href="https://ticketcorner.ch/">Tickets</PriceLink>
          }
        </Footer>
      </Card>
    )
  }
}

export default Show
