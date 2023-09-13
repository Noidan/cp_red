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
          <tr><td>Hiding/Unveiling an Object</td>   <td>1</td></tr>
          <tr><td>Lip reading</td>             <td>1</td></tr>

          <tr><td>Attentiveness</td>             <td>1</td></tr>
          Tracking
          Accounting
          Animal handling
          Bureaucracy
          Business
          Composition
          Criminology
          Deduction
          Education
          Gambling
          Search for information
          Tactics
          Desert Survival
          Local knowledge House
          Local knowledge of the Outskirts
          Local knowledge Center
          Science Astrophysics
          Science Chemistry
          Science Psychology
          Language Street slang
          Language Japanese
          Russian language
        </tbody>
      </table>
    </div>
  )
}

export default StatINT