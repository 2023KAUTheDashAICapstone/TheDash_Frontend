import { useNavigate, useParams } from 'react-router-dom'
import Map from './Map'
import { HomeContainer, SideBar, RightContainer, Logo, AlgorithmList, Algorithm } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const { algorithm } = useParams()
  return (
    <HomeContainer>
      <SideBar>
        <Logo onClick={() => navigate('/')}>Droneia</Logo>
        <AlgorithmList>
          <Algorithm onClick={() => navigate('/home/dbscan')} active={algorithm === 'dbscan'}>
            DBscan
          </Algorithm>
          <Algorithm
            onClick={() => navigate('/home/hierachical')}
            active={algorithm === 'hierachical'}
          >
            Hierachical
          </Algorithm>
          <Algorithm onClick={() => navigate('/home/spectral')} active={algorithm === 'spectral'}>
            Spectral
          </Algorithm>
          <Algorithm onClick={() => navigate('/home/kmeans')} active={algorithm === 'kmeans'}>
            K-means
          </Algorithm>
        </AlgorithmList>
      </SideBar>
      <RightContainer>
        <Map algorithm={algorithm}></Map>
      </RightContainer>
    </HomeContainer>
  )
}

export default Home
