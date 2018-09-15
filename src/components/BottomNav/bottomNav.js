// Dev Imports
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

// Variables for Styling
import { Colours } from '../../style-variables'
import { BreakPoints as breakPoints } from '../../style-variables'

// Icons
import { ReactComponent as HomeIcon } from '../../icons/nav/home.svg'
import { ReactComponent as PlayIcon } from '../../icons/nav/play-outline.svg'
import { ReactComponent as ShowsIcon } from '../../icons/nav/calendar.svg'
import { ReactComponent as NewsIcon } from '../../icons/nav/news-paper.svg'
import { ReactComponent as ShopIcon } from '../../icons/nav/shopping-cart.svg'

class BottomNav extends React.Component {
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

    // Make constants available to render function
    const { windowWidth } = this.state
    const isMobile = windowWidth <= breakPoints.tablet

    // Styling of the main wrapper
    const Nav = styled('nav')`
      right: 0;
      bottom: 0;
      left: 0;
      align-items: center;
      background-color: ${Colours.bgLight};
      display: flex;
      height: 56px;
      justify-content: space-around;
      position: fixed;
      z-index: 666;
    `

    // Basic icon styling
    const Icon = css`
      fill: #ffffff;
      height: 18px;
      margin: 4px 0;
      opacity: 0.4;
      width: auto;
      .active & {
        opacity: 1;
      }
    `
    
    // Align the items (display next to each other and evenly spaced)
    const MenuItem = styled(Link)`
      align-items: center;
      display: flex;
      flex-direction: column;
      text-decoration: none;
    `

    // Link text styles
    // const LinkTitle = styled('span')`
    //   color: ${Colours.basePrimary};
    //   display: block;
    //   font-family: 'Source Sans Pro', sans-serif;
    //   font-size: 11px;
    //   font-weight: 300;
    //   opacity: 0.6;
    //   transition: all 300ms ease;
    //   transition-property: opacity, font-size;
    //   .active & {
    //     opacity: 1;
    //   }
    // `

    // Only show on mobile
    if(isMobile) {
      return(
        <Nav>

          <MenuItem
            activeClassName="active"
            to=""
          >
            <HomeIcon className={Icon} />
            {/* <LinkTitle>Home</LinkTitle> */}
          </MenuItem>

          <MenuItem
            activeClassName="active"
            to="/videos/"
          >
            <PlayIcon className={Icon} />
            {/* <LinkTitle>Videos</LinkTitle> */}
          </MenuItem>

          <MenuItem
            activeClassName="active"
            to="/shows/"
          >
            <ShowsIcon className={Icon} />
            {/* <LinkTitle>Shows</LinkTitle> */}
          </MenuItem>

          <MenuItem
            activeClassName="active"
            to="/news/"
          >
            <NewsIcon className={Icon} />
            {/* <LinkTitle>News</LinkTitle> */}
          </MenuItem>

          <MenuItem
            activeClassName="active"
            to="/shop/"
          >
            <ShopIcon className={Icon} />
            {/* <LinkTitle>Shop</LinkTitle> */}
          </MenuItem>

        </Nav>
      )} else {
        return null
      }
  }
}

export default BottomNav
