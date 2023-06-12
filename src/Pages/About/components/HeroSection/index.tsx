import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
} from './styles'

import Button from '../../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src='/videos/drone.mp4'></VideoBg>
      </HeroBg>
      {/* <HeroBg>
        <video autoPlay loop muted>
          <source src='/videos/drone.mp4' type='video/mp4' />
        </video>
      </HeroBg> */}
      <HeroContent>
        <HeroH1>The Dash x KAU Software Dept.</HeroH1>
        <HeroP>한국항공대학교 2023 산학협력 프로젝트</HeroP>

        <HeroBtnWrapper>
          <Button onClick={() => navigate('/home/dbscan')}>
            <span>Get started</span>
            <ArrowRight />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
