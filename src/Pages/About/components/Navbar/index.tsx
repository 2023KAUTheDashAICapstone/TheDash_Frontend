import { useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavbtnLink,
} from './styles'

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={() => toggleHome()}>
              Droneia
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass='active'
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass='active'
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='algorithm'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass='active'
                >
                  Algorithms
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='team'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass='active'
                >
                  Our Team
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavbtnLink to='/home/dbscan'>Explore!</NavbtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
