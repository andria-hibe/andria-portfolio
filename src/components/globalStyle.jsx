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
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
}

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  body {
    font-family: 'Lato', 'Georgia', 'Times New Roman', serif;
    background-color: #faf6f0;
    background-attachment: fixed;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 2rem;
    color: #4a3f35;
    font-weight: 400;
    letter-spacing: 0.5px;
    
    @media ${device.tablet} {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-family: 'Georgia', serif;
    color: #4a3f35;
    text-align: center;
    font-size: 1.35rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    
    @media ${device.tablet} {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-family: 'Georgia', serif;
    font-size: 1.35rem;
    text-align: left;
    color: #a94442;
    margin: 1em 0 0;
    font-weight: 500;

    @media ${device.tablet} {
      font-size: 1.6rem;
      margin: 2em 0 0;
    }
  }

  h4 {
    font-family: 'Georgia', serif;
    font-size: 1.1rem;
    text-align: left;
    color: #a94442;
    font-weight: 600;
    margin: 1em 0 0;

    @media ${device.tablet} {
      font-size: 1.35rem;
      margin: 1.5em 0 0;
    }
  }

  h5 {
    font-size: 0.9rem;
    color: #6b5b47;
    font-weight: 600;
    margin: 1em 0 0;

    @media ${device.tablet} {
      font-size: 1.1rem;
    }
  }

  ul {
    font-family: 'Lato', sans-serif;
    font-size: 0.9rem;
    line-height: 1.6em;
    list-style-type: disc;
    text-align: left;
    color: #6b5b47;
    margin: 0.5em 0;

    @media ${device.tablet} {
      font-size: 1.1rem;
    }
  }

  a {
    text-decoration: none;
    color: #a94442;
    transition: all 0.3s ease;

    &:hover {
      color: #c85e5a;
      text-shadow: 0 1px 2px rgba(169, 68, 66, 0.2);
    }

    &:focus {
      outline: 2px solid #d4a5a5;
      outline-offset: 2px;
      border-radius: 0.5rem;
    }
    
    &:focus:not(:focus-visible) {
      outline: none;
    }
  }

  p {
    font-family: 'Lato', sans-serif;
    font-size: 0.9rem;
    text-align: left;
    color: #6b5b47;
    line-height: 1.6em;

    @media ${device.tablet} {
      font-size: 1.1rem;
    }
  }


  svg {
    padding: 0.5em;
    transition: all 0.3s ease;
  }

  svg:hover {
    fill: #f5f0e8;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`
