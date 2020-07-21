import { createGlobalStyle } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const GlobalStyles = createGlobalStyle`
  body {
    height: auto;
    font-family: Lato;
    ${props =>
      props.gradient
        ? 'background-image: linear-gradient(#A6C1EE, #FBC2EB);'
        : 'background-color: #FBFBFB;'}
  }

  h1 {
    font-family: Roboto Slab;
    text-align: center;
  }

  h2 {
    font-family: Roboto Slab;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    ${props => (props.whitetext ? 'color: #5b5b5b;' : 'color: white;')}
  }

  svg:hover {
    fill: #E0E0E0
  }
`
