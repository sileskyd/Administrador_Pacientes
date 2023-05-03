import React from 'react'

export default function Header({titulo}) {
  return (
    <div className='container'>
      <h1 className='display-4 titulo'>{titulo}</h1>
    </div>
  )
}
