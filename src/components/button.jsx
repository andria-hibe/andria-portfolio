import React from 'react'
import styled from 'styled-components'
import { device } from '../components/globalStyle'

const GradientButton = styled.button`
  background-image: linear-gradient(
    to right,
    rgba(166, 193, 238, 0.9) 0%,
    rgba(251, 194, 235, 0.9) 100%
  );
  border: none;
  text-align: center;
  border-radius: 0.5em;
  color: white;
  padding: 0.6em 0.8em;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    color: #555555 !important;
    cursor: pointer;
    transform: scale(1.05);
  }

  @media ${device.tablet} {
    padding: 0.7em 1em;
    font-size: 1rem;
  }
`

export default function Button(props) {
  return <GradientButton>{props.text}</GradientButton>
}
