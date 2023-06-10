import styled from '@emotion/styled'

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 1rem;
  width: 100%;
  padding: 0.9375rem;
  border-radius: 3.125rem;

  font-weight: 500;
  font-size: 0.9375rem;

  color: white;
  background-color: #099b6d;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
    cursor: pointer;
  }
`
