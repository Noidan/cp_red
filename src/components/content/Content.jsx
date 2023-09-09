import React from 'react'
import CharHeader from '../UI/charHeader/CharHeader'
import CharNavBar from './../UI/charNavBar/CharNavBar';
import CharStats from '../charStats/CharStats';

const Content = () => {
    return (
        <div >
            <CharHeader></CharHeader>
            <CharNavBar></CharNavBar>
            <CharStats></CharStats>
        </div>
    )
}

export default Content