import React from 'react'

import { css } from 'react-emotion'

class Show extends React.Component {
  render() {
    const {
      title,
      slug,
      daysPast,
      doors,
      startsAt,
      price,
      venue
    } = this.props.show

    const upcoming = parseInt(daysPast) <= 0 ? true : false

    if(upcoming) {
      return (
        <div
          className={css`
            margin-bottom: 100px;
          `}>
          <p>title: {title}</p>
          <p>slug: {slug}</p>
          <p>daysPast: {daysPast}</p>
          <p>doors: {doors}</p>
          <p>startsAt: {startsAt}</p>
          <p>price: {price}</p>
          <p>venue: {venue}</p>
        </div>
      )
    } else return (
      null
    )
  }
}

export default Show
