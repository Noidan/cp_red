import React from 'react'
import { chars } from '../../bd/chars'

const StatINT = () => {

  return (
    <div>

      <table style={{ fontSize: 14 }}>
        <thead>
          <tr><td><b>INTELLIGENCE</b></td><td> {chars[0].int} </td></tr>
        </thead>
        <tbody>
          <tr><td>Hiding/Unveiling an Object</td><td>{chars[0].int + chars[0].hidingunveiling}</td></tr>
          <tr><td>Lip reading</td><td>{chars[0].int + chars[0].lipreading}</td></tr>
          <tr><td>Attentiveness</td><td>{chars[0].int + chars[0].attentiveness}</td></tr>
          <tr><td>Tracking</td><td>{chars[0].int + chars[0].tracking}</td></tr>
          <tr><td>Accounting</td><td>{chars[0].int + chars[0].accounting}</td></tr>
          <tr><td>Animal handling</td><td>{chars[0].int + chars[0].animalhandling}</td></tr >
          <tr><td>Bureaucracy</td > <td>{chars[0].int + chars[0].bureaucracy}</td></tr >
          <tr><td>Business</td > <td>{chars[0].int + chars[0].business}</td></tr >
          <tr><td>Composition</td > <td>{chars[0].int + chars[0].composition}</td></tr >
          <tr><td>Criminology</td > <td>{chars[0].int + chars[0].criminology}</td></tr >
          <tr><td>Deduction</td > <td>{chars[0].int + chars[0].deduction}</td></tr >
          <tr><td>Education</td > <td>{chars[0].int + chars[0].education}</td></tr >
          <tr><td>Gambling</td > <td>{chars[0].int + chars[0].gambling}</td></tr >
          <tr><td>Search for information</td > <td>{chars[0].int + chars[0].search}</td></tr >
          <tr><td>Tactics</td > <td>{chars[0].int + chars[0].tactics}</td></tr >
          <tr><td>Desert Survival</td > <td>{chars[0].int + chars[0].desertSurvival}</td></tr >
          <tr><td>Local knowledge Home</td > <td>{chars[0].int + chars[0].localHome}</td></tr >
          <tr><td>Local knowledge of the Outskirts</td > <td>{chars[0].int + chars[0].localOutskirts}</td></tr >
          <tr><td>Local knowledge Center</td > <td>{chars[0].int + chars[0].localCenter}</td></tr >
          <tr><td>Science Astrophysics</td > <td>{chars[0].int + chars[0].scienceAstrophysics}</td></tr >
          <tr><td>Science Chemistry</td > <td>{chars[0].int + chars[0].scienceChemistry}</td></tr >
          <tr><td>Science Psychology</td > <td>{chars[0].int + chars[0].sciencePsychology}</td></tr >
          <tr><td>Language Street slang</td > <td>{chars[0].int + chars[0].languageStreetslang}</td></tr >
          <tr><td>Language Japanese</td > <td>{chars[0].int + chars[0].languageJapanese}</td></tr >
          <tr><td>Language Russian</td > <td>{chars[0].int + chars[0].languageRussian}</td></tr >
        </tbody>
      </table>
    </div>
  )
}

export default StatINT