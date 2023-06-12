import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import Algorithms from './components/Algorithms'
import Teams from './components/Teams'
import { AboutContainer } from './styles'
import droneImage from '../../assets/design/droneGreen.svg'
import aiImage from '../../assets/design/ai.png'

const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '드론 기술로 농업에 혁신을 더하다',
  headLine: 'Easier Access to agricultural drones.',
  description:
    'Get access to our exclusive app that allows you to control insect easily with drones',
  buttonLabel: 'Get started',
  imgStart: false,
  img: droneImage,
  alt: 'digitalCurrency',
  dark: true,
  primary: true,
  darkText: false,
}

const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Discovering the best Algorithm',
  headLine: '5 개의 알고리즘 중 최적의 알고리즘 탐색',
  description:
    'Get access to our exclusive app that allows you to discover new type of content with NFT.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: aiImage,
  alt: 'ai',
  dark: false,
  primary: false,
  darkText: true,
}
const About = () => {
  return (
    <AboutContainer>
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Algorithms></Algorithms>
      <Teams></Teams>
    </AboutContainer>
  )
}

export default About
