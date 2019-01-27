import React from 'react'
import { css } from 'react-emotion'

import { Colours } from '../../style-variables'
import { TextBase, SectionH1css, SectionH2css, SectionH3css, SectionH4css, SectionH5css  } from '../Typography'

const formatted = css`
  * {
    ${TextBase};
  }
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
    ${SectionH1css};
  }
  h2 {
    ${SectionH2css};
  }
  h3 {
    ${SectionH3css};
  }
  h4 {
    ${SectionH4css};
  }
  h5 {
    ${SectionH5css};
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
