import React from 'react'

export default function Spot({ city, state }) {
  return (
    <div className='spot'>
      <div>{city}</div>
      <div>{state}</div>
    </div>
  )
}
