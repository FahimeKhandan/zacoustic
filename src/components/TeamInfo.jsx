import React from 'react'
import TeamIconAndName from './TeamIconAndName'
import TeamMembers from './TeamMembers'

export default function TeamInfo() {
  return (
    <div className='w-full'>
        <TeamIconAndName/>
        <TeamMembers/>
    </div>
  )
}
