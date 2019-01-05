const BreakPoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024
}

const MediaQueries = {
  mobile: `@media screen and (min-width: ${BreakPoints.mobile}px) and (max-width: ${BreakPoints.tablet - 1 }px)`,
  tablet: `@media screen and (min-width: ${BreakPoints.tablet}px) and (max-width: ${BreakPoints.desktop - 1 }px)`,
  desktop: `@media screen and (min-width: ${BreakPoints.desktop}px)`
}

const RoundedCorners = `
  border-radius: 3px;
  overflow: hidden;
`

const Colours = {
  bgPrimary: '#101010',
  bgLight: '#161616',
  bgLighter: '#262626',
  bgLightest: '#404040',
  basePrimary: '#FFFFFF',
  accentPrimary: '#921B1B',
  accentDark: '#D52C2C',
  accentDarker: '#C02828'
}

const Sizes = {
  fsLargest: '3em',
  fsExtraLarge: '2em',
  fsLarger: '1.5em',
  fsLarge: '1.2em',
  fsSmall: '0.9em',
  fsSmaller: '0.8em',
  fsSmallest: '0.7'
}

const refacturedColours = {
  text: {
    primary: 'rgba(255, 255, 255, 0.9)',
    muted: 'rgba(255, 255, 255, 0.75)',
    body: 'rgba(255, 255, 255, 0.55)',
    secondary: 'rgba(255, 255, 255, 0.5)'
  },
  brand: {
    vibrant: '#AE4444',
    muted: '#943A3A',
    dark: '#6E2B2B'
  },
  background: {
    dark: '#505050',
    darker: '#303030',
    darkest: '#101010'
  }
}

export { BreakPoints, MediaQueries, RoundedCorners, Colours, refacturedColours, Sizes }
