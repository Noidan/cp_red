import React from 'react'
import NavBtn from './../navBtn/NavBtn';
import cl from './CharNavBar.module.css'

const CharNavBar = () => {
  return (
    <nav className={cl.navBar}>
      <NavBtn to="/stats" >
        Stats
      </NavBtn>

      <NavBtn to='/chumba'>
        Chumba
      </NavBtn>

      <NavBtn to='/items'>
        Items
      </NavBtn>

      <NavBtn to='/cyber'>
        Cyber
      </NavBtn>
    </nav>
  )
}

export default CharNavBar