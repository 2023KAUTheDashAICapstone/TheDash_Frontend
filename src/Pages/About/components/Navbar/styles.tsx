import styled from '@emotion/styled'
import { Link as LinkR } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const Nav = styled.nav<{ scrollNav: any }>`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 5rem;
  margin-top: -5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 68.75rem;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-size: 1.875rem;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1.375rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 5rem;
`

export const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  .active {
    border-bottom: 5px solid #099b6d;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
`

export const NavbtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #099b6d;
  white-space: nowrap;
  padding: 0.625rem 1.375rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
