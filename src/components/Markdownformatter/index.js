import React from 'react'
import { css } from 'react-emotion'

import { Colours } from '../../style-variables'
import { TextBase, H1css, H2css, H3css, H4css, H5css  } from '../Typography'

const formatted = css`
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    ${TextBase};
    line-height: 1.618em;
    opacity: 0.8;
  }
  h1 {
    ${H1css};
  }
  h2 {
    ${H2css};
  }
  h3 {
    ${H3css};
  }
  h4 {
    ${H4css};
  }
  h5 {
    ${H5css};
  }
  a {
    background: linear-gradient(180deg,transparent,transparent 66%, ${Colours.accentPrimary} 0, ${Colours.accentPrimary});
    color: #ffffff;
    display: inline;
    opacity: 1;
    text-decoration: none;
  }
`

export default ({ body }) => (
  <div
    className={formatted}
    dangerouslySetInnerHTML={{
      __html: body
    }}
  />
)
