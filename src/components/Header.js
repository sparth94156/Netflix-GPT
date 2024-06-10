import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user) // subscribe to the store (accesing the user reducer fn)
  console.log(user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/login")
    }).catch((error) => {
      navigate('/error')
      console.log(error.message)
    });
  }
  return (
    <div className=' w-full absolute py-3 px-8 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-[180px] cursor-pointer' src='https://imgs.search.brave.com/58xq76kBx0bPsgZKamGSryxiqdxKGUPI5WkUGsMLbsE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvTmV0ZmxpeC1M/b2dvLTcwMHgzOTQu/cG5n'
        alt='logo' />
      {
      user && 
      <div className='flex gap-2 '>
        <img className='w-[40px] h-[40px] mt-8 cursor-pointer rounded-full' src={user?.imageURL}
          alt='user-profile' />
        <button className=' text-white font-semibold hover:underline'
          onClick={handleSignout}>
          Sign Out
        </button>
      </div>
      }
    </div>
  )
}

export default Header
