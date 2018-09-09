import React from 'react'

const Heading = ({title, letter, className}) => (
  <div className={`heading__wrapper ${ className ? className : '' }`}>
    <h1 className="heading heading--level-1 heading--margin-top-large z-1">{title}</h1>
    <span className="heading heading__letter">{letter}</span>
  </div>
)

export default Heading