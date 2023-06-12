import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  align-items: center;
  background: #ffffff;
`

export const ServicesWrapper = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 2rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* flex-shrink: 0; */
  width: 20%;
  align-items: center;
  border-radius: 0.625rem;
  max-height: 21.25rem;
  padding: 1.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`

export const ProfileImage = styled.div<{ imgUrl: string }>`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(${(props) => props.imgUrl});
  margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000000;
  margin-top: 3.75rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.div`
  font-size: 1rem;
  text-align: center;
`
