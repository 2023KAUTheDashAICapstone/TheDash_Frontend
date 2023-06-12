import React from 'react'
import { ButtonWrapper } from './styles'

interface ButtonProps {
  onClick: any
  children: any
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
}

export default Button
