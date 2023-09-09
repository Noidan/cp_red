import React from 'react'
import MyBtn from '../myBtn/MyBtn'
import cl from './StatsMenu.module.css'

const StatsMenu = () => {
    return (
        <div className={cl.StatsMenu}>
            <MyBtn>INT</MyBtn>
            <MyBtn>REA</MyBtn>
            <MyBtn>DEX</MyBtn>
            <MyBtn>TECH</MyBtn>
            <MyBtn>CHA</MyBtn>
            <MyBtn>WILL</MyBtn>
            <MyBtn>LUCK</MyBtn>
            <MyBtn>MOVE</MyBtn>
            <MyBtn>BODY</MyBtn>
            <MyBtn>EMP</MyBtn>
            <MyBtn>HUM</MyBtn>
        </div>


    )
}

export default StatsMenu

