import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div className='p-3'>
      <h2 className='text-2xl mb-2 text-red-600'>Oops! Looks like you encountered some error😓</h2>
      <h2 className='text-xl'>{error.error.message}</h2>
    </div>
  )
}

export default Error
