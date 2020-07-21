import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import {
  TiSocialAtCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from 'react-icons/ti'

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em;
`

const iconStyle = {
  size: '4em',
  color: '#555555',
}

export default function IconLink() {
  return (
    <>
      <IconContainer>
        <IconContext.Provider value={iconStyle}>
          <a href="mailto:andriacohibe@gmail.com">
            <TiSocialAtCircular />
          </a>

          <a href="https://github.com/andria-hibe">
            <TiSocialGithubCircular />
          </a>

          <a href="https://www.linkedin.com/in/andriacristiahibe/">
            <TiSocialLinkedinCircular />
          </a>
        </IconContext.Provider>
      </IconContainer>
    </>
  )
}
