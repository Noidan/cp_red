import React from 'react'
import MyBtn from '../myBtn/MyBtn'
import cl from './StatsMenu.module.css'
import { Link } from 'react-router-dom';
import StatsBtn from '../statsBtn/StatsBtn';

const StatsMenu = () => {
    return (
        <div className={cl.StatsMenu}>
            <StatsBtn><Link to='/stats/int'>INT</Link></StatsBtn>
            <StatsBtn><Link to='/stats/rea'>REA</Link></StatsBtn>
            <StatsBtn><Link to='/stats/dex'>DEX</Link></StatsBtn>
            <StatsBtn><Link to='/stats/tech'>TECH</Link></StatsBtn>
            <StatsBtn><Link to='/stats/cha'>CHA</Link></StatsBtn>
            <StatsBtn><Link to='/stats/will'>WILL</Link></StatsBtn>
            <StatsBtn><Link to='/stats/luck'>LUCK</Link></StatsBtn>
            <StatsBtn><Link to='/stats/move'>MOVE</Link></StatsBtn>
            <StatsBtn><Link to='/stats/body'>BODY</Link></StatsBtn>
            <StatsBtn><Link to='/stats/emp'>EMP</Link></StatsBtn>
            <StatsBtn><Link to='/stats/hum'>HUM</Link></StatsBtn>
        </div>


    )
}

export default StatsMenu

