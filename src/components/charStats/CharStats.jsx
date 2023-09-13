import React from 'react'
import StatsMenu from '../UI/statsNav/StatsNav'
import cl from './CharStats.module.css';
import { Route, Routes } from 'react-router-dom';
import StatINT from './StatINT';
import StatREA from './StatREA';
import StatDEX from './StatDEX';
import StatTECH from './StatTECH';
import StatCHA from './StatCHA';
import StatWILL from './StatWILL';
import StatLUCK from './StatLUCK';
import StatMOVE from './StatMOVE';
import StatBODY from './StatBODY';
import StatEMP from './StatEMP';
import StatHUM from './StatHUM';



const CharStats = () => {
  return (
    <div className={cl.Stats}>
      <StatsMenu />
      <Routes>
        <Route exact path='/int' element={<StatINT />} />
        <Route exact path="/" element={<StatINT />} />
        <Route exact path='/rea' element={<StatREA />} />
        <Route exact path='/dex' element={<StatDEX />} />
        <Route exact path='/tech' element={<StatTECH />} />
        <Route exact path='/cha' element={<StatCHA />} />
        <Route exact path='/will' element={<StatWILL />} />
        <Route exact path='/luck' element={<StatLUCK />} />
        <Route exact path='/move' element={<StatMOVE />} />
        <Route exact path='/body' element={<StatBODY />} />
        <Route exact path='/emp' element={<StatEMP />} />
        <Route exact path='/hum' element={<StatHUM />} />
      </Routes>
    </div>
  )
}

export default CharStats