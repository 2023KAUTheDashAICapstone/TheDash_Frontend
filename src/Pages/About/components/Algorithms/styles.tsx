import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  background: #010606;
`

export const ServicesWrapper = styled.div`
  display: flex;
  max-width: 90%;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 21.25rem;
  width: 80%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
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
