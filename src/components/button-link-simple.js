import React from 'react'

class ButtonLink extends React.Component {
  render() {
    const {
      dest,
      children,
      classNameProp
    } = this.props

    return (
      <a
        href={dest}
        className={`btn-link-simple text text--line-height-narrower z-1 ${classNameProp}`}
      >{children}</a>
    )
  }
}

export default ButtonLink;
