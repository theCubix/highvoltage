const BreakPoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024
}

const MediaQueries = {
  mobile: `@media screen and (min-width: ${BreakPoints.mobile}px) and (max-width: ${BreakPoints.tablet - 1 }px)`,
  tablet: `@media screen and (min-width: ${BreakPoints.tablet}px) and (max-width: ${BreakPoints.desktop - 1 }px)`,
  desktop: `@media screen and (min-width: ${BreakPoints.desktop})`
}


const RoundedCorners = `
  border-radius: 3px;
  overflow: hidden;
`

const Colours = {
  bgPrimary: '#101010',
  bgLight: '#161616',
  basePrimary: '#ffffff'
}

export { BreakPoints, MediaQueries, RoundedCorners, Colours }
