import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import Algorithms from './components/Algorithms'
import Teams from './components/Teams'
import { homeObjOne, homeObjTwo } from './components/InfoSection/Data'
import { AboutContainer } from './styles'

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
