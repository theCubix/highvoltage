const BreakPoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024
}

const MediaQueries = {
  mobile: `@media screen and (min-width: ${BreakPoints.mobile}px) and (max-width: ${BreakPoints.tablet - 1 }px)`
}

export default MediaQueries