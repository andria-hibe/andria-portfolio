import { createGlobalStyle } from 'styled-components'

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '495px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet}) and (min-height: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  body {
    height: auto;
    font-family: Lato;
    ${props =>
      props.gradient
        ? 'background-image: linear-gradient(#A6C1EE, #FBC2EB);'
        : 'background-color: #fff2f9;'}
    ${props =>
      props.noscroll ? `@media ${device.tablet} {overflow: hidden;}` : ''}
  }

  h1 {
    font-family: Oswald;
    text-align: center;
    font-size: 2.5rem;
    color: #5b5b5b;
    
    @media ${device.tablet} {
      font-size: 4rem;
    }

  }

  h2 {
    font-family: Lato;
    color: #5b5b5b;
    text-align: center;
    font-size: 1.5rem;
    
    @media ${device.tablet} {
      font-size: 2rem;
    }
  }

  h3 {
    font-family: Lato;
    font-size: 1.5rem;
    text-align: left;
    color: #ff9498;
    margin: 1em 0 0;

    @media ${device.tablet} {
      font-size: 1.75rem;
      margin: 2em 0 0;
    }
  }

  h4 {
    font-family: Lato;
    font-size: 1.2rem;
    text-align: left;
    color: #53c0f6;
    font-weight: bold;
    margin: 1em 0 0;

    @media ${device.tablet} {
      font-size: 1.5rem;
      margin: 1.5em 0 0;
    }
  }

  h5 {
    font-size: 1rem;
    color: #5b5b5b;
    font-weight: bold;
    margin: 1em 0 0;

    @media ${device.tablet} {
      font-size: 1.25rem;
    }
  }

  ul {
    font-size: 1rem;
    line-height: 1.5em;
    list-style-type: circle;
    text-align: left;
    color: #5b5b5b;
    margin: 0.5em 0;

    @media ${device.tablet} {
      font-size: 1.25rem;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 1rem;
    text-align: left;
    color: #5b5b5b;
    line-height: 1.4em;
    font-weight: normal;

    @media ${device.tablet} {
      font-size: 1.25rem;
    }
  }

  a:hover {
    ${props => (props.whitetext ? 'color: #5b5b5b;' : 'color: white;')}
  }

  svg {
    padding: 0.5em
  }

  svg:hover {
    fill: #E0E0E0
  }
`
