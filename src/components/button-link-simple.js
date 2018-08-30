import React from 'react';
import { Link } from 'gatsby'

class ButtonLink extends React.Component {
  render() {
    const dest = this.props.dest;
    const title = this.props.children;
    const classNameProp = this.props.className;

    return (
      <a
        href={dest}
        className={`btn-link-simple text text--line-height-narrower z-1 ${classNameProp}`}
      >{title}</a>
    )
  }
};

export default ButtonLink;
