import React from 'react'
import NavBtn from './../navBtn/NavBtn';
import { Link } from 'react-router-dom'

const CharNavBar = () => {
  return (
    <div>
      <NavBtn><Link to='/stats'>Stats</Link></NavBtn>
      <NavBtn><Link to='/chumba'>Chumba</Link></NavBtn>
      <NavBtn><Link to='/items'>Items</Link></NavBtn>
      <NavBtn><Link to='/cyber'>Cyber</Link></NavBtn>
    </div>
  )
}

export default CharNavBar