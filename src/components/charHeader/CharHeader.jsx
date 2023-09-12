import React from 'react'
import { chars } from './../../bd/chars'

const CharHeader = () => {

  console.log();
  return (
    <div>
      Avatar
      {chars[0].name}
      Role
      Special
    </div>

  )
}

export default CharHeader