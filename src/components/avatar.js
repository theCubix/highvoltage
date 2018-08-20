import React from 'react'

import Img from 'gatsby-image'

const Avatar = ({img, name, duty}) => (
  <div className="avatar">
    <Img fluid={img} className="avatar__image" />

    <div className="avatar__description">
      <h3 className="text text--primary avatar__title">{name}</h3>
      <hr className="avatar__seperator" />
      <p className="text avatar__duty">{duty}</p>
    </div>
  </div>
)

export default Avatar