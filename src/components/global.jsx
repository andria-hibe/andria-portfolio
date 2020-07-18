import { createGlobalStyle } from 'styled-components'

export const Background = createGlobalStyle`
  body {
    height: 100vh;
    ${props => (props.gradient ?
    'background-image: linear-gradient(#A6C1EE, #FBC2EB);' :
    'background-color: #FBFBFB;')}
  }
`