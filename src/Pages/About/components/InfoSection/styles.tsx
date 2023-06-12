import styled from 'styled-components'

export const InfoContainer = styled.div<{ lightBg: boolean }>`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  z-index: 100;
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  justify-content: center;
`

export const InfoRow = styled.div<{ imgStart: boolean }>`
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  ${({ imgStart }) =>
    imgStart === false &&
    `
    grid-template-areas:"col1 col2"
    `}
`

export const Column1 = styled.div`
  margin-bottom: 0.9375rem;
  padding: 0 0.9375rem;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 0.9375rem;
  padding: 0 0.9375rem;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 33.75rem;
  padding-top: 0;
  padding-bottom: 3.75rem;
`
export const TopLine = styled.p`
  color: #099b6d;
  font-size: 1.5625rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 0.0875rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`
export const Heading = styled.h1<{ lightText: boolean }>`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p<{ darkText: boolean }>`
  max-width: 27.5rem;
  margin-bottom: 2.1875rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 34.6875rem;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
