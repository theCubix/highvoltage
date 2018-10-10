import React from 'react'
import styled, { css } from 'react-emotion'

import { RoundedCorners as rounded, Colours as colours } from '../../style-variables'

import { TextBase } from '../Typography'

import { ReactComponent as LocationIcon } from '../../icons/location.svg'
import { ReactComponent as DollarIcon } from '../../icons/currency-dollar.svg'

class Show extends React.Component {
  render() {
    const {
      title,
      slug,
      date,
      upcoming,
      doors,
      startsAt,
      price,
      venue,
      zipCode,
      city,
      canton
    } = this.props.show

    const Card = styled('div')`
      ${rounded};
    `

    const Body = styled('div')`
      padding: 40px 40px 20px 40px;
      background-color: ${ upcoming ? colours.accentDark : colours.bgLighter };
    `

    const Date = styled('h2')`
      ${TextBase};
      font-size: 1.5em;
      font-weight: 700;
      margin: 0 0 12px 0;
      opacity: 0.7;
    `

    const Title = styled('p')`
      ${TextBase};
      font-size: 2.125em;
      font-weight: 400;
      margin: 0 0 8px 0;
    `

    const Hours = styled('p')`
      ${TextBase};
      font-size: 1.2em;
      font-weight: 400;
      margin: 0 0 32px 0;
      opacity: 0.5;
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

    // const upcoming = parseInt(daysPast) <= 0 ? true : false
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
              <Bold>{ price === 0 ? 'Gratis' : `${price} CHF` }</Bold>
            </Details>
          </div>
        </Body>
      </Card>
    )
  }
}

export default Show
