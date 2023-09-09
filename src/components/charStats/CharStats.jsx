import React from 'react'
import StatsMenu from '../UI/statsMenu/StatsMenu'
import cl from './CharStats.module.css';

const CharStats = () => {
  return (
    <div className={cl.Stats}>
        <StatsMenu/>
          <div>
              Выбранный стат
          </div>
    </div>
  )
}

export default CharStats