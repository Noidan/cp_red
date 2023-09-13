import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CharNavBar from './../UI/charNavBar/CharNavBar';
import CharStats from '../charStats/CharStats';
import CharCyber from '../charCyber/CharCyber';
import CharChumba from '../charChumba/CharChumba';
import CharItems from '../charItems/CharItems';
import cl from './Content.module.css'

const Content = () => {
    return (
        <div className={cl.container}>
            <CharNavBar />
            <Routes>
                <Route path="/stats/*" element={<CharStats />} />

                <Route exact path="*" element={<CharStats />} />
                <Route exact path="/chumba" element={<CharChumba />} />
                <Route exact path="/items" element={<CharItems />} />
                <Route exact path="/cyber" element={<CharCyber />} />
            </Routes>
        </div>
    )
}

export default Content