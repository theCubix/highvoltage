// Dev Imports
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

// Variables for Styling
import { Colours } from '../../style-variables'

// Icons
import { ReactComponent as HomeIcon } from '../../icons/nav/home.svg'
import { ReactComponent as PlayIcon } from '../../icons/nav/play-outline.svg'
import { ReactComponent as ShowsIcon } from '../../icons/nav/calendar.svg'
import { ReactComponent as NewsIcon } from '../../icons/nav/news-paper.svg'
import { ReactComponent as ShopIcon } from '../../icons/nav/shopping-cart.svg'

class BottomNav extends React.Component {
  render() {
    // const { slug, title, thumbnail } = this.props.video
    // const fontSize = this.props.fontSize

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

    const Icon = css`
      fill: #ffffff;
      margin: 4px 0;
      opacity: 0.4;
    `

    const MenuItem = styled(Link)`
      align-items: center;
      display: flex;
      flex-direction: column;
      text-decoration: none;
    `

    const LinkTitle = styled('span')`
      color: ${Colours.basePrimary};
      display: block;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 11px;
      font-weight: 300;
      opacity: 0.6;
    `

    return(
      <Nav>

        <MenuItem>
          <HomeIcon className={Icon} />
          <LinkTitle>Home</LinkTitle>
        </MenuItem>

        <MenuItem>
          <PlayIcon className={Icon} />
          <LinkTitle>Videos</LinkTitle>
        </MenuItem>

        <MenuItem>
          <ShowsIcon className={Icon} />
          <LinkTitle>Shows</LinkTitle>
        </MenuItem>

        <MenuItem>
          <NewsIcon className={Icon} />
          <LinkTitle>News</LinkTitle>
        </MenuItem>

        <MenuItem>
          <ShopIcon className={Icon} />
          <LinkTitle>Shop</LinkTitle>
        </MenuItem>

      </Nav>
    )
  }
}

export default BottomNav
