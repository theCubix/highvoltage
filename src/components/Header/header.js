import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Container from '../Container'

import { Colours as colours, BreakPoints as breakPoints } from '../../style-variables'

class Header extends React.Component {
  // Initialize state
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0
    }
  }

  // Update state and add event listener
  componentDidMount() {
    this.handleWindowSizeChange()
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // Remove event listener, if component umounts
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  // Function to update state
  handleWindowSizeChange = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    const {
      siteTitle
    } = this.props

    // Make constants available to render function
    const { windowWidth } = this.state
    const isMobile = windowWidth <= breakPoints.tablet

    const AppHeader = styled('header')`
      background-color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
      position: fixed;
      width: 100%;
      z-index: 666;
      @supports (backdrop-filter: blur()) {
        backdrop-filter: blur(16px);
      }
    `

    const Title = styled(Link)`
      color: ${colours.basePrimary};
      display: inline-block;
      font-family: 'Oswald', sans-serif;
      font-size: 17px;
      letter-spacing: 0.05em;
      line-height: 17px;
      padding: 16px 0;
      text-transform: uppercase;
      text-decoration: none;
    `

    const Nav = styled('nav')`
      display: inline-block;
      position: absolute;
      right: 0;
    `

    const Ul = styled('ul')`
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      & li:last-child > a {
        padding-right: 0;
      }
    `

    const Li = styled('li')``

    const NavLink = styled(Link)`
      color: ${colours.basePrimary};
      display: block;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 16px;
      left: 0;
      line-height: 16px;
      opacity: 0.8;
      padding: 16.5px 16px;
      right: 0;
      text-decoration: none;
      transition: opacity 300ms ease;
      top: 0;
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
    `

    if(isMobile) {
      return (
        <AppHeader>
          <Container>
            <Title to="/">{siteTitle}</Title>
          </Container>
        </AppHeader>
      )
    } else { 
      return(
        <AppHeader>
          <Container>
            <Title to="/">{siteTitle}</Title>
            
            <Nav>
              <Ul>
                <Li><NavLink activeClassName="active" to="/shows/">Shows</NavLink></Li>
                <Li><NavLink activeClassName="active" to="/videos/">Videos</NavLink></Li>
                <Li><NavLink activeClassName="active" to="/gallery/">Gallery</NavLink></Li>
                <Li><NavLink activeClassName="active" to="/news/">News</NavLink></Li>
                <Li><NavLink activeClassName="active" to="/shop/">Shop</NavLink></Li>
              </Ul>
            </Nav>
          </Container>
        </AppHeader>
      )
    }
  }
}

export default Header
