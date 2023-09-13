import React from 'react'
import { chars } from './../../bd/chars'
import cl from './CharHeader.module.css'
import MyBtn from '../UI/myBtn/MyBtn'

const CharHeader = () => {

  return (
    <div className={cl.container}>
      <div className={cl.avaBlock}>
        <img className={cl.ava} src={chars[0].ava} alt='avatar' />
      </div>
      <div className={cl.description}>
        <p>{chars[0].name}</p>
        <p>{chars[0].role}</p>
        <p>{chars[0].special}</p>
      </div>
      <MyBtn className={cl.menuMain}>M</MyBtn>
    </div>

  )
}

export default CharHeader