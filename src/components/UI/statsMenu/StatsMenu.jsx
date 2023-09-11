import React from 'react'
import MyBtn from '../myBtn/MyBtn'
import cl from './StatsMenu.module.css'
import { Link } from 'react-router-dom';

const StatsMenu = () => {
    return (
        <div className={cl.StatsMenu}>
            <MyBtn><Link to='/stats/int'>INT</Link></MyBtn>
            <MyBtn><Link to='/stats/rea'>REA</Link></MyBtn>
            <MyBtn><Link to='/stats/dex'>DEX</Link></MyBtn>
            <MyBtn><Link to='/stats/tech'>TECH</Link></MyBtn>
            <MyBtn><Link to='/stats/cha'>CHA</Link></MyBtn>
            <MyBtn><Link to='/stats/will'>WILL</Link></MyBtn>
            <MyBtn><Link to='/stats/luck'>LUCK</Link></MyBtn>
            <MyBtn><Link to='/stats/move'>MOVE</Link></MyBtn>
            <MyBtn><Link to='/stats/body'>BODY</Link></MyBtn>
            <MyBtn><Link to='/stats/emp'>EMP</Link></MyBtn>
            <MyBtn><Link to='/stats/hum'>HUM</Link></MyBtn>
        </div>


    )
}

export default StatsMenu

