import React from 'react'
import styled from 'styled-components'
import { device } from '../components/globalStyle'

const BaseButton = styled.button`
  border: none;
  text-align: center;
  border-radius: 1.2em;
  padding: 0.8em 1.2em;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Georgia', serif;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media ${device.tablet} {
    padding: 0.9em 1.4em;
    font-size: 1rem;
  }

  &:disabled {
    background-color: #d4c4b0;
    color: #8b7a6b;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &::before {
      display: none;
    }
  }
`

const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #a94442 0%, #c85e5a 100%);
  color: #faf6f0;
  box-shadow: 0 3px 8px rgba(169, 68, 66, 0.25);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #c85e5a 0%, #d8a39d 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(169, 68, 66, 0.35);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(169, 68, 66, 0.3);
  }

  &:focus {
    outline: 2px solid #d4a5a5;
    outline-offset: 3px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`

const SecondaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #d4a5a5 0%, #e6c4a0 100%);
  color: #4a3f35;
  box-shadow: 0 3px 8px rgba(212, 165, 165, 0.25);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #e4b5b5 0%, #f0d4b0 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(212, 165, 165, 0.35);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(212, 165, 165, 0.3);
  }

  &:focus {
    outline: 2px solid #a94442;
    outline-offset: 3px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`

const OutlineButton = styled(BaseButton)`
  background-color: transparent;
  color: #6b5b47;
  border: 2px solid #d4a5a5;
  box-shadow: 0 2px 6px rgba(200, 181, 196, 0.15);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #f5f0e8 0%, #f9f4ec 100%);
    border-color: #d4a5a5;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(212, 165, 165, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(212, 165, 165, 0.15);
  }

  &:focus {
    outline: 2px solid #a94442;
    outline-offset: 3px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:disabled {
    border-color: #d4c4b0;
    background-color: transparent;
  }
`

export default function Button({
  variant = 'primary',
  disabled = false,
  children,
  ...props
}) {
  const ButtonComponent = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    outline: OutlineButton,
  }[variant]

  return (
    <ButtonComponent disabled={disabled} {...props}>
      {children}
    </ButtonComponent>
  )
}
