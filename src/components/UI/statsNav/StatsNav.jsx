import React from 'react'
import cl from './StatsNav.module.css'
import StatsBtn from '../statsBtn/StatsBtn';
import { chars } from '../../../bd/chars';

const StatsNav = () => {
    return (
        <div className={cl.StatsMenu}>
            <StatsBtn stat='int' />
            <StatsBtn stat='rea' />
            <StatsBtn stat='dex' />
            <StatsBtn stat='tech' />
            <StatsBtn stat='cha' />
            <StatsBtn stat='will' />
            <StatsBtn stat='luck' />
            <StatsBtn stat='move' />
            <StatsBtn stat='body' />
            <StatsBtn stat='emp' />
            <StatsBtn stat='hum' />
{/* 

            <StatsBtn to='/stats/will'>
                WILL
            </StatsBtn>

            <StatsBtn to='/stats/luck'>
                LUCK
            </StatsBtn>

            <StatsBtn to='/stats/move'>
                MOVE
            </StatsBtn>

            <StatsBtn to='/stats/body'>
                BODY
            </StatsBtn>

            <StatsBtn to='/stats/emp'>
                EMP
            </StatsBtn>
            
            <StatsBtn to='/stats/hum'>
                HUM
            </StatsBtn> */}
        </div>


    )
}

export default StatsNav

