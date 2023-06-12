import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
  height: 100vh;
  padding: 1.25rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  #map {
    flex-grow: none;
    width: 100%;
  }
`
export const SideBar = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 2rem;
  width: 13.75rem;
  background-color: white;
  border-radius: 0.625rem 0 0 0.625rem;
  padding: 1.25rem;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.625rem;
  width: 100%;
  background-color: white;
  font-family: 'Pretendard';
  font-size: 1.875rem;
  font-weight: 800;
  color: #099b6d;
  cursor: pointer;
`
export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.625rem;
  background-color: #099b6d;
  border-radius: 0.625rem;
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 500;
  color: white;
`
export const AlgorithmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 0.625rem;
  background-color: white;
  border-radius: 0.625rem 0 0 0.625rem;
  box-sizing: border-box;
`

export const Algorithm = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.625rem;
  font-size: 0.8125rem;
  font-weight: 4 00;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.active ? '#099b6d' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
`

export const RightContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.875rem;
  width: 100%;
`
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  min-height: 5rem;
  gap: 1.25rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  width: 209px;
  height: 69px;
  background: #ffffff;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
