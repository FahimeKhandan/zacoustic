import React from 'react'
import TeamIconAndName from './TeamIconAndName'
import TeamMembers from './TeamMembersPanel'

export default function TeamInfo() {
  return (
    <div className='w-full'>
        <TeamIconAndName/>
        <TeamMembers/>
    </div>
  )
}
