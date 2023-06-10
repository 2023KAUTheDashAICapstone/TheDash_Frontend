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
  const video = '../../../../assets/videos/drone.mp4'
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>The Dash x KAU Software Dept.</HeroH1>
        <HeroP>한국항공대학교 2023 산학협력 프로젝트</HeroP>

        <HeroBtnWrapper>
          <Button onClick={() => navigate('/home')}>
            <span>Get started</span>
            <ArrowRight />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
