import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <Navbar style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        alignLinks="right" className="navbar"
        brand={<a className="brand-logo" href="#"><img width="60" height="60" src="logo.png" /></a>}
        id="mobile-nav"
        menuIcon={<Icon style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <ul style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <li><Link to="/" style={{ textDecoration: "none", color: theme.color }}>Movies</Link></li>
          <li><Link to="/about" style={{ textDecoration: "none", color: theme.color }}>About</Link></li>
          <li><Link to="/news" style={{ textDecoration: "none", color: theme.color }}>News</Link></li>
          <li><Link to="/contact" style={{ textDecoration: "none", color: theme.color, }}>Contact</Link></li>
        </ul>
        <a className='switch-mode' href='#' onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          outline: 'none'
        }} data-testid="toggle-theme-btn"
      >
        {!dark ? 'Dark' : 'Light'} mode
      </a>
      </Navbar>
      
    </div>
  )
}
